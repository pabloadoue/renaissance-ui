import React from 'react';
import { Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconMapsAirlineStops(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M18.21,9.21C15.93,10.78,13.45,13.3,13,17h2v2H9v-2h2c-0.5-4.5-4.37-8-9-8V7c4.39,0,8.22,2.55,10,6.3 c1.13-2.43,2.99-4.25,4.78-5.52L14,5h7v7L18.21,9.21z" />
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M19,8.7c-2.46,1.5-5.5,4.17-6,8.3h2v2H9v-2h2c-0.5-4.5-4.37-8-9-8V7c4.39,0,8.22,2.55,10,6.3c1.38-2.97,3.86-5.03,5.96-6.31 L14,7V5h7v7h-2V8.7z" />
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M15,18c0,0.55-0.45,1-1,1h-4c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1h1c-0.47-4.21-3.89-7.55-8.12-7.96 C2.37,8.99,2,8.56,2,8.05c0-0.59,0.52-1.06,1.11-1C7.03,7.44,10.37,9.87,12,13.3c1.13-2.43,2.99-4.25,4.78-5.52l-1.92-1.92 C14.54,5.54,14.76,5,15.21,5h5.29C20.78,5,21,5.22,21,5.5v5.29c0,0.45-0.54,0.67-0.85,0.35l-1.94-1.94C15.93,10.78,13.45,13.3,13,17 h1C14.55,17,15,17.45,15,18z" />
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M18.21,9.21C15.93,10.78,13.45,13.3,13,17h2v2H9v-2h2c-0.5-4.5-4.37-8-9-8V7c4.39,0,8.22,2.55,10,6.3 c1.13-2.43,2.99-4.25,4.78-5.52L14,5h7v7L18.21,9.21z" />
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M19,8.7c-2.46,1.5-5.5,4.17-6,8.3h2v2H9v-2h2c-0.5-4.5-4.37-8-9-8V7c4.39,0,8.22,2.55,10,6.3c1.38-2.97,3.86-5.03,5.96-6.31 L14,7V5h7v7h-2V8.7z" />
                </Icon>
            );
    }
}
