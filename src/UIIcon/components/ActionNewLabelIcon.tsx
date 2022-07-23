import React from 'react';
import { Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconActionNewLabel(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M21,12l-4.37,6.16C16.26,18.68,15.65,19,15,19h-3l0-6H9v-3H3V7c0-1.1,0.9-2,2-2h10c0.65,0,1.26,0.31,1.63,0.84L21,12z M10,15H7v-3H5v3H2v2h3v3h2v-3h3V15z" />
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M21,12l-4.37,6.16C16.26,18.68,15.65,19,15,19h-3l0-2h3l3.55-5L15,7H5v3H3V7c0-1.1,0.9-2,2-2h10c0.65,0,1.26,0.31,1.63,0.84 L21,12z M10,15H7v-3H5v3H2v2h3v3h2v-3h3V15z" />
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M20.18,13.16l-3.55,5C16.25,18.69,15.65,19,15,19h-3l0-2l0-1c0-1.66-1.34-3-3-3h0v0c0-1.66-1.34-3-3-3H3V7c0-1.1,0.9-2,2-2 h10c0.65,0,1.26,0.31,1.63,0.84l3.55,5C20.67,11.54,20.67,12.46,20.18,13.16z M10,16c0-0.55-0.45-1-1-1H7v-2c0-0.55-0.45-1-1-1 c-0.55,0-1,0.45-1,1v2H3c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1h2v2c0,0.55,0.45,1,1,1c0.55,0,1-0.45,1-1v-2h2 C9.55,17,10,16.55,10,16z" />
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M21,12l-4.97,7H12l0-2l0-4H9v-3H3V5h13.03L21,12z M10,15H7v-3H5v3H2v2h3v3h2v-3h3V15z" />
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M21,12l-4.37,6.16C16.26,18.68,15.65,19,15,19h-3l0-2h3l3.55-5L15,7H5v3H3V7c0-1.1,0.9-2,2-2h10c0.65,0,1.26,0.31,1.63,0.84 L21,12z M10,15H7v-3H5v3H2v2h3v3h2v-3h3V15z" />
                </Icon>
            );
    }
}
