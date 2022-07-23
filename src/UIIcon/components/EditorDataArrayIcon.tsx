import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconEditorDataArray(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <Polygon points="15,4 15,6 18,6 18,18 15,18 15,20 20,20 20,4" />
                            <Polygon points="4,20 9,20 9,18 6,18 6,6 9,6 9,4 4,4" />
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
                            <Polygon points="15,4 15,6 18,6 18,18 15,18 15,20 20,20 20,4" />
                            <Polygon points="4,20 9,20 9,18 6,18 6,6 9,6 9,4 4,4" />
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
                            <Path d="M15,5L15,5c0,0.55,0.45,1,1,1h2v12h-2c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h2c1.1,0,2-0.9,2-2V6c0-1.1-0.9-2-2-2h-2 C15.45,4,15,4.45,15,5z" />
                            <Path d="M6,20h2c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H6V6h2c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H6C4.9,4,4,4.9,4,6v12 C4,19.1,4.9,20,6,20z" />
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
                            <Polygon points="15,4 15,6 18,6 18,18 15,18 15,20 20,20 20,4" />
                            <Polygon points="4,20 9,20 9,18 6,18 6,6 9,6 9,4 4,4" />
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
                            <Polygon points="15,4 15,6 18,6 18,18 15,18 15,20 20,20 20,4" />
                            <Polygon points="4,20 9,20 9,18 6,18 6,6 9,6 9,4 4,4" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
