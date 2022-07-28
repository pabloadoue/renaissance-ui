import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconWoman2(props: any) {
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
                                <Path d="M13.94,8.31C13.62,7.52,12.85,7,12,7s-1.62,0.52-1.94,1.31L7,16h3.5v6h3v-6H17L13.94,8.31z" />
                                <circle cx="12" cy="4" r="2" />
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
                                <Path d="M13.94,8.31C13.62,7.52,12.85,7,12,7s-1.62,0.52-1.94,1.31L7,16h3.5v6h3v-6H17L13.94,8.31z" />
                                <circle cx="12" cy="4" r="2" />
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
                                <Path d="M13.94,8.31c-0.38-0.96-1.42-1.52-2.48-1.24c-0.66,0.17-1.18,0.7-1.43,1.34l-2.48,6.22C7.28,15.29,7.77,16,8.47,16h2.03 v5c0,0.55,0.45,1,1,1h1c0.55,0,1-0.45,1-1v-5h2.03c0.71,0,1.19-0.71,0.93-1.37L13.94,8.31z" />
                                <circle cx="12" cy="4" r="2" />
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
                                <Polygon points="13.41,7 10.59,7 7,16 10.5,16 10.5,22 13.5,22 13.5,16 17,16" />
                                <circle cx="12" cy="4" r="2" />
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
                                <Path d="M13.94,8.31C13.62,7.52,12.85,7,12,7s-1.62,0.52-1.94,1.31L7,16h3.5v6h3v-6H17L13.94,8.31z" />
                                <circle cx="12" cy="4" r="2" />
                            </G>
                        </G>
                    </G>
                </Icon>
            );
    }
}
