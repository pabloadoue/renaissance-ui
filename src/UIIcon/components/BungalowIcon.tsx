import React from 'react';
import { Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconBungalow(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M12,3L4.2,15.5l1.7,1.06L7,14.8V21h4v-5h2v5h4v-6.21l1.1,1.77l1.7-1.06L12,3z M13,14h-2v-2h2V14z" />
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M13,14h-2v-2h2V14z M18.1,16.56L17,14.79V21H7v-6.2l-1.1,1.76L4.2,15.5L12,3l7.8,12.5L18.1,16.56z M15,11.59l-3-4.8l-3,4.8 V19h2v-3h2v3h2V11.59z" />
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect display="none" fill="none" height="24" width="24" />
                    <Path d="M12,16c0.55,0,1,0.45,1,1v4h3c0.55,0,1-0.45,1-1v-5.21l0.57,0.92c0.29,0.47,0.91,0.61,1.38,0.32 c0.47-0.29,0.61-0.91,0.32-1.38L12.85,4.36c-0.39-0.63-1.31-0.63-1.7,0L4.73,14.65c-0.29,0.47-0.15,1.09,0.32,1.38 c0.47,0.29,1.08,0.15,1.38-0.32L7,14.8V20c0,0.55,0.45,1,1,1h3v-4C11,16.45,11.45,16,12,16z M13,13c0,0.55-0.45,1-1,1s-1-0.45-1-1 s0.45-1,1-1S13,12.45,13,13z" />
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M12,3L4.2,15.5l1.7,1.06L7,14.8V21h4v-5h2v5h4v-6.21l1.1,1.77l1.7-1.06L12,3z M13,14h-2v-2h2V14z" />
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M13,14h-2v-2h2V14z M18.1,16.56L17,14.79V21H7v-6.2l-1.1,1.76L4.2,15.5L12,3l7.8,12.5L18.1,16.56z M15,11.59l-3-4.8l-3,4.8 V19h2v-3h2v3h2V11.59z" />
                </Icon>
            );
    }
}
