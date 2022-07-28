import React from 'react';
import { Path } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconExposure(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path
                        d="M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z"
                        fill="none"
                    />
                    <Path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM6 7h5v1.5H6V7zm13 12H5L19 5v14zm-4.5-3v2H16v-2h2v-1.5h-2v-2h-1.5v2h-2V16z" />
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0z" fill="none" />
                    <Path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1.41 2L5 17.59V5h12.59zM6.41 19L19 6.41V19H6.41zM6 7h5v1.5H6zm10 5.5h-1.5v2h-2V16h2v2H16v-2h2v-1.5h-2z" />
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0z" fill="none" />
                    <Path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM6.75 7h3.5c.41 0 .75.34.75.75s-.34.75-.75.75h-3.5c-.41 0-.75-.34-.75-.75S6.34 7 6.75 7zM18 19H5L19 5v13c0 .55-.45 1-1 1zm-3.5-3v1.25c0 .41.34.75.75.75s.75-.34.75-.75V16h1.25c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H16v-1.25c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.25h-1.25c-.41 0-.75.34-.75.75s.34.75.75.75h1.25z" />
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0z" fill="none" />
                    <Path d="M21 3H3v18h18V3zM6 7h5v1.5H6V7zm13 12H5L19 5v14zm-4.5-3v2H16v-2h2v-1.5h-2v-2h-1.5v2h-2V16h2z" />
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0z" fill="none" />
                    <Path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1.41 2L5 17.59V5h12.59zM6.41 19L19 6.41V19H6.41zM6 7h5v1.5H6zm10 5.5h-1.5v2h-2V16h2v2H16v-2h2v-1.5h-2z" />
                </Icon>
            );
    }
}
