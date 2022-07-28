import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconRollerShadesClosed(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <Path d="M20,19V3H4v16H2v2h8.25c0,0.97,0.78,1.75,1.75,1.75s1.75-0.78,1.75-1.75H22v-2H20z M6,19v-2h5v2H6z M13,19v-2h5v2H13z" />
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
                        <Path d="M20,19V3H4v16H2v2h8.25c0,0.97,0.78,1.75,1.75,1.75s1.75-0.78,1.75-1.75H22v-2H20z M18,5v10H6V5H18z M6,19v-2h5v2H6z M13,19v-2h5v2H13z" />
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
                            <Path d="M20,19V5c0-1.1-0.9-2-2-2H6C4.9,3,4,3.9,4,5v14H3c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h7.25 c0,0.97,0.78,1.75,1.75,1.75s1.75-0.78,1.75-1.75H21c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H20z M6,19v-2h5v2H6z M13,19v-2h5v2H13 z" />
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
                            <Path d="M20,19V3H4v16H2v2h8.25c0,0.97,0.78,1.75,1.75,1.75s1.75-0.78,1.75-1.75H22v-2H20z M6,19v-2h5v2H6z M13,19v-2h5v2H13z" />
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
                        <Path d="M20,19V3H4v16H2v2h8.25c0,0.97,0.78,1.75,1.75,1.75s1.75-0.78,1.75-1.75H22v-2H20z M18,5v10H6V5H18z M6,19v-2h5v2H6z M13,19v-2h5v2H13z" />
                    </G>
                </Icon>
            );
    }
}
