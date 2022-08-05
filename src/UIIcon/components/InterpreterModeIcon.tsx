import React from 'react';
import { Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconInterpreterMode(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M20.5,16.5c-0.83,0-1.5-0.67-1.5-1.5v-2.5c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5V15C22,15.83,21.33,16.5,20.5,16.5z M20,20h1c0,0,0-1.54,0-1.54c1.69-0.24,3-1.7,3-3.46h-1c0,1.38-1.12,2.5-2.5,2.5S18,16.38,18,15h-1c0,1.76,1.31,3.22,3,3.46 C20,18.46,20,20,20,20z M9,12c-2.21,0-4-1.79-4-4c0-2.21,1.79-4,4-4c0.47,0,0.92,0.08,1.34,0.23C9.5,5.26,9,6.57,9,8 c0,1.43,0.5,2.74,1.34,3.77C9.92,11.92,9.47,12,9,12z M7.11,13.13C5.79,14.05,5,15.57,5,17.22V20H1v-2.78 c0-1.12,0.61-2.15,1.61-2.66C3.85,13.92,5.37,13.37,7.11,13.13z M11,8c0-2.21,1.79-4,4-4s4,1.79,4,4c0,2.21-1.79,4-4,4 S11,10.21,11,8z M18.32,20c-1.67-0.81-2.82-2.52-2.82-4.5c0-0.89,0.23-1.73,0.64-2.45C15.77,13.02,15.39,13,15,13 c-2.53,0-4.71,0.7-6.39,1.56C7.61,15.07,7,16.1,7,17.22V20L18.32,20z" />
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M20.5,16.5c-0.83,0-1.5-0.67-1.5-1.5v-2.5c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5V15C22,15.83,21.33,16.5,20.5,16.5z M20,20h1c0,0,0-1.54,0-1.54c1.69-0.24,3-1.7,3-3.46h-1c0,1.38-1.12,2.5-2.5,2.5S18,16.38,18,15h-1c0,1.76,1.31,3.22,3,3.46 C20,18.46,20,20,20,20z M9,12c-2.21,0-4-1.79-4-4c0-2.21,1.79-4,4-4c0.47,0,0.92,0.08,1.34,0.23C9.5,5.26,9,6.57,9,8 c0,1.43,0.5,2.74,1.34,3.77C9.92,11.92,9.47,12,9,12z M7.11,13.13C5.79,14.05,5,15.57,5,17.22V20H1v-2.78 c0-1.12,0.61-2.15,1.61-2.66C3.85,13.92,5.37,13.37,7.11,13.13z M11,8c0-2.21,1.79-4,4-4s4,1.79,4,4c0,2.21-1.79,4-4,4 S11,10.21,11,8z M13,8c0,1.1,0.9,2,2,2s2-0.9,2-2c0-1.1-0.9-2-2-2S13,6.9,13,8z M15,15c-2.37,0-4.29,0.73-5.48,1.34 C9.2,16.5,9,16.84,9,17.22V18l7.17,0c0.5,0.86,1.25,1.56,2.15,2L7,20v-2.78c0-1.12,0.61-2.15,1.61-2.66C10.29,13.7,12.47,13,15,13 c0.39,0,0.77,0.02,1.14,0.05c-0.33,0.59-0.55,1.26-0.62,1.96C15.35,15,15.18,15,15,15z" />
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M20.5,16.5c-0.83,0-1.5-0.67-1.5-1.5v-2.5c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5V15C22,15.83,21.33,16.5,20.5,16.5z M20.5,20c0.28,0,0.5-0.22,0.5-0.5c0-0.45,0-1.04,0-1.04c1.51-0.22,2.71-1.4,2.95-2.89C24,15.27,23.76,15,23.46,15 c-0.24,0-0.45,0.17-0.49,0.41c-0.2,1.18-1.23,2.09-2.47,2.09s-2.27-0.9-2.47-2.09C17.99,15.17,17.78,15,17.54,15 c-0.3,0-0.54,0.27-0.5,0.57c0.25,1.5,1.45,2.68,2.95,2.89c0,0,0,0.59,0,1.04C20,19.78,20.22,20,20.5,20z M9,12c-2.21,0-4-1.79-4-4 c0-2.21,1.79-4,4-4c0.47,0,0.92,0.08,1.34,0.23C9.5,5.26,9,6.57,9,8c0,1.43,0.5,2.74,1.34,3.77C9.92,11.92,9.47,12,9,12z M7.11,13.13C5.79,14.05,5,15.57,5,17.22V20H1v-2.78c0-1.12,0.61-2.15,1.61-2.66C3.85,13.92,5.37,13.37,7.11,13.13z M11,8 c0-2.21,1.79-4,4-4s4,1.79,4,4c0,2.21-1.79,4-4,4S11,10.21,11,8z M18.32,20c-1.67-0.81-2.82-2.52-2.82-4.5 c0-0.89,0.23-1.73,0.64-2.45C15.77,13.02,15.39,13,15,13c-2.53,0-4.71,0.7-6.39,1.56C7.61,15.07,7,16.1,7,17.22V20L18.32,20z" />
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M20.5,16.5c-0.83,0-1.5-0.67-1.5-1.5v-2.5c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5V15C22,15.83,21.33,16.5,20.5,16.5z M20,20h1c0,0,0-1.54,0-1.54c1.69-0.24,3-1.7,3-3.46h-1c0,1.38-1.12,2.5-2.5,2.5S18,16.38,18,15h-1c0,1.76,1.31,3.22,3,3.46 C20,18.46,20,20,20,20z M9,12c-2.21,0-4-1.79-4-4c0-2.21,1.79-4,4-4c0.47,0,0.92,0.08,1.34,0.23C9.5,5.26,9,6.57,9,8 c0,1.43,0.5,2.74,1.34,3.77C9.92,11.92,9.47,12,9,12z M7.11,13.13C5.79,14.05,5,15.57,5,17.22V20H1v-2.78 c0-1.12,0.61-2.15,1.61-2.66C3.85,13.92,5.37,13.37,7.11,13.13z M11,8c0-2.21,1.79-4,4-4s4,1.79,4,4c0,2.21-1.79,4-4,4 S11,10.21,11,8z M18.32,20c-1.67-0.81-2.82-2.52-2.82-4.5c0-0.89,0.23-1.73,0.64-2.45C15.77,13.02,15.39,13,15,13 c-2.53,0-4.71,0.7-6.39,1.56C7.61,15.07,7,16.1,7,17.22V20L18.32,20z" />
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M20.5,16.5c-0.83,0-1.5-0.67-1.5-1.5v-2.5c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5V15C22,15.83,21.33,16.5,20.5,16.5z M20,20h1c0,0,0-1.54,0-1.54c1.69-0.24,3-1.7,3-3.46h-1c0,1.38-1.12,2.5-2.5,2.5S18,16.38,18,15h-1c0,1.76,1.31,3.22,3,3.46 C20,18.46,20,20,20,20z M9,12c-2.21,0-4-1.79-4-4c0-2.21,1.79-4,4-4c0.47,0,0.92,0.08,1.34,0.23C9.5,5.26,9,6.57,9,8 c0,1.43,0.5,2.74,1.34,3.77C9.92,11.92,9.47,12,9,12z M7.11,13.13C5.79,14.05,5,15.57,5,17.22V20H1v-2.78 c0-1.12,0.61-2.15,1.61-2.66C3.85,13.92,5.37,13.37,7.11,13.13z M11,8c0-2.21,1.79-4,4-4s4,1.79,4,4c0,2.21-1.79,4-4,4 S11,10.21,11,8z M13,8c0,1.1,0.9,2,2,2s2-0.9,2-2c0-1.1-0.9-2-2-2S13,6.9,13,8z M15,15c-2.37,0-4.29,0.73-5.48,1.34 C9.2,16.5,9,16.84,9,17.22V18l7.17,0c0.5,0.86,1.25,1.56,2.15,2L7,20v-2.78c0-1.12,0.61-2.15,1.61-2.66C10.29,13.7,12.47,13,15,13 c0.39,0,0.77,0.02,1.14,0.05c-0.33,0.59-0.55,1.26-0.62,1.96C15.35,15,15.18,15,15,15z" />
                </Icon>
            );
    }
}