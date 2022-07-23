import React from 'react';
import { Path } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconEditorBubbleChart(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0z" fill="none" />
                    <circle cx="7.2" cy="14.4" r="3.2" />
                    <circle cx="14.8" cy="18" r="2" />
                    <circle cx="15.2" cy="8.8" r="4.8" />
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0z" fill="none" />
                    <Path d="M7 10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm8.01-1c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM16.5 3C13.47 3 11 5.47 11 8.5s2.47 5.5 5.5 5.5S22 11.53 22 8.5 19.53 3 16.5 3zm0 9c-1.93 0-3.5-1.57-3.5-3.5S14.57 5 16.5 5 20 6.57 20 8.5 18.43 12 16.5 12z" />
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0z" fill="none" />
                    <circle cx="7.2" cy="14.4" r="3.2" />
                    <circle cx="14.8" cy="18" r="2" />
                    <circle cx="15.2" cy="8.8" r="4.8" />
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <circle cx="7.2" cy="14.4" r="3.2" />
                    <circle cx="14.8" cy="18" r="2" />
                    <circle cx="15.2" cy="8.8" r="4.8" />
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0z" fill="none" />
                    <Path d="M7 10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm8.01-1c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM16.5 3C13.47 3 11 5.47 11 8.5s2.47 5.5 5.5 5.5S22 11.53 22 8.5 19.53 3 16.5 3zm0 9c-1.93 0-3.5-1.57-3.5-3.5S14.57 5 16.5 5 20 6.57 20 8.5 18.43 12 16.5 12z" />
                </Icon>
            );
    }
}
