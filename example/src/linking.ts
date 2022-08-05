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
                        errors: {
                            path: 'errors',
                        },
                    },
                },
                drawerView: {
                    path: 'drawerView',
                    screens: {
                        screen1: {
                            path: 'screen1',
                        },
                        screen2: {
                            path: 'screen2',
                        },
                        screen3: {
                            path: 'screen3',
                        },
                    },
                },
                listDetailView: {
                    path: 'listDetailView',
                    screens: {
                        screen1: {
                            path: 'screen1/:selected?',
                            screens: {
                                detail: {
                                    path: '',
                                },
                            },
                        },
                        screen2: {
                            path: 'screen2/:selected?',
                            screens: {
                                detail: {
                                    path: '',
                                },
                            },
                        },
                        screen3: {
                            path: 'screen3/:selected?',
                            screens: {
                                detail: {
                                    path: '',
                                },
                            },
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
    listDetailView: undefined;
};
