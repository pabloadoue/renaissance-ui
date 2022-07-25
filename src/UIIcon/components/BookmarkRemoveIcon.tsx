import React from 'react';
import { Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconBookmarkRemove(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M21,7h-6V5h6V7z M19,10.9c-0.32,0.07-0.66,0.1-1,0.1c-2.76,0-5-2.24-5-5c0-1.13,0.37-2.16,1-3L7,3C5.9,3,5,3.9,5,5v16l7-3 l7,3V10.9z" />
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M17,11v6.97l-5-2.14l-5,2.14V5h6V3H7C5.9,3,5,3.9,5,5v16l7-3l7,3V11H17z M21,7h-6V5h6V7z" />
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M21,6c0,0.55-0.45,1-1,1h-4c-0.55,0-1-0.45-1-1s0.45-1,1-1h4C20.55,5,21,5.45,21,6z M19,10.9c-0.32,0.07-0.66,0.1-1,0.1 c-2.76,0-5-2.24-5-5c0-1.13,0.37-2.16,1-3L7,3C5.9,3,5,3.9,5,5v14.48c0,0.72,0.73,1.2,1.39,0.92L12,18l5.61,2.4 c0.66,0.28,1.39-0.2,1.39-0.92V10.9z" />
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M21,7h-6V5h6V7z M19,10.9c-0.64,0.13-1.32,0.14-2.02,0c-1.91-0.38-3.47-1.92-3.87-3.83C12.79,5.54,13.18,4.1,14,3L5,3v18 l7-3l7,3V10.9z" />
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M17,11v6.97l-5-2.14l-5,2.14V5h6V3H7C5.9,3,5,3.9,5,5v16l7-3l7,3V11H17z M21,7h-6V5h6V7z" />
                </Icon>
            );
    }
}
