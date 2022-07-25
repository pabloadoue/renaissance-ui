import React from 'react';
import { Path } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconMenu(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0z" fill="none" />
                    <Path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0z" fill="none" />
                    <Path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0z" fill="none" />
                    <Path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z" />
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0z" fill="none" />
                    <Path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0z" fill="none" />
                    <Path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                </Icon>
            );
    }
}
