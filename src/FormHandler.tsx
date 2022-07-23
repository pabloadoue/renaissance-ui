import React, { forwardRef, ReactChildren } from 'react';
import findValue from '@pabloadoue/find-value';

const Handler = (props: TFormHandlerProps) => {
    const change = (_e: { name: string; value: any }) => {
        return;
    };

    const content = (children: ReactChildren): any => {
        if (typeof children !== 'undefined') {
            if (typeof children.map === 'function') {
                return children.map(children, (child: any) => {
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

                    return React.cloneElement(child, {
                        //@ts-expect-error
                        children: childs,
                        disabled: disabled,
                        change: change,
                        fields: props.fields,
                    });
                }
                return null;
            }
        }
        return null;
    };
    return <>{content(props.children)}</>;
};

export const FormHandler = forwardRef(Handler);

type TFormHandlerProps = {
    saving?: boolean;
    children: ReactChildren;
    fields: any;
    submit?: (error: any, body: Object, fields: Object) => void;
    update?: (fields: any) => void;
};

type TBaseField = {
    name: string;
    error?: boolean | string;
    disabled?: boolean;
    validate?: TValidationRule[];
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

interface TTextInputField extends TBaseField {
    value: string;
    label?: string;
}

interface TSelectField extends TBaseField {
    value: string | number | boolean | null;
    options: TSelectOption[];
    label: string;
}

interface TSwitchInputField extends TBaseField {
    value: boolean;
    label: string;
}

export type TSelectOption = {
    label: string;
    value: string | number | boolean | null;
};

export type TFormHandlerFields = {
    [key: string]: TTextInputField | TSelectField | TSwitchInputField;
};
