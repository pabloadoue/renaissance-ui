import React, { useState } from 'react';
import {
    TSelectField,
    TTextInputField,
    UIModalEdit,
    UISelect,
    UITable,
    UITextInput,
} from 'renaissance-ui';

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
            icon: '3d-rotation',
            options: [
                {
                    label: 'La gran, única e inigualable Ciudad de México',
                    value: 'CDMX',
                },
                { label: 'Estado de México', value: 'MX' },
            ],
        },
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
};
