import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconNoBackpack(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" y="0" />
                    <Path d="M21.19,21.19L2.81,2.81L1.39,4.22l2.76,2.76C4.06,7.31,4,7.64,4,8v12c0,1.1,0.9,2,2,2h12c0.34,0,0.65-0.09,0.93-0.24 l0.85,0.85L21.19,21.19z M6,14v-2h3.17l2,2H6z M14.83,12L6.98,4.15c0.01,0,0.01-0.01,0.02-0.01V2h3v2h4V2h3v2.14 c1.72,0.45,3,2,3,3.86v9.17l-2-2V12H14.83z" />
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" y="0" />
                    <Path d="M6.98,4.15c0.01,0,0.01-0.01,0.02-0.01V2h3v2h4V2h3v2.14c1.72,0.45,3,2,3,3.86v9.17l-2-2V8c0-1.1-0.9-2-2-2H8.83L6.98,4.15z M14.83,12l1.67,1.67V12H14.83z M19.78,22.61l-0.85-0.85C18.65,21.91,18.34,22,18,22H6c-1.1,0-2-0.9-2-2V8 c0-0.36,0.06-0.69,0.15-1.02L1.39,4.22l1.41-1.41l18.38,18.38L19.78,22.61z M17.17,20l-6-6H7.5v-2h1.67L6,8.83V20H17.17z" />
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" y="0" />
                    <G>
                        <G>
                            <Path d="M6.98,4.15c0.01,0,0.01-0.01,0.02-0.01V3.5C7,2.67,7.67,2,8.5,2S10,2.67,10,3.5V4h4V3.5C14,2.67,14.67,2,15.5,2 S17,2.67,17,3.5v0.64c1.72,0.45,3,2,3,3.86v9.17l-2.03-2.03C17.98,15.09,18,15.05,18,15v-2c0-0.55-0.45-1-1-1h-2.17L6.98,4.15z M20.49,21.9c-0.39,0.39-1.02,0.39-1.41,0l-0.14-0.14C18.65,21.91,18.34,22,18,22H6c-1.1,0-2-0.9-2-2V8 c0-0.36,0.06-0.69,0.15-1.02L2.1,4.93c-0.39-0.39-0.39-1.02,0-1.41c0.39-0.39,1.02-0.39,1.41,0l16.97,16.97 C20.88,20.88,20.88,21.51,20.49,21.9z M11.17,14l-2-2H7c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1H11.17z" />
                        </G>
                    </G>
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" y="0" />
                    <G>
                        <G>
                            <Path d="M21.19,21.19L2.81,2.81L1.39,4.22l2.76,2.76C4.06,7.31,4,7.64,4,8v14h15.17l0.61,0.61L21.19,21.19z M6,14v-2h3.17l2,2H6z M6.98,4.15c0.01,0,0.01-0.01,0.02-0.01V2h3v2h4V2h3v2.14c1.72,0.45,3,2,3,3.86v9.17l-2-2V12h-3.17L6.98,4.15z" />
                        </G>
                    </G>
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" y="0" />
                    <Path d="M6.98,4.15c0.01,0,0.01-0.01,0.02-0.01V2h3v2h4V2h3v2.14c1.72,0.45,3,2,3,3.86v9.17l-2-2V8c0-1.1-0.9-2-2-2H8.83L6.98,4.15z M14.83,12l1.67,1.67V12H14.83z M19.78,22.61l-0.85-0.85C18.65,21.91,18.34,22,18,22H6c-1.1,0-2-0.9-2-2V8 c0-0.36,0.06-0.69,0.15-1.02L1.39,4.22l1.41-1.41l18.38,18.38L19.78,22.61z M17.17,20l-6-6H7.5v-2h1.67L6,8.83V20H17.17z" />
                </Icon>
            );
    }
}