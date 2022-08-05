import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconDinnerDining(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <Path d="M2,19h20l-2,2H4L2,19z M5,6h1v1H5V6z M5,4h1v1H5V4z M9,4v1H7V4H9z M9,7H7V6h2V7z M6,15.23c-0.36,0.11-0.69,0.28-1,0.47V8h1 V15.23z M4,16.52C3.62,16.96,3.32,17.45,3.16,18h16.82c0.01-0.16,0.03-0.33,0.03-0.5c0-3.04-2.46-5.5-5.5-5.5 c-2.29,0-4.25,1.4-5.08,3.4C8.84,15.15,8.19,15,7.5,15c-0.17,0-0.33,0.02-0.5,0.04V8h2c1.03,0.06,1.9-0.96,2-2h10V5H11 c-0.1-1.05-0.97-1.97-2-2H3v1h1v1H3v1h1v1H3v1h1V16.52z" />
                    </G>
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" y="0" />
                    </G>
                    <G>
                        <G>
                            <Polygon points="2,19 4,21 20,21 22,19" />
                            <Path d="M3,18h16.97c0,0,0,0,0,0c0.29-3.26-2.28-6-5.48-6c-2.35,0-4.35,1.48-5.14,3.55C8.94,15.32,8.48,15.17,8,15.08V9h1.75 C10.99,9,12,7.99,12,6.75h9v-1.5h-9C12,4.01,10.99,3,9.75,3H3v1.5h1v0.75H3v1.5h1V7.5H3V9h1v7.39C3.56,16.85,3.22,17.39,3,18z M14.5,14c0.99,0,1.91,0.4,2.58,1.14c0.24,0.26,0.44,0.55,0.58,0.86h-6.32C11.92,14.79,13.15,14,14.5,14z M8,4.5h2v0.75H8V4.5z M8,6.75h2V7.5H8V6.75z M5.5,4.5h1v0.75h-1V4.5z M5.5,6.75h1V7.5h-1V6.75z M5.5,9h1v6.06c-0.35,0.06-0.68,0.17-1,0.3V9z" />
                        </G>
                    </G>
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" y="0" />
                    </G>
                    <G>
                        <G>
                            <Path d="M2.85,19.85l1,1C3.95,20.95,4.07,21,4.21,21h15.59c0.13,0,0.26-0.05,0.35-0.15l1-1c0.31-0.31,0.09-0.85-0.35-0.85H3.21 C2.76,19,2.54,19.54,2.85,19.85z" />
                            <Path d="M3,18l16.97,0c0,0,0,0,0,0c0.29-3.26-2.28-6-5.48-6c-2.35,0-4.35,1.48-5.14,3.55C8.94,15.32,8.48,15.17,8,15.08V9h1.75 C10.99,9,12,7.99,12,6.75v0h8.25C20.66,6.75,21,6.41,21,6s-0.34-0.75-0.75-0.75H12v0C12,4.01,10.99,3,9.75,3h-6 C3.34,3,3,3.34,3,3.75S3.34,4.5,3.75,4.5H4v0.75H3.75C3.34,5.25,3,5.59,3,6s0.34,0.75,0.75,0.75H4V7.5H3.75 C3.34,7.5,3,7.84,3,8.25S3.34,9,3.75,9H4v7.39C3.56,16.85,3.22,17.39,3,18z M8,4.5h2v0.75H8V4.5z M8,6.75h2V7.5H8V6.75z M5.5,4.5 h1v0.75h-1V4.5z M5.5,6.75h1V7.5h-1V6.75z M5.5,9h1v6.06c-0.35,0.06-0.68,0.17-1,0.3V9z" />
                        </G>
                    </G>
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" y="0" />
                    </G>
                    <G>
                        <G>
                            <Polygon points="2,19 4,21 20,21 22,19" />
                            <Path d="M3,18l16.97,0c0,0,0,0,0,0c0.29-3.26-2.28-6-5.48-6c-2.35,0-4.35,1.48-5.14,3.55C8.94,15.32,8.48,15.17,8,15.08V9h4V6.75 h9v-1.5h-9V3H3v1.5h1v0.75H3v1.5h1V7.5H3V9h1v7.39C3.56,16.85,3.22,17.39,3,18z M8,7.5V6.75h2V7.5H8z M10,5.25H8V4.5h2V5.25z M5.5,4.5h1v0.75h-1V4.5z M5.5,6.75h1V7.5h-1V6.75z M6.5,9v6.06c-0.35,0.06-0.68,0.17-1,0.3V9H6.5z" />
                        </G>
                    </G>
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" y="0" />
                    </G>
                    <G>
                        <G>
                            <Polygon points="2,19 4,21 20,21 22,19" />
                            <Path d="M3,18h16.97c0,0,0,0,0,0c0.29-3.26-2.28-6-5.48-6c-2.35,0-4.35,1.48-5.14,3.55C8.94,15.32,8.48,15.17,8,15.08V9h1.75 C10.99,9,12,7.99,12,6.75h9v-1.5h-9C12,4.01,10.99,3,9.75,3H3v1.5h1v0.75H3v1.5h1V7.5H3V9h1v7.39C3.56,16.85,3.22,17.39,3,18z M14.5,14c0.99,0,1.91,0.4,2.58,1.14c0.24,0.26,0.44,0.55,0.58,0.86h-6.32C11.92,14.79,13.15,14,14.5,14z M8,4.5h2v0.75H8V4.5z M8,6.75h2V7.5H8V6.75z M5.5,4.5h1v0.75h-1V4.5z M5.5,6.75h1V7.5h-1V6.75z M5.5,9h1v6.06c-0.35,0.06-0.68,0.17-1,0.3V9z" />
                        </G>
                    </G>
                </Icon>
            );
    }
}