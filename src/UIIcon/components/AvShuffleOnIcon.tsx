import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconAvShuffleOn(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0z" fill="none" />
                    <Path
                        d="M21 1H3c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"
                        fillRule="evenodd"
                    />
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <Path d="M21,1H3C1.9,1,1,1.9,1,3v18c0,1.1,0.9,2,2,2h18c1.1,0,2-0.9,2-2V3C23,1.9,22.1,1,21,1z M5.41,4l5.18,5.17l-1.41,1.42 L4,5.42L5.41,4z M20,20h-6v-2h2.61l-3.2-3.2l1.42-1.42l3.13,3.13L18,16.55V14h2V20z M20,10h-2V7.42L5.41,20L4,18.59L16.58,6H14V4h6 V10z" />
                    </G>
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <Path d="M21,1H3C1.9,1,1,1.9,1,3v18c0,1.1,0.9,2,2,2h18c1.1,0,2-0.9,2-2V3C23,1.9,22.1,1,21,1z M4.3,4.7 c0.39-0.39,1.02-0.39,1.41,0l4.47,4.47l-1.42,1.4L4.3,6.11C3.91,5.72,3.91,5.09,4.3,4.7z M19.59,19.5c0,0.28-0.22,0.5-0.5,0.5H15.3 c-0.45,0-0.67-0.54-0.36-0.85l1.2-1.2l-3.13-3.13l1.41-1.41l3.13,3.14l1.19-1.19c0.31-0.32,0.85-0.1,0.85,0.35V19.5z M19.59,8.29 c0,0.45-0.54,0.67-0.85,0.36l-1.19-1.19L5.7,19.29c-0.39,0.39-1.02,0.39-1.41,0c-0.39-0.39-0.39-1.02,0-1.41L16.13,6.04l-1.19-1.19 C14.63,4.54,14.85,4,15.3,4h3.79c0.28,0,0.5,0.22,0.5,0.5V8.29z" />
                    </G>
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <Path d="M1,1v22h22V1H1z M5.41,4l5.18,5.17l-1.42,1.41L4,5.41L5.41,4z M20,20h-5.5l2.05-2.05l-3.13-3.13l1.41-1.41l3.13,3.13 L20,14.5V20z M20,9.5l-2.04-2.04L5.41,20L4,18.59L16.54,6.04L14.5,4H20V9.5z" />
                    </G>
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <Path d="M21,1H3C1.9,1,1,1.9,1,3v18c0,1.1,0.9,2,2,2h18c1.1,0,2-0.9,2-2V3C23,1.9,22.1,1,21,1z M5.41,4l5.18,5.17l-1.41,1.42 L4,5.42L5.41,4z M20,20h-6v-2h2.61l-3.2-3.2l1.42-1.42l3.13,3.13L18,16.55V14h2V20z M20,10h-2V7.42L5.41,20L4,18.59L16.58,6H14V4h6 V10z" />
                    </G>
                </Icon>
            );
    }
}
