import React from 'react';
import { Path } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconLocalBar(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0z" fill="none" />
                    <Path d="M21 5V3H3v2l8 9v5H6v2h12v-2h-5v-5l8-9zM7.43 7L5.66 5h12.69l-1.78 2H7.43z" />
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0z" fill="none" />
                    <Path d="M14.77 9L12 12.11 9.23 9h5.54M21 3H3v2l8 9v5H6v2h12v-2h-5v-5l8-9V3zM7.43 7L5.66 5h12.69l-1.78 2H7.43z" />
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0z" fill="none" />
                    <Path d="M21 4.45c0-.8-.65-1.45-1.45-1.45H4.45C3.65 3 3 3.65 3 4.45c0 .35.13.7.37.96L11 14v5H7c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1h-4v-5l7.63-8.59c.24-.26.37-.61.37-.96zM7.43 7L5.66 5h12.69l-1.78 2H7.43z" />
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0z" fill="none" />
                    <Path d="M21 5V3H3v2l8 9v5H6v2h12v-2h-5v-5l8-9zM7.43 7L5.66 5h12.69l-1.78 2H7.43z" />
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0z" fill="none" />
                    <Path d="M14.77 9L12 12.11 9.23 9h5.54M21 3H3v2l8 9v5H6v2h12v-2h-5v-5l8-9V3zM7.43 7L5.66 5h12.69l-1.78 2H7.43z" />
                </Icon>
            );
    }
}
