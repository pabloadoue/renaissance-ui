import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconPolyline(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <Polygon points="15,16 15,17.26 9,14.26 9,11.09 11.7,8 16,8 16,2 10,2 10,6.9 7.3,10 3,10 3,16 8,16 15,19.5 15,22 21,22 21,16" />
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
                        <Path d="M15,16v1.26l-6-3v-3.17L11.7,8H16V2h-6v4.9L7.3,10H3v6h5l7,3.5V22h6v-6H15z M12,4h2v2h-2V4z M7,14H5v-2h2V14z M19,20h-2v-2 h2V20z" />
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
                        <Path d="M10.04,6.85L7.3,10H4.5C3.67,10,3,10.67,3,11.5v3C3,15.33,3.67,16,4.5,16h3c0.14,0,0.27-0.02,0.39-0.05L15,19.5v1 c0,0.83,0.67,1.5,1.5,1.5h3c0.83,0,1.5-0.67,1.5-1.5v-3c0-0.83-0.67-1.5-1.5-1.5h-3c-0.75,0-1.37,0.55-1.48,1.27L9,14.26V11.5 c0-0.12-0.01-0.24-0.04-0.36L11.7,8h2.8C15.33,8,16,7.33,16,6.5v-3C16,2.67,15.33,2,14.5,2h-3C10.67,2,10,2.67,10,3.5v3 C10,6.62,10.01,6.74,10.04,6.85z" />
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
                        <Polygon points="15,16 15,17.26 9,14.26 9,11.09 11.7,8 16,8 16,2 10,2 10,6.9 7.3,10 3,10 3,16 8,16 15,19.5 15,22 21,22 21,16" />
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
                        <Path d="M15,16v1.26l-6-3v-3.17L11.7,8H16V2h-6v4.9L7.3,10H3v6h5l7,3.5V22h6v-6H15z M12,4h2v2h-2V4z M7,14H5v-2h2V14z M19,20h-2v-2 h2V20z" />
                    </G>
                </Icon>
            );
    }
}
