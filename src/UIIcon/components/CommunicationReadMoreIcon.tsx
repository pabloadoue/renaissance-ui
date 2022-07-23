import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconCommunicationReadMore(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <Rect height="2" width="9" x="13" y="7" />
                            <Rect height="2" width="9" x="13" y="15" />
                            <Rect height="2" width="6" x="16" y="11" />
                            <Polygon points="13,12 8,7 8,11 2,11 2,13 8,13 8,17" />
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
                            <Rect height="2" width="9" x="13" y="7" />
                            <Rect height="2" width="9" x="13" y="15" />
                            <Rect height="2" width="6" x="16" y="11" />
                            <Polygon points="13,12 8,7 8,11 2,11 2,13 8,13 8,17" />
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
                            <Path d="M14,9h7c0.55,0,1-0.45,1-1c0-0.55-0.45-1-1-1h-7c-0.55,0-1,0.45-1,1C13,8.55,13.45,9,14,9z" />
                            <Path d="M21,15h-7c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1h7c0.55,0,1-0.45,1-1C22,15.45,21.55,15,21,15z" />
                            <Path d="M21,11h-4c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1h4c0.55,0,1-0.45,1-1C22,11.45,21.55,11,21,11z" />
                            <Path d="M8.85,7.85C8.54,7.54,8,7.76,8,8.21V11H3c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1h5v2.79c0,0.45,0.54,0.67,0.85,0.35 l3.79-3.79c0.2-0.2,0.2-0.51,0-0.71L8.85,7.85z" />
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
                            <Rect height="2" width="9" x="13" y="7" />
                            <Rect height="2" width="9" x="13" y="15" />
                            <Rect height="2" width="6" x="16" y="11" />
                            <Polygon points="13,12 8,7 8,11 2,11 2,13 8,13 8,17" />
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
                            <Rect height="2" width="9" x="13" y="7" />
                            <Rect height="2" width="9" x="13" y="15" />
                            <Rect height="2" width="6" x="16" y="11" />
                            <Polygon points="13,12 8,7 8,11 2,11 2,13 8,13 8,17" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
