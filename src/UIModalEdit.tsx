import React, { useRef } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { View } from 'native-base';

import { FormHandler, TFormHanderRef, TFormHandlerProps } from './FormHandler';
import { TUIHeaderControllDefinition, UIHeader } from './UIHeader';
import { TUIModalProps, UIModal } from './UIModal';

export function UIModalEdit(props: TUIModalEditProps) {
    //const [_topOffset, setTopOffset] = useState(0);
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
            <View position="absolute" zIndex={1000} width="100%">
                <UIHeader
                    safeArea={false}
                    borderRadius={8}
                    title={''}
                    left={{
                        icon: 'close',
                        color: 'gray',
                        disabled: props.saving,
                        press: () => {
                            props.close();
                        },
                    }}
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
                    onScroll={(_e) => {
                        //setTopOffset(e.nativeEvent.contentOffset.y);
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
        </UIModal>
    );
}

export interface TUIModalEditProps extends TUIModalProps, TFormHandlerProps {
    children: JSX.Element | JSX.Element[];
    title?: string;
    close: () => void;
}
