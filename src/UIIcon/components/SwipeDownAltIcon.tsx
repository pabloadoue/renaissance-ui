import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconSwipeDownAlt(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <Path d="M13,13.9c2.28-0.46,4-2.48,4-4.9c0-2.76-2.24-5-5-5S7,6.24,7,9c0,2.42,1.72,4.44,4,4.9v4.27l-1.59-1.59L8,18l4,4l4-4 l-1.41-1.41L13,18.17V13.9z" />
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
                        <Path d="M13,13.9c2.28-0.46,4-2.48,4-4.9c0-2.76-2.24-5-5-5S7,6.24,7,9c0,2.42,1.72,4.44,4,4.9v4.27l-1.59-1.59L8,18l4,4l4-4 l-1.41-1.41L13,18.17V13.9z M15,9c0,1.66-1.34,3-3,3s-3-1.34-3-3s1.34-3,3-3S15,7.34,15,9z" />
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
                        <Path d="M13,13.9c2.28-0.46,4-2.48,4-4.9c0-2.76-2.24-5-5-5S7,6.24,7,9c0,2.42,1.72,4.44,4,4.9v4.27l-0.88-0.88 c-0.39-0.39-1.02-0.39-1.41,0c-0.39,0.39-0.39,1.02,0,1.41l2.59,2.59c0.39,0.39,1.02,0.39,1.41,0l2.59-2.59 c0.39-0.39,0.39-1.02,0-1.41c-0.39-0.39-1.02-0.39-1.41,0L13,18.17V13.9z" />
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
                        <Path d="M13,13.9c2.28-0.46,4-2.48,4-4.9c0-2.76-2.24-5-5-5S7,6.24,7,9c0,2.42,1.72,4.44,4,4.9v4.27l-1.59-1.59L8,18l4,4l4-4 l-1.41-1.41L13,18.17V13.9z" />
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
                        <Path d="M13,13.9c2.28-0.46,4-2.48,4-4.9c0-2.76-2.24-5-5-5S7,6.24,7,9c0,2.42,1.72,4.44,4,4.9v4.27l-1.59-1.59L8,18l4,4l4-4 l-1.41-1.41L13,18.17V13.9z M15,9c0,1.66-1.34,3-3,3s-3-1.34-3-3s1.34-3,3-3S15,7.34,15,9z" />
                    </G>
                </Icon>
            );
    }
}
