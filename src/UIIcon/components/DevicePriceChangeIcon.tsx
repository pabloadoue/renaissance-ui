import React from 'react';
import { G, Path } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconDevicePriceChange(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Path d="M0,0h24v24H0V0z" fill="none" />
                    </G>
                    <G>
                        <Path d="M20,4H4C2.89,4,2.01,4.89,2.01,6L2,18c0,1.11,0.89,2,2,2h16c1.11,0,2-0.89,2-2V6C22,4.89,21.11,4,20,4z M12,10H8v1h3 c0.55,0,1,0.45,1,1v3c0,0.55-0.45,1-1,1h-1v1H8v-1H6v-2h4v-1H7c-0.55,0-1-0.45-1-1V9c0-0.55,0.45-1,1-1h1V7h2v1h2V10z M16,16.25 l-2-2h4L16,16.25z M14,10l2-2l2,2H14z" />
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
                            <Path d="M8,17h2v-1h1c0.55,0,1-0.45,1-1v-3c0-0.55-0.45-1-1-1H8v-1h4V8h-2V7H8v1H7C6.45,8,6,8.45,6,9v3c0,0.55,0.45,1,1,1h3v1H6v2 h2V17z M20,4H4C2.89,4,2.01,4.89,2.01,6L2,18c0,1.11,0.89,2,2,2h16c1.11,0,2-0.89,2-2V6C22,4.89,21.11,4,20,4z M20,18H4V6h16V18z M14,10l2-2l2,2 M18,14.25l-2,2l-2-2" />
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
                        <Path d="M20,4H4C2.89,4,2.01,4.89,2.01,6L2,18c0,1.11,0.89,2,2,2h16c1.11,0,2-0.89,2-2V6C22,4.89,21.11,4,20,4z M11,10H8v1h3 c0.55,0,1,0.45,1,1v3c0,0.55-0.45,1-1,1h-1v0c0,0.55-0.45,1-1,1h0c-0.55,0-1-0.45-1-1v0H7c-0.55,0-1-0.45-1-1v0c0-0.55,0.45-1,1-1 h3v-1H7c-0.55,0-1-0.45-1-1V9c0-0.55,0.45-1,1-1h1v0c0-0.55,0.45-1,1-1h0c0.55,0,1,0.45,1,1v0h1c0.55,0,1,0.45,1,1v0 C12,9.55,11.55,10,11,10z M15.65,15.9L14,14.25h4l-1.65,1.65C16.16,16.09,15.84,16.09,15.65,15.9z M14,10l1.65-1.65 c0.2-0.2,0.51-0.2,0.71,0L18,10H14z" />
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
                        <Path d="M2,4v16h20V4H2z M12,10H8v1h4v5h-2v1H8v-1H6v-2h4v-1H6V8h2V7h2v1h2V10z M16,16.25l-2-2h4L16,16.25z M14,10l2-2l2,2H14z" />
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
                            <Path d="M8,17h2v-1h1c0.55,0,1-0.45,1-1v-3c0-0.55-0.45-1-1-1H8v-1h4V8h-2V7H8v1H7C6.45,8,6,8.45,6,9v3c0,0.55,0.45,1,1,1h3v1H6v2 h2V17z M20,4H4C2.89,4,2.01,4.89,2.01,6L2,18c0,1.11,0.89,2,2,2h16c1.11,0,2-0.89,2-2V6C22,4.89,21.11,4,20,4z M20,18H4V6h16V18z M14,10l2-2l2,2 M18,14.25l-2,2l-2-2" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
