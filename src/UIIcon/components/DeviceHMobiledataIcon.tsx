import React from 'react';
import { G, Path } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconDeviceHMobiledata(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Path d="M0,0h24v24H0V0z" fill="none" />
                    </G>
                    <G>
                        <G>
                            <Path d="M15,11H9V7H7v10h2v-4h6v4h2V7h-2V11z" />
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
                            <Path d="M15,11H9V7H7v10h2v-4h6v4h2V7h-2V11z" />
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
                            <Path d="M15,11H9V8c0-0.55-0.45-1-1-1h0C7.45,7,7,7.45,7,8v8c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-3h6v3c0,0.55,0.45,1,1,1h0 c0.55,0,1-0.45,1-1V8c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1V11z" />
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
                            <Path d="M15,11H9V7H7v10h2v-4h6v4h2V7h-2V11z" />
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
                            <Path d="M15,11H9V7H7v10h2v-4h6v4h2V7h-2V11z" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
