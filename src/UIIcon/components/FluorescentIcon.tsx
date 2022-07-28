import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconFluorescent(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Path d="M0,0h24v24H0V0z" fill="none" />
                    </G>
                    <G>
                        <G>
                            <Rect height="6" width="14" x="5" y="9" />
                            <Rect height="3" width="2" x="11" y="2" />
                            <Rect
                                height="2"
                                transform="matrix(0.7046 -0.7096 0.7096 0.7046 1.1814 15.2381)"
                                width="2.54"
                                x="17.62"
                                y="5.2"
                            />
                            <Rect height="3" width="2" x="11" y="19" />
                            <Polygon points="17.29,17.71 19.08,19.51 20.5,18.09 18.7,16.3" />
                            <Rect
                                height="2.53"
                                transform="matrix(0.7071 -0.7071 0.7071 0.7071 -2.8904 5.4222)"
                                width="1.99"
                                x="4.1"
                                y="4.93"
                            />
                            <Rect
                                height="2"
                                transform="matrix(0.7096 -0.7046 0.7046 0.7096 -11.1263 8.7897)"
                                width="2.54"
                                x="3.83"
                                y="16.89"
                            />
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
                            <Path d="M5,15h14V9H5V15z M7,11h10v2H7V11z" />
                            <Rect height="3" width="2" x="11" y="2" />
                            <Rect
                                height="2"
                                transform="matrix(0.7046 -0.7096 0.7096 0.7046 1.1814 15.2381)"
                                width="2.54"
                                x="17.62"
                                y="5.2"
                            />
                            <Rect height="3" width="2" x="11" y="19" />
                            <Polygon points="17.29,17.71 19.08,19.51 20.5,18.09 18.7,16.3" />
                            <Rect
                                height="2.53"
                                transform="matrix(0.7071 -0.7071 0.7071 0.7071 -2.8904 5.4222)"
                                width="1.99"
                                x="4.1"
                                y="4.93"
                            />
                            <Rect
                                height="2"
                                transform="matrix(0.7096 -0.7046 0.7046 0.7096 -11.1263 8.7897)"
                                width="2.54"
                                x="3.83"
                                y="16.89"
                            />
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
                            <Path d="M7,15h10c1.1,0,2-0.9,2-2v-2c0-1.1-0.9-2-2-2H7c-1.1,0-2,0.9-2,2v2C5,14.1,5.9,15,7,15z" />
                            <Path d="M12,2L12,2c-0.56,0-1,0.45-1,1V4c0,0.55,0.45,1,1,1H12c0.55,0,1-0.45,1-1V3C13,2.45,12.55,2,12,2z" />
                            <Path d="M19.79,5.3L19.79,5.3c-0.39-0.39-1.02-0.39-1.41,0l-0.38,0.38c-0.39,0.39-0.39,1.02,0,1.41l0,0 c0.39,0.39,1.02,0.39,1.41,0l0.38-0.38C20.18,6.33,20.18,5.69,19.79,5.3z" />
                            <Path d="M12,22L12,22c0.56,0,1-0.45,1-1V20c0-0.55-0.45-1-1-1H12c-0.55,0-1,0.45-1,1V21C11,21.55,11.45,22,12,22z" />
                            <Path d="M17.99,18.41l0.38,0.39c0.39,0.39,1.02,0.39,1.41,0l0.01-0.01c0.39-0.39,0.39-1.02,0-1.41L19.4,17 c-0.39-0.39-1.02-0.39-1.41,0l0,0C17.6,17.4,17.6,18.03,17.99,18.41z" />
                            <Path d="M6,5.69L5.61,5.31c-0.39-0.39-1.02-0.39-1.41,0l0,0c-0.39,0.39-0.39,1.02,0,1.41L4.59,7.1c0.39,0.39,1.02,0.39,1.41,0l0,0 C6.38,6.71,6.38,6.07,6,5.69z" />
                            <Path d="M4.2,18.79L4.2,18.79c0.39,0.4,1.03,0.4,1.42,0L6,18.4c0.39-0.39,0.39-1.02,0-1.41l0,0c-0.39-0.39-1.02-0.39-1.41,0 L4.2,17.38C3.81,17.77,3.81,18.4,4.2,18.79z" />
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
                            <Rect height="6" width="14" x="5" y="9" />
                            <Rect height="3" width="2" x="11" y="2" />
                            <Rect
                                height="2"
                                transform="matrix(0.7046 -0.7096 0.7096 0.7046 1.1814 15.2381)"
                                width="2.54"
                                x="17.62"
                                y="5.2"
                            />
                            <Rect height="3" width="2" x="11" y="19" />
                            <Polygon points="17.29,17.71 19.08,19.51 20.5,18.09 18.7,16.3" />
                            <Rect
                                height="2.53"
                                transform="matrix(0.7071 -0.7071 0.7071 0.7071 -2.8904 5.4222)"
                                width="1.99"
                                x="4.1"
                                y="4.93"
                            />
                            <Rect
                                height="2"
                                transform="matrix(0.7096 -0.7046 0.7046 0.7096 -11.1263 8.7897)"
                                width="2.54"
                                x="3.83"
                                y="16.89"
                            />
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
                            <Path d="M5,15h14V9H5V15z M7,11h10v2H7V11z" />
                            <Rect height="3" width="2" x="11" y="2" />
                            <Rect
                                height="2"
                                transform="matrix(0.7046 -0.7096 0.7096 0.7046 1.1814 15.2381)"
                                width="2.54"
                                x="17.62"
                                y="5.2"
                            />
                            <Rect height="3" width="2" x="11" y="19" />
                            <Polygon points="17.29,17.71 19.08,19.51 20.5,18.09 18.7,16.3" />
                            <Rect
                                height="2.53"
                                transform="matrix(0.7071 -0.7071 0.7071 0.7071 -2.8904 5.4222)"
                                width="1.99"
                                x="4.1"
                                y="4.93"
                            />
                            <Rect
                                height="2"
                                transform="matrix(0.7096 -0.7046 0.7046 0.7096 -11.1263 8.7897)"
                                width="2.54"
                                x="3.83"
                                y="16.89"
                            />
                        </G>
                    </G>
                </Icon>
            );
    }
}
