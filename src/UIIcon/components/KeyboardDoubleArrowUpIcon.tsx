import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconKeyboardDoubleArrowUp(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <Polygon points="6,17.59 7.41,19 12,14.42 16.59,19 18,17.59 12,11.59" />
                            <Polygon points="6,11 7.41,12.41 12,7.83 16.59,12.41 18,11 12,5" />
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
                            <Polygon points="6,17.59 7.41,19 12,14.42 16.59,19 18,17.59 12,11.59" />
                            <Polygon points="6,11 7.41,12.41 12,7.83 16.59,12.41 18,11 12,5" />
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
                            <Path d="M6.7,18.29L6.7,18.29c0.39,0.39,1.02,0.39,1.41,0L12,14.42l3.88,3.88c0.39,0.39,1.02,0.39,1.41,0l0,0 c0.39-0.39,0.39-1.02,0-1.41l-4.59-4.59c-0.39-0.39-1.02-0.39-1.41,0L6.7,16.88C6.31,17.27,6.31,17.9,6.7,18.29z" />
                            <Path d="M6.7,11.7L6.7,11.7c0.39,0.39,1.02,0.39,1.41,0L12,7.83l3.88,3.88c0.39,0.39,1.02,0.39,1.41,0l0,0 c0.39-0.39,0.39-1.02,0-1.41l-4.59-4.59c-0.39-0.39-1.02-0.39-1.41,0L6.7,10.29C6.31,10.68,6.31,11.31,6.7,11.7z" />
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
                            <Polygon points="6,17.59 7.41,19 12,14.42 16.59,19 18,17.59 12,11.59" />
                            <Polygon points="6,11 7.41,12.41 12,7.83 16.59,12.41 18,11 12,5" />
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
                            <Polygon points="6,17.59 7.41,19 12,14.42 16.59,19 18,17.59 12,11.59" />
                            <Polygon points="6,11 7.41,12.41 12,7.83 16.59,12.41 18,11 12,5" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
