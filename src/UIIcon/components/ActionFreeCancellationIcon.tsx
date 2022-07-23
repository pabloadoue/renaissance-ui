import React from 'react';
import { Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconActionFreeCancellation(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M11.21,20H5V10h14v4.38l2-2V6c0-1.1-0.9-2-2-2h-1V2h-2v2H8V2H6v2H5C3.89,4,3.01,4.9,3.01,6L3,20c0,1.1,0.89,2,2,2h8.21 L11.21,20z M16.54,22.5L13,18.96l1.41-1.41l2.12,2.12l4.24-4.24l1.41,1.41L16.54,22.5z M10.41,14L12,15.59L10.59,17L9,15.41L7.41,17 L6,15.59L7.59,14L6,12.41L7.41,11L9,12.59L10.59,11L12,12.41L10.41,14z" />
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M11.21,20H5V10h14v4.38l2-2V6c0-1.1-0.9-2-2-2h-1V2h-2v2H8V2H6v2H5C3.89,4,3.01,4.9,3.01,6L3,20c0,1.1,0.89,2,2,2h8.21 L11.21,20z M5,6h14v2H5V6z M16.54,22.5L13,18.96l1.41-1.41l2.12,2.12l4.24-4.24l1.41,1.41L16.54,22.5z M10.41,14L12,15.59L10.59,17 L9,15.41L7.41,17L6,15.59L7.59,14L6,12.41L7.41,11L9,12.59L10.59,11L12,12.41L10.41,14z" />
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M10.79,20H5V10h14v2.96c0,0.89,1.08,1.34,1.71,0.71l0,0c0.19-0.19,0.29-0.44,0.29-0.71V6c0-1.1-0.9-2-2-2h-1V3 c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v1H8V3c0-0.55-0.45-1-1-1h0C6.45,2,6,2.45,6,3v1H5C3.89,4,3.01,4.9,3.01,6L3,20 c0,1.1,0.89,2,2,2h5.79c0.89,0,1.34-1.08,0.71-1.71l0,0C11.31,20.11,11.06,20,10.79,20z M13.71,18.26c0.39-0.39,1.02-0.39,1.41,0 l1.41,1.41l3.54-3.54c0.39-0.39,1.02-0.39,1.41,0c0.39,0.39,0.39,1.02,0,1.41l-4.24,4.24c-0.39,0.39-1.02,0.39-1.41,0l-2.12-2.12 C13.32,19.28,13.32,18.65,13.71,18.26z M11.29,16.29c-0.39,0.39-1.02,0.39-1.41,0L9,15.41l-0.88,0.88c-0.39,0.39-1.02,0.39-1.41,0 s-0.39-1.02,0-1.41L7.59,14l-0.88-0.88c-0.39-0.39-0.39-1.02,0-1.41s1.02-0.39,1.41,0L9,12.59l0.88-0.88c0.39-0.39,1.02-0.39,1.41,0 s0.39,1.02,0,1.41L10.41,14l0.88,0.88C11.68,15.27,11.68,15.9,11.29,16.29z" />
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M11.21,20H5V10h14v4.38l2-2V4h-3V2h-2v2H8V2H6v2H3v18h10.21L11.21,20z M16.54,22.5L13,18.96l1.41-1.41l2.12,2.12l4.24-4.24 l1.41,1.41L16.54,22.5z M10.41,14L12,15.59L10.59,17L9,15.41L7.41,17L6,15.59L7.59,14L6,12.41L7.41,11L9,12.59L10.59,11L12,12.41 L10.41,14z" />
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M11.21,20H5V10h14v4.38l2-2V6c0-1.1-0.9-2-2-2h-1V2h-2v2H8V2H6v2H5C3.89,4,3.01,4.9,3.01,6L3,20c0,1.1,0.89,2,2,2h8.21 L11.21,20z M5,6h14v2H5V6z M16.54,22.5L13,18.96l1.41-1.41l2.12,2.12l4.24-4.24l1.41,1.41L16.54,22.5z M10.41,14L12,15.59L10.59,17 L9,15.41L7.41,17L6,15.59L7.59,14L6,12.41L7.41,11L9,12.59L10.59,11L12,12.41L10.41,14z" />
                </Icon>
            );
    }
}
