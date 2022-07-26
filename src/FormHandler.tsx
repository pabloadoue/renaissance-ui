import React, { forwardRef, useEffect, useImperativeHandle } from 'react';
import uuid from 'react-native-uuid';
import findValue from '@pabloadoue/find-value';
import iterate from 'object-deep-iteration';
import setval from 'setval';

import type { TUIIconName } from './UIIcon';
import validator from './Validator';

const Handler = (props: TFormHandlerProps, ref: any) => {
    useEffect(() => { }, [props.saving]);

    const change = (e: { name: string; value: any }) => {
        const { name, value } = e;
        const updatedFields = props.fields;
        const field = findValue(updatedFields, name);
        if (field && typeof field.value !== 'undefined') {
            setval(updatedFields, `${name}.value`, value, '.');
        }
        if (typeof props.update === 'function') {
            props.update({
                ...props.fields,
                ...updatedFields,
            });
        }
    };

    const submit = () => {
        const { skipValidation } = props;
        const { response, error, valid } = fieldsSubmit(
            props.fields,
            skipValidation
        );

        if (typeof props.submit === 'function') {
            if (valid) {
                props.submit(null, response, props.fields);
            } else {
                props.submit(error, response, props.fields);
            }
        }
    };

    function fieldsSubmit(
        formFields: TFormHandlerFields,
        skipValidation: boolean | undefined
    ) {
        let responseFields = {};
        let errorFields = { ...formFields };
        let validResponse = true;

        iterate(formFields, (_obj: any, path: string) => {
            const field = findValue(formFields, path);
            if (
                field &&
                typeof field.value !== 'undefined' &&
                typeof field.name !== 'undefined'
            ) {
                const validField = validateField(field, formFields);
                if (skipValidation !== true) {
                    if (validField === true) {
                        field.error = false;
                    } else {
                        validResponse = false;
                        field.error = validField;
                    }
                }
                setval(responseFields, path, field.value, '.');
                setval(errorFields, `${path}.value`, field.value, '.');
            }
        });
        return {
            response: responseFields,
            error: errorFields,
            valid: validResponse,
        };
    }

    const content = (children: any): any => {
        if (typeof children !== 'undefined') {
            if (typeof children.map === 'function') {
                return children.map((child: any) => {
                    return content(child);
                });
            } else {
                const child = children;
                if (React.isValidElement(child)) {
                    const childs =
                        content(findValue(child, 'props.children')) || null;
                    const disabled = props.saving
                        ? true
                        : findValue(child, 'props.disabled') || false;

                    const childName = findValue(child, 'props.name') || null;

                    const key = childName ? childName : uuid.v4();

                    return React.cloneElement(child, {
                        //@ts-ignore
                        children: childs,
                        disabled: disabled,
                        change: change,
                        fields: props.fields,
                        key: key
                    });
                } else {
                    return child;
                }
            }
        }
        return null;
    };

    useImperativeHandle(ref, () => {
        return {
            submit: submit,
        };
    });

    return <>{content(props.children)}</>;
};

export const FormHandler = forwardRef(Handler);

export type TFormHanderRef = {
    submit: () => void;
};

export function validateField(
    field: TField,
    fields: TFormHandlerFields
): boolean | string {
    let result: boolean | string = true;
    if (typeof field.validate !== 'undefined') {
        field.validate.map((rule) => {
            if (result === true) {
                let { check, pass, fail, params } = rule;
                let validate = true;

                if (validate) {
                    if (typeof check === 'function') {
                        const valid = check(field.value, fields, params);
                        if (valid === true) {
                            result = pass;
                        } else {
                            result = fail;
                        }
                    } else if (typeof check === 'string') {
                        const name = check as keyof typeof validator;
                        if (typeof validator[name] === 'function') {
                            //@ts-expect-error
                            const valid = validator[name](
                                `${field.value}`,
                                params
                            );
                            if (valid === true) {
                                result = pass;
                            } else {
                                result = fail;
                            }
                        } else {
                            result = `Validation function ${check} is not defined`;
                        }
                    } else {
                        result = `Validation function ${check} is not defined`;
                    }
                }
            }
        });
    }
    return result;
}

export type TFormHandlerProps = {
    saving?: boolean;
    children: JSX.Element | JSX.Element[];
    fields: TFormHandlerFields;
    skipValidation?: boolean;
    submit?: (error: any, body: Object, fields: Object) => void;
    update?: (fields: any) => void;
};

type TBaseField = {
    name: string;
    error?: boolean | string;
    disabled?: boolean;
    validate?: TValidationRule[];
    borderBottom?: boolean;
    returnKeyType?: 'done' | 'next' | 'go' | 'search' | 'send';
    next?: (name: string) => void;
    change?: (value: {
        name: string;
        value: string | boolean | number | null;
    }) => void;
};

type TValidationRule = {
    check: string | ValidationRuleCheckType;
    pass: any;
    fail: any;
    params?: any;
};

type ValidationRuleCheckType = (
    value: any,
    fields: any,
    params?: any
) => boolean | string;

export interface TTextInputField extends TBaseField {
    type?:
    | 'email'
    | 'password'
    | 'number'
    | 'phone'
    | 'text'
    | 'decimal'
    | 'search'
    | 'url'
    | 'uri';
    value: string;
    icon?: TFieldIcon;
    label?: string;
}

type TFieldIcon = {
    name: TUIIconName;
    color: {
        dark: string;
        light: string;
    };
};

export interface TSelectField extends TBaseField {
    icon?: TFieldIcon;
    value: string | number | boolean | null;
    options: TSelectOption[];
    label: string;
    loading?: boolean;
}

export interface TSwitchInputField extends TBaseField {
    icon?: TFieldIcon;
    value: boolean;
    label: string;
}

export type TSelectOption = {
    icon?: TUIIconName;
    label: string;
    value: string | number | boolean | null;
};

export interface TCurrencyField extends TBaseField {
    icon?: TFieldIcon;
    value: number;
    label: string;
    currency?:
    | 'USD'
    | 'MXN'
    | 'EUR'
    | 'GBP'
    | 'JPY'
    | 'AUD'
    | 'COP'
    | 'CAD'
    | 'NZD'
    | 'CHF';
}

export interface TPercentageField extends TBaseField {
    icon?: TFieldIcon;
    value: number;
    label: string;
}

export interface TDateField extends TBaseField {
    icon?: TFieldIcon;
    value: string;
    label: string;
    time?: boolean;
}

type TField =
    | TTextInputField
    | TSelectField
    | TSwitchInputField
    | TCurrencyField
    | TPercentageField;

export type TFormHandlerFields = {
    [key: string]: TField;
};
