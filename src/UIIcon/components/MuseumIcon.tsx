import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconMuseum(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <Path d="M22,11V9L12,2L2,9v2h2v9H2v2h20v-2h-2v-9H22z M16,18h-2v-4l-2,3l-2-3v4H8v-7h2l2,3l2-3h2V18z" />
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
                            <Path d="M22,11V9L12,2L2,9v2h2v9H2v2h20v-2h-2v-9H22z M18,20H6V9h12V20z" />
                            <Polygon points="10,14 12,17 14,14 14,18 16,18 16,11 14,11 12,14 10,11 8,11 8,18 10,18" />
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
                        <Path d="M21.5,11c0.28,0,0.5-0.22,0.5-0.5V9.26c0-0.16-0.08-0.32-0.21-0.41L12.57,2.4c-0.34-0.24-0.8-0.24-1.15,0L2.21,8.85 C2.08,8.94,2,9.1,2,9.26v1.24C2,10.78,2.22,11,2.5,11H4v9H3c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1h18c0.55,0,1-0.45,1-1 c0-0.55-0.45-1-1-1h-1v-9H21.5z M16,17c0,0.55-0.45,1-1,1s-1-0.45-1-1v-3l-1.17,1.75c-0.4,0.59-1.27,0.59-1.66,0L10,14v3 c0,0.55-0.45,1-1,1s-1-0.45-1-1v-4.7C8,11.58,8.58,11,9.3,11h0c0.43,0,0.84,0.22,1.08,0.58L12,14l1.61-2.42 C13.86,11.22,14.26,11,14.7,11h0c0.72,0,1.3,0.58,1.3,1.3V17z" />
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
                        <Path d="M22,11V9L12,2L2,9v2h2v9H2v2h20v-2h-2v-9H22z M16,18h-2v-4l-2,3l-2-3v4H8v-7h2l2,3l2-3h2V18z" />
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
                            <Path d="M22,11V9L12,2L2,9v2h2v9H2v2h20v-2h-2v-9H22z M18,20H6V9h12V20z" />
                            <Polygon points="10,14 12,17 14,14 14,18 16,18 16,11 14,11 12,14 10,11 8,11 8,18 10,18" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
