import React from 'react';
import { Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconSocialCo2(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M14,9h-3c-0.55,0-1,0.45-1,1v4c0,0.55,0.45,1,1,1h3c0.55,0,1-0.45,1-1v-4C15,9.45,14.55,9,14,9z M13.5,13.5h-2v-3h2V13.5z M8,13v1c0,0.55-0.45,1-1,1H4c-0.55,0-1-0.45-1-1v-4c0-0.55,0.45-1,1-1h3c0.55,0,1,0.45,1,1v1H6.5v-0.5h-2v3h2V13H8z M20.5,15.5h-2 v1h3V18H17v-2.5c0-0.55,0.45-1,1-1h2v-1h-3V12h3.5c0.55,0,1,0.45,1,1v1.5C21.5,15.05,21.05,15.5,20.5,15.5z" />
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M14,9h-3c-0.55,0-1,0.45-1,1v4c0,0.55,0.45,1,1,1h3c0.55,0,1-0.45,1-1v-4C15,9.45,14.55,9,14,9z M13.5,13.5h-2v-3h2V13.5z M8,13v1c0,0.55-0.45,1-1,1H4c-0.55,0-1-0.45-1-1v-4c0-0.55,0.45-1,1-1h3c0.55,0,1,0.45,1,1v1H6.5v-0.5h-2v3h2V13H8z M20.5,15.5h-2 v1h3V18H17v-2.5c0-0.55,0.45-1,1-1h2v-1h-3V12h3.5c0.55,0,1,0.45,1,1v1.5C21.5,15.05,21.05,15.5,20.5,15.5z" />
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M14,9h-3c-0.55,0-1,0.45-1,1v4c0,0.55,0.45,1,1,1h3c0.55,0,1-0.45,1-1v-4C15,9.45,14.55,9,14,9z M13.5,13.5h-2v-3h2V13.5z M20.5,15.5h-2v1h2.25c0.41,0,0.75,0.34,0.75,0.75l0,0c0,0.41-0.34,0.75-0.75,0.75H18c-0.55,0-1-0.45-1-1v-1.5c0-0.55,0.45-1,1-1h2 v-1h-2.25c-0.41,0-0.75-0.34-0.75-0.75v0c0-0.41,0.34-0.75,0.75-0.75h2.75c0.55,0,1,0.45,1,1v1.5C21.5,15.05,21.05,15.5,20.5,15.5z M8,14c0,0.55-0.45,1-1,1H4c-0.55,0-1-0.45-1-1v-4c0-0.55,0.45-1,1-1h3c0.55,0,1,0.45,1,1v0.25C8,10.66,7.66,11,7.25,11 c-0.33,0-0.6-0.21-0.71-0.5c0,0-2.04,0-2.04,0v3l2.04,0c0.1-0.29,0.38-0.5,0.71-0.5C7.66,13,8,13.34,8,13.75V14z" />
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M15,9h-5v6h5V9z M13.5,13.5h-2v-3h2V13.5z M8,13v2H3V9h5v2H6.5v-0.5h-2v3h2V13H8z M18.5,15.5v1h3V18H17v-3.5h3v-1h-3V12h4.5 v3.5H18.5z" />
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M14,9h-3c-0.55,0-1,0.45-1,1v4c0,0.55,0.45,1,1,1h3c0.55,0,1-0.45,1-1v-4C15,9.45,14.55,9,14,9z M13.5,13.5h-2v-3h2V13.5z M8,13v1c0,0.55-0.45,1-1,1H4c-0.55,0-1-0.45-1-1v-4c0-0.55,0.45-1,1-1h3c0.55,0,1,0.45,1,1v1H6.5v-0.5h-2v3h2V13H8z M20.5,15.5h-2 v1h3V18H17v-2.5c0-0.55,0.45-1,1-1h2v-1h-3V12h3.5c0.55,0,1,0.45,1,1v1.5C21.5,15.05,21.05,15.5,20.5,15.5z" />
                </Icon>
            );
    }
}
