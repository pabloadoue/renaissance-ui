import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconTurnSlightLeft(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <Path d="M11.66,6V4H6v5.66h2V7.41l5,5V20h2v-7.58c0-0.53-0.21-1.04-0.59-1.41l-5-5H11.66z" />
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
                        <Path d="M11.66,6V4H6v5.66h2V7.41l5,5V20h2v-7.58c0-0.53-0.21-1.04-0.59-1.41l-5-5H11.66z" />
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
                        <Path d="M11.66,5L11.66,5c0-0.55-0.45-1-1-1H7C6.45,4,6,4.45,6,5v3.66c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1V7.41l5,5V19 c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-6.58c0-0.53-0.21-1.04-0.59-1.41l-5-5h1.24C11.21,6,11.66,5.55,11.66,5z" />
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
                        <Polygon points="11.66,6 11.66,4 6,4 6,9.66 8,9.66 8,7.41 13,12.41 13,20 15,20 15,11.59 9.41,6" />
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
                        <Path d="M11.66,6V4H6v5.66h2V7.41l5,5V20h2v-7.58c0-0.53-0.21-1.04-0.59-1.41l-5-5H11.66z" />
                    </G>
                </Icon>
            );
    }
}
