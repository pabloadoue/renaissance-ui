import React from 'react';
import { Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconHotelClass(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M8.58,10H1l6.17,4.41L4.83,22L11,17.31L17.18,22l-2.35-7.59L21,10h-7.58L11,2L8.58,10z M21.36,22l-1.86-6.01L23.68,13h-3.44 l-3.08,2.2l1.46,4.72L21.36,22z M17,8l-1.82-6l-1.04,3.45L14.91,8H17z" />
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M11,8.89L11.94,12h2.82l-2.27,1.62l0.93,3.01L11,14.79l-2.42,1.84l0.93-3.01L7.24,12h2.82L11,8.89z M8.58,10H1l6.17,4.41 L4.83,22L11,17.31L17.18,22l-2.35-7.59L21,10h-7.58L11,2L8.58,10z M21.36,22l-1.86-6.01L23.68,13h-3.44l-3.08,2.2l1.46,4.72 L21.36,22z M17,8l-1.82-6l-1.04,3.45L14.91,8H17z" />
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M8.58,10H2.56c-0.49,0-0.69,0.62-0.29,0.91l4.91,3.51l-1.89,6.1c-0.14,0.46,0.39,0.84,0.78,0.55L11,17.31l4.93,3.75 c0.39,0.29,0.92-0.08,0.78-0.55l-1.89-6.1l4.91-3.51c0.4-0.28,0.2-0.91-0.29-0.91h-6.02l-1.95-6.42c-0.14-0.47-0.81-0.47-0.96,0 L8.58,10z M20.9,20.51l-1.4-4.52l2.91-2.08c0.4-0.28,0.2-0.91-0.29-0.91h-1.88l-3.08,2.2l1.46,4.72l1.5,1.14 C20.51,21.35,21.04,20.97,20.9,20.51z M17,8l-1.34-4.42c-0.14-0.47-0.81-0.47-0.96,0l-0.57,1.87L14.91,8H17z" />
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M8.58,10H1l6.17,4.41L4.83,22L11,17.31L17.18,22l-2.35-7.59L21,10h-7.58L11,2L8.58,10z M21.36,22l-1.86-6.01L23.68,13h-3.44 l-3.08,2.2l1.46,4.72L21.36,22z M17,8l-1.82-6l-1.04,3.45L14.91,8H17z" />
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M11,8.89L11.94,12h2.82l-2.27,1.62l0.93,3.01L11,14.79l-2.42,1.84l0.93-3.01L7.24,12h2.82L11,8.89z M8.58,10H1l6.17,4.41 L4.83,22L11,17.31L17.18,22l-2.35-7.59L21,10h-7.58L11,2L8.58,10z M21.36,22l-1.86-6.01L23.68,13h-3.44l-3.08,2.2l1.46,4.72 L21.36,22z M17,8l-1.82-6l-1.04,3.45L14.91,8H17z" />
                </Icon>
            );
    }
}
