import React from 'react';
import { G, Path } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconDeviceSignalCellularConnectedNoInternet4Bar(
    props: any
) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Path d="M0,0h24v24H0V0z" fill="none" />
                    </G>
                    <G>
                        <G>
                            <G>
                                <Path d="M20,18h2v-8h-2V18z M20,22h2v-2h-2V22z M2,22h16V8h4V2L2,22z" />
                            </G>
                        </G>
                    </G>
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Path d="M0,0h24v24H0V0z" fill="none" />
                    </G>
                    <G>
                        <G>
                            <G>
                                <Path d="M20,18h2v-8h-2V18z M20,22h2v-2h-2V22z M2,22h16V8h4V2L2,22z" />
                            </G>
                        </G>
                    </G>
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Path d="M0,0h24v24H0V0z" fill="none" />
                    </G>
                    <G>
                        <G>
                            <G>
                                <Path d="M21,18L21,18c0.55,0,1-0.45,1-1v-6c0-0.55-0.45-1-1-1l0,0c-0.55,0-1,0.45-1,1v6C20,17.55,20.45,18,21,18z M21,22L21,22 c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v0C20,21.55,20.45,22,21,22z M4.41,22H18V11c0-1.66,1.34-3,3-3h1 V4.41c0-0.89-1.08-1.34-1.71-0.71L3.71,20.29C3.08,20.92,3.52,22,4.41,22z" />
                            </G>
                        </G>
                    </G>
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Path d="M0,0h24v24H0V0z" fill="none" />
                    </G>
                    <G>
                        <G>
                            <G>
                                <Path d="M20,18h2v-8h-2V18z M20,22h2v-2h-2V22z M2,22h16V8h4V2L2,22z" />
                            </G>
                        </G>
                    </G>
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Path d="M0,0h24v24H0V0z" fill="none" />
                    </G>
                    <G>
                        <G>
                            <G>
                                <Path d="M20,18h2v-8h-2V18z M20,22h2v-2h-2V22z M2,22h16V8h4V2L2,22z" />
                            </G>
                        </G>
                    </G>
                </Icon>
            );
    }
}
