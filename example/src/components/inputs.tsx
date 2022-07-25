import React, { useRef, useState } from 'react';
import { View } from 'native-base';
import {
    FormHandler,
    TFormHanderRef,
    TTextInputField,
    UIButton,
    UITextInput,
} from 'renaissance-ui';

export default function Components(_props: any) {
    const formRef = useRef<TFormHanderRef>(null);
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
        if (formRef.current) {
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
        }
    };

    return (
        <>
            <FormHandler
                ref={formRef}
                fields={fields}
                submit={submit}
                saving={saving}
                update={(update) => setFields(update)}
            >
                <UITextInput {...fields.Text1} />
            </FormHandler>
            <View>
                <UIButton
                    label="Submit Fields"
                    loading={saving}
                    onPress={() => {
                        if (formRef.current) {
                            formRef.current.submit();
                        }
                    }}
                />
            </View>
        </>
    );
}

type FieldsType = {
    Text1: TTextInputField;
};
