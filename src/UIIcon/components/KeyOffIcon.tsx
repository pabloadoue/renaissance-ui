import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconKeyOff(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <Path d="M16.91,14.09L17,14l2,2l4-4.04L21,10h-8.17L16.91,14.09z M3.98,6.81C2.2,7.85,1,9.79,1,12c0,3.31,2.69,6,6,6 c2.21,0,4.15-1.2,5.18-2.99l7.59,7.59l1.41-1.41L2.81,2.81L1.39,4.22L3.98,6.81z M9.91,12.74C9.58,14.03,8.4,15,7,15 c-1.65,0-3-1.35-3-3c0-1.4,0.97-2.58,2.26-2.91L9.91,12.74z" />
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
                        <G>
                            <Path d="M10.7,13.53l-1.71-1.71C9,11.88,9,11.94,9,12c0,1.1-0.9,2-2,2s-2-0.9-2-2s0.9-2,2-2c0.06,0,0.12,0,0.18,0.01L5.47,8.3 C4.02,8.9,3,10.33,3,12c0,2.21,1.79,4,4,4C8.67,16,10.1,14.98,10.7,13.53z M12.19,15.02C11.15,16.8,9.21,18,7,18 c-3.31,0-6-2.69-6-6c0-2.21,1.2-4.15,2.98-5.19L1.39,4.22l1.41-1.41l18.38,18.38l-1.41,1.41L12.19,15.02z M16.26,13.43l1.24-0.93 l1.81,1.36L21.17,12l-1-1l-6.34,0l-2-2L21,9l0,0l3,3l-4.5,4.5l-0.69-0.51L16.26,13.43z" />
                        </G>
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
                        <Path d="M12.83,10l4.09,4.09L17,14l1.29,1.29c0.39,0.39,1.03,0.39,1.42,0l2.59-2.61c0.39-0.39,0.39-1.03-0.01-1.42l-0.99-0.97 C21.1,10.1,20.85,10,20.59,10H12.83z M19.07,21.9c0.39,0.39,1.02,0.39,1.41,0s0.39-1.02,0-1.41L3.51,3.51 c-0.39-0.39-1.02-0.39-1.41,0c-0.39,0.39-0.39,1.02,0,1.41l1.88,1.88C2.2,7.85,1,9.79,1,12c0,3.31,2.69,6,6,6 c2.21,0,4.15-1.2,5.18-2.99L19.07,21.9z M9.91,12.74C9.58,14.03,8.4,15,7,15c-1.65,0-3-1.35-3-3c0-1.4,0.97-2.58,2.26-2.91 L9.91,12.74z" />
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
                        <Path d="M16.91,14.09L17,14l2,2l4-4.04L21,10h-8.17L16.91,14.09z M3.98,6.81C2.2,7.85,1,9.79,1,12c0,3.31,2.69,6,6,6 c2.21,0,4.15-1.2,5.18-2.99l7.59,7.59l1.41-1.41L2.81,2.81L1.39,4.22L3.98,6.81z M9.91,12.74C9.58,14.03,8.4,15,7,15 c-1.65,0-3-1.35-3-3c0-1.4,0.97-2.58,2.26-2.91L9.91,12.74z" />
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
                        <G>
                            <Path d="M10.7,13.53l-1.71-1.71C9,11.88,9,11.94,9,12c0,1.1-0.9,2-2,2s-2-0.9-2-2s0.9-2,2-2c0.06,0,0.12,0,0.18,0.01L5.47,8.3 C4.02,8.9,3,10.33,3,12c0,2.21,1.79,4,4,4C8.67,16,10.1,14.98,10.7,13.53z M12.19,15.02C11.15,16.8,9.21,18,7,18 c-3.31,0-6-2.69-6-6c0-2.21,1.2-4.15,2.98-5.19L1.39,4.22l1.41-1.41l18.38,18.38l-1.41,1.41L12.19,15.02z M16.26,13.43l1.24-0.93 l1.81,1.36L21.17,12l-1-1l-6.34,0l-2-2L21,9l0,0l3,3l-4.5,4.5l-0.69-0.51L16.26,13.43z" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
