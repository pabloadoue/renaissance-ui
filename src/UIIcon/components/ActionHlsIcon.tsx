import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconActionHls(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <Path d="M6.5,9H8v6H6.5v-2.5h-2V15H3V9h1.5v2h2V9z M16.5,15h3c0.55,0,1-0.45,1-1v-1.5c0-0.55-0.45-1-1-1H17v-1h2V11h1.5v-1 c0-0.55-0.45-1-1-1h-3c-0.55,0-1,0.45-1,1v1.5c0,0.55,0.45,1,1,1H19v1h-2V13h-1.5v1C15.5,14.55,15.95,15,16.5,15z M14,15v-1.5h-2.5 V9H10v6H14z" />
                    </G>
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <Path d="M6.5,9H8v6H6.5v-2.5h-2V15H3V9h1.5v2h2V9z M16.5,15h3c0.55,0,1-0.45,1-1v-1.5c0-0.55-0.45-1-1-1H17v-1h2V11h1.5v-1 c0-0.55-0.45-1-1-1h-3c-0.55,0-1,0.45-1,1v1.5c0,0.55,0.45,1,1,1H19v1h-2V13h-1.5v1C15.5,14.55,15.95,15,16.5,15z M14,15v-1.5h-2.5 V9H10v6H14z" />
                    </G>
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <Path d="M10.75,9C10.34,9,10,9.34,10,9.75V14c0,0.55,0.45,1,1,1h2.25c0.41,0,0.75-0.34,0.75-0.75s-0.34-0.75-0.75-0.75H11.5V9.75 C11.5,9.34,11.16,9,10.75,9z M19.04,10.5c0.1,0.29,0.38,0.5,0.71,0.5c0.41,0,0.75-0.34,0.75-0.75V10c0-0.55-0.45-1-1-1h-3 c-0.55,0-1,0.45-1,1v1.5c0,0.55,0.45,1,1,1H19v1h-2.04v0c-0.1-0.29-0.38-0.5-0.71-0.5c-0.41,0-0.75,0.34-0.75,0.75V14 c0,0.55,0.45,1,1,1h3c0.55,0,1-0.45,1-1v-1.5c0-0.55-0.45-1-1-1H17v-1L19.04,10.5z M8,9.75C8,9.34,7.66,9,7.25,9S6.5,9.34,6.5,9.75 V11h-2V9.75C4.5,9.34,4.16,9,3.75,9S3,9.34,3,9.75v4.5C3,14.66,3.34,15,3.75,15s0.75-0.34,0.75-0.75V12.5h2v1.75 C6.5,14.66,6.84,15,7.25,15S8,14.66,8,14.25V9.75z" />
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
                        <Path d="M6.5,9H8v6H6.5v-2.5h-2V15H3V9h1.5v2h2V9z M15.5,15h5v-3.5H17v-1h2V11h1.5V9h-5v3.5H19v1h-2V13h-1.5V15z M14,15v-1.5h-2.5 V9H10v6H14z" />
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
                        <Path d="M6.5,9H8v6H6.5v-2.5h-2V15H3V9h1.5v2h2V9z M16.5,15h3c0.55,0,1-0.45,1-1v-1.5c0-0.55-0.45-1-1-1H17v-1h2V11h1.5v-1 c0-0.55-0.45-1-1-1h-3c-0.55,0-1,0.45-1,1v1.5c0,0.55,0.45,1,1,1H19v1h-2V13h-1.5v1C15.5,14.55,15.95,15,16.5,15z M14,15v-1.5h-2.5 V9H10v6H14z" />
                    </G>
                </Icon>
            );
    }
}
