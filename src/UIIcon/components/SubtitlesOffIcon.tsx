import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconSubtitlesOff(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <Path d="M20,4H6.83l8,8H20v2h-3.17l4.93,4.93C21.91,18.65,22,18.34,22,18V6C22,4.9,21.1,4,20,4z" />
                            <Path d="M1.04,3.87l1.2,1.2C2.09,5.35,2,5.66,2,6v12c0,1.1,0.9,2,2,2h13.17l2.96,2.96l1.41-1.41L2.45,2.45L1.04,3.87z M8,12v2H4 v-2H8z M14,16.83V18H4v-2h9.17L14,16.83z" />
                        </G>
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
                            <Path d="M20,4H6.83l2,2H20v11.17l1.76,1.76C21.91,18.65,22,18.34,22,18V6C22,4.9,21.1,4,20,4z" />
                            <Polygon points="18,10 12.83,10 14.83,12 18,12" />
                            <Path d="M1.04,3.87l1.2,1.2C2.09,5.35,2,5.66,2,6v12c0,1.1,0.9,2,2,2h13.17l2.96,2.96l1.41-1.41L2.45,2.45L1.04,3.87z M4,6.83 L7.17,10H6v2h2v-1.17L11.17,14H6v2h7.17l2,2H4V6.83z" />
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
                        <G>
                            <Path d="M20,4H6.83l8,8H19c0.55,0,1,0.45,1,1c0,0.55-0.45,1-1,1h-2.17l4.93,4.93C21.91,18.65,22,18.34,22,18V6C22,4.9,21.1,4,20,4 z" />
                            <Path d="M20,20l-6-6l-1.71-1.71L12,12L3.16,3.16c-0.39-0.39-1.02-0.39-1.41,0c-0.39,0.39-0.39,1.02,0,1.41l0.49,0.49 C2.09,5.35,2,5.66,2,6v12c0,1.1,0.9,2,2,2h13.17l2.25,2.25c0.39,0.39,1.02,0.39,1.41,0c0.39-0.39,0.39-1.02,0-1.41L20,20z M8,13 c0,0.55-0.45,1-1,1H5c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1h2C7.55,12,8,12.45,8,13z M14,17c0,0.55-0.45,1-1,1H5 c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1h8c0.08,0,0.14,0.03,0.21,0.04l0.74,0.74C13.97,16.86,14,16.92,14,17z" />
                        </G>
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
                        <G>
                            <Polygon points="6.83,4 14.83,12 20,12 20,14 16.83,14 22,19.17 22,4" />
                            <Path d="M1.04,3.87L2,4.83V20h15.17l2.96,2.96l1.41-1.41L2.45,2.45L1.04,3.87z M4,12h4v2H4V12z M4,16h9.17L14,16.83V18H4V16z" />
                        </G>
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
                            <Path d="M20,4H6.83l2,2H20v11.17l1.76,1.76C21.91,18.65,22,18.34,22,18V6C22,4.9,21.1,4,20,4z" />
                            <Polygon points="18,10 12.83,10 14.83,12 18,12" />
                            <Path d="M1.04,3.87l1.2,1.2C2.09,5.35,2,5.66,2,6v12c0,1.1,0.9,2,2,2h13.17l2.96,2.96l1.41-1.41L2.45,2.45L1.04,3.87z M4,6.83 L7.17,10H6v2h2v-1.17L11.17,14H6v2h7.17l2,2H4V6.83z" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
