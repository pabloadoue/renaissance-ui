import React from 'react';
import { G, Path, Polygon } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconDashboardCustomize(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0z" fill="none" />
                    <Path d="M3 3h8v8H3zm10 0h8v8h-8zM3 13h8v8H3zm15 0h-2v3h-3v2h3v3h2v-3h3v-2h-3z" />
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
                            <Path d="M3,11h8V3H3V11z M5,5h4v4H5V5z" />
                            <Path d="M13,3v8h8V3H13z M19,9h-4V5h4V9z" />
                            <Path d="M3,21h8v-8H3V21z M5,15h4v4H5V15z" />
                            <Polygon points="18,13 16,13 16,16 13,16 13,18 16,18 16,21 18,21 18,18 21,18 21,16 18,16" />
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
                        <Path d="M4,3h6c0.55,0,1,0.45,1,1v6c0,0.55-0.45,1-1,1H4c-0.55,0-1-0.45-1-1V4C3,3.45,3.45,3,4,3z M14,3h6c0.55,0,1,0.45,1,1v6 c0,0.55-0.45,1-1,1h-6c-0.55,0-1-0.45-1-1V4C13,3.45,13.45,3,14,3z M4,13h6c0.55,0,1,0.45,1,1v6c0,0.55-0.45,1-1,1H4 c-0.55,0-1-0.45-1-1v-6C3,13.45,3.45,13,4,13z M17,13L17,13c-0.55,0-1,0.45-1,1v2h-2c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h2v2 c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-2h2c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1h-2v-2C18,13.45,17.55,13,17,13z" />
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
                        <Path d="M3,3h8v8H3V3z M13,3h8v8h-8V3z M3,13h8v8H3V13z M18,13h-2v3h-3v2h3v3h2v-3h3v-2h-3V13z" />
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
                            <Path d="M3,11h8V3H3V11z M5,5h4v4H5V5z" />
                            <Path d="M13,3v8h8V3H13z M19,9h-4V5h4V9z" />
                            <Path d="M3,21h8v-8H3V21z M5,15h4v4H5V15z" />
                            <Polygon points="18,13 16,13 16,16 13,16 13,18 16,18 16,21 18,21 18,18 21,18 21,16 18,16" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
