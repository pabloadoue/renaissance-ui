import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconHardwareKeyboardControlKey(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <Polygon points="5,12 6.41,13.41 12,7.83 17.59,13.41 19,12 12,5" />
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
                        <Polygon points="5,12 6.41,13.41 12,7.83 17.59,13.41 19,12 12,5" />
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
                        <Path d="M5.71,12.71L5.71,12.71c0.39,0.39,1.02,0.39,1.41,0L12,7.83l4.88,4.88c0.39,0.39,1.02,0.39,1.41,0v0 c0.39-0.39,0.39-1.02,0-1.41l-5.59-5.59c-0.39-0.39-1.02-0.39-1.41,0l-5.59,5.59C5.32,11.68,5.32,12.32,5.71,12.71z" />
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
                        <Polygon points="5,12 6.41,13.41 12,7.83 17.59,13.41 19,12 12,5" />
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
                        <Polygon points="5,12 6.41,13.41 12,7.83 17.59,13.41 19,12 12,5" />
                    </G>
                </Icon>
            );
    }
}
