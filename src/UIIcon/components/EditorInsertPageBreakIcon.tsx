import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconEditorInsertPageBreak(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <Path d="M4,20c0,1.1,0.89,2,1.99,2H18c1.1,0,2-0.9,2-2v-3H4L4,20z" />
                            <Path d="M20,8l-6-6H6C4.9,2,4.01,2.9,4.01,4l0,7H20V8z M13,9V3.5L18.5,9H13z" />
                            <Rect height="2" width="6" x="9" y="13" />
                            <Rect height="2" width="6" x="17" y="13" />
                            <Rect height="2" width="6" x="1" y="13" />
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
                            <Path d="M18,20H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3h-2V20z" />
                            <Path d="M6,4h7v5h5v2h2V8l-6-6H6C4.9,2,4,2.9,4,4v7h2V4z" />
                            <Rect height="2" width="6" x="9" y="13" />
                            <Rect height="2" width="6" x="17" y="13" />
                            <Rect height="2" width="6" x="1" y="13" />
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
                            <Path d="M4,20c0,1.1,0.89,2,1.99,2H18c1.1,0,2-0.9,2-2v-3H4L4,20z" />
                            <Path d="M19.41,7.41l-4.83-4.83C14.21,2.21,13.7,2,13.17,2H6C4.9,2,4.01,2.89,4.01,3.99l0,7.01H20V8.83 C20,8.3,19.79,7.79,19.41,7.41z M13,8V3.5L18.5,9H14C13.45,9,13,8.55,13,8z" />
                            <Path d="M15,14L15,14c0-0.55-0.45-1-1-1h-4c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h4C14.55,15,15,14.55,15,14z" />
                            <Path d="M17,14L17,14c0,0.55,0.45,1,1,1h4c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1h-4C17.45,13,17,13.45,17,14z" />
                            <Path d="M6,13H2c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h4c0.55,0,1-0.45,1-1v0C7,13.45,6.55,13,6,13z" />
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
                            <Rect height="5" width="16" x="4" y="17" />
                            <Path d="M20,8l-6-6H4.01l-0.01,9H20V8z M13,9V3.5L18.5,9H13z" />
                            <Rect height="2" width="6" x="9" y="13" />
                            <Rect height="2" width="6" x="17" y="13" />
                            <Rect height="2" width="6" x="1" y="13" />
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
                            <Path d="M18,20H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3h-2V20z" />
                            <Path d="M6,4h7v5h5v2h2V8l-6-6H6C4.9,2,4,2.9,4,4v7h2V4z" />
                            <Rect height="2" width="6" x="9" y="13" />
                            <Rect height="2" width="6" x="17" y="13" />
                            <Rect height="2" width="6" x="1" y="13" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
