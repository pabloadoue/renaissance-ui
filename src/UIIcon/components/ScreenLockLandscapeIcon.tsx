import React from 'react';
import { G, Path } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconScreenLockLandscape(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0z" fill="none" />
                    <Path d="M21 5H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-2 12H5V7h14v10zm-9-1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1v-1c0-1.11-.9-2-2-2-1.11 0-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1zm.8-6c0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2v1h-2.4v-1z" />
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0z" fill="none" />
                    <Path d="M21 5H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-2 12H5V7h14v10zm-9-1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1v-1c0-1.11-.9-2-2-2-1.11 0-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1zm.8-6c0-.66.54-1.2 1.2-1.2s1.2.54 1.2 1.2v1h-2.4v-1z" />
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Path d="M0,0h24v24H0V0z" fill="none" />
                    </G>
                    <G>
                        <Path d="M21,5H3C1.9,5,1.01,5.9,1.01,7L1,17c0,1.1,0.9,2,2,2h18c1.1,0,2-0.9,2-2V7C23,5.9,22.1,5,21,5z M18,17H6V7h12V17z M14,11 v-1c0-1.1-0.9-2-2-2s-2,0.9-2,2v1c-0.55,0-1,0.45-1,1v3c0,0.55,0.45,1,1,1h4c0.55,0,1-0.45,1-1v-3C15,11.45,14.55,11,14,11z M13,11 h-2v-1c0-0.55,0.45-1,1-1s1,0.45,1,1V11z" />
                    </G>
                    <G />
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0z" fill="none" />
                    <Path d="M23 5H1v14h22V5zm-4 12H5V7h14v10zM9 16h6v-5h-1v-.9c0-1-.69-1.92-1.68-2.08C11.07 7.83 10 8.79 10 10v1H9v5zm1.8-6c0-.66.54-1.2 1.2-1.2s1.2.54 1.2 1.2v1h-2.4v-1z" />
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0z" fill="none" />
                    <Path d="M21 5H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-2 12H5V7h14v10zm-9-1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1v-1c0-1.11-.9-2-2-2-1.11 0-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1zm.8-6c0-.66.54-1.2 1.2-1.2s1.2.54 1.2 1.2v1h-2.4v-1z" />
                </Icon>
            );
    }
}
