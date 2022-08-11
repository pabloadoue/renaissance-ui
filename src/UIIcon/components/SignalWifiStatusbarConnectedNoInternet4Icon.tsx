import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconSignalWifiStatusbarConnectedNoInternet4(
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
                            <Path d="M12,4C7.31,4,3.07,5.9,0,8.98L12,21l5-5.01V8h5.92C19.97,5.51,16.16,4,12,4z" />
                            <Rect height="2" width="2" x="19" y="18" />
                            <Rect height="6" width="2" x="19" y="10" />
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
                            <Path d="M12,4C7.31,4,3.07,5.9,0,8.98L12,21l5-5.01V8h5.92C19.97,5.51,16.16,4,12,4z" />
                            <Rect height="2" width="2" x="19" y="18" />
                            <Rect height="6" width="2" x="19" y="10" />
                        </G>
                    </G>
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M22.92,8H17v7.99l-4.29,4.3c-0.39,0.39-1.02,0.39-1.42,0L0.73,9.71C0.32,9.3,0.35,8.63,0.79,8.24C3.78,5.6,7.7,4,12,4 C16.16,4,19.97,5.51,22.92,8z M20,18c-0.55,0-1,0.45-1,1s0.45,1,1,1s1-0.45,1-1S20.55,18,20,18z M20,10c-0.55,0-1,0.45-1,1v4 c0,0.55,0.45,1,1,1s1-0.45,1-1v-4C21,10.45,20.55,10,20,10z" />
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
                            <Rect height="2" width="2" x="19" y="18" />
                            <Rect height="6" width="2" x="19" y="10" />
                            <Path d="M12,4C7.31,4,3.07,5.9,0,8.98L12,21l5-5.01V8h5.92C19.97,5.51,16.16,4,12,4z" />
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
                            <Path d="M12,4C7.31,4,3.07,5.9,0,8.98L12,21l5-5.01V8h5.92C19.97,5.51,16.16,4,12,4z" />
                            <Rect height="2" width="2" x="19" y="18" />
                            <Rect height="6" width="2" x="19" y="10" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
