import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconMapsHomeWork(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Path d="M0,0h24v24H0V0z" fill="none" />
                    </G>
                    <G>
                        <G>
                            <Polygon points="1,11 1,21 6,21 6,15 10,15 10,21 15,21 15,11 8,6" />
                            <Path d="M10,3v1.97l7,5V11h2v2h-2v2h2v2h-2v4h6V3H10z M19,9h-2V7h2V9z" />
                        </G>
                    </G>
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Path d="M0,0h24v24H0V0z" fill="none" />
                    </G>
                    <G>
                        <G>
                            <Rect height="2" width="2" x="17" y="7" />
                            <Rect height="2" width="2" x="17" y="11" />
                            <Rect height="2" width="2" x="17" y="15" />
                            <Path d="M1,11v10h6v-5h2v5h6V11L8,6L1,11z M13,19h-2v-5H5v5H3v-7l5-3.5l5,3.5V19z" />
                            <Polygon points="10,3 10,4.97 12,6.4 12,5 21,5 21,19 17,19 17,21 23,21 23,3" />
                        </G>
                    </G>
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Path d="M0,0h24v24H0V0z" fill="none" />
                    </G>
                    <G>
                        <G>
                            <Path d="M14.16,10.4l-5-3.57c-0.7-0.5-1.63-0.5-2.32,0l-5,3.57C1.31,10.78,1,11.38,1,12.03V20c0,0.55,0.45,1,1,1h4v-6h4v6h4 c0.55,0,1-0.45,1-1v-7.97C15,11.38,14.69,10.78,14.16,10.4z" />
                            <Path d="M21.03,3h-9.06C10.88,3,10,3.88,10,4.97l0.09,0.09c0.08,0.05,0.16,0.09,0.24,0.14l5,3.57c0.76,0.54,1.3,1.34,1.54,2.23H19 v2h-2v2h2v2h-2v3v1h4.03c1.09,0,1.97-0.88,1.97-1.97V4.97C23,3.88,22.12,3,21.03,3z M19,9h-2V7h2V9z" />
                        </G>
                    </G>
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Path d="M0,0h24v24H0V0z" fill="none" />
                    </G>
                    <G>
                        <G>
                            <Polygon points="1,11 1,21 6,21 6,15 10,15 10,21 15,21 15,11 8,6" />
                            <Path d="M10,3v1.97l7,5V11h2v2h-2v2h2v2h-2v4h6V3H10z M19,9h-2V7h2V9z" />
                        </G>
                    </G>
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Path d="M0,0h24v24H0V0z" fill="none" />
                    </G>
                    <G>
                        <G>
                            <Rect height="2" width="2" x="17" y="7" />
                            <Rect height="2" width="2" x="17" y="11" />
                            <Rect height="2" width="2" x="17" y="15" />
                            <Path d="M1,11v10h6v-5h2v5h6V11L8,6L1,11z M13,19h-2v-5H5v5H3v-7l5-3.5l5,3.5V19z" />
                            <Polygon points="10,3 10,4.97 12,6.4 12,5 21,5 21,19 17,19 17,21 23,21 23,3" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
