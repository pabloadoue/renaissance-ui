import React from 'react';
import { Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconMapsNoTransfer(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M21.19,21.19L2.81,2.81L1.39,4.22L4,6.83V16c0,0.88,0.39,1.67,1,2.22V20c0,0.55,0.45,1,1,1h1c0.55,0,1-0.45,1-1v-1h8v1 c0,0.55,0.45,1,1,1h1c0.05,0,0.09-0.02,0.14-0.03l1.64,1.64L21.19,21.19z M7.5,17C6.67,17,6,16.33,6,15.5C6,14.67,6.67,14,7.5,14 S9,14.67,9,15.5C9,16.33,8.33,17,7.5,17z M6,11V8.83L8.17,11H6z M8.83,6L5.78,2.95C7.24,2.16,9.48,2,12,2c4.42,0,8,0.5,8,4v10 c0,0.35-0.08,0.67-0.19,0.98L13.83,11H18V6H8.83z" />
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M8.5,13c0.83,0,1.5,0.67,1.5,1.5S9.33,16,8.5,16S7,15.33,7,14.5S7.67,13,8.5,13z M19.78,22.61l-1.64-1.64 C18.09,20.98,18.05,21,18,21h-1c-0.55,0-1-0.45-1-1v-1H8v1c0,0.55-0.45,1-1,1H6c-0.55,0-1-0.45-1-1v-1.78C4.39,17.67,4,16.88,4,16 V6.83L1.39,4.22l1.41-1.41l18.38,18.38L19.78,22.61z M6,8.83V10h1.17L6,8.83z M14.17,17l-5-5H6v4c0,0.37,0.21,0.62,0.34,0.73 L6.63,17H14.17z M12,4c3.69,0,5.11,0.46,5.66,0.99H7.82l2,2H18V10h-5.17l2,2H18v3.17l1.81,1.81C19.92,16.67,20,16.35,20,16V6 c0-3.5-3.58-4-8-4C9.48,2,7.24,2.16,5.78,2.95l1.53,1.53C8.17,4.2,9.6,4,12,4z" />
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M5.78,2.95C7.24,2.16,9.48,2,12,2c4.42,0,8,0.5,8,4v10c0,0.35-0.08,0.67-0.19,0.98L13.83,11H18V6H8.83L5.78,2.95z M20.49,21.9c-0.39,0.39-1.02,0.39-1.41,0l-1.01-1.01C17.89,20.96,17.7,21,17.5,21c-0.83,0-1.5-0.68-1.5-1.5V19H8v0.5 C8,20.33,7.33,21,6.5,21S5,20.33,5,19.5v-1.28C4.39,17.67,4,16.88,4,16V6.83l-1.9-1.9c-0.39-0.39-0.39-1.02,0-1.41 c0.39-0.39,1.02-0.39,1.41,0l16.97,16.97C20.88,20.88,20.88,21.51,20.49,21.9z M9,15.5C9,14.67,8.33,14,7.5,14S6,14.67,6,15.5 C6,16.33,6.67,17,7.5,17S9,16.33,9,15.5z M8.17,11L6,8.83V11H8.17z" />
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M5.78,2.95C7.24,2.16,9.48,2,12,2c4.42,0,8,0.5,8,4v10c0,0.35-0.08,0.67-0.19,0.98L13.83,11H18V6H8.83L5.78,2.95z M19.78,22.61L18.17,21H16v-2H8v2H5v-2.78C4.39,17.67,4,16.88,4,16V6.83L1.39,4.22l1.41-1.41l18.38,18.38L19.78,22.61z M9,15.5 C9,14.67,8.33,14,7.5,14S6,14.67,6,15.5C6,16.33,6.67,17,7.5,17S9,16.33,9,15.5z M8.17,11L6,8.83V11H8.17z" />
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M8.5,13c0.83,0,1.5,0.67,1.5,1.5S9.33,16,8.5,16S7,15.33,7,14.5S7.67,13,8.5,13z M19.78,22.61l-1.64-1.64 C18.09,20.98,18.05,21,18,21h-1c-0.55,0-1-0.45-1-1v-1H8v1c0,0.55-0.45,1-1,1H6c-0.55,0-1-0.45-1-1v-1.78C4.39,17.67,4,16.88,4,16 V6.83L1.39,4.22l1.41-1.41l18.38,18.38L19.78,22.61z M6,8.83V10h1.17L6,8.83z M14.17,17l-5-5H6v4c0,0.37,0.21,0.62,0.34,0.73 L6.63,17H14.17z M12,4c3.69,0,5.11,0.46,5.66,0.99H7.82l2,2H18V10h-5.17l2,2H18v3.17l1.81,1.81C19.92,16.67,20,16.35,20,16V6 c0-3.5-3.58-4-8-4C9.48,2,7.24,2.16,5.78,2.95l1.53,1.53C8.17,4.2,9.6,4,12,4z" />
                </Icon>
            );
    }
}
