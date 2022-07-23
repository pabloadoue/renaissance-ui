import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconEditorAddChart(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0z" fill="none" />
                    <Path d="M6 9.99h2v7H6zm8 3h2v4h-2zm-4-6h2v10h-2zM20 7V4h-2v3h-3v2h3v3h2V9h3V7zm-2 12H4V5h12V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5h-2v5z" />
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
                            <Path d="M19,19H5V5h9V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2v-9h-2V19z" />
                            <Rect height="4" width="2" x="15" y="13" />
                            <Rect height="7" width="2" x="7" y="10" />
                            <Rect height="10" width="2" x="11" y="7" />
                            <Polygon points="19,5 19,3 17,3 17,5 15,5 15,7 17,7 17,9 19,9 19,7 21,7 21,5" />
                        </G>
                    </G>
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <Path d="M16,17c0.55,0,1-0.45,1-1v-2c0-0.55-0.45-1-1-1s-1,0.45-1,1v2C15,16.55,15.45,17,16,17z" />
                            <Path d="M20,10c-0.55,0-1,0.45-1,1v8H5V5h8c0.55,0,1-0.45,1-1s-0.45-1-1-1H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14 c1.1,0,2-0.9,2-2v-8C21,10.45,20.55,10,20,10z" />
                            <Path d="M7,11v5c0,0.55,0.45,1,1,1s1-0.45,1-1v-5c0-0.55-0.45-1-1-1S7,10.45,7,11z" />
                            <Path d="M11,8v8c0,0.55,0.45,1,1,1s1-0.45,1-1V8c0-0.55-0.45-1-1-1S11,7.45,11,8z" />
                            <Path d="M16,7h1v1c0,0.55,0.45,1,1,1s1-0.45,1-1V7h1c0.55,0,1-0.45,1-1s-0.45-1-1-1h-1V4c0-0.55-0.45-1-1-1s-1,0.45-1,1v1h-1 c-0.55,0-1,0.45-1,1S15.45,7,16,7z" />
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
                            <Polygon points="19,19 5,19 5,5 14,5 14,3 3,3 3,21 21,21 21,10 19,10" />
                            <Rect height="10" width="2" x="11" y="7" />
                            <Rect height="4" width="2" x="15" y="13" />
                            <Rect height="7" width="2" x="7" y="10" />
                            <Polygon points="19,5 19,3 17,3 17,5 15,5 15,7 17,7 17,9 19,9 19,7 21,7 21,5" />
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
                            <Path d="M19,19H5V5h9V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2v-9h-2V19z" />
                            <Rect height="4" width="2" x="15" y="13" />
                            <Rect height="7" width="2" x="7" y="10" />
                            <Rect height="10" width="2" x="11" y="7" />
                            <Polygon points="19,5 19,3 17,3 17,5 15,5 15,7 17,7 17,9 19,9 19,7 21,7 21,5" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
