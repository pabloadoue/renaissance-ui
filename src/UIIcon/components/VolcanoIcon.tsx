import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconVolcano(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <G>
                                <Polygon points="18,8 11,8 9,13 6,13 2,22 22,22" />
                            </G>
                            <G>
                                <Rect height="4" width="2" x="13" y="1" />
                            </G>
                            <G>
                                <Rect
                                    height="2"
                                    transform="matrix(0.7071 -0.7071 0.7071 0.7071 1.9792 14.2929)"
                                    width="4"
                                    x="16.24"
                                    y="3.76"
                                />
                            </G>
                            <G>
                                <Rect
                                    height="4"
                                    transform="matrix(0.7071 -0.7071 0.7071 0.7071 -0.5061 8.2929)"
                                    width="2"
                                    x="8.76"
                                    y="2.76"
                                />
                            </G>
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
                            <G>
                                <Path d="M18,8h-7l-2,5H6l-4,9h20L18,8z M7.3,15H9h1.35l0.5-1.26l1.5-3.74h4.14l2.86,10H5.08L7.3,15z" />
                            </G>
                            <G>
                                <Rect height="4" width="2" x="13" y="1" />
                            </G>
                            <G>
                                <Rect
                                    height="2"
                                    transform="matrix(0.7071 -0.7071 0.7071 0.7071 1.9792 14.2929)"
                                    width="4"
                                    x="16.24"
                                    y="3.76"
                                />
                            </G>
                            <G>
                                <Rect
                                    height="4"
                                    transform="matrix(0.7071 -0.7071 0.7071 0.7071 -0.5061 8.2929)"
                                    width="2"
                                    x="8.76"
                                    y="2.76"
                                />
                            </G>
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
                            <G>
                                <Path d="M16.49,8h-4.14c-0.82,0-1.55,0.5-1.86,1.26L9,13H7.3c-0.79,0-1.51,0.47-1.83,1.19l-2.22,5C2.66,20.51,3.63,22,5.08,22 h14.27c1.33,0,2.29-1.27,1.92-2.55l-2.86-10C18.17,8.59,17.38,8,16.49,8z" />
                            </G>
                            <G>
                                <Path d="M14,1L14,1c-0.55,0-1,0.45-1,1v2c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1V2C15,1.45,14.55,1,14,1z" />
                            </G>
                            <G>
                                <Path d="M19.66,3.34L19.66,3.34c-0.39-0.39-1.02-0.39-1.41,0l-1.41,1.41c-0.39,0.39-0.39,1.02,0,1.41v0 c0.39,0.39,1.02,0.39,1.41,0l1.41-1.41C20.05,4.37,20.05,3.73,19.66,3.34z" />
                            </G>
                            <G>
                                <Path d="M11.17,4.76L9.76,3.34c-0.39-0.39-1.02-0.39-1.41,0l0,0c-0.39,0.39-0.39,1.02,0,1.41l1.41,1.41 c0.39,0.39,1.02,0.39,1.41,0l0,0C11.56,5.78,11.56,5.15,11.17,4.76z" />
                            </G>
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
                            <G>
                                <Polygon points="18,8 11,8 9,13 6,13 2,22 22,22" />
                            </G>
                            <G>
                                <Rect height="4" width="2" x="13" y="1" />
                            </G>
                            <G>
                                <Rect
                                    height="2"
                                    transform="matrix(0.7071 -0.7071 0.7071 0.7071 1.9792 14.2929)"
                                    width="4"
                                    x="16.24"
                                    y="3.76"
                                />
                            </G>
                            <G>
                                <Rect
                                    height="4"
                                    transform="matrix(0.7071 -0.7071 0.7071 0.7071 -0.5061 8.2929)"
                                    width="2"
                                    x="8.76"
                                    y="2.76"
                                />
                            </G>
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
                            <G>
                                <Path d="M18,8h-7l-2,5H6l-4,9h20L18,8z M7.3,15H9h1.35l0.5-1.26l1.5-3.74h4.14l2.86,10H5.08L7.3,15z" />
                            </G>
                            <G>
                                <Rect height="4" width="2" x="13" y="1" />
                            </G>
                            <G>
                                <Rect
                                    height="2"
                                    transform="matrix(0.7071 -0.7071 0.7071 0.7071 1.9792 14.2929)"
                                    width="4"
                                    x="16.24"
                                    y="3.76"
                                />
                            </G>
                            <G>
                                <Rect
                                    height="4"
                                    transform="matrix(0.7071 -0.7071 0.7071 0.7071 -0.5061 8.2929)"
                                    width="2"
                                    x="8.76"
                                    y="2.76"
                                />
                            </G>
                        </G>
                    </G>
                </Icon>
            );
    }
}
