import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconAnalytics(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0z" fill="none" />
                    <Path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-5h2v5zm4 0h-2v-3h2v3zm0-5h-2v-2h2v2zm4 5h-2V7h2v10z" />
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                        <G>
                            <Path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z" />
                            <Rect height="5" width="2" x="7" y="12" />
                            <Rect height="10" width="2" x="15" y="7" />
                            <Rect height="3" width="2" x="11" y="14" />
                            <Rect height="2" width="2" x="11" y="10" />
                        </G>
                    </G>
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                        <Path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M8,17L8,17c-0.55,0-1-0.45-1-1v-3 c0-0.55,0.45-1,1-1s1,0.45,1,1v3C9,16.55,8.55,17,8,17z M12,17L12,17c-0.55,0-1-0.45-1-1v-1c0-0.55,0.45-1,1-1s1,0.45,1,1v1 C13,16.55,12.55,17,12,17z M12,12c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S12.55,12,12,12z M16,17L16,17c-0.55,0-1-0.45-1-1V8 c0-0.55,0.45-1,1-1s1,0.45,1,1v8C17,16.55,16.55,17,16,17z" />
                    </G>
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Rect fill="none" height="5" width="2" x="7" y="12" />
                    <Rect fill="none" height="3" width="2" x="11" y="14" />
                    <Rect fill="none" height="10" width="2" x="15" y="7" />
                    <Path d="M3,3v18h18V3H3z M9,17H7v-5h2V17z M13,17h-2v-3h2V17z M13,12h-2v-2h2V12z M17,17h-2V7h2V17z" />
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                        <G>
                            <Path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z" />
                            <Rect height="5" width="2" x="7" y="12" />
                            <Rect height="10" width="2" x="15" y="7" />
                            <Rect height="3" width="2" x="11" y="14" />
                            <Rect height="2" width="2" x="11" y="10" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
