import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconSwitchAccount(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0z" fill="none" />
                    <Path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H8v-1.5c0-1.99 4-3 6-3s6 1.01 6 3V16z" />
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <Path d="M4,6H2v14c0,1.1,0.9,2,2,2h14v-2H4V6z M14,11c1.66,0,3-1.34,3-3c0-1.66-1.34-3-3-3s-3,1.34-3,3C11,9.66,12.34,11,14,11z M14,7c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S13.45,7,14,7z M20,2H8C6.9,2,6,2.9,6,4v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V4 C22,2.9,21.1,2,20,2z M10.69,16c0.95-0.63,2.09-1,3.31-1s2.36,0.37,3.31,1H10.69z M20,15.73C18.53,14.06,16.4,13,14,13 s-4.53,1.06-6,2.73V4h12V15.73z" />
                    </G>
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <Path d="M17,20H4V7c0-0.55-0.45-1-1-1S2,6.45,2,7v13c0,1.1,0.9,2,2,2h13c0.55,0,1-0.45,1-1S17.55,20,17,20z M20,2H8 C6.9,2,6,2.9,6,4v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M14,5c1.66,0,3,1.34,3,3c0,1.66-1.34,3-3,3 s-3-1.34-3-3C11,6.34,12.34,5,14,5z M7.76,16c1.47-1.83,3.71-3,6.24-3s4.77,1.17,6.24,3H7.76z" />
                    </G>
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <Path d="M4,6H2v16h16v-2H4V6z M6,2v16h16V2H6z M14,5c1.66,0,3,1.34,3,3c0,1.66-1.34,3-3,3s-3-1.34-3-3C11,6.34,12.34,5,14,5z M7.76,16c1.47-1.83,3.71-3,6.24-3s4.77,1.17,6.24,3H7.76z" />
                    </G>
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <Path d="M4,6H2v14c0,1.1,0.9,2,2,2h14v-2H4V6z M14,11c1.66,0,3-1.34,3-3c0-1.66-1.34-3-3-3s-3,1.34-3,3C11,9.66,12.34,11,14,11z M14,7c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S13.45,7,14,7z M20,2H8C6.9,2,6,2.9,6,4v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V4 C22,2.9,21.1,2,20,2z M10.69,16c0.95-0.63,2.09-1,3.31-1s2.36,0.37,3.31,1H10.69z M20,15.73C18.53,14.06,16.4,13,14,13 s-4.53,1.06-6,2.73V4h12V15.73z" />
                    </G>
                </Icon>
            );
    }
}
