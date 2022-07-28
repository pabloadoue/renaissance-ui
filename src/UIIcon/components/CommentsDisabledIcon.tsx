import React from 'react';
import { Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconCommentsDisabled(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M16.83,14H18v-2h-3.17l-1-1H18V9h-6.17l-1-1H18V6H8.83l-4-4H20c1.1,0,2,0.9,2,2v15.17L16.83,14z M2.1,2.1L0.69,3.51L2,4.83 V16c0,1.1,0.9,2,2,2h11.17l5.31,5.31l1.41-1.41L2.1,2.1z M6,9h0.17l2,2H6V9z M6,14v-2h3.17l2,2H6z" />
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M18.83,16H20V4H6.83l-2-2H20c1.1,0,2,0.9,2,2l0,15.17L18.83,16z M18,6H8.83l2,2H18V6z M18,9h-6.17l2,2H18V9z M18,14v-2 h-3.17l2,2H18z M21.9,21.9l-1.41,1.41L15.17,18H4c-1.1,0-2-0.9-2-2V4.83L0.69,3.51L2.1,2.1L21.9,21.9z M13.17,16l-2-2H6v-2h3.17 l-1-1H6V9h0.17L4,6.83V16H13.17z" />
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M1.39,2.81C1,3.2,1,3.83,1.39,4.22L2,4.83V16c0,1.1,0.9,2,2,2h11.17l4.61,4.61c0.39,0.39,1.02,0.39,1.41,0 c0.39-0.39,0.39-1.02,0-1.41L2.81,2.81C2.42,2.42,1.78,2.42,1.39,2.81z M6.38,9.21L8.17,11H7c-0.55,0-1-0.45-1-1 C6,9.68,6.15,9.4,6.38,9.21z M7,14c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1h2.17l2,2H7z M14.83,12l-1-1H17c0.55,0,1-0.45,1-1v0 c0-0.55-0.45-1-1-1h-5.17l-1-1H17c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H8.83l-4-4H20c1.1,0,2,0.9,2,2v15.17L16.83,14H17 c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H14.83z" />
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M16.83,14H18v-2h-3.17l-1-1H18V9h-6.17l-1-1H18V6H8.83l-4-4H22v17.17L16.83,14z M2.1,2.1L0.69,3.51L2,4.83V18h13.17 l5.31,5.31l1.41-1.41L2.1,2.1z M6,9h0.17l2,2H6V9z M6,14v-2h3.17l2,2H6z" />
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M18.83,16H20V4H6.83l-2-2H20c1.1,0,2,0.9,2,2l0,15.17L18.83,16z M18,6H8.83l2,2H18V6z M18,9h-6.17l2,2H18V9z M18,14v-2 h-3.17l2,2H18z M21.9,21.9l-1.41,1.41L15.17,18H4c-1.1,0-2-0.9-2-2V4.83L0.69,3.51L2.1,2.1L21.9,21.9z M13.17,16l-2-2H6v-2h3.17 l-1-1H6V9h0.17L4,6.83V16H13.17z" />
                </Icon>
            );
    }
}
