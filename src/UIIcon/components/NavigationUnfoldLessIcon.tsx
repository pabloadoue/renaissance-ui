import React from 'react';
import { Path } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconNavigationUnfoldLess(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0z" fill="none" />
                    <Path d="M7.41 18.59L8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z" />
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M24 0v24H0V0h24z" fill="none" opacity=".87" />
                    <Path d="M7.41 18.59L8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z" />
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M24 0v24H0V0h24z" fill="none" opacity=".87" />
                    <Path d="M8.12 19.3c.39.39 1.02.39 1.41 0L12 16.83l2.47 2.47c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-3.17-3.17c-.39-.39-1.02-.39-1.41 0l-3.17 3.17c-.4.38-.4 1.02-.01 1.41zm7.76-14.6c-.39-.39-1.02-.39-1.41 0L12 7.17 9.53 4.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.03 0 1.42l3.17 3.17c.39.39 1.02.39 1.41 0l3.17-3.17c.4-.39.4-1.03.01-1.42z" />
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M24 0v24H0V0h24z" fill="none" opacity=".87" />
                    <Path d="M7.41 18.59L8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z" />
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M24 0v24H0V0h24z" fill="none" opacity=".87" />
                    <Path d="M7.41 18.59L8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z" />
                </Icon>
            );
    }
}
