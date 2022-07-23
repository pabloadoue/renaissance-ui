import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconEditorCandlestickChart(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <G>
                                <Polygon points="9,4 7,4 7,6 5,6 5,18 7,18 7,20 9,20 9,18 11,18 11,6 9,6" />
                            </G>
                            <G>
                                <Polygon points="19,8 17,8 17,4 15,4 15,8 13,8 13,15 15,15 15,20 17,20 17,15 19,15" />
                            </G>
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
                            <Path d="M9,4H7v2H5v12h2v2h2v-2h2V6H9V4z M9,16H7V8h2V16z" />
                            <Path d="M19,8h-2V4h-2v4h-2v7h2v5h2v-5h2V8z M17,13h-2v-3h2V13z" />
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
                            <G>
                                <Path d="M8,4L8,4C7.45,4,7,4.45,7,5v1H6C5.45,6,5,6.45,5,7v10c0,0.55,0.45,1,1,1h1v1c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-1h1 c0.55,0,1-0.45,1-1V7c0-0.55-0.45-1-1-1H9V5C9,4.45,8.55,4,8,4z" />
                            </G>
                            <G>
                                <Path d="M18,8h-1V5c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v3h-1c-0.55,0-1,0.45-1,1v5c0,0.55,0.45,1,1,1h1v4c0,0.55,0.45,1,1,1 h0c0.55,0,1-0.45,1-1v-4h1c0.55,0,1-0.45,1-1V9C19,8.45,18.55,8,18,8z" />
                            </G>
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
                            <G>
                                <Polygon points="9,4 7,4 7,6 5,6 5,18 7,18 7,20 9,20 9,18 11,18 11,6 9,6" />
                            </G>
                            <G>
                                <Polygon points="19,8 17,8 17,4 15,4 15,8 13,8 13,15 15,15 15,20 17,20 17,15 19,15" />
                            </G>
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
                            <Path d="M9,4H7v2H5v12h2v2h2v-2h2V6H9V4z M9,16H7V8h2V16z" />
                            <Path d="M19,8h-2V4h-2v4h-2v7h2v5h2v-5h2V8z M17,13h-2v-3h2V13z" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
