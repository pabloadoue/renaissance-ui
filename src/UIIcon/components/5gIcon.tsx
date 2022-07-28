import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function Icon5g(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <Path d="M17,13h2v2h-5V9h7c0-1.1-0.9-2-2-2h-5c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h5c1.1,0,2-0.9,2-2v-4h-4V13z" />
                            <Path d="M3,13h5v2H3v2h5c1.1,0,2-0.9,2-2v-2c0-1.1-0.9-2-2-2H5V9h5V7H3V13z" />
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
                            <Path d="M16.5,13H19v2h-5V9h7c0-1.1-0.9-2-2-2h-5c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h5c1.1,0,2-0.9,2-2v-4h-4.5V13z" />
                            <Path d="M3,13h5v2H3v2h5c1.1,0,2-0.9,2-2v-2c0-1.1-0.9-2-2-2H5V9h5V7H3V13z" />
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
                            <Path d="M18,13h1v2h-5V9h6c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1h-6c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h5c1.1,0,2-0.9,2-2v-3 c0-0.55-0.45-1-1-1h-2c-0.55,0-1,0.45-1,1v0C17,12.55,17.45,13,18,13z" />
                            <Path d="M4,13h4v2H4c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h4c1.1,0,2-0.9,2-2v-2c0-1.1-0.9-2-2-2H5V9h4c0.55,0,1-0.45,1-1v0 c0-0.55-0.45-1-1-1H4C3.45,7,3,7.45,3,8v4C3,12.55,3.45,13,4,13z" />
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
                            <Polygon points="17,13 19,13 19,15 14,15 14,9 21,9 21,7 12,7 12,17 21,17 21,11 17,11" />
                            <Polygon points="3,13 8,13 8,15 3,15 3,17 10,17 10,11 5,11 5,9 10,9 10,7 3,7" />
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
                            <Path d="M16.5,13H19v2h-5V9h7c0-1.1-0.9-2-2-2h-5c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h5c1.1,0,2-0.9,2-2v-4h-4.5V13z" />
                            <Path d="M3,13h5v2H3v2h5c1.1,0,2-0.9,2-2v-2c0-1.1-0.9-2-2-2H5V9h5V7H3V13z" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
