import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconCompress(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0z" fill="none" />
                    <Path d="M0 0h24v24H0V0z" fill="none" />
                    <Path d="M8 19h3v3h2v-3h3l-4-4-4 4zm8-15h-3V1h-2v3H8l4 4 4-4zM4 9v2h16V9H4z" />
                    <Path d="M4 12h16v2H4z" />
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Path d="M0,0h24v24H0V0z" fill="none" />
                    </G>
                    <G>
                        <Path d="M4,9v2h16V9H4z M16,4l-1.41-1.41L13,4.17V1h-2v3.19L9.39,2.61L8,4l4,4L16,4z M4,14h16v-2H4V14z M8,19l1.39,1.39L11,18.81 V22h2v-3.17l1.59,1.59L16,19l-4-4L8,19z" />
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
                            <Path d="M4,10L4,10c0,0.55,0.45,1,1,1h14c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H5C4.45,9,4,9.45,4,10z" />
                            <Path d="M14.79,4H13V2c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v2H9.21C8.76,4,8.54,4.54,8.85,4.85l2.79,2.79 c0.2,0.2,0.51,0.2,0.71,0l2.79-2.79C15.46,4.54,15.24,4,14.79,4z" />
                            <Path d="M9.21,19H11v2c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-2h1.79c0.45,0,0.67-0.54,0.35-0.85l-2.79-2.79 c-0.2-0.2-0.51-0.2-0.71,0l-2.79,2.79C8.54,18.46,8.76,19,9.21,19z" />
                            <Path d="M5,14h14c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H5c-0.55,0-1,0.45-1,1v0C4,13.55,4.45,14,5,14z" />
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
                            <Rect height="2" width="16" x="4" y="9" />
                            <Polygon points="16,4 13,4 13,1 11,1 11,4 8,4 12,8" />
                            <Polygon points="8,19 11,19 11,22 13,22 13,19 16,19 12,15" />
                            <Rect height="2" width="16" x="4" y="12" />
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
                        <Path d="M4,9v2h16V9H4z M16,4l-1.41-1.41L13,4.17V1h-2v3.19L9.39,2.61L8,4l4,4L16,4z M4,14h16v-2H4V14z M8,19l1.39,1.39L11,18.81 V22h2v-3.17l1.59,1.59L16,19l-4-4L8,19z" />
                    </G>
                </Icon>
            );
    }
}
