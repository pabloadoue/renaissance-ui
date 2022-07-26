import React, { useState } from 'react';
import {
    TCurrencyField,
    TSelectField,
    TSwitchInputField,
    TTextInputField,
    UICurrencyInput,
    UIModalEdit,
    UISelect,
    UISwitchInput,
    UITable,
    UITextInput,
    TPercentageField,
    UIPercentageInput,
    TDateField,
    UIDateInput
} from 'renaissance-ui';

import dayjs from "dayjs";

export default function Components(props: any) {
    const [saving, setSaving] = useState(false);
    const [fields, setFields] = useState<FieldsType>({
        Name: {
            name: 'Name',
            value: '',
            label: 'Name',
            type: 'text',
        },
        LastName: {
            name: 'LastName',
            value: '',
            label: 'Last Name',
            type: 'text',
        },
        FamilyName: {
            name: 'FamilyName',
            value: '',
            label: 'FamilyName',
            type: 'text',
        },
        Email: {
            name: 'Email',
            value: '',
            label: 'Email',
            type: 'email',
        },
        Select1: {
            name: 'Select1',
            value: null,
            label: 'Select State',
            icon: {
                name: '3d-rotation',
                color: {
                    dark: 'gray.500',
                    light: 'gray.500',
                },
            },
            options: [
                {
                    label: 'La gran, única e inigualable Ciudad de México',
                    value: 'CDMX',
                },
                { label: 'Estado de México', value: 'MX' },
            ],
        },
        Select2: {
            name: 'Select2',
            value: null,
            label: 'Select Loading',
            icon: {
                name: '3d-rotation',
                color: {
                    dark: 'gray.500',
                    light: 'gray.500',
                },
            },
            loading: true,
            options: [
                {
                    label: 'La gran, única e inigualable Ciudad de México',
                    value: 'CDMX',
                },
                { label: 'Estado de México', value: 'MX' },
            ],
        },
        Select3: {
            name: 'Select3',
            value: null,
            label: 'Another Select',
            icon: {
                name: '3d-rotation',
                color: {
                    dark: 'gray.500',
                    light: 'gray.500',
                },
            },
            options: [
                {
                    label: 'Value 1',
                    value: 1
                },
                {
                    label: 'Value 2',
                    value: 2
                },
                {
                    label: 'Value 3',
                    value: 3
                },
                {
                    label: 'Value 4',
                    value: 4
                },
            ],
        },
        Currency1: {
            name: 'Currency1',
            value: 0,
            label: 'Prima Anual',
            icon: {
                name: "add-card",
                color: {
                    dark: 'gray.500',
                    light: 'gray.500',
                }
            }
        },
        Currency2: {
            name: 'Currency2',
            value: 0,
            label: 'Prima Modal',
            currency: 'MXN',
        },
        Switch1: {
            name: 'Switch1',
            value: false,
            label: 'Daños Materiales',
        },
        Switch2: {
            name: 'Switch2',
            value: false,
            label: 'Robo Total',
            disabled: true,
        },
        Percentage1: {
            name: 'Percentage1',
            value: 0,
            label: 'Daños Materiales'
        },
        Percentage2: {
            name: 'Percentage2',
            value: 0,
            label: 'Robo Total'
        },
        Date1: {
            name: 'Date1',
            value: dayjs().hour(0).minute(0).second(0).format(),
            label: 'Inicio de Vigencia'
        },
        Date2: {
            name: 'Date2',
            value: dayjs().hour(0).minute(0).second(0).format(),
            time: true,
            label: 'Fin de Vigencia'
        }
    });

    const submit = (error: any, body: any, updated: any) => {
        if (error) {
            setFields({ ...error });
        } else {
            setFields({ ...updated });
            setSaving(true);

            console.log(body);
            setTimeout(() => {
                setSaving(false);
            }, 1000);
        }
    };

    return (
        <UIModalEdit
            title={'Modal Edit'}
            open={props.open}
            close={props.close}
            fields={fields}
            update={(updated) => setFields(updated)}
            saving={saving}
            submit={submit}
        >
            <UITable label="Datos del contratante" name="policyholder">
                <UITextInput {...fields.Name} />
                <UITextInput {...fields.LastName} />
                <UITextInput {...fields.FamilyName} />
                <UITextInput {...fields.Email} />
                <UISelect {...fields.Select1} />
                <UISelect {...fields.Select2} />
                <UISelect {...fields.Select3} />
            </UITable>
            <UITable label="Datos de la Prima" name="premium">
                <UICurrencyInput {...fields.Currency1} />
                <UICurrencyInput {...fields.Currency2} />
            </UITable>
            <UITable label="Coberturas" name="cover">
                <UISwitchInput {...fields.Switch1} />
                <UISwitchInput {...fields.Switch2} />
            </UITable>
            <UITable label="Deducibles" name="deductibles">
                <UIPercentageInput {...fields.Percentage1} />
                <UIPercentageInput {...fields.Percentage2} />
            </UITable>
            <UITable label="Vigencia" name="period">
                <UIDateInput {...fields.Date1} />
                <UIDateInput {...fields.Date2} />
            </UITable>
        </UIModalEdit>
    );
}

type FieldsType = {
    Name: TTextInputField;
    LastName: TTextInputField;
    FamilyName: TTextInputField;
    Email: TTextInputField;
    Select1: TSelectField;
    Select2: TSelectField;
    Select3: TSelectField;
    Currency1: TCurrencyField;
    Currency2: TCurrencyField;
    Switch1: TSwitchInputField;
    Switch2: TSwitchInputField;
    Percentage1: TPercentageField;
    Percentage2: TPercentageField;
    Date1: TDateField,
    Date2: TDateField
};
