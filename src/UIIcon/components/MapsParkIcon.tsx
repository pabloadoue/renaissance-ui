import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconMapsPark(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <Polygon points="17,12 19,12 12,2 5.05,12 7,12 3.1,18 10.02,18 10.02,22 13.98,22 13.98,18 21,18" />
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
                                <Path d="M17,12h2L12,2L5.05,12H7l-3.9,6h6.92v4h3.95v-4H21L17,12z M6.79,16l3.9-6H8.88l3.13-4.5l3.15,4.5h-1.9l4,6H6.79z" />
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
                    </G>
                    <G>
                        <G>
                            <G>
                                <Path d="M16.96,12h0.08c0.81,0,1.28-0.91,0.82-1.57l-5.08-7.25c-0.4-0.57-1.24-0.57-1.64,0L6.1,10.43C5.64,11.09,6.12,12,6.93,12 h0.04l-2.9,4.46C3.63,17.12,4.11,18,4.91,18h5.08v2.02c0,1.09,0.89,1.98,1.98,1.98h0c1.09,0,1.98-0.89,1.98-1.98V18h5.15 c0.8,0,1.28-0.89,0.83-1.55L16.96,12z" />
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
                                <Polygon points="17,12 19,12 12,2 5.05,12 7,12 3.1,18 10.02,18 10.02,22 13.98,22 13.98,18 21,18" />
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
                                <Path d="M17,12h2L12,2L5.05,12H7l-3.9,6h6.92v4h3.95v-4H21L17,12z M6.79,16l3.9-6H8.88l3.13-4.5l3.15,4.5h-1.9l4,6H6.79z" />
                            </G>
                        </G>
                    </G>
                </Icon>
            );
    }
}
