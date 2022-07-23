import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconAvLyrics(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <Path d="M14,9c0-2.04,1.24-3.79,3-4.57V4c0-1.1-0.9-2-2-2H4C2.9,2,2.01,2.9,2.01,4L2,22l4-4h9c1.1,0,2-0.9,2-2v-2.42 C15.24,12.8,14,11.05,14,9z M10,14H6v-2h4V14z M13,11H6V9h7V11z M13,8H6V6h7V8z" />
                            <Path d="M20,6.18C19.69,6.07,19.35,6,19,6c-1.66,0-3,1.34-3,3c0,1.66,1.34,3,3,3s3-1.34,3-3V3h2V1h-4V6.18z" />
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
                            <Rect height="2" width="7" x="6" y="6" />
                            <Rect height="2" width="4" x="6" y="12" />
                            <Path d="M15,11.97V16H6l-2,2V4h11v2.03c0.52-0.69,1.2-1.25,2-1.6V4c0-1.1-0.9-2-2-2H4C2.9,2,2.01,2.9,2.01,4L2,22l4-4h9 c1.1,0,2-0.9,2-2v-2.42C16.2,13.22,15.52,12.66,15,11.97z" />
                            <Rect height="2" width="7" x="6" y="9" />
                            <Path d="M20,6.18C19.69,6.07,19.35,6,19,6c-1.66,0-3,1.34-3,3c0,1.66,1.34,3,3,3s3-1.34,3-3V3h2V1h-4V6.18z" />
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
                            <Path d="M14,9c0-2.04,1.24-3.79,3-4.57V4c0-1.1-0.9-2-2-2H4C2.9,2,2.01,2.9,2.01,4L2,22l4-4h9c1.1,0,2-0.9,2-2v-2.42 C15.24,12.8,14,11.05,14,9z M10,14H6v-2h4V14z M13,11H6V9h7V11z M13,8H6V6h7V8z" />
                            <Path d="M20,6.18C19.69,6.07,19.35,6,19,6c-1.66,0-3,1.34-3,3c0,1.66,1.34,3,3,3s3-1.34,3-3V3h2V1h-4V6.18z" />
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
                            <Path d="M14,9c0-2.04,1.24-3.79,3-4.57V4c0-1.1-0.9-2-2-2H4C2.9,2,2.01,2.9,2.01,4L2,22l4-4h9c1.1,0,2-0.9,2-2v-2.42 C15.24,12.8,14,11.05,14,9z M10,14H6v-2h4V14z M13,11H6V9h7V11z M13,8H6V6h7V8z" />
                            <Path d="M20,6.18C19.69,6.07,19.35,6,19,6c-1.66,0-3,1.34-3,3c0,1.66,1.34,3,3,3s3-1.34,3-3V3h2V1h-4V6.18z" />
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
                            <Rect height="2" width="7" x="6" y="6" />
                            <Rect height="2" width="4" x="6" y="12" />
                            <Path d="M15,11.97V16H6l-2,2V4h11v2.03c0.52-0.69,1.2-1.25,2-1.6V4c0-1.1-0.9-2-2-2H4C2.9,2,2.01,2.9,2.01,4L2,22l4-4h9 c1.1,0,2-0.9,2-2v-2.42C16.2,13.22,15.52,12.66,15,11.97z" />
                            <Rect height="2" width="7" x="6" y="9" />
                            <Path d="M20,6.18C19.69,6.07,19.35,6,19,6c-1.66,0-3,1.34-3,3c0,1.66,1.34,3,3,3s3-1.34,3-3V3h2V1h-4V6.18z" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
