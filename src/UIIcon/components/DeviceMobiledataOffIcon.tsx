import React from 'react';
import { G, Path, Polygon } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconDeviceMobiledataOff(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Path d="M0,0h24v24H0V0z" fill="none" />
                    </G>
                    <G>
                        <G>
                            <Polygon points="16,7 19,7 15,3 11,7 14,7 14,11.17 16,13.17" />
                            <Polygon points="2.81,2.81 1.39,4.22 8,10.83 8,17.01 5,17.02 9,21 13,17 10,17.01 10,12.83 19.78,22.61 21.19,21.19" />
                        </G>
                    </G>
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Path d="M0,0h24v24H0V0z" fill="none" />
                    </G>
                    <G>
                        <G>
                            <Polygon points="16,6.82 17.59,8.41 19,7 15,3 11,7 12.41,8.41 14,6.82 14,11.17 16,13.17" />
                            <Polygon points="1.39,4.22 8,10.83 8,17.18 6.41,15.59 5,17 9,21 13,17 11.59,15.59 10,17.18 10,12.83 19.78,22.61 21.19,21.19 2.81,2.81" />
                        </G>
                    </G>
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Path d="M0,0h24v24H0V0z" fill="none" />
                    </G>
                    <G>
                        <G>
                            <Path d="M16,7h1.79c0.45,0,0.67-0.54,0.35-0.85l-2.79-2.79c-0.2-0.2-0.51-0.2-0.71,0l-2.79,2.79C11.54,6.46,11.76,7,12.21,7H14 v4.17l2,2V7z" />
                            <Path d="M2.1,3.51L2.1,3.51c-0.39,0.39-0.39,1.02,0,1.41l5.9,5.9v6.18l-1.79,0c-0.45,0-0.67,0.54-0.35,0.85l2.79,2.78 c0.2,0.19,0.51,0.19,0.71,0l2.79-2.79c0.32-0.32,0.09-0.85-0.35-0.85l-1.79,0v-4.18l9.07,9.07c0.39,0.39,1.02,0.39,1.41,0l0,0 c0.39-0.39,0.39-1.02,0-1.41L3.51,3.51C3.12,3.12,2.49,3.12,2.1,3.51z" />
                        </G>
                    </G>
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Path d="M0,0h24v24H0V0z" fill="none" />
                    </G>
                    <G>
                        <G>
                            <Polygon points="16,7 19,7 15,3 11,7 14,7 14,11.17 16,13.17" />
                            <Polygon points="2.81,2.81 1.39,4.22 8,10.83 8,17.01 5,17.02 9,21 13,17 10,17.01 10,12.83 19.78,22.61 21.19,21.19" />
                        </G>
                    </G>
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Path d="M0,0h24v24H0V0z" fill="none" />
                    </G>
                    <G>
                        <G>
                            <Polygon points="16,6.82 17.59,8.41 19,7 15,3 11,7 12.41,8.41 14,6.82 14,11.17 16,13.17" />
                            <Polygon points="1.39,4.22 8,10.83 8,17.18 6.41,15.59 5,17 9,21 13,17 11.59,15.59 10,17.18 10,12.83 19.78,22.61 21.19,21.19 2.81,2.81" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
