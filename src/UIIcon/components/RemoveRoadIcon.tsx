import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconRemoveRoad(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <Rect height="9" width="2" x="18" y="4" />
                            <Rect height="16" width="2" x="4" y="4" />
                            <Rect height="4" width="2" x="11" y="4" />
                            <Rect height="4" width="2" x="11" y="10" />
                            <Rect height="4" width="2" x="11" y="16" />
                            <Polygon points="22.5,16.41 21.09,15 19,17.09 16.91,15 15.5,16.41 17.59,18.5 15.5,20.59 16.91,22 19,19.91 21.09,22 22.5,20.59 20.41,18.5" />
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
                            <Rect height="9" width="2" x="18" y="4" />
                            <Rect height="16" width="2" x="4" y="4" />
                            <Rect height="4" width="2" x="11" y="4" />
                            <Rect height="4" width="2" x="11" y="10" />
                            <Rect height="4" width="2" x="11" y="16" />
                            <Polygon points="22.5,16.41 21.09,15 19,17.09 16.91,15 15.5,16.41 17.59,18.5 15.5,20.59 16.91,22 19,19.91 21.09,22 22.5,20.59 20.41,18.5" />
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
                            <Path d="M19,4L19,4c-0.55,0-1,0.45-1,1v7c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1V5C20,4.45,19.55,4,19,4z" />
                            <Path d="M5,20L5,20c0.55,0,1-0.45,1-1V5c0-0.55-0.45-1-1-1h0C4.45,4,4,4.45,4,5v14C4,19.55,4.45,20,5,20z" />
                            <Path d="M12,8L12,8c0.55,0,1-0.45,1-1V5c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v2C11,7.55,11.45,8,12,8z" />
                            <Path d="M12,14L12,14c0.55,0,1-0.45,1-1v-2c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v2C11,13.55,11.45,14,12,14z" />
                            <Path d="M12,20L12,20c0.55,0,1-0.45,1-1v-2c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v2C11,19.55,11.45,20,12,20z" />
                            <Path d="M21.79,15.71L21.79,15.71c-0.39-0.39-1.02-0.39-1.41,0L19,17.09l-1.38-1.38c-0.39-0.39-1.02-0.39-1.41,0v0 c-0.39,0.39-0.39,1.02,0,1.41l1.38,1.38l-1.38,1.38c-0.39,0.39-0.39,1.02,0,1.41l0,0c0.39,0.39,1.02,0.39,1.41,0L19,19.91 l1.38,1.38c0.39,0.39,1.02,0.39,1.41,0l0,0c0.39-0.39,0.39-1.02,0-1.41l-1.38-1.38l1.38-1.38C22.18,16.73,22.18,16.1,21.79,15.71z" />
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
                            <Rect height="9" width="2" x="18" y="4" />
                            <Rect height="16" width="2" x="4" y="4" />
                            <Rect height="4" width="2" x="11" y="4" />
                            <Rect height="4" width="2" x="11" y="10" />
                            <Rect height="4" width="2" x="11" y="16" />
                            <Polygon points="22.5,16.41 21.09,15 19,17.09 16.91,15 15.5,16.41 17.59,18.5 15.5,20.59 16.91,22 19,19.91 21.09,22 22.5,20.59 20.41,18.5" />
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
                            <Rect height="9" width="2" x="18" y="4" />
                            <Rect height="16" width="2" x="4" y="4" />
                            <Rect height="4" width="2" x="11" y="4" />
                            <Rect height="4" width="2" x="11" y="10" />
                            <Rect height="4" width="2" x="11" y="16" />
                            <Polygon points="22.5,16.41 21.09,15 19,17.09 16.91,15 15.5,16.41 17.59,18.5 15.5,20.59 16.91,22 19,19.91 21.09,22 22.5,20.59 20.41,18.5" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
