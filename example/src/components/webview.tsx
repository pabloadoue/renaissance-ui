import React, { useRef, useState } from 'react';
import { SafeAreaView, StyleSheet, useWindowDimensions } from 'react-native';
import { HStack, View } from 'native-base';
import { UIButton, UITextInput, UIWebView } from 'renaissance-ui';

import Header from './header';

export default function Components(props: any) {
    const webRef = useRef<any>(null);
    const { width } = useWindowDimensions();
    const [textValue, setTextValue] = useState('');
    const [url, setUrl] = useState('https://www.hyperseguros.com');

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
                <View flex={1} width="100%" style={styles.container}>
                    <View flex={1} bg="white">
                        <HStack
                            width={'100%'}
                            justifyContent="center"
                            alignItems={'center'}
                        >
                            <View flex={1}>
                                <UITextInput
                                    name="url"
                                    value={textValue}
                                    label="URL del WebView"
                                    change={({ value }) => {
                                        if (typeof value === 'string') {
                                            setTextValue(value);
                                        }
                                    }}
                                    submit={() => {
                                        setUrl(textValue);
                                    }}
                                    borderBottom={true}
                                />
                            </View>
                            <HStack space={2}>
                                <UIButton
                                    icon={'refresh'}
                                    tooltip="Refrescar"
                                    onPress={() => {
                                        if (webRef.current) {
                                            webRef.current.reload();
                                        }
                                    }}
                                />
                            </HStack>
                        </HStack>
                        <View flex={1}>
                            <UIWebView url={url} ref={webRef} />
                        </View>
                    </View>
                </View>
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
