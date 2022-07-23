import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconHomeSolarPower(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <Polygon points="3.33,16 11,16 11,13 4,13" />
                            <Polygon points="13,16 20.67,16 20,13 13,13" />
                            <Polygon points="21.11,18 13,18 13,22 22,22" />
                            <Polygon points="2,22 11,22 11,18 2.89,18" />
                            <Rect height="3" width="2" x="11" y="8" />
                            <Rect
                                height="3"
                                transform="matrix(0.7071 -0.7071 0.7071 0.7071 -0.2089 14.6085)"
                                width="2"
                                x="16.53"
                                y="6.06"
                            />
                            <Rect
                                height="2"
                                transform="matrix(0.7071 -0.7071 0.7071 0.7071 -3.448 6.7885)"
                                width="3"
                                x="4.97"
                                y="6.56"
                            />
                            <Rect height="2" width="3" x="3" y="2" />
                            <Rect height="2" width="3" x="18" y="2" />
                            <Path d="M12,7c2.76,0,5-2.24,5-5H7C7,4.76,9.24,7,12,7z" />
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
                            <Path d="M20,12H4L2,22h20L20,12z M18.36,14l0.4,2H13v-2H18.36z M11,14v2H5.24l0.4-2H11z M4.84,18H11v2H4.44L4.84,18z M13,20v-2 h6.16l0.4,2H13z" />
                            <Rect height="3" width="2" x="11" y="8" />
                            <Rect
                                height="3"
                                transform="matrix(0.7071 -0.7071 0.7071 0.7071 -0.2089 14.6085)"
                                width="2"
                                x="16.53"
                                y="6.06"
                            />
                            <Rect
                                height="2"
                                transform="matrix(0.7071 -0.7071 0.7071 0.7071 -3.448 6.7885)"
                                width="3"
                                x="4.97"
                                y="6.56"
                            />
                            <Rect height="2" width="3" x="3" y="2" />
                            <Rect height="2" width="3" x="18" y="2" />
                            <Path d="M12,7c2.76,0,5-2.24,5-5h-2c0,1.65-1.35,3-3,3S9,3.65,9,2H7C7,4.76,9.24,7,12,7z" />
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
                            <Path d="M3.33,16H11v-3H5.6c-0.94,0-1.75,0.65-1.95,1.57L3.33,16z" />
                            <Path d="M13,16h7.67l-0.32-1.43C20.14,13.65,19.33,13,18.4,13H13V16z" />
                            <Path d="M21.11,18H13v4h6.51c1.28,0,2.23-1.18,1.95-2.43L21.11,18z" />
                            <Path d="M4.49,22H11v-4H2.89l-0.35,1.57C2.26,20.82,3.21,22,4.49,22z" />
                            <Path d="M12,8L12,8c-0.55,0-1,0.45-1,1v1c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1V9C13,8.45,12.55,8,12,8z" />
                            <Path d="M18.59,8.62L18.59,8.62c0.39-0.39,0.39-1.02,0-1.41L17.88,6.5c-0.39-0.39-1.02-0.39-1.41,0v0c-0.39,0.39-0.39,1.02,0,1.41 l0.71,0.71C17.57,9.01,18.2,9.01,18.59,8.62z" />
                            <Path d="M6.82,8.62l0.71-0.71c0.39-0.39,0.39-1.02,0-1.41l0,0c-0.39-0.39-1.02-0.39-1.41,0L5.41,7.2c-0.39,0.39-0.39,1.02,0,1.41 l0,0C5.8,9.01,6.43,9.01,6.82,8.62z" />
                            <Path d="M5,2H4C3.45,2,3,2.45,3,3v0c0,0.55,0.45,1,1,1h1c0.55,0,1-0.45,1-1v0C6,2.45,5.55,2,5,2z" />
                            <Path d="M20,2h-1c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h1c0.55,0,1-0.45,1-1v0C21,2.45,20.55,2,20,2z" />
                            <Path d="M12,7c2.76,0,5-2.24,5-5H7C7,4.76,9.24,7,12,7z" />
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
                            <Polygon points="3.33,16 11,16 11,13 4,13" />
                            <Polygon points="13,16 20.67,16 20,13 13,13" />
                            <Polygon points="21.11,18 13,18 13,22 22,22" />
                            <Polygon points="2,22 11,22 11,18 2.89,18" />
                            <Rect height="3" width="2" x="11" y="8" />
                            <Rect
                                height="3"
                                transform="matrix(0.7071 -0.7071 0.7071 0.7071 -0.2089 14.6085)"
                                width="2"
                                x="16.53"
                                y="6.06"
                            />
                            <Rect
                                height="2"
                                transform="matrix(0.7071 -0.7071 0.7071 0.7071 -3.448 6.7885)"
                                width="3"
                                x="4.97"
                                y="6.56"
                            />
                            <Rect height="2" width="3" x="3" y="2" />
                            <Rect height="2" width="3" x="18" y="2" />
                            <Path d="M12,7c2.76,0,5-2.24,5-5H7C7,4.76,9.24,7,12,7z" />
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
                            <Path d="M20,12H4L2,22h20L20,12z M18.36,14l0.4,2H13v-2H18.36z M11,14v2H5.24l0.4-2H11z M4.84,18H11v2H4.44L4.84,18z M13,20v-2 h6.16l0.4,2H13z" />
                            <Rect height="3" width="2" x="11" y="8" />
                            <Rect
                                height="3"
                                transform="matrix(0.7071 -0.7071 0.7071 0.7071 -0.2089 14.6085)"
                                width="2"
                                x="16.53"
                                y="6.06"
                            />
                            <Rect
                                height="2"
                                transform="matrix(0.7071 -0.7071 0.7071 0.7071 -3.448 6.7885)"
                                width="3"
                                x="4.97"
                                y="6.56"
                            />
                            <Rect height="2" width="3" x="3" y="2" />
                            <Rect height="2" width="3" x="18" y="2" />
                            <Path d="M12,7c2.76,0,5-2.24,5-5h-2c0,1.65-1.35,3-3,3S9,3.65,9,2H7C7,4.76,9.24,7,12,7z" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
