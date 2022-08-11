import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconForest(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <Polygon points="16,12 9,2 2,12 3.86,12 0,18 7,18 7,22 11,22 11,18 18,18 14.14,12" />
                            <Polygon points="20.14,12 22,12 15,2 12.61,5.41 17.92,13 16,13 15.97,13 19.19,18 24,18" />
                            <Rect height="3" width="4" x="13" y="19" />
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
                            <Path d="M24,18l-3.86-6H22L15,2l-3,4.29L9,2L2,12h1.86L0,18h7v4h4v-4h2v4h4v-4H24z M15,5.49L18.16,10h-1.68l3.86,6h-3.62l-2.57-4 H16l-2.78-3.97L15,5.49z M3.66,16l3.86-6H5.84L9,5.49L12.16,10h-1.68l3.86,6H3.66z" />
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
                            <Path d="M14.14,12h-0.06c0.81,0,1.28-0.91,0.82-1.57L9.82,3.17c-0.4-0.57-1.24-0.57-1.64,0L3.1,10.43C2.64,11.09,3.11,12,3.92,12 H3.86l-2.87,4.46C0.56,17.12,1.04,18,1.83,18H7v2c0,1.1,0.9,2,2,2s2-0.9,2-2v-2h5.17c0.79,0,1.27-0.88,0.84-1.54L14.14,12z" />
                            <Path d="M23.01,16.46L20.14,12h-0.06c0.81,0,1.28-0.91,0.82-1.57l-5.08-7.26c-0.4-0.57-1.24-0.57-1.64,0l-1.57,2.24l3.11,4.44 c0.43,0.61,0.48,1.41,0.14,2.07c-0.08,0.16-0.18,0.3-0.3,0.43l2.29,3.57c0.4,0.62,0.42,1.4,0.07,2.04 c-0.01,0.02-0.02,0.03-0.03,0.04h4.28C22.96,18,23.44,17.12,23.01,16.46z" />
                            <Path d="M13,20c0,1.1,0.9,2,2,2s2-0.9,2-2v-1h-4V20z" />
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
                            <Polygon points="16,12 9,2 2,12 3.86,12 0,18 7,18 7,22 11,22 11,18 18,18 14.14,12" />
                            <Polygon points="20.14,12 22,12 15,2 12.61,5.41 17.92,13 16,13 15.97,13 19.19,18 24,18" />
                            <Rect height="3" width="4" x="13" y="19" />
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
                            <Path d="M24,18l-3.86-6H22L15,2l-3,4.29L9,2L2,12h1.86L0,18h7v4h4v-4h2v4h4v-4H24z M15,5.49L18.16,10h-1.68l3.86,6h-3.62l-2.57-4 H16l-2.78-3.97L15,5.49z M3.66,16l3.86-6H5.84L9,5.49L12.16,10h-1.68l3.86,6H3.66z" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
