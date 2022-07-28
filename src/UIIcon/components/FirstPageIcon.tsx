import React from 'react';
import { Path } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconFirstPage(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z" />
                    <Path d="M24 24H0V0h24v24z" fill="none" />
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M24 0v24H0V0h24z" fill="none" opacity=".87" />
                    <Path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6 1.41-1.41zM6 6h2v12H6V6z" />
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M24 0v24H0V0h24z" fill="none" opacity=".87" />
                    <Path d="M17.7 15.89L13.82 12l3.89-3.89c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0l-4.59 4.59c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .38-.38.38-1.02-.01-1.4zM7 6c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1z" />
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M24 0v24H0V0h24z" fill="none" opacity=".87" />
                    <Path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6 1.41-1.41zM6 6h2v12H6V6z" />
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M24 0v24H0V0h24z" fill="none" opacity=".87" />
                    <Path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6 1.41-1.41zM6 6h2v12H6V6z" />
                </Icon>
            );
    }
}
