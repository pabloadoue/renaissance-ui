import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconPlacesDoNotStep(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                        <Path d="M1.39,4.22l7.9,7.9c0.18,0.2,0.18,0.5-0.01,0.7c-0.1,0.1-0.23,0.15-0.35,0.15s-0.26-0.05-0.35-0.15L6.87,11.1 c-0.11,0.4-0.26,0.78-0.45,1.12l1.4,1.4c0.2,0.2,0.2,0.51,0,0.71c-0.1,0.1-0.23,0.15-0.35,0.15s-0.26-0.05-0.35-0.15l-1.27-1.27 c-0.24,0.29-0.5,0.56-0.77,0.8l1.28,1.28c0.2,0.2,0.2,0.51,0,0.71C6.26,15.95,6.13,16,6,16s-0.26-0.05-0.35-0.15l-1.38-1.38 c-0.69,0.46-1.39,0.79-1.97,1.02C1.52,15.8,1,16.53,1,17.37V20h9.5l3.33-3.33l5.94,5.94l1.41-1.41L2.81,2.81L1.39,4.22z M18.51,15.68l-1.41-1.41l4.48-4.48L23,11.2L18.51,15.68z M20.88,9.08l-4.48,4.48L9.3,6.47L13.8,2L20.88,9.08z" />
                    </G>
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                        <Path d="M18.51,15.68l-1.41-1.41l4.48-4.48L23,11.2L18.51,15.68z M14.98,12.15 M14.98,12.15l3.07-3.07L13.8,4.82l-3.08,3.07 L9.3,6.47L13.8,2l0,0l7.08,7.08l-4.48,4.48L14.98,12.15z M21.18,21.2l-1.41,1.41l-5.94-5.94L10.5,20H1v-2.63 c0-0.84,0.52-1.57,1.3-1.88c0.58-0.23,1.28-0.56,1.97-1.02l1.38,1.38C5.74,15.95,5.87,16,6,16s0.26-0.05,0.36-0.15 c0.2-0.2,0.2-0.51,0-0.71l-1.28-1.28c0.27-0.24,0.53-0.51,0.77-0.8l1.27,1.27c0.09,0.1,0.23,0.15,0.35,0.15s0.25-0.05,0.35-0.15 c0.2-0.2,0.2-0.51,0-0.71l-1.4-1.4c0.19-0.34,0.34-0.72,0.45-1.12l1.71,1.72c0.09,0.1,0.23,0.15,0.35,0.15s0.25-0.05,0.35-0.15 c0.19-0.2,0.19-0.5,0.01-0.7l-7.9-7.9l1.42-1.41L21.18,21.2z M12.42,15.26l-1.67-1.68L7.42,16.9c-0.78,0.78-2.05,0.78-2.83-0.01 L4.4,16.72l-0.47,0.24c-0.29,0.14-0.59,0.27-0.89,0.39L3.03,18h6.64L12.42,15.26z" />
                    </G>
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                        <Path d="M2.1,3.51c-0.39,0.39-0.39,1.02,0,1.41l7.19,7.19c0.18,0.2,0.18,0.5-0.01,0.7c-0.1,0.1-0.23,0.15-0.35,0.15 s-0.26-0.05-0.35-0.15L6.87,11.1c-0.11,0.4-0.26,0.78-0.45,1.12l1.4,1.4c0.2,0.2,0.2,0.51,0,0.71c-0.1,0.1-0.23,0.15-0.35,0.15 s-0.26-0.05-0.35-0.15l-1.27-1.27c-0.24,0.29-0.5,0.56-0.77,0.8l1.28,1.28c0.2,0.2,0.2,0.51,0,0.71C6.26,15.95,6.13,16,6,16 s-0.26-0.05-0.35-0.15l-1.38-1.38c-0.71,0.47-1.43,0.81-2.02,1.04C1.49,15.81,1,16.55,1,17.37L1,18c0,1.1,0.9,2,2,2h6.67 c0.53,0,1.04-0.21,1.41-0.59l2.74-2.74l5.23,5.23c0.39,0.39,1.02,0.39,1.41,0l0,0c0.39-0.39,0.39-1.02,0-1.41L3.51,3.51 C3.12,3.12,2.49,3.12,2.1,3.51L2.1,3.51z M18.51,15.68l-1.41-1.41l4.48-4.48l0,0c0.78,0.78,0.78,2.05,0,2.83L18.51,15.68z M20.88,9.08l-4.48,4.48L9.3,6.47l3.09-3.07c0.78-0.78,2.04-0.77,2.82,0L20.88,9.08z" />
                    </G>
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                        <Path d="M1.39,4.22l8.24,8.24l-0.69,0.72L6.87,11.1c-0.11,0.4-0.26,0.78-0.45,1.12l1.75,1.75l-0.69,0.72l-1.63-1.63 c-0.24,0.29-0.5,0.56-0.77,0.8l1.63,1.63l-0.7,0.72l-1.74-1.74C2.83,15.43,1.34,15.82,1,15.92L1,20h9.5l3.33-3.33l5.94,5.94 l1.41-1.41L2.81,2.81L1.39,4.22z M18.51,15.68l-1.41-1.41l4.48-4.48L23,11.2L18.51,15.68z M20.88,9.08l-4.48,4.48L9.3,6.47L13.8,2 L20.88,9.08z" />
                    </G>
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                        <Path d="M18.51,15.68l-1.41-1.41l4.48-4.48L23,11.2L18.51,15.68z M14.98,12.15 M14.98,12.15l3.07-3.07L13.8,4.82l-3.08,3.07 L9.3,6.47L13.8,2l0,0l7.08,7.08l-4.48,4.48L14.98,12.15z M21.18,21.2l-1.41,1.41l-5.94-5.94L10.5,20H1v-2.63 c0-0.84,0.52-1.57,1.3-1.88c0.58-0.23,1.28-0.56,1.97-1.02l1.38,1.38C5.74,15.95,5.87,16,6,16s0.26-0.05,0.36-0.15 c0.2-0.2,0.2-0.51,0-0.71l-1.28-1.28c0.27-0.24,0.53-0.51,0.77-0.8l1.27,1.27c0.09,0.1,0.23,0.15,0.35,0.15s0.25-0.05,0.35-0.15 c0.2-0.2,0.2-0.51,0-0.71l-1.4-1.4c0.19-0.34,0.34-0.72,0.45-1.12l1.71,1.72c0.09,0.1,0.23,0.15,0.35,0.15s0.25-0.05,0.35-0.15 c0.19-0.2,0.19-0.5,0.01-0.7l-7.9-7.9l1.42-1.41L21.18,21.2z M12.42,15.26l-1.67-1.68L7.42,16.9c-0.78,0.78-2.05,0.78-2.83-0.01 L4.4,16.72l-0.47,0.24c-0.29,0.14-0.59,0.27-0.89,0.39L3.03,18h6.64L12.42,15.26z" />
                    </G>
                </Icon>
            );
    }
}
