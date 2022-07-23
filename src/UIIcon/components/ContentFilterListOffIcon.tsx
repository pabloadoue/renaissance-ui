import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconContentFilterListOff(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <Path d="M10.83,8H21V6H8.83L10.83,8z M15.83,13H18v-2h-4.17L15.83,13z M14,16.83V18h-4v-2h3.17l-3-3H6v-2h2.17l-3-3H3V6h0.17 L1.39,4.22l1.41-1.41l18.38,18.38l-1.41,1.41L14,16.83z" />
                    </G>
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <Path d="M10.83,8H21V6H8.83L10.83,8z M15.83,13H18v-2h-4.17L15.83,13z M14,16.83V18h-4v-2h3.17l-3-3H6v-2h2.17l-3-3H3V6h0.17 L1.39,4.22l1.41-1.41l18.38,18.38l-1.41,1.41L14,16.83z" />
                    </G>
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <Path d="M21,7c0-0.55-0.45-1-1-1H8.83l2,2H20C20.55,8,21,7.55,21,7z M18,12c0-0.55-0.45-1-1-1h-3.17l2,2H17 C17.55,13,18,12.55,18,12z M13.98,16.81C13.99,16.87,14,16.94,14,17c0,0.55-0.45,1-1,1h-2c-0.55,0-1-0.45-1-1s0.45-1,1-1h2 c0.06,0,0.13,0.01,0.19,0.02L10.17,13H7c-0.55,0-1-0.45-1-1s0.45-1,1-1h1.17l-3-3H4C3.45,8,3,7.55,3,7c0-0.32,0.15-0.6,0.38-0.79 L2.1,4.93c-0.39-0.39-0.39-1.02,0-1.41s1.02-0.39,1.41,0l16.97,16.97c0.39,0.39,0.39,1.02,0,1.41s-1.02,0.39-1.41,0L13.98,16.81z" />
                    </G>
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <Path d="M10.83,8H21V6H8.83L10.83,8z M15.83,13H18v-2h-4.17L15.83,13z M14,16.83V18h-4v-2h3.17l-3-3H6v-2h2.17l-3-3H3V6h0.17 L1.39,4.22l1.41-1.41l18.38,18.38l-1.41,1.41L14,16.83z" />
                    </G>
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <Path d="M10.83,8H21V6H8.83L10.83,8z M15.83,13H18v-2h-4.17L15.83,13z M14,16.83V18h-4v-2h3.17l-3-3H6v-2h2.17l-3-3H3V6h0.17 L1.39,4.22l1.41-1.41l18.38,18.38l-1.41,1.41L14,16.83z" />
                    </G>
                </Icon>
            );
    }
}
