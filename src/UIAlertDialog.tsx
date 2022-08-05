import React, { useEffect, useRef, useState } from 'react';
import { AlertDialog, HStack, Text, View } from 'native-base';

import { TUIButtonProps, UIButton } from './UIButton';
import { TUIIconName, UIIcon } from './UIIcon';

export const UIAlertDialog = (props: TUIAlertDialogProps) => {
    const { open } = props;
    const [dialogOpen, setDialogOpen] = useState(open);
    const dismissButton = useRef(null);

    useEffect(() => {
        setDialogOpen(open);
    }, [open]);

    const buttons = () => {
        if (typeof props.buttons !== 'undefined') {
            return props.buttons.map(
                (button: TUIButtonProps, index: number) => {
                    return (
                        <View flex={1} key={index}>
                            <UIButton {...button} key={index} />
                        </View>
                    );
                }
            );
        }
        return null;
    };
    return (
        <AlertDialog leastDestructiveRef={dismissButton} isOpen={dialogOpen}>
            <AlertDialog.Content>
                <AlertDialog.Header textAlign={'center'}>
                    <HStack
                        width="100%"
                        space={2}
                        justifyContent="center"
                        alignContent={'center'}
                    >
                        {typeof props.icon !== 'undefined' && (
                            <UIIcon name={props.icon} size={6} />
                        )}
                        <Text
                            fontSize={18}
                            fontWeight="medium"
                            numberOfLines={1}
                        >
                            {props.title}
                        </Text>
                    </HStack>
                </AlertDialog.Header>
                <AlertDialog.Body textAlign={'center'}>
                    <Text width="100%" textAlign={'center'}>
                        {props.body}
                    </Text>
                </AlertDialog.Body>
                {(typeof props.buttons !== 'undefined' ||
                    typeof props.close === 'function') && (
                    <AlertDialog.Footer>
                        <HStack width="100%" flex={1} space={2}>
                            {buttons()}
                            {typeof props.close === 'function' && (
                                <View flex={1}>
                                    <UIButton
                                        label="Continuar"
                                        onPress={() => {
                                            setDialogOpen(false);
                                            setTimeout(() => {
                                                props.close();
                                            }, 250);
                                        }}
                                    />
                                </View>
                            )}
                        </HStack>
                    </AlertDialog.Footer>
                )}
            </AlertDialog.Content>
        </AlertDialog>
    );
};

UIAlertDialog.defaultProps = {
    zIndex: 3000,
};

export type TUIAlertDialogProps = {
    title: string;
    body: string;
    open: boolean;
    zIndex?: number;
    buttons?: TUIButtonProps[];
    close: () => void;
    icon?: TUIIconName;
};
