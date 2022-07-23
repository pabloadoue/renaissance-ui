import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconMapsEditRoad(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <Polygon points="18,4 16,4 16,11.9 18,9.9" />
                            <Rect height="16" width="2" x="4" y="4" />
                            <Rect height="4" width="2" x="10" y="4" />
                            <Rect height="4" width="2" x="10" y="10" />
                            <Rect height="4" width="2" x="10" y="16" />
                            <Path d="M22.56,12.59l-1.15-1.15c-0.59-0.59-1.54-0.59-2.12,0L14,16.73V20h3.27l5.29-5.29C23.15,14.12,23.15,13.17,22.56,12.59z M16.58,18.45h-1.03v-1.03L19,13.97L20.03,15L16.58,18.45z" />
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
                            <Polygon points="18,4 16,4 16,11.9 18,9.9" />
                            <Rect height="16" width="2" x="4" y="4" />
                            <Rect height="4" width="2" x="10" y="4" />
                            <Rect height="4" width="2" x="10" y="10" />
                            <Rect height="4" width="2" x="10" y="16" />
                            <Path d="M22.56,12.59l-1.15-1.15c-0.59-0.59-1.54-0.59-2.12,0L14,16.73V20h3.27l5.29-5.29C23.15,14.12,23.15,13.17,22.56,12.59z M16.58,18.45h-1.03v-1.03L19,13.97L20.03,15L16.58,18.45z" />
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
                            <Path d="M17,4L17,4c-0.55,0-1,0.45-1,1v6.9l2-2V5C18,4.45,17.55,4,17,4z" />
                            <Path d="M5,20L5,20c0.55,0,1-0.45,1-1V5c0-0.55-0.45-1-1-1h0C4.45,4,4,4.45,4,5v14C4,19.55,4.45,20,5,20z" />
                            <Path d="M11,8L11,8c0.55,0,1-0.45,1-1V5c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v2C10,7.55,10.45,8,11,8z" />
                            <Path d="M11,14L11,14c0.55,0,1-0.45,1-1v-2c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v2C10,13.55,10.45,14,11,14z" />
                            <Path d="M11,20L11,20c0.55,0,1-0.45,1-1v-2c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v2C10,19.55,10.45,20,11,20z" />
                            <Path d="M22.56,12.59l-1.15-1.15c-0.59-0.59-1.54-0.59-2.12,0L14,16.73v2.77c0,0.28,0.22,0.5,0.5,0.5h2.77l5.29-5.29 C23.15,14.12,23.15,13.17,22.56,12.59z M16.58,18.45h-1.03v-1.03L19,13.97L20.03,15L16.58,18.45z" />
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
                            <Polygon points="18,4 16,4 16,11.9 18,9.9" />
                            <Rect height="16" width="2" x="4" y="4" />
                            <Rect height="4" width="2" x="10" y="4" />
                            <Rect height="4" width="2" x="10" y="10" />
                            <Rect height="4" width="2" x="10" y="16" />
                            <Path d="M22.56,12.59l-1.15-1.15c-0.59-0.59-1.54-0.59-2.12,0L14,16.73V20h3.27l5.29-5.29C23.15,14.12,23.15,13.17,22.56,12.59z M16.58,18.45h-1.03v-1.03L19,13.97L20.03,15L16.58,18.45z" />
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
                            <Polygon points="18,4 16,4 16,11.9 18,9.9" />
                            <Rect height="16" width="2" x="4" y="4" />
                            <Rect height="4" width="2" x="10" y="4" />
                            <Rect height="4" width="2" x="10" y="10" />
                            <Rect height="4" width="2" x="10" y="16" />
                            <Path d="M22.56,12.59l-1.15-1.15c-0.59-0.59-1.54-0.59-2.12,0L14,16.73V20h3.27l5.29-5.29C23.15,14.12,23.15,13.17,22.56,12.59z M16.58,18.45h-1.03v-1.03L19,13.97L20.03,15L16.58,18.45z" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
