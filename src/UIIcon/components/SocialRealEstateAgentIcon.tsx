import React from 'react';
import { Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconSocialRealEstateAgent(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M1,22h4V11H1V22z M20,17h-7l-2.09-0.73l0.33-0.94L13,16h2.82c0.65,0,1.18-0.53,1.18-1.18l0,0c0-0.49-0.31-0.93-0.77-1.11 L8.97,11H7v9.02L14,22l8-3l0,0C21.99,17.9,21.11,17,20,17z M14,1.5l-7,5V9h2l8.14,3.26C18.26,12.71,19,13.79,19,15h2V6.5L14,1.5z M13.5,10h-1V9h1V10z M13.5,8h-1V7h1V8z M15.5,10h-1V9h1V10z M15.5,8h-1V7h1V8z" />
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M21,6.5V14h-2V7.5L14,4L9,7.5V9H7V6.5l7-5L21,6.5z M15.5,7h-1v1h1V7z M13.5,7h-1v1h1V7z M15.5,9h-1v1h1V9z M13.5,9h-1v1h1V9 z M19,16h-2c0-1.2-0.75-2.28-1.87-2.7L8.97,11H1v11h6v-1.44l7,1.94l8-2.5v-1C22,17.34,20.66,16,19,16z M3,20v-7h2v7H3z M13.97,20.41 L7,18.48V13h1.61l5.82,2.17C14.77,15.3,15,15.63,15,16c0,0-1.99-0.05-2.3-0.15l-2.38-0.79l-0.63,1.9l2.38,0.79 c0.51,0.17,1.04,0.26,1.58,0.26H19c0.39,0,0.74,0.23,0.9,0.56L13.97,20.41z" />
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M3,22c1.1,0,2-0.9,2-2v-7c0-1.1-0.9-2-2-2s-2,0.9-2,2v7C1,21.1,1.9,22,3,22z M11.37,16.43l1.47,0.51 c0.11,0.04,0.22,0.06,0.33,0.06h6.83c1.11,0,2,0.89,2.01,2l0,0l-7.39,2.77c-0.4,0.15-0.84,0.17-1.25,0.05L7,20.02V11H8.6 c0.24,0,0.48,0.04,0.7,0.13l6.93,2.59c0.46,0.17,0.77,0.61,0.77,1.11v0c0,0.65-0.53,1.18-1.18,1.18h-2.63 c-0.12,0-0.24-0.02-0.36-0.07l-1.12-0.43c-0.26-0.1-0.55,0.04-0.64,0.3C10.98,16.06,11.11,16.34,11.37,16.43z M20.16,5.9l-5-3.57 c-0.7-0.5-1.63-0.5-2.32,0l-5,3.57C7.31,6.28,7,6.88,7,7.53V9h1.61c0.25,0,0.51,0.05,0.74,0.14l7.79,3.11 C18.26,12.71,19,13.79,19,15h2V7.53C21,6.88,20.69,6.28,20.16,5.9z M13,10c-0.28,0-0.5-0.22-0.5-0.5C12.5,9.22,12.72,9,13,9 s0.5,0.22,0.5,0.5C13.5,9.78,13.28,10,13,10z M13,8c-0.28,0-0.5-0.22-0.5-0.5C12.5,7.22,12.72,7,13,7s0.5,0.22,0.5,0.5 C13.5,7.78,13.28,8,13,8z M15,10c-0.28,0-0.5-0.22-0.5-0.5C14.5,9.22,14.72,9,15,9s0.5,0.22,0.5,0.5C15.5,9.78,15.28,10,15,10z M15,8c-0.28,0-0.5-0.22-0.5-0.5C14.5,7.22,14.72,7,15,7s0.5,0.22,0.5,0.5C15.5,7.78,15.28,8,15,8z" />
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M1,22h4V11H1V22z M14,1.5l-7,5V9h2l10,4v2h2V6.5L14,1.5z M13.5,10h-1V9h1V10z M13.5,8h-1V7h1V8z M15.5,10h-1V9h1V10z M15.5,8h-1V7h1V8z M22,19l-8,3l-7-1.98V11h1.97L17,14l0,2h-4l-1.76-0.68l-0.33,0.94L13,17h9V19z" />
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M21,6.5V14h-2V7.5L14,4L9,7.5V9H7V6.5l7-5L21,6.5z M15.5,7h-1v1h1V7z M13.5,7h-1v1h1V7z M15.5,9h-1v1h1V9z M13.5,9h-1v1h1V9 z M19,16h-2c0-1.2-0.75-2.28-1.87-2.7L8.97,11H1v11h6v-1.44l7,1.94l8-2.5v-1C22,17.34,20.66,16,19,16z M3,20v-7h2v7H3z M13.97,20.41 L7,18.48V13h1.61l5.82,2.17C14.77,15.3,15,15.63,15,16c0,0-1.99-0.05-2.3-0.15l-2.38-0.79l-0.63,1.9l2.38,0.79 c0.51,0.17,1.04,0.26,1.58,0.26H19c0.39,0,0.74,0.23,0.9,0.56L13.97,20.41z" />
                </Icon>
            );
    }
}
