import type { LinkingOptions } from '@react-navigation/native';

export default function Linking() {
    const result: LinkingOptions<RootStackParamList> = {
        prefixes: [],
        config: {
            screens: {
                components: {
                    path: 'components',
                    screens: {
                        home: {
                            path: 'home',
                        },
                        inputs: {
                            path: 'inputs',
                        },
                        modals: {
                            path: 'modals',
                        },
                        webview: {
                            path: 'webview',
                        },
                    },
                },
                drawerView: {
                    path: 'drawerView',
                    screens: {
                        screen1: {
                            path: 'screen1',
                        },
                    },
                },
            },
        },
    };
    return result;
}

type RootStackParamList = {
    components: undefined;
    drawerView: undefined;
};
