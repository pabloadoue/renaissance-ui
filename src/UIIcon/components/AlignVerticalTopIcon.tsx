import React from 'react';
import { Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconAlignVerticalTop(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M22,2v2H2V2H22z M7,22h3V6H7V22z M14,16h3V6h-3V16z" />
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M22,2v2H2V2H22z M7,22h3V6H7V22z M14,16h3V6h-3V16z" />
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M22,3L22,3c0,0.55-0.45,1-1,1H3C2.45,4,2,3.55,2,3v0c0-0.55,0.45-1,1-1h18C21.55,2,22,2.45,22,3z M8.5,22L8.5,22 c0.83,0,1.5-0.67,1.5-1.5v-13C10,6.67,9.33,6,8.5,6h0C7.67,6,7,6.67,7,7.5v13C7,21.33,7.67,22,8.5,22z M15.5,16L15.5,16 c0.83,0,1.5-0.67,1.5-1.5v-7C17,6.67,16.33,6,15.5,6h0C14.67,6,14,6.67,14,7.5v7C14,15.33,14.67,16,15.5,16z" />
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M22,2v2H2V2H22z M7,22h3V6H7V22z M14,16h3V6h-3V16z" />
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M22,2v2H2V2H22z M7,22h3V6H7V22z M14,16h3V6h-3V16z" />
                </Icon>
            );
    }
}
