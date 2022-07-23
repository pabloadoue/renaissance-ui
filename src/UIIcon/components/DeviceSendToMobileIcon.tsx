import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconDeviceSendToMobile(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M17,17h2v4c0,1.1-0.9,2-2,2H7c-1.1,0-2-0.9-2-2V3c0-1.1,0.9-1.99,2-1.99L17,1c1.1,0,2,0.9,2,2v4h-2V6H7v12h10V17z M22,12 l-4-4v3h-5v2h5v3L22,12z" />
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
                            <Path d="M18,8l4,4l-4,4l-1.41-1.41L18.17,13H13v-2h5.17l-1.59-1.59L18,8z M7,1.01L17,1c1.1,0,2,0.9,2,2v4h-2V6H7v12h10v-1h2v4 c0,1.1-0.9,2-2,2H7c-1.1,0-2-0.9-2-2V3C5,1.9,5.9,1.01,7,1.01z M7,21h10v-1H7V21z M7,4h10V3H7V4z" />
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
                            <Path d="M17,18H7V6h10v0c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1V3c0-1.1-0.9-2-2-2L7,1.01C5.9,1.01,5,1.9,5,3v18c0,1.1,0.9,2,2,2 h10c1.1,0,2-0.9,2-2v-3c0-0.55-0.45-1-1-1h0C17.45,17,17,17.45,17,18L17,18z" />
                            <Path d="M21.65,11.65l-2.79-2.79C18.54,8.54,18,8.76,18,9.21V11h-4c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h4v1.79 c0,0.45,0.54,0.67,0.85,0.35l2.79-2.79C21.84,12.16,21.84,11.84,21.65,11.65z" />
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
                            <Polygon points="17,18 7,18 7,6 17,6 17,7 19,7 19,1 5,1 5,23 19,23 19,17 17,17" />
                            <Polygon points="22,12 18,8 18,11 13,11 13,13 18,13 18,16" />
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
                            <Path d="M18,8l4,4l-4,4l-1.41-1.41L18.17,13H13v-2h5.17l-1.59-1.59L18,8z M7,1.01L17,1c1.1,0,2,0.9,2,2v4h-2V6H7v12h10v-1h2v4 c0,1.1-0.9,2-2,2H7c-1.1,0-2-0.9-2-2V3C5,1.9,5.9,1.01,7,1.01z M7,21h10v-1H7V21z M7,4h10V3H7V4z" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
