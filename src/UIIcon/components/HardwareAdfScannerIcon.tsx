import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconHardwareAdfScanner(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <Path d="M19,12h-1V4H6v8H5c-1.66,0-3,1.34-3,3v5h20v-5C22,13.34,20.66,12,19,12z M16,12H8V6h8V12z M18,17c-0.55,0-1-0.45-1-1 c0-0.55,0.45-1,1-1s1,0.45,1,1C19,16.55,18.55,17,18,17z" />
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
                            <Path d="M19,12h-1V4H6v8H5c-1.66,0-3,1.34-3,3v5h20v-5C22,13.34,20.66,12,19,12z M8,6h8v6H8V6z M20,18H4v-3c0-0.55,0.45-1,1-1h14 c0.55,0,1,0.45,1,1V18z" />
                            <circle cx="18" cy="16" r="1" />
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
                        <Path d="M19,12h-1V6c0-1.1-0.9-2-2-2H8C6.9,4,6,4.9,6,6v6H5c-1.66,0-3,1.34-3,3v3c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2v-3 C22,13.34,20.66,12,19,12z M16,12H8V6h8V12z M18,17c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1s1,0.45,1,1C19,16.55,18.55,17,18,17z" />
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
                        <Path d="M22,12h-4V4H6v8H2v8h20V12z M16,12H8V6h8V12z M18,17c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1s1,0.45,1,1 C19,16.55,18.55,17,18,17z" />
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
                            <Path d="M19,12h-1V4H6v8H5c-1.66,0-3,1.34-3,3v5h20v-5C22,13.34,20.66,12,19,12z M8,6h8v6H8V6z M20,18H4v-3c0-0.55,0.45-1,1-1h14 c0.55,0,1,0.45,1,1V18z" />
                            <circle cx="18" cy="16" r="1" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
