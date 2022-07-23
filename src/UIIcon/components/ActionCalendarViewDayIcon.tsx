import React from 'react';
import { Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconActionCalendarViewDay(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0z" fill="none" />
                    <Path d="M3 17h18v2H3zm0-7h18v5H3zm0-4h18v2H3z" />
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0z" fill="none" />
                    <Path d="M3 17h18v2H3zm16-5v1H5v-1h14m2-2H3v5h18v-5zM3 6h18v2H3z" />
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M5,7h14c1.1,0,2,0.9,2,2v6c0,1.1-0.9,2-2,2H5c-1.1,0-2-0.9-2-2V9C3,7.9,3.9,7,5,7z M4,3h16c0.55,0,1,0.45,1,1v0 c0,0.55-0.45,1-1,1H4C3.45,5,3,4.55,3,4v0C3,3.45,3.45,3,4,3z M4,19h16c0.55,0,1,0.45,1,1v0c0,0.55-0.45,1-1,1H4c-0.55,0-1-0.45-1-1 v0C3,19.45,3.45,19,4,19z" />
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0z" fill="none" />
                    <Path d="M3 17h18v2H3v-2zm0-7h18v5H3v-5zm0-4h18v2H3V6z" />
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0z" fill="none" />
                    <Path d="M3 17h18v2H3zm16-5v1H5v-1h14m2-2H3v5h18v-5zM3 6h18v2H3z" />
                </Icon>
            );
    }
}
