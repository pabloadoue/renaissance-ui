import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconMoveDown(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <Path d="M3,11c0,2.45,1.76,4.47,4.08,4.91l-1.49-1.49L7,13l4,4.01L7,21l-1.41-1.41l1.58-1.58l0-0.06C3.7,17.54,1,14.58,1,11 c0-3.87,3.13-7,7-7h3v2H8C5.24,6,3,8.24,3,11z" />
                            <Path d="M22,11V4h-9v7H22z M20,9h-5V6h5V9z" />
                            <Rect height="7" width="9" x="13" y="13" />
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
                            <Path d="M3,11c0,2.45,1.76,4.47,4.08,4.91l-1.49-1.49L7,13l4,4.01L7,21l-1.41-1.41l1.58-1.58l0-0.06C3.7,17.54,1,14.58,1,11 c0-3.87,3.13-7,7-7h3v2H8C5.24,6,3,8.24,3,11z" />
                            <Path d="M22,11V4h-9v7H22z M20,9h-5V6h5V9z" />
                            <Rect height="7" width="9" x="13" y="13" />
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
                            <Path d="M3.01,10.72c-0.14,2.57,1.66,4.73,4.07,5.18l-0.79-0.79c-0.39-0.39-0.39-1.02,0-1.41l0,0c0.39-0.39,1.02-0.39,1.41,0 l2.59,2.59c0.39,0.39,0.39,1.02,0,1.41L7.71,20.3c-0.39,0.39-1.02,0.39-1.41,0h0c-0.39-0.39-0.39-1.02,0-1.41l0.88-0.88l0-0.06 c-3.64-0.43-6.43-3.65-6.15-7.47C1.29,6.78,4.55,4,8.26,4L10,4c0.55,0,1,0.45,1,1v0c0,0.55-0.45,1-1,1L8.22,6 C5.52,6,3.15,8.04,3.01,10.72z" />
                            <Path d="M15,11h5c1.1,0,2-0.9,2-2V6c0-1.1-0.9-2-2-2h-5c-1.1,0-2,0.9-2,2v3C13,10.1,13.9,11,15,11z M20,9h-5V6h5V9z" />
                            <Path d="M20,20h-5c-1.1,0-2-0.9-2-2v-3c0-1.1,0.9-2,2-2h5c1.1,0,2,0.9,2,2v3C22,19.1,21.1,20,20,20z" />
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
                            <Path d="M3,11c0,2.45,1.76,4.47,4.08,4.91l-1.49-1.49L7,13l4,4.01L7,21l-1.41-1.41l1.58-1.58l0-0.06C3.7,17.54,1,14.58,1,11 c0-3.87,3.13-7,7-7h3v2H8C5.24,6,3,8.24,3,11z" />
                            <Path d="M22,11V4h-9v7H22z M20,9h-5V6h5V9z" />
                            <Rect height="7" width="9" x="13" y="13" />
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
                            <Path d="M3,11c0,2.45,1.76,4.47,4.08,4.91l-1.49-1.49L7,13l4,4.01L7,21l-1.41-1.41l1.58-1.58l0-0.06C3.7,17.54,1,14.58,1,11 c0-3.87,3.13-7,7-7h3v2H8C5.24,6,3,8.24,3,11z" />
                            <Path d="M22,11V4h-9v7H22z M20,9h-5V6h5V9z" />
                            <Rect height="7" width="9" x="13" y="13" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
