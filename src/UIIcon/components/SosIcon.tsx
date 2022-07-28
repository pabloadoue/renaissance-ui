import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconSos(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <Path d="M13.5,7h-3c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h3c1.1,0,2-0.9,2-2V9C15.5,7.9,14.6,7,13.5,7z M13.5,15h-3V9h3V15z M1,15h4 v-2H3c-1.1,0-2-0.9-2-2V9c0-1.1,0.9-2,2-2h4v2H3v2h2c1.1,0,2,0.9,2,2v2c0,1.1-0.9,2-2,2H1V15z M17,15h4v-2h-2c-1.1,0-2-0.9-2-2V9 c0-1.1,0.9-2,2-2h4v2h-4v2h2c1.1,0,2,0.9,2,2v2c0,1.1-0.9,2-2,2h-4V15z" />
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
                        <Path d="M13.5,7h-3c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h3c1.1,0,2-0.9,2-2V9C15.5,7.9,14.6,7,13.5,7z M13.5,15h-3V9h3V15z M1,15h4 v-2H3c-1.1,0-2-0.9-2-2V9c0-1.1,0.9-2,2-2h4v2H3v2h2c1.1,0,2,0.9,2,2v2c0,1.1-0.9,2-2,2H1V15z M17,15h4v-2h-2c-1.1,0-2-0.9-2-2V9 c0-1.1,0.9-2,2-2h4v2h-4v2h2c1.1,0,2,0.9,2,2v2c0,1.1-0.9,2-2,2h-4V15z" />
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
                        <Path d="M13.5,7h-3c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h3c1.1,0,2-0.9,2-2V9C15.5,7.9,14.6,7,13.5,7z M13.5,15h-3V9h3V15z M3,9v2h2 c1.1,0,2,0.9,2,2v2c0,1.1-0.9,2-2,2H2c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1h3v-2H3c-1.1,0-2-0.9-2-2V9c0-1.1,0.9-2,2-2h3 c0.55,0,1,0.45,1,1S6.55,9,6,9H3z M19,9v2h2c1.1,0,2,0.9,2,2v2c0,1.1-0.9,2-2,2h-3c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1h3v-2h-2 c-1.1,0-2-0.9-2-2V9c0-1.1,0.9-2,2-2h3c0.55,0,1,0.45,1,1s-0.45,1-1,1H19z" />
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
                        <Path d="M15.5,7h-7v10h7V7z M13.5,15h-3V9h3V15z M1,15h4v-2H1V7h6v2H3v2h4v6H1V15z M17,15h4v-2h-4V7h6v2h-4v2h4v6h-6V15z" />
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
                        <Path d="M13.5,7h-3c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h3c1.1,0,2-0.9,2-2V9C15.5,7.9,14.6,7,13.5,7z M13.5,15h-3V9h3V15z M1,15h4 v-2H3c-1.1,0-2-0.9-2-2V9c0-1.1,0.9-2,2-2h4v2H3v2h2c1.1,0,2,0.9,2,2v2c0,1.1-0.9,2-2,2H1V15z M17,15h4v-2h-2c-1.1,0-2-0.9-2-2V9 c0-1.1,0.9-2,2-2h4v2h-4v2h2c1.1,0,2,0.9,2,2v2c0,1.1-0.9,2-2,2h-4V15z" />
                    </G>
                </Icon>
            );
    }
}
