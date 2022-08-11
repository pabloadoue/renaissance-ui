import React from 'react';
import { G, Path, Polygon } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconArrowForwardIos(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Path d="M0,0h24v24H0V0z" fill="none" />
                    </G>
                    <G>
                        <Polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12" />
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
                        <Polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12" />
                    </G>
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
                    <Path d="M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31c.39-.39.39-1.02 0-1.41L9.15 2.98c-.49-.49-1.28-.49-1.77 0s-.49 1.28 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76z" />
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Path d="M0,0h24v24H0V0z" fill="none" />
                    </G>
                    <G>
                        <Polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12" />
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
                        <Polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12" />
                    </G>
                </Icon>
            );
    }
}
