import React, { useRef, useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { View } from 'native-base';

import { FormHandler, TFormHanderRef, TFormHandlerProps } from './FormHandler';
import { UIFormWrapper } from './UIFormWrapper';
import { TUIHeaderControllDefinition, UIHeader } from './UIHeader';
import { TUIModalProps, UIModal } from './UIModal';

export function UIModalEdit(props: TUIModalEditProps) {
    const [topOffset, setTopOffset] = useState(0);
    const form = useRef<TFormHanderRef>(null);

    let headerRight: TUIHeaderControllDefinition[] = [
        {
            icon: 'delete',
            color: 'gray',
            variant: 'ghost',
            loading: props.saving,
            press: () => {
                if (form.current) {
                    form.current.submit();
                }
            },
        },
        {
            color: 'blue',
            label: 'Continuar',
            icon: 'done',
            loading: props.saving,
            press: () => {
                if (form.current) {
                    form.current.submit();
                }
            },
        },
    ];

    return (
        <UIModal open={props.open}>
            <UIFormWrapper>
                <View position="absolute" zIndex={1000} width="100%">
                    <UIHeader
                        safeArea={false}
                        borderRadius={8}
                        title={props.title}
                        left={{
                            icon: 'close',
                            color: 'gray',
                            disabled: props.saving,
                            press: () => {
                                props.close();
                            },
                        }}
                        shadow={topOffset > 0}
                        bg={
                            topOffset > 0
                                ? { dark: 'gray5.500', light: 'white' }
                                : { dark: 'transparent', light: 'transparent' }
                        }
                        right={headerRight}
                    />
                </View>
                <View flex={1} borderRadius={8}>
                    <KeyboardAwareScrollView
                        contentContainerStyle={{
                            paddingTop: 60,
                            paddingBottom: 40,
                        }}
                        extraHeight={200}
                        onScroll={(e) => {
                            setTopOffset(e.nativeEvent.contentOffset.y);
                        }}
                    >
                        <FormHandler
                            fields={props.fields}
                            submit={props.submit}
                            update={props.update}
                            saving={props.saving}
                            ref={form}
                        >
                            {props.children}
                        </FormHandler>
                    </KeyboardAwareScrollView>
                </View>
            </UIFormWrapper>
        </UIModal>
    );
}

export interface TUIModalEditProps extends TUIModalProps, TFormHandlerProps {
    children: JSX.Element | JSX.Element[];
    title?: string;
    close: () => void;
}
