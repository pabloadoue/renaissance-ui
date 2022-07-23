import React from 'react';
import { Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconHardwareVideogameAssetOff(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" y="0" />
                    <Path d="M21.19,21.19L2.81,2.81L1.39,4.22L3.3,6.13C2.54,6.41,2,7.15,2,8v8c0,1.1,0.9,2,2,2h11.17l4.61,4.61L21.19,21.19z M9,13v2H7 v-2H5v-2h2V9.83L10.17,13H9z M20.7,17.87C21.46,17.59,22,16.85,22,16V8c0-1.1-0.9-2-2-2H8.83L20.7,17.87z M17.5,9 c0.83,0,1.5,0.67,1.5,1.5S18.33,12,17.5,12S16,11.33,16,10.5S16.67,9,17.5,9z" />
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" y="0" />
                    <Path d="M17.5,9c0.83,0,1.5,0.67,1.5,1.5S18.33,12,17.5,12S16,11.33,16,10.5S16.67,9,17.5,9z M10.83,8H20v8h-1.17l1.87,1.87 C21.45,17.58,22,16.85,22,16V8c0-1.1-0.9-2-2-2H8.83L10.83,8z M19.78,22.61L15.17,18H4c-1.1,0-2-0.9-2-2V8 c0-0.85,0.55-1.58,1.3-1.87L1.39,4.22l1.41-1.41l18.38,18.38L19.78,22.61z M13.17,16l-3-3H9v2H7v-2H5v-2h2V9.83L5.17,8H4v8H13.17z" />
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" y="0" />
                    <Path d="M20.7,17.87C21.46,17.59,22,16.85,22,16V8c0-1.1-0.9-2-2-2H8.83L20.7,17.87z M17.5,9c0.83,0,1.5,0.67,1.5,1.5 S18.33,12,17.5,12S16,11.33,16,10.5S16.67,9,17.5,9z M20.49,20.49L3.51,3.51c-0.39-0.39-1.02-0.39-1.41,0 c-0.39,0.39-0.39,1.02,0,1.41l1.2,1.2C2.54,6.41,2,7.15,2,8v8c0,1.1,0.9,2,2,2h11.17l3.9,3.9c0.39,0.39,1.02,0.39,1.41,0h0 C20.88,21.51,20.88,20.88,20.49,20.49z M10,13H9v1c0,0.55-0.45,1-1,1s-1-0.45-1-1v-1H6c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1h1v-1 c0-0.05,0.01-0.11,0.01-0.16l3.14,3.14C10.11,12.99,10.05,13,10,13z" />
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" y="0" />
                    <Path d="M20.83,18H22V6H8.83L20.83,18z M17.5,9c0.83,0,1.5,0.67,1.5,1.5S18.33,12,17.5,12S16,11.33,16,10.5S16.67,9,17.5,9z M21.19,21.19L2.81,2.81L1.39,4.22L3.17,6H2v12h13.17l4.61,4.61L21.19,21.19z M9,13v2H7v-2H5v-2h2V9.83L10.17,13H9z" />
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" y="0" />
                    <Path d="M17.5,9c0.83,0,1.5,0.67,1.5,1.5S18.33,12,17.5,12S16,11.33,16,10.5S16.67,9,17.5,9z M10.83,8H20v8h-1.17l1.87,1.87 C21.45,17.58,22,16.85,22,16V8c0-1.1-0.9-2-2-2H8.83L10.83,8z M19.78,22.61L15.17,18H4c-1.1,0-2-0.9-2-2V8 c0-0.85,0.55-1.58,1.3-1.87L1.39,4.22l1.41-1.41l18.38,18.38L19.78,22.61z M13.17,16l-3-3H9v2H7v-2H5v-2h2V9.83L5.17,8H4v8H13.17z" />
                </Icon>
            );
    }
}
