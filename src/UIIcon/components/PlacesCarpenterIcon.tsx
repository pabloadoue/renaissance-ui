import React from 'react';
import { Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconPlacesCarpenter(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M19.73,14.23L7,1.5L3.11,5.39l8.13,11.67c-0.78,0.78-0.78,2.05,0,2.83l1.41,1.41c0.78,0.78,2.05,0.78,2.83,0l4.24-4.24 C20.51,16.28,20.51,15.01,19.73,14.23z M14.07,19.88l-1.41-1.41l4.24-4.24l1.41,1.41L14.07,19.88z" />
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M19.73,14.23L7,1.5L3.11,5.39l8.13,11.67c-0.78,0.78-0.78,2.05,0,2.83l1.41,1.41c0.78,0.78,2.05,0.78,2.83,0l4.24-4.24 C20.51,16.28,20.51,15.01,19.73,14.23z M5.71,5.62L7,4.33l8.49,8.49l-2.81,2.81L5.71,5.62z M14.07,19.88l-1.41-1.41l4.24-4.24 l1.41,1.41L14.07,19.88z" />
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M19.73,14.23L7.71,2.21c-0.39-0.39-1.02-0.39-1.41,0L3.7,4.8C3.36,5.14,3.31,5.68,3.59,6.08l7.65,10.98 c-0.78,0.78-0.78,2.05,0,2.83l1.41,1.41c0.78,0.78,2.05,0.78,2.83,0l4.24-4.24C20.51,16.28,20.51,15.01,19.73,14.23z M14.07,19.88 l-1.41-1.41l4.24-4.24l1.41,1.41L14.07,19.88z" />
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M7,1.5L3.11,5.39l8.13,11.67l-1.41,1.41l4.24,4.24l7.07-7.07L7,1.5z M12.66,18.47l4.24-4.24l1.41,1.41l-4.24,4.24 L12.66,18.47z" />
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M19.73,14.23L7,1.5L3.11,5.39l8.13,11.67c-0.78,0.78-0.78,2.05,0,2.83l1.41,1.41c0.78,0.78,2.05,0.78,2.83,0l4.24-4.24 C20.51,16.28,20.51,15.01,19.73,14.23z M5.71,5.62L7,4.33l8.49,8.49l-2.81,2.81L5.71,5.62z M14.07,19.88l-1.41-1.41l4.24-4.24 l1.41,1.41L14.07,19.88z" />
                </Icon>
            );
    }
}
