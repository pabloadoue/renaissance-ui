import React from 'react';
import { Path } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconWifi(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0z" fill="none" />
                    <Path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
                    <Path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
                    <Path d="M2.06 10.06c.51.51 1.32.56 1.87.1 4.67-3.84 11.45-3.84 16.13-.01.56.46 1.38.42 1.89-.09.59-.59.55-1.57-.1-2.1-5.71-4.67-13.97-4.67-19.69 0-.65.52-.7 1.5-.1 2.1zm7.76 7.76l1.47 1.47c.39.39 1.02.39 1.41 0l1.47-1.47c.47-.47.37-1.28-.23-1.59-1.22-.63-2.68-.63-3.91 0-.57.31-.68 1.12-.21 1.59zm-3.73-3.73c.49.49 1.26.54 1.83.13 2.44-1.73 5.72-1.73 8.16 0 .57.4 1.34.36 1.83-.13l.01-.01c.6-.6.56-1.62-.13-2.11-3.44-2.49-8.13-2.49-11.58 0-.69.5-.73 1.51-.12 2.12z" />
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
                    <Path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
                    <Path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
                </Icon>
            );
    }
}
