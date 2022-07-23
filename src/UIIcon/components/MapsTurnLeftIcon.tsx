import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconMapsTurnLeft(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <Path d="M6.83,11l1.59,1.59L7,14l-4-4l4-4l1.41,1.41L6.83,9L15,9c1.1,0,2,0.9,2,2v9h-2v-9L6.83,11z" />
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
                        <Path d="M6.83,11l1.59,1.59L7,14l-4-4l4-4l1.41,1.41L6.83,9L15,9c1.1,0,2,0.9,2,2v9h-2v-9L6.83,11z" />
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
                        <Path d="M7.71,13.29c-0.39,0.39-1.02,0.39-1.41,0l-2.59-2.59c-0.39-0.39-0.39-1.02,0-1.41l2.59-2.59c0.39-0.39,1.02-0.39,1.41,0 c0.39,0.39,0.39,1.02,0,1.41L6.83,9L15,9c1.1,0,2,0.9,2,2v8c0,0.55-0.45,1-1,1c-0.55,0-1-0.45-1-1v-8l-8.17,0l0.88,0.88 C8.1,12.27,8.1,12.9,7.71,13.29z" />
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
                        <Polygon points="6.83,11 8.41,12.59 7,14 3,10 7,6 8.41,7.41 6.83,9 17,9 17,20 15,20 15,11" />
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
                        <Path d="M6.83,11l1.59,1.59L7,14l-4-4l4-4l1.41,1.41L6.83,9L15,9c1.1,0,2,0.9,2,2v9h-2v-9L6.83,11z" />
                    </G>
                </Icon>
            );
    }
}
