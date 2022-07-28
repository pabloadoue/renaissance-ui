import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconMic(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0z" fill="none" />
                    <Path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" />
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                        <Rect fill="none" height="24" width="24" />
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G />
                        <G>
                            <Path d="M12,14c1.66,0,3-1.34,3-3V5c0-1.66-1.34-3-3-3S9,3.34,9,5v6C9,12.66,10.34,14,12,14z" />
                            <Path d="M17,11c0,2.76-2.24,5-5,5s-5-2.24-5-5H5c0,3.53,2.61,6.43,6,6.92V21h2v-3.08c3.39-0.49,6-3.39,6-6.92H17z" />
                        </G>
                    </G>
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.91-3c-.49 0-.9.36-.98.85C16.52 14.2 14.47 16 12 16s-4.52-1.8-4.93-4.15c-.08-.49-.49-.85-.98-.85-.61 0-1.09.54-1 1.14.49 3 2.89 5.35 5.91 5.78V20c0 .55.45 1 1 1s1-.45 1-1v-2.08c3.02-.43 5.42-2.78 5.91-5.78.1-.6-.39-1.14-1-1.14z" />
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                        <Rect fill="none" height="24" width="24" />
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <Path d="M12,14c1.66,0,3-1.34,3-3V5c0-1.66-1.34-3-3-3S9,3.34,9,5v6C9,12.66,10.34,14,12,14z" />
                            <Path d="M17,11c0,2.76-2.24,5-5,5s-5-2.24-5-5H5c0,3.53,2.61,6.43,6,6.92V21h2v-3.08c3.39-0.49,6-3.39,6-6.92H17z" />
                        </G>
                    </G>
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                        <Rect fill="none" height="24" width="24" />
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G />
                        <G>
                            <Path d="M12,14c1.66,0,3-1.34,3-3V5c0-1.66-1.34-3-3-3S9,3.34,9,5v6C9,12.66,10.34,14,12,14z" />
                            <Path d="M17,11c0,2.76-2.24,5-5,5s-5-2.24-5-5H5c0,3.53,2.61,6.43,6,6.92V21h2v-3.08c3.39-0.49,6-3.39,6-6.92H17z" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
