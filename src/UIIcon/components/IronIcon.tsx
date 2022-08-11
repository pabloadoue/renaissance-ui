import React from 'react';
import { Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconIron(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M21,6c-1.66,0-3,1.34-3,3v4c0,0.55-0.45,1-1,1v-4c0-1.66-1.34-3-3-3h-4c-1.66,0-3,1.34-3,3h2c0-0.55,0.45-1,1-1h4 c0.55,0,1,0.45,1,1v1H6c-2.21,0-4,1.79-4,4v3h15v-2c1.66,0,3-1.34,3-3V9c0-0.55,0.45-1,1-1h1V6H21z" />
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M21,6c-1.66,0-3,1.34-3,3v4c0,0.55-0.45,1-1,1v-4c0-1.66-1.34-3-3-3h-4c-1.66,0-3,1.34-3,3h2c0-0.55,0.45-1,1-1h4 c0.55,0,1,0.45,1,1v1H6c-2.21,0-4,1.79-4,4v3h15v-2c1.66,0,3-1.34,3-3V9c0-0.55,0.45-1,1-1h1V6H21z M15,16H4v-1c0-1.1,0.9-2,2-2h9 V16z" />
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M8.27,10c0.34,0,0.68-0.16,0.84-0.47C9.28,9.22,9.62,9,10,9h4c0.55,0,1,0.45,1,1v1H6c-2.21,0-4,1.79-4,4v2 c0,0.55,0.45,1,1,1h13c0.55,0,1-0.45,1-1v-1c1.66,0,3-1.34,3-3V9c0-0.55,0.45-1,1-1h0c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1h0 c-1.66,0-3,1.34-3,3v4c0,0.55-0.45,1-1,1v-4c0-1.66-1.34-3-3-3h-4C8.87,7,7.89,7.62,7.37,8.55C7.01,9.2,7.53,10,8.27,10z" />
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M18,6v8h-1V7H7v3h2V9h6v2H6c-2.21,0-4,1.79-4,4v3h15v-2h3V8h2V6H18z" />
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M21,6c-1.66,0-3,1.34-3,3v4c0,0.55-0.45,1-1,1v-4c0-1.66-1.34-3-3-3h-4c-1.66,0-3,1.34-3,3h2c0-0.55,0.45-1,1-1h4 c0.55,0,1,0.45,1,1v1H6c-2.21,0-4,1.79-4,4v3h15v-2c1.66,0,3-1.34,3-3V9c0-0.55,0.45-1,1-1h1V6H21z M15,16H4v-1c0-1.1,0.9-2,2-2h9 V16z" />
                </Icon>
            );
    }
}
