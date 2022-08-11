import React from 'react';
import { Path } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconHomeFilled(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0z" fill="none" />
                    <Path d="M12 3L4 9v12h5v-7h6v7h5V9z" />
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0z" fill="none" />
                    <Path d="M12 3L4 9v12h5v-7h6v7h5V9z" />
                </Icon>
            );
    }
}
