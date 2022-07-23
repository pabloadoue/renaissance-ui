import React from 'react';
import { G, Path } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconDeviceEMobiledata(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Path d="M0,0h24v24H0V0z" fill="none" />
                    </G>
                    <G>
                        <G>
                            <Path d="M16,9V7H8v10h8v-2h-6v-2h6v-2h-6V9H16z" />
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
                            <Path d="M16,9V7H8v10h8v-2h-6v-2h6v-2h-6V9H16z" />
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
                            <Path d="M16,8L16,8c0-0.55-0.45-1-1-1H9C8.45,7,8,7.45,8,8v8c0,0.55,0.45,1,1,1h6c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1h-5v-2h5 c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1h-5V9h5C15.55,9,16,8.55,16,8z" />
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
                            <Path d="M16,9V7H8v10h8v-2h-6v-2h6v-2h-6V9H16z" />
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
                            <Path d="M16,9V7H8v10h8v-2h-6v-2h6v-2h-6V9H16z" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
