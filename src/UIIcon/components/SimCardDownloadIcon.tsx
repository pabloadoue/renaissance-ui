import React from 'react';
import { G, Path } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconSimCardDownload(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Path d="M0,0h24v24H0V0z" fill="none" />
                    </G>
                    <G>
                        <Path d="M18,2h-8L4,8v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V4C20,2.9,19.1,2,18,2z M12,17l-4-4h3V9.02L13,9v4h3L12,17z" />
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
                            <Path d="M18,2h-8L4,8v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V4C20,2.9,19.1,2,18,2z M18,4v16H6V8.83L10.83,4H18z" />
                            <Path d="M16,13l-4,4l-4-4l1.41-1.41L11,13.17V9.02L13,9v4.17l1.59-1.59L16,13z" />
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
                        <Path d="M18,2h-7.17C10.3,2,9.79,2.21,9.41,2.59L4.59,7.41C4.21,7.79,4,8.3,4,8.83V20c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V4 C20,2.9,19.1,2,18,2z M11.65,16.65l-2.79-2.79C8.54,13.54,8.76,13,9.21,13H11v-2.99c0-0.55,0.44-0.99,0.99-1h0 C12.55,9,13,9.45,13,10.01V13h1.79c0.45,0,0.67,0.54,0.35,0.85l-2.79,2.79C12.16,16.84,11.84,16.84,11.65,16.65z" />
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
                        <Path d="M20,2H10L4,8v14h16V2z M12,17l-4-4h3V9.02L13,9v4h3L12,17z" />
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
                            <Path d="M18,2h-8L4,8v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V4C20,2.9,19.1,2,18,2z M18,4v16H6V8.83L10.83,4H18z" />
                            <Path d="M16,13l-4,4l-4-4l1.41-1.41L11,13.17V9.02L13,9v4.17l1.59-1.59L16,13z" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
