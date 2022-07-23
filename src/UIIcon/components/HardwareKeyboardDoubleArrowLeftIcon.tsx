import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconHardwareKeyboardDoubleArrowLeft(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <Polygon points="17.59,18 19,16.59 14.42,12 19,7.41 17.59,6 11.59,12" />
                            <Polygon points="11,18 12.41,16.59 7.83,12 12.41,7.41 11,6 5,12" />
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
                            <Polygon points="17.59,18 19,16.59 14.42,12 19,7.41 17.59,6 11.59,12" />
                            <Polygon points="11,18 12.41,16.59 7.83,12 12.41,7.41 11,6 5,12" />
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
                            <Path d="M18.29,17.29L18.29,17.29c0.39-0.39,0.39-1.02,0-1.41L14.42,12l3.88-3.88c0.39-0.39,0.39-1.02,0-1.41l0,0 c-0.39-0.39-1.02-0.39-1.41,0l-4.59,4.59c-0.39,0.39-0.39,1.02,0,1.41l4.59,4.59C17.27,17.68,17.9,17.68,18.29,17.29z" />
                            <Path d="M11.7,17.29L11.7,17.29c0.39-0.39,0.39-1.02,0-1.41L7.83,12l3.88-3.88c0.39-0.39,0.39-1.02,0-1.41l0,0 c-0.39-0.39-1.02-0.39-1.41,0l-4.59,4.59c-0.39,0.39-0.39,1.02,0,1.41l4.59,4.59C10.68,17.68,11.31,17.68,11.7,17.29z" />
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
                            <Polygon points="17.59,18 19,16.59 14.42,12 19,7.41 17.59,6 11.59,12" />
                            <Polygon points="11,18 12.41,16.59 7.83,12 12.41,7.41 11,6 5,12" />
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
                            <Polygon points="17.59,18 19,16.59 14.42,12 19,7.41 17.59,6 11.59,12" />
                            <Polygon points="11,18 12.41,16.59 7.83,12 12.41,7.41 11,6 5,12" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
