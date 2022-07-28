import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconWbTwilight(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <Rect
                                height="2"
                                transform="matrix(0.7069 -0.7074 0.7074 0.7069 -0.3887 15.676)"
                                width="3"
                                x="17.22"
                                y="7.31"
                            />
                            <Rect height="2" width="20" x="2" y="18" />
                            <Rect height="3" width="2" x="11" y="4" />
                            <Rect
                                height="3"
                                transform="matrix(0.7071 -0.7071 0.7071 0.7071 -4.2992 6.1783)"
                                width="2"
                                x="4.31"
                                y="6.78"
                            />
                            <Path d="M5,16h14c0-3.87-3.13-7-7-7S5,12.13,5,16z" />
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
                            <Rect
                                height="2"
                                transform="matrix(0.7069 -0.7074 0.7074 0.7069 -0.3887 15.676)"
                                width="3"
                                x="17.22"
                                y="7.31"
                            />
                            <Rect height="2" width="20" x="2" y="18" />
                            <Rect height="3" width="2" x="11" y="4" />
                            <Rect
                                height="3"
                                transform="matrix(0.7071 -0.7071 0.7071 0.7071 -4.2992 6.1783)"
                                width="2"
                                x="4.31"
                                y="6.78"
                            />
                            <Path d="M5,16h14c0-3.87-3.13-7-7-7S5,12.13,5,16z" />
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
                            <Path d="M19.07,9.37l0.71-0.71c0.39-0.39,0.39-1.02,0-1.41l0,0c-0.39-0.39-1.02-0.39-1.41,0l-0.71,0.71 c-0.39,0.39-0.39,1.02,0,1.41C18.04,9.76,18.68,9.76,19.07,9.37z" />
                            <Path d="M21,18H3c-0.55,0-1,0.45-1,1s0.45,1,1,1h18c0.55,0,1-0.45,1-1S21.55,18,21,18z" />
                            <Path d="M12,7L12,7c0.56,0,1-0.45,1-1V5c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v1C11,6.55,11.45,7,12,7z" />
                            <Path d="M4.96,9.34c0.39,0.39,1.02,0.39,1.41,0l0,0c0.39-0.39,0.39-1.02,0-1.41L5.66,7.22c-0.39-0.39-1.02-0.39-1.41,0l0,0 c-0.39,0.39-0.39,1.02,0,1.41L4.96,9.34z" />
                            <Path d="M19,16c0-3.87-3.13-7-7-7s-7,3.13-7,7H19z" />
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
                            <Rect
                                height="2"
                                transform="matrix(0.7069 -0.7074 0.7074 0.7069 -0.3887 15.676)"
                                width="3"
                                x="17.22"
                                y="7.31"
                            />
                            <Rect height="2" width="20" x="2" y="18" />
                            <Rect height="3" width="2" x="11" y="4" />
                            <Rect
                                height="3"
                                transform="matrix(0.7071 -0.7071 0.7071 0.7071 -4.2992 6.1783)"
                                width="2"
                                x="4.31"
                                y="6.78"
                            />
                            <Path d="M5,16h14c0-3.87-3.13-7-7-7S5,12.13,5,16z" />
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
                            <Rect
                                height="2"
                                transform="matrix(0.7069 -0.7074 0.7074 0.7069 -0.3887 15.676)"
                                width="3"
                                x="17.22"
                                y="7.31"
                            />
                            <Rect height="2" width="20" x="2" y="18" />
                            <Rect height="3" width="2" x="11" y="4" />
                            <Rect
                                height="3"
                                transform="matrix(0.7071 -0.7071 0.7071 0.7071 -4.2992 6.1783)"
                                width="2"
                                x="4.31"
                                y="6.78"
                            />
                            <Path d="M5,16h14c0-3.87-3.13-7-7-7S5,12.13,5,16z" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
