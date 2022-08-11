import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconAddRoad(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <Polygon points="20,18 20,15 18,15 18,18 15,18 15,20 18,20 18,23 20,23 20,20 23,20 23,18" />
                            <Rect height="9" width="2" x="18" y="4" />
                            <Rect height="16" width="2" x="4" y="4" />
                            <Rect height="4" width="2" x="11" y="4" />
                            <Rect height="4" width="2" x="11" y="10" />
                            <Rect height="4" width="2" x="11" y="16" />
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
                            <Polygon points="20,18 20,15 18,15 18,18 15,18 15,20 18,20 18,23 20,23 20,20 23,20 23,18" />
                            <Rect height="9" width="2" x="18" y="4" />
                            <Rect height="16" width="2" x="4" y="4" />
                            <Rect height="4" width="2" x="11" y="4" />
                            <Rect height="4" width="2" x="11" y="10" />
                            <Rect height="4" width="2" x="11" y="16" />
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
                            <Path d="M20,18v-2c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v2h-2c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h2v2c0,0.55,0.45,1,1,1h0 c0.55,0,1-0.45,1-1v-2h2c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H20z" />
                            <Path d="M19,4L19,4c-0.55,0-1,0.45-1,1v7c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1V5C20,4.45,19.55,4,19,4z" />
                            <Path d="M5,20L5,20c0.55,0,1-0.45,1-1V5c0-0.55-0.45-1-1-1h0C4.45,4,4,4.45,4,5v14C4,19.55,4.45,20,5,20z" />
                            <Path d="M12,8L12,8c0.55,0,1-0.45,1-1V5c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v2C11,7.55,11.45,8,12,8z" />
                            <Path d="M12,14L12,14c0.55,0,1-0.45,1-1v-2c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v2C11,13.55,11.45,14,12,14z" />
                            <Path d="M12,20L12,20c0.55,0,1-0.45,1-1v-2c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v2C11,19.55,11.45,20,12,20z" />
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
                            <Polygon points="20,18 20,15 18,15 18,18 15,18 15,20 18,20 18,23 20,23 20,20 23,20 23,18" />
                            <Rect height="9" width="2" x="18" y="4" />
                            <Rect height="16" width="2" x="4" y="4" />
                            <Rect height="4" width="2" x="11" y="4" />
                            <Rect height="4" width="2" x="11" y="10" />
                            <Rect height="4" width="2" x="11" y="16" />
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
                            <Polygon points="20,18 20,15 18,15 18,18 15,18 15,20 18,20 18,23 20,23 20,20 23,20 23,18" />
                            <Rect height="9" width="2" x="18" y="4" />
                            <Rect height="16" width="2" x="4" y="4" />
                            <Rect height="4" width="2" x="11" y="4" />
                            <Rect height="4" width="2" x="11" y="10" />
                            <Rect height="4" width="2" x="11" y="16" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
