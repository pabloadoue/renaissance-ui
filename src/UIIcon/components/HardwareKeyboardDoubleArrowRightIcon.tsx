import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconHardwareKeyboardDoubleArrowRight(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <Polygon points="6.41,6 5,7.41 9.58,12 5,16.59 6.41,18 12.41,12" />
                            <Polygon points="13,6 11.59,7.41 16.17,12 11.59,16.59 13,18 19,12" />
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
                            <Polygon points="6.41,6 5,7.41 9.58,12 5,16.59 6.41,18 12.41,12" />
                            <Polygon points="13,6 11.59,7.41 16.17,12 11.59,16.59 13,18 19,12" />
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
                            <Path d="M5.7,6.71L5.7,6.71c-0.39,0.39-0.39,1.02,0,1.41L9.58,12L5.7,15.88c-0.39,0.39-0.39,1.02,0,1.41l0,0 c0.39,0.39,1.02,0.39,1.41,0l4.59-4.59c0.39-0.39,0.39-1.02,0-1.41L7.12,6.71C6.73,6.32,6.09,6.32,5.7,6.71z" />
                            <Path d="M12.29,6.71L12.29,6.71c-0.39,0.39-0.39,1.02,0,1.41L16.17,12l-3.88,3.88c-0.39,0.39-0.39,1.02,0,1.41l0,0 c0.39,0.39,1.02,0.39,1.41,0l4.59-4.59c0.39-0.39,0.39-1.02,0-1.41l-4.59-4.59C13.32,6.32,12.68,6.32,12.29,6.71z" />
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
                            <Polygon points="6.41,6 5,7.41 9.58,12 5,16.59 6.41,18 12.41,12" />
                            <Polygon points="13,6 11.59,7.41 16.17,12 11.59,16.59 13,18 19,12" />
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
                            <Polygon points="6.41,6 5,7.41 9.58,12 5,16.59 6.41,18 12.41,12" />
                            <Polygon points="13,6 11.59,7.41 16.17,12 11.59,16.59 13,18 19,12" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
