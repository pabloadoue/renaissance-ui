import React from 'react';
import { Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconActionViewCarousel(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M2,7h4v10H2V7z M7,19h10V5H7V19z M18,7h4v10h-4V7z" />
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M2,7h4v10H2V7z M7,19h10V5H7V19z M9,7h6v10H9V7z M18,7h4v10h-4V7z" />
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M3,7h2c0.55,0,1,0.45,1,1v8c0,0.55-0.45,1-1,1H3c-0.55,0-1-0.45-1-1V8C2,7.45,2.45,7,3,7z M8,19h8c0.55,0,1-0.45,1-1V6 c0-0.55-0.45-1-1-1H8C7.45,5,7,5.45,7,6v12C7,18.55,7.45,19,8,19z M19,7h2c0.55,0,1,0.45,1,1v8c0,0.55-0.45,1-1,1h-2 c-0.55,0-1-0.45-1-1V8C18,7.45,18.45,7,19,7z" />
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M2,7h4v10H2V7z M7,19h10V5H7V19z M18,7h4v10h-4V7z" />
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M2,7h4v10H2V7z M7,19h10V5H7V19z M9,7h6v10H9V7z M18,7h4v10h-4V7z" />
                </Icon>
            );
    }
}
