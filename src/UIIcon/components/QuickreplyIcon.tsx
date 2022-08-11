import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconQuickreply(props: any) {
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
                                <Path d="M22,4c0-1.1-0.9-2-2-2H4C2.9,2,2.01,2.9,2.01,4L2,22l4-4h9v-8h7V4z" />
                            </G>
                            <G>
                                <Polygon points="22.5,16 20.3,16 22,12 17,12 17,18 19,18 19,23" />
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
                                <Path d="M4,17.17V4h16v6h2V4c0-1.1-0.9-2-2-2H4C2.9,2,2.01,2.9,2.01,4L2,22l4-4h9v-2H5.17L4,17.17z" />
                            </G>
                            <G>
                                <Polygon points="22.5,16 20.3,16 22,12 17,12 17,18 19,18 19,23" />
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
                                <Path d="M22,4c0-1.1-0.9-2-2-2H4C2.9,2,2.01,2.9,2.01,4L2,22l4-4h9v-7c0-0.55,0.45-1,1-1h6V4z" />
                            </G>
                            <G>
                                <Path d="M21.69,16H20.3l1.4-3.3c0.14-0.33-0.1-0.7-0.46-0.7H17.5c-0.28,0-0.5,0.22-0.5,0.5v5c0,0.28,0.22,0.5,0.5,0.5H19v3.94 c0,0.26,0.36,0.35,0.47,0.11l2.66-5.33C22.3,16.39,22.06,16,21.69,16z" />
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
                                <Polygon points="22,2 2,2 2,22 6,18 15,18 15,10 22,10" />
                            </G>
                            <G>
                                <Polygon points="22.5,16 20.3,16 22,12 17,12 17,18 19,18 19,23" />
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
                                <Path d="M4,17.17V4h16v6h2V4c0-1.1-0.9-2-2-2H4C2.9,2,2.01,2.9,2.01,4L2,22l4-4h9v-2H5.17L4,17.17z" />
                            </G>
                            <G>
                                <Polygon points="22.5,16 20.3,16 22,12 17,12 17,18 19,18 19,23" />
                            </G>
                        </G>
                    </G>
                </Icon>
            );
    }
}
