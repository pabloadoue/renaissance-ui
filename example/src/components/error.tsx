import React, { useContext } from 'react';
import { SafeAreaView, StyleSheet, useWindowDimensions } from 'react-native';
import { VStack } from 'native-base';
import { AppErrorContext, UIButton } from 'renaissance-ui';

//import { UIButton, UITextInput, UIWebView } from 'renaissance-ui';
import Header from './header';

export default function Components(props: any) {
    const { appError } = useContext(AppErrorContext);
    const { width } = useWindowDimensions();

    return (
        <>
            {width < 768 ? (
                <Header
                    title={props.title}
                    navigation={props.navigation}
                    setColorMode={props.setColorMode}
                />
            ) : null}
            <SafeAreaView style={styles.safeArea}>
                <VStack
                    flex={1}
                    width="100%"
                    style={styles.container}
                    space={2}
                >
                    <UIButton
                        label={'Error Modal'}
                        onPress={() => {
                            appError({
                                errorCode: 'Código de error',
                                data: 'Ocurrió un error inesperado',
                            });
                        }}
                    />

                    <UIButton
                        label={'Native Error'}
                        onPress={() => {
                            //@ts-expect-error
                            unknownFunction();
                        }}
                    />
                </VStack>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        marginTop: 70,
        paddingHorizontal: 20,
    },
});
