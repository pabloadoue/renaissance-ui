import React from 'react';
import { Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconSwitchRight(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect
                        fill="none"
                        height="24"
                        transform="matrix(-1 -1.224647e-16 1.224647e-16 -1 24 24)"
                        width="24"
                    />
                    <Path d="M15.5,15.38V8.62L18.88,12L15.5,15.38 M14,19l7-7l-7-7V19L14,19z M10,19V5l-7,7L10,19z" />
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect
                        fill="none"
                        height="24"
                        transform="matrix(-1 -1.224647e-16 1.224647e-16 -1 24 24)"
                        width="24"
                    />
                    <Path d="M15.5,15.38V8.62L18.88,12L15.5,15.38 M14,19l7-7l-7-7V19L14,19z M10,19V5l-7,7L10,19z" />
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect
                        fill="none"
                        height="24"
                        transform="matrix(-1 -1.224647e-16 1.224647e-16 -1 24 24)"
                        width="24"
                    />
                    <Path d="M15.5,15.38V8.62L18.88,12L15.5,15.38 M20.29,12.71c0.39-0.39,0.39-1.02,0-1.41l-4.59-4.59C15.08,6.08,14,6.52,14,7.41v9.17 c0,0.89,1.08,1.34,1.71,0.71L20.29,12.71z M10,16.59V7.41c0-0.89-1.08-1.34-1.71-0.71l-4.59,4.59c-0.39,0.39-0.39,1.02,0,1.41 l4.59,4.59C8.92,17.92,10,17.48,10,16.59z" />
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect
                        fill="none"
                        height="24"
                        transform="matrix(-1 -1.224647e-16 1.224647e-16 -1 24 24)"
                        width="24"
                    />
                    <Path d="M15.5,15.38V8.62L18.88,12L15.5,15.38 M14,19l7-7l-7-7V19L14,19z M10,19V5l-7,7L10,19z" />
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect
                        fill="none"
                        height="24"
                        transform="matrix(-1 -1.224647e-16 1.224647e-16 -1 24 24)"
                        width="24"
                    />
                    <Path d="M15.5,15.38V8.62L18.88,12L15.5,15.38 M14,19l7-7l-7-7V19L14,19z M10,19V5l-7,7L10,19z" />
                </Icon>
            );
    }
}
