import React from 'react';
import { Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconFontDownloadOff(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M12.58,9.75l-0.87-0.87l0.23-0.66h0.1L12.58,9.75z M10.35,7.52L10.92,6h2.14l2.55,6.79L22,19.17V4c0-1.1-0.9-2-2-2H4.83 L10.35,7.52z M20.49,23.31L19.17,22H4c-1.1,0-2-0.9-2-2V4.83L0.69,3.51L2.1,2.1l19.8,19.8L20.49,23.31z M12.1,14.93l-3.3-3.3 L6.41,18h2.08l1.09-3.07H12.1z" />
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M4.83,2H20c1.1,0,2,0.9,2,2v15.17l-2-2V4H6.83L4.83,2z M10.92,6l-0.57,1.52l1.36,1.36l0.23-0.66h0.1l0.54,1.52l3.04,3.04 L13.07,6H10.92z M20.49,23.31L19.17,22H4c-1.1,0-2-0.9-2-2V4.83L0.69,3.51L2.1,2.1l19.8,19.8L20.49,23.31z M17.17,20l-5.07-5.07 H9.58L8.49,18H6.41l2.39-6.37L4,6.83V20H17.17z" />
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M12.58,9.75l-0.87-0.87l0.23-0.66h0.1L12.58,9.75z M10.35,7.52L10.55,7c0.23-0.6,0.8-1,1.45-1s1.22,0.4,1.45,1l2.17,5.79 L22,19.17V4c0-1.1-0.9-2-2-2H4.83L10.35,7.52z M21.19,22.61L21.19,22.61c-0.39,0.39-1.02,0.39-1.41,0L19.17,22H4c-1.1,0-2-0.9-2-2 V4.83L1.39,4.22C1,3.83,1,3.2,1.39,2.81l0,0c0.39-0.39,1.02-0.39,1.41,0l18.38,18.38C21.58,21.58,21.58,22.22,21.19,22.61z M12.1,14.93l-3.3-3.3L6.9,16.7C6.67,17.33,7.13,18,7.8,18h0.01c0.41,0,0.77-0.26,0.9-0.64l0.86-2.43H12.1z" />
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M12.58,9.75l-0.87-0.87l0.23-0.66h0.1L12.58,9.75z M20.49,23.31L19.17,22H2V4.83L0.69,3.51L2.1,2.1l19.8,19.8L20.49,23.31z M12.1,14.93l-3.3-3.3L6.41,18h2.08l1.09-3.07H12.1z M10.35,7.52L10.92,6h2.14l2.55,6.79L22,19.17V2H4.83L10.35,7.52z" />
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M4.83,2H20c1.1,0,2,0.9,2,2v15.17l-2-2V4H6.83L4.83,2z M10.92,6l-0.57,1.52l1.36,1.36l0.23-0.66h0.1l0.54,1.52l3.04,3.04 L13.07,6H10.92z M20.49,23.31L19.17,22H4c-1.1,0-2-0.9-2-2V4.83L0.69,3.51L2.1,2.1l19.8,19.8L20.49,23.31z M17.17,20l-5.07-5.07 H9.58L8.49,18H6.41l2.39-6.37L4,6.83V20H17.17z" />
                </Icon>
            );
    }
}
