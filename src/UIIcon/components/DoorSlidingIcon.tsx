import React from 'react';
import { G, Path } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconDoorSliding(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Path d="M0,0h24v24H0V0z" fill="none" />
                    </G>
                    <G>
                        <Path d="M20,19V5c0-1.1-0.9-2-2-2h-5.25v16h-1.5V3H6C4.9,3,4,3.9,4,5v14H3v2h18v-2H20z M10,13H8v-2h2V13z M16,13h-2v-2h2V13z" />
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
                        <Path d="M10,13H8v-2h2V13z M16,11h-2v2h2V11z M21,19v2H3v-2h1V5c0-1.1,0.9-2,2-2h12c1.1,0,2,0.9,2,2v14H21z M11,5H6v14h5V5z M18,5 h-5v14h5V5z" />
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
                        <Path d="M20,19V5c0-1.1-0.9-2-2-2h-5.25v16h-1.5V3H6C4.9,3,4,3.9,4,5v14c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1h16 c0.55,0,1-0.45,1-1C21,19.45,20.55,19,20,19z M9,13c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1s1,0.45,1,1C10,12.55,9.55,13,9,13z M15,13c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1s1,0.45,1,1C16,12.55,15.55,13,15,13z" />
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
                        <Path d="M20,19V3h-7.25v16h-1.5V3H4v16H3v2h18v-2H20z M10,13H8v-2h2V13z M16,13h-2v-2h2V13z" />
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
                        <Path d="M10,13H8v-2h2V13z M16,11h-2v2h2V11z M21,19v2H3v-2h1V5c0-1.1,0.9-2,2-2h12c1.1,0,2,0.9,2,2v14H21z M11,5H6v14h5V5z M18,5 h-5v14h5V5z" />
                    </G>
                </Icon>
            );
    }
}
