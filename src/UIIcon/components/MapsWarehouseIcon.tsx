import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconMapsWarehouse(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <Path d="M22,21V7L12,3L2,7v14h5v-9h10v9H22z M11,19H9v2h2V19z M13,16h-2v2h2V16z M15,19h-2v2h2V19z" />
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
                        <Path d="M20,8.35V19h-2v-8H6v8H4V8.35l8-3.2L20,8.35z M22,21V7L12,3L2,7v14h6v-8h8v8H22z M11,19H9v2h2V19z M13,16h-2v2h2V16z M15,19h-2v2h2V19z" />
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
                        <Path d="M22,19V8.35c0-0.82-0.5-1.55-1.26-1.86l-8-3.2c-0.48-0.19-1.01-0.19-1.49,0l-8,3.2C2.5,6.8,2,7.54,2,8.35V19 c0,1.1,0.9,2,2,2h3v-9h10v9h3C21.1,21,22,20.1,22,19z M11,19H9v2h2V19z M13,16h-2v2h2V16z M15,19h-2v2h2V19z" />
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
                        <Path d="M22,21V7L12,3L2,7v14h5v-9h10v9H22z M11,19H9v2h2V19z M13,16h-2v2h2V16z M15,19h-2v2h2V19z" />
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
                        <Path d="M20,8.35V19h-2v-8H6v8H4V8.35l8-3.2L20,8.35z M22,21V7L12,3L2,7v14h6v-8h8v8H22z M11,19H9v2h2V19z M13,16h-2v2h2V16z M15,19h-2v2h2V19z" />
                    </G>
                </Icon>
            );
    }
}
