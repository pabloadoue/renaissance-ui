import React from 'react';
import { Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconGite(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M18,6H9V4H7v2H6l-4,4v9h20v-9L18,6z M4,12h10v5H4V12z M20,17h-4v-6.17l2-2v0l2,2V17z" />
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M18,6H9V4H7v2H6l-4,4v9h20v-9L18,6z M4,12h10v5H4V12z M20,17h-4v-6.17l2-2v0l2,2V17z" />
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M21.41,9.41l-2.83-2.83C18.21,6.21,17.7,6,17.17,6H9V5c0-0.55-0.45-1-1-1S7,4.45,7,5v1H6.83C6.3,6,5.79,6.21,5.41,6.59 L2.59,9.41C2.21,9.79,2,10.3,2,10.83V17c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2v-6.17C22,10.3,21.79,9.79,21.41,9.41z M14,17H4v-5h10 V17z M20,17h-4v-6.17l2-2l2,2V17z" />
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M18,6H9V4H7v2H6l-4,4v9h20v-9L18,6z M4,12h10v5H4V12z M20,17h-4v-6.17l2-2v0l2,2V17z" />
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M18,6H9V4H7v2H6l-4,4v9h20v-9L18,6z M4,12h10v5H4V12z M20,17h-4v-6.17l2-2v0l2,2V17z" />
                </Icon>
            );
    }
}
