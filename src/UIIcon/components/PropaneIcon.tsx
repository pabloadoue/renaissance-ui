import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconPropane(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <Path d="M17,6h-1V5c0-1.1-0.9-2-2-2h-4C8.9,3,8,3.9,8,5v1H7c-3.31,0-6,2.69-6,6s2.69,6,6,6v3h2v-3h6v3h2v-3c3.31,0,6-2.69,6-6 S20.31,6,17,6z M10,5h4v1h-4V5z" />
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
                        <Path d="M17,6h-1V5c0-1.1-0.9-2-2-2h-4C8.9,3,8,3.9,8,5v1H7c-3.31,0-6,2.69-6,6s2.69,6,6,6v3h2v-3h6v3h2v-3c3.31,0,6-2.69,6-6 S20.31,6,17,6z M10,5h4v1h-4V5z M17,16H7c-2.21,0-4-1.79-4-4s1.79-4,4-4h10c2.21,0,4,1.79,4,4S19.21,16,17,16z" />
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
                        <Path d="M16.75,6L16,6V5c0-1.1-0.9-2-2-2h-4C8.9,3,8,3.9,8,5v1L7.25,6C3.97,6,1.1,8.53,1,11.82C0.9,15.21,3.62,18,7,18v2 c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-2h6v2c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-2c3.38,0,6.1-2.79,6-6.18 C22.9,8.53,20.03,6,16.75,6z M10,5h4v1h-4V5z" />
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
                        <Path d="M16.75,6L16,6V3H8v3L7.25,6C3.97,6,1.1,8.53,1,11.82C0.9,15.21,3.62,18,7,18v3h2v-3h6v3h2v-3c3.38,0,6.1-2.79,6-6.18 C22.9,8.53,20.03,6,16.75,6z M10,5h4v1h-4V5z" />
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
                        <Path d="M17,6h-1V5c0-1.1-0.9-2-2-2h-4C8.9,3,8,3.9,8,5v1H7c-3.31,0-6,2.69-6,6s2.69,6,6,6v3h2v-3h6v3h2v-3c3.31,0,6-2.69,6-6 S20.31,6,17,6z M10,5h4v1h-4V5z M17,16H7c-2.21,0-4-1.79-4-4s1.79-4,4-4h10c2.21,0,4,1.79,4,4S19.21,16,17,16z" />
                    </G>
                </Icon>
            );
    }
}
