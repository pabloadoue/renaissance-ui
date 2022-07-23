import React from 'react';
import { G, Path } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconDeviceRememberMe(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Path d="M0,0h24v24H0V0z" fill="none" />
                    </G>
                    <G>
                        <G>
                            <Path d="M17,1H7C5.9,1,5,1.9,5,3v18c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V3C19,1.9,18.1,1,17,1z M17,15.21 C15.5,14.44,13.8,14,12,14s-3.5,0.44-5,1.21V6h10V15.21z" />
                            <circle cx="12" cy="10" r="3" />
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
                            <Path d="M17,1H7C5.9,1,5,1.9,5,3v18c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V3C19,1.9,18.1,1,17,1z M17,21H7v-1h10V21z M17,18H7v-0.48 C8.47,16.53,10.22,16,12,16s3.53,0.53,5,1.52V18z M17,15.21C15.5,14.44,13.8,14,12,14s-3.5,0.44-5,1.21V6h10V15.21z M17,4H7V3h10 V4z" />
                            <Path d="M12,13c1.66,0,3-1.34,3-3s-1.34-3-3-3s-3,1.34-3,3S10.34,13,12,13z M12,9c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1 S11.45,9,12,9z" />
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
                            <Path d="M17,1H7C5.9,1,5,1.9,5,3v18c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V3C19,1.9,18.1,1,17,1z M17,15.21 C15.5,14.44,13.8,14,12,14s-3.5,0.44-5,1.21V6h10V15.21z" />
                            <circle cx="12" cy="10" r="3" />
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
                            <Path d="M19,1H5v22h14V1z M17,15.21C15.5,14.44,13.8,14,12,14s-3.5,0.44-5,1.21V6h10V15.21z" />
                            <circle cx="12" cy="10" r="3" />
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
                            <Path d="M17,1H7C5.9,1,5,1.9,5,3v18c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V3C19,1.9,18.1,1,17,1z M17,21H7v-1h10V21z M17,18H7v-0.48 C8.47,16.53,10.22,16,12,16s3.53,0.53,5,1.52V18z M17,15.21C15.5,14.44,13.8,14,12,14s-3.5,0.44-5,1.21V6h10V15.21z M17,4H7V3h10 V4z" />
                            <Path d="M12,13c1.66,0,3-1.34,3-3s-1.34-3-3-3s-3,1.34-3,3S10.34,13,12,13z M12,9c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1 S11.45,9,12,9z" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
