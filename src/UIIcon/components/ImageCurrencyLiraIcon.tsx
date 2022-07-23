import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconImageCurrencyLira(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <Path d="M9,8.76V3h2v4.51L15,5v2.36l-4,2.51l0.01,2.35L15,9.72v2.36l-4,2.51V19c2.76,0,5-2.24,5-5h2c0,3.87-3.13,7-7,7H9v-5.16 l-3,1.88l0-2.36l3-1.88v-2.36L6,13l0-2.36L9,8.76z" />
                    </G>
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <Path d="M9,8.76V3h2v4.51L15,5v2.36l-4,2.51l0.01,2.35L15,9.72v2.36l-4,2.51V19c2.76,0,5-2.24,5-5h2c0,3.87-3.13,7-7,7H9v-5.16 l-3,1.88l0-2.36l3-1.88v-2.36L6,13l0-2.36L9,8.76z" />
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
                        <Path d="M9,15.84l-1.47,0.92C6.86,17.18,6,16.7,6,15.91c0-0.34,0.18-0.66,0.47-0.85L9,13.48v-2.36l-1.47,0.92 C6.86,12.46,6,11.98,6,11.19c0-0.34,0.18-0.66,0.47-0.85L9,8.76V4c0-0.55,0.45-1,1-1s1,0.45,1,1v3.51l2.47-1.55 C14.14,5.54,15,6.02,15,6.81c0,0.34-0.18,0.66-0.47,0.85L11,9.87l0.01,2.35l2.46-1.54c0.67-0.42,1.53,0.06,1.53,0.85 c0,0.34-0.18,0.66-0.47,0.85L11,14.59V19c2.47,0,4.52-1.79,4.93-4.15c0.08-0.49,0.49-0.85,0.98-0.85c0.61,0,1.09,0.54,1,1.14 C17.37,18.46,14.48,21,11,21h-1c-0.55,0-1-0.45-1-1V15.84z" />
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
                        <Path d="M9,8.76V3h2v4.51L15,5v2.36l-4,2.51l0.01,2.35L15,9.72v2.36l-4,2.51V19c2.76,0,5-2.24,5-5h2c0,3.87-3.13,7-7,7H9v-5.16 l-3,1.88l0-2.36l3-1.88v-2.36L6,13l0-2.36L9,8.76z" />
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
                        <Path d="M9,8.76V3h2v4.51L15,5v2.36l-4,2.51l0.01,2.35L15,9.72v2.36l-4,2.51V19c2.76,0,5-2.24,5-5h2c0,3.87-3.13,7-7,7H9v-5.16 l-3,1.88l0-2.36l3-1.88v-2.36L6,13l0-2.36L9,8.76z" />
                    </G>
                </Icon>
            );
    }
}
