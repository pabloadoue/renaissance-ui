import React, {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from 'react';
import { Platform, StyleSheet } from 'react-native';
import uuid from 'react-native-uuid';
import { WebView } from 'react-native-webview';
import { Spinner, Text, View } from 'native-base';

import { Validator } from './Validator';

const WebComponent = (props: TUIWebViewProps, ref: any) => {
    const [frameKey, setFrameKey] = useState(uuid.v4() as string);
    const viewContainerRef = useRef<any>(null);
    const [valid, setValid] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const result = Validator.isURL(props.url);
        setValid(result);
    }, [props.url, setValid, setLoading]);

    const reload = () => {
        setLoading(true);
        if (Platform.OS === 'web') {
            setFrameKey(uuid.v4() as string);
        } else {
            if (viewContainerRef.current) {
                viewContainerRef.current.reload();
            }
        }
    };

    useImperativeHandle(ref, () => {
        return {
            reload: reload,
        };
    });

    if (!valid) {
        return (
            <View flex={1}>
                <Text>URL no válida</Text>
            </View>
        );
    } else {
        if (Platform.OS === 'web') {
            return (
                <>
                    {loading ? (
                        <View
                            width="100%"
                            height={'100%'}
                            position="absolute"
                            zIndex={1000}
                            justifyContent="center"
                            alignItems={'center'}
                            bg="gray5.500"
                        >
                            <Spinner />
                        </View>
                    ) : null}
                    <View flex={1}>
                        <iframe
                            ref={viewContainerRef}
                            key={frameKey}
                            src={props.url}
                            style={{
                                flex: 1,
                                border: 'none',
                            }}
                            onLoadStart={() => {
                                console.log('Load Started');
                            }}
                            onLoad={() => {
                                setLoading(false);
                            }}
                        />
                    </View>
                    ;
                </>
            );
        } else {
            return (
                <>
                    {loading ? (
                        <View
                            width="100%"
                            height={'100%'}
                            position="absolute"
                            zIndex={1000}
                            justifyContent="center"
                            alignItems={'center'}
                            bg="gray5.500"
                        >
                            <Spinner />
                        </View>
                    ) : null}
                    <View flex={1}>
                        <WebView
                            onLoad={() => {
                                setLoading(false);
                            }}
                            onLoadStart={() => {
                                setLoading(false);
                            }}
                            onLoadEnd={() => {
                                setLoading(false);
                            }}
                            style={styles.webview}
                            ref={viewContainerRef}
                            source={{ uri: props.url }}
                        />
                    </View>
                </>
            );
        }
    }
};

export const UIWebView = forwardRef(WebComponent);

export type TUIWebViewProps = {
    url: string;
};

const styles = StyleSheet.create({
    webview: {
        flex: 1,
    },
});
