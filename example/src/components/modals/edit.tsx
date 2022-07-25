import React, { useState } from 'react';
import { TTextInputField, UIModalEdit, UITextInput } from 'renaissance-ui';

export default function Components(props: any) {
    const [saving, setSaving] = useState(false);
    const [fields, setFields] = useState<FieldsType>({
        Text1: {
            name: 'Text1',
            value: '',
            label: 'Text Input',
            type: 'text',
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
            <UITextInput {...fields.Text1} />
        </UIModalEdit>
    );
}

type FieldsType = {
    Text1: TTextInputField;
};
