import React from 'react';
import { Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconEditorVerticalDistribute(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M22,2v2H2V2H22z M7,10.5v3h10v-3H7z M2,20v2h20v-2H2z" />
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M22,2v2H2V2H22z M7,10.5v3h10v-3H7z M2,20v2h20v-2H2z" />
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M22,3L22,3c0,0.55-0.45,1-1,1H3C2.45,4,2,3.55,2,3v0c0-0.55,0.45-1,1-1h18C21.55,2,22,2.45,22,3z M7,12L7,12 c0,0.83,0.67,1.5,1.5,1.5h7c0.83,0,1.5-0.67,1.5-1.5v0c0-0.83-0.67-1.5-1.5-1.5h-7C7.67,10.5,7,11.17,7,12z M2,21L2,21 c0,0.55,0.45,1,1,1h18c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H3C2.45,20,2,20.45,2,21z" />
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M22,2v2H2V2H22z M7,10.5v3h10v-3H7z M2,20v2h20v-2H2z" />
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M22,2v2H2V2H22z M7,10.5v3h10v-3H7z M2,20v2h20v-2H2z" />
                </Icon>
            );
    }
}
