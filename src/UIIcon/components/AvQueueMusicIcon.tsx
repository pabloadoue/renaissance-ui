import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconAvQueueMusic(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <Path d="M15,6H3v2h12V6z M15,10H3v2h12V10z M3,16h8v-2H3V16z M17,6v8.18C16.69,14.07,16.35,14,16,14c-1.66,0-3,1.34-3,3s1.34,3,3,3 s3-1.34,3-3V8h3V6H17z" />
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
                        <Path d="M22,6h-5v8.18C16.69,14.07,16.35,14,16,14c-1.66,0-3,1.34-3,3s1.34,3,3,3s3-1.34,3-3V8h3V6z M15,6H3v2h12V6z M15,10H3v2h12 V10z M11,14H3v2h8V14z" />
                    </G>
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M14 6H4c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1zm0 4H4c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1zM4 16h6c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM19 6c-1.1 0-2 .9-2 2v6.18c-.31-.11-.65-.18-1-.18-1.84 0-3.28 1.64-2.95 3.54.21 1.21 1.2 2.2 2.41 2.41 1.9.33 3.54-1.11 3.54-2.95V8h2c.55 0 1-.45 1-1s-.45-1-1-1h-2z" />
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <Path d="M15,6H3v2h12V6z M15,10H3v2h12V10z M3,16h8v-2H3V16z M17,6v8.18C16.69,14.07,16.35,14,16,14c-1.66,0-3,1.34-3,3s1.34,3,3,3 s3-1.34,3-3V8h3V6H17z" />
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
                        <Path d="M22,6h-5v8.18C16.69,14.07,16.35,14,16,14c-1.66,0-3,1.34-3,3s1.34,3,3,3s3-1.34,3-3V8h3V6z M15,6H3v2h12V6z M15,10H3v2h12 V10z M11,14H3v2h8V14z" />
                    </G>
                </Icon>
            );
    }
}
