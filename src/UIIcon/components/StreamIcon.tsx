import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconStream(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0z" fill="none" />
                    <circle cx="20" cy="12" r="2" />
                    <circle cx="4" cy="12" r="2" />
                    <circle cx="12" cy="20" r="2" />
                    <Path d="M10.05 8.59L6.03 4.55h-.01l-.31-.32-1.42 1.41 4.02 4.05.01-.01.31.32zm3.893.027l4.405-4.392L19.76 5.64l-4.405 4.393zM10.01 15.36l-1.42-1.41-4.03 4.01-.32.33 1.41 1.41 4.03-4.02zm9.75 2.94l-3.99-4.01-.36-.35L14 15.35l3.99 4.01.35.35z" />
                    <circle cx="12" cy="4" r="2" />
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
                            <circle cx="20" cy="12" r="2" />
                            <circle cx="4" cy="12" r="2" />
                            <circle cx="12" cy="20" r="2" />
                            <Rect
                                height="2"
                                transform="matrix(0.7081 -0.7061 0.7061 0.7081 -0.1146 13.9802)"
                                width="6.22"
                                x="13.74"
                                y="6.13"
                            />
                            <Polygon points="8.32,9.68 8.63,10 10.05,8.59 6.03,4.55 6.02,4.55 5.71,4.23 4.29,5.64 8.31,9.69" />
                            <Polygon points="15.41,13.94 14,15.35 17.99,19.36 18.34,19.71 19.76,18.3 15.77,14.29" />
                            <Polygon points="8.59,13.95 4.56,17.96 4.24,18.29 5.65,19.7 9.68,15.68 10.01,15.36" />
                            <circle cx="12" cy="4" r="2" />
                        </G>
                    </G>
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <circle cx="20" cy="12" r="2" />
                            <circle cx="4" cy="12" r="2" />
                            <circle cx="12" cy="20" r="2" />
                            <Path d="M7.89,14.65l-2.94,2.93c-0.39,0.39-0.39,1.02,0,1.41s1.02,0.39,1.41,0l2.94-2.93c0.39-0.38,0.39-1.02,0-1.41 C8.91,14.26,8.28,14.26,7.89,14.65z" />
                            <Path d="M6.41,4.94C6.02,4.55,5.39,4.55,5,4.94C4.61,5.33,4.61,5.96,5,6.35l2.93,2.94c0.39,0.39,1.02,0.39,1.42,0 C9.73,8.9,9.73,8.27,9.34,7.88L6.41,4.94z" />
                            <Path d="M16.12,14.65c-0.39-0.39-1.02-0.39-1.42,0c-0.39,0.39-0.39,1.02,0,1.41L17.64,19c0.39,0.39,1.02,0.39,1.41,0 s0.39-1.02,0-1.41L16.12,14.65z" />
                            <Path d="M16.06,9.33l2.99-2.98c0.39-0.4,0.39-1.03,0-1.42c-0.39-0.39-1.02-0.39-1.41,0l-2.99,2.98c-0.39,0.39-0.39,1.02,0,1.42 C15.04,9.72,15.67,9.72,16.06,9.33z" />
                            <circle cx="12" cy="4" r="2" />
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
                            <circle cx="20" cy="12" r="2" />
                            <circle cx="4" cy="12" r="2" />
                            <circle cx="12" cy="20" r="2" />
                            <Rect
                                height="2"
                                transform="matrix(0.7081 -0.7061 0.7061 0.7081 -0.1146 13.9802)"
                                width="6.22"
                                x="13.74"
                                y="6.13"
                            />
                            <Polygon points="8.32,9.68 8.63,10 10.05,8.59 6.03,4.55 6.02,4.55 5.71,4.23 4.29,5.64 8.31,9.69" />
                            <Polygon points="15.41,13.94 14,15.35 17.99,19.36 18.34,19.71 19.76,18.3 15.77,14.29" />
                            <Polygon points="8.59,13.95 4.56,17.96 4.24,18.29 5.65,19.7 9.68,15.68 10.01,15.36" />
                            <circle cx="12" cy="4" r="2" />
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
                            <circle cx="20" cy="12" r="2" />
                            <circle cx="4" cy="12" r="2" />
                            <circle cx="12" cy="20" r="2" />
                            <Rect
                                height="2"
                                transform="matrix(0.7081 -0.7061 0.7061 0.7081 -0.1146 13.9802)"
                                width="6.22"
                                x="13.74"
                                y="6.13"
                            />
                            <Polygon points="8.32,9.68 8.63,10 10.05,8.59 6.03,4.55 6.02,4.55 5.71,4.23 4.29,5.64 8.31,9.69" />
                            <Polygon points="15.41,13.94 14,15.35 17.99,19.36 18.34,19.71 19.76,18.3 15.77,14.29" />
                            <Polygon points="8.59,13.95 4.56,17.96 4.24,18.29 5.65,19.7 9.68,15.68 10.01,15.36" />
                            <circle cx="12" cy="4" r="2" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
