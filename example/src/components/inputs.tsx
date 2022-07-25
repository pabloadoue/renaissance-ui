import { View } from 'native-base';
import React, { useState, useRef } from 'react';
import { FormHandler, TTextInputField, UITextInput, UIButton, TFormHanderRef } from 'renaissance-ui';

export default function Components(_props: any) {
    const formRef = useRef<TFormHanderRef>(null);
    const [saving, setSaving] = useState(false);
    const [fields, setFields] = useState<FieldsType>({
        Text1: {
            name: 'Text1',
            value: '',
            label: 'Text Input',
            type: 'text'
        },
    });

    const submit = (error: any, body: any, fields: any) => {
        if (formRef.current) {
            if (error) {
                setFields({ ...error });
            } else {
                setFields({ ...fields });
                setSaving(true);

                console.log(body);
                setTimeout(() => {
                    setSaving(false);
                }, 1000);
            }
        }
    }

    return <>
        <FormHandler
            ref={formRef}
            fields={fields}
            submit={submit}
            saving={saving}
            update={(update) => {
                setFields(update);
            }}
        >
            <UITextInput {...fields.Text1} />
        </FormHandler>
        <View>
            <UIButton label="Submit Fields" loading={saving} onPress={() => {
                if (formRef.current) {
                    formRef.current.submit();
                }
            }} />
        </View>
    </>;
}

type FieldsType = {
    Text1: TTextInputField;
};
