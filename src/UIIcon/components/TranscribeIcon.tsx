import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconTranscribe(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <Path d="M17.93,16l1.63-1.63c-2.77-3.02-2.77-7.56,0-10.74L17.93,2C14.03,5.89,14.02,11.95,17.93,16z M22.92,10.95 c-0.84-1.18-0.84-2.71,0-3.89l-1.68-1.69c-2.02,2.02-2.02,5.07,0,7.27L22.92,10.95z M9,13c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4 S5,6.79,5,9C5,11.21,6.79,13,9,13z M15.39,15.56C13.71,14.7,11.53,14,9,14c-2.53,0-4.71,0.7-6.39,1.56C1.61,16.07,1,17.1,1,18.22 V21h16v-2.78C17,17.1,16.39,16.07,15.39,15.56z" />
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
                        <Path d="M9,13c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4S5,6.79,5,9C5,11.21,6.79,13,9,13z M9,7c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2 s-2-0.9-2-2C7,7.9,7.9,7,9,7z M15.39,15.56C13.71,14.7,11.53,14,9,14c-2.53,0-4.71,0.7-6.39,1.56C1.61,16.07,1,17.1,1,18.22V21h16 v-2.78C17,17.1,16.39,16.07,15.39,15.56z M15,19H3v-0.78c0-0.38,0.2-0.72,0.52-0.88C4.71,16.73,6.63,16,9,16 c2.37,0,4.29,0.73,5.48,1.34C14.8,17.5,15,17.84,15,18.22V19z M17.93,16l1.63-1.63c-2.77-3.02-2.77-7.56,0-10.74L17.93,2 C14.03,5.89,14.02,11.95,17.93,16z M22.92,10.95c-0.84-1.18-0.84-2.71,0-3.89l-1.68-1.69c-2.02,2.02-2.02,5.07,0,7.27L22.92,10.95z" />
                    </G>
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <Path d="M22.54,10.28c-0.34-0.82-0.34-1.72,0-2.54c0.19-0.45,0.1-0.96-0.24-1.3l-0.1-0.1c-0.56-0.56-1.51-0.44-1.88,0.26 c-0.8,1.48-0.79,3.24,0.03,4.79c0.37,0.69,1.31,0.83,1.86,0.27l0.1-0.1C22.65,11.23,22.73,10.72,22.54,10.28z M18.82,15.11 L18.82,15.11c0.4-0.4,0.46-1.02,0.13-1.48c-1.97-2.73-1.96-6.39,0.01-9.23c0.32-0.47,0.26-1.1-0.14-1.5l0,0 c-0.5-0.5-1.34-0.46-1.78,0.1c-2.73,3.54-2.73,8.36,0.02,12C17.49,15.56,18.33,15.61,18.82,15.11z M9,13c2.21,0,4-1.79,4-4 c0-2.21-1.79-4-4-4S5,6.79,5,9C5,11.21,6.79,13,9,13z M15.39,15.56C13.71,14.7,11.53,14,9,14c-2.53,0-4.71,0.7-6.39,1.56 C1.61,16.07,1,17.1,1,18.22L1,20c0,0.55,0.45,1,1,1h14c0.55,0,1-0.45,1-1l0-1.78C17,17.1,16.39,16.07,15.39,15.56z" />
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
                        <Path d="M17.93,16l1.63-1.63c-2.77-3.02-2.77-7.56,0-10.74L17.93,2C14.03,5.89,14.02,11.95,17.93,16z M22.92,10.95 c-0.84-1.18-0.84-2.71,0-3.89l-1.68-1.69c-2.02,2.02-2.02,5.07,0,7.27L22.92,10.95z M9,13c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4 S5,6.79,5,9C5,11.21,6.79,13,9,13z M15.39,15.56C13.71,14.7,11.53,14,9,14c-2.53,0-4.71,0.7-6.39,1.56C1.61,16.07,1,17.1,1,18.22 V21h16v-2.78C17,17.1,16.39,16.07,15.39,15.56z" />
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
                        <Path d="M9,13c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4S5,6.79,5,9C5,11.21,6.79,13,9,13z M9,7c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2 s-2-0.9-2-2C7,7.9,7.9,7,9,7z M15.39,15.56C13.71,14.7,11.53,14,9,14c-2.53,0-4.71,0.7-6.39,1.56C1.61,16.07,1,17.1,1,18.22V21h16 v-2.78C17,17.1,16.39,16.07,15.39,15.56z M15,19H3v-0.78c0-0.38,0.2-0.72,0.52-0.88C4.71,16.73,6.63,16,9,16 c2.37,0,4.29,0.73,5.48,1.34C14.8,17.5,15,17.84,15,18.22V19z M17.93,16l1.63-1.63c-2.77-3.02-2.77-7.56,0-10.74L17.93,2 C14.03,5.89,14.02,11.95,17.93,16z M22.92,10.95c-0.84-1.18-0.84-2.71,0-3.89l-1.68-1.69c-2.02,2.02-2.02,5.07,0,7.27L22.92,10.95z" />
                    </G>
                </Icon>
            );
    }
}
