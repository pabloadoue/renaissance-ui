import React from 'react';
import { Path } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconPieChartOutlined(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0z" fill="none" />
                    <Path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 2.07c3.61.45 6.48 3.33 6.93 6.93H13V4.07zM4 12c0-4.06 3.07-7.44 7-7.93v15.87c-3.93-.5-7-3.88-7-7.94zm9 7.93V13h6.93c-.45 3.61-3.32 6.48-6.93 6.93z" />
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0z" fill="none" />
                    <Path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 2.07c3.61.45 6.48 3.33 6.93 6.93H13V4.07zM4 12c0-4.06 3.07-7.44 7-7.93v15.87c-3.93-.5-7-3.88-7-7.94zm9 7.93V13h6.93c-.45 3.61-3.32 6.48-6.93 6.93z" />
                </Icon>
            );
    }
}
