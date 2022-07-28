import React from 'react';
import { Path } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconMinimize(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0z" fill="none" />
                    <Path d="M6 19h12v2H6z" />
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0z" fill="none" />
                    <Path d="M6 19h12v2H6v-2z" />
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0z" fill="none" />
                    <Path d="M7 19h10c.55 0 1 .45 1 1s-.45 1-1 1H7c-.55 0-1-.45-1-1s.45-1 1-1z" />
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0z" fill="none" />
                    <Path d="M6 19h12v2H6v-2z" />
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0z" fill="none" />
                    <Path d="M6 19h12v2H6v-2z" />
                </Icon>
            );
    }
}
