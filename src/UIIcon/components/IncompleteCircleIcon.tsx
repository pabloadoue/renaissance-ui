import React from 'react';
import { Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconIncompleteCircle(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M22,12c0,5.52-4.48,10-10,10S2,17.52,2,12c0-2.76,1.12-5.26,2.93-7.07L12,12V2C17.52,2,22,6.48,22,12z" />
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M22,12c0,5.52-4.48,10-10,10S2,17.52,2,12c0-2.76,1.12-5.26,2.93-7.07L12,12V2C17.52,2,22,6.48,22,12z" />
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M22,12c0,5.52-4.48,10-10,10S2,17.52,2,12c0-2.76,1.12-5.26,2.93-7.07L12,12V2C17.52,2,22,6.48,22,12z" />
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M22,12c0,5.52-4.48,10-10,10S2,17.52,2,12c0-2.76,1.12-5.26,2.93-7.07L12,12V2C17.52,2,22,6.48,22,12z" />
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M22,12c0,5.52-4.48,10-10,10S2,17.52,2,12c0-2.76,1.12-5.26,2.93-7.07L12,12V2C17.52,2,22,6.48,22,12z" />
                </Icon>
            );
    }
}
