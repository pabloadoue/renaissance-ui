import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconFileDifference(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <Path d="M18,23H4c-1.1,0-2-0.9-2-2V7h2v14h14V23z M15,1H8C6.9,1,6.01,1.9,6.01,3L6,17c0,1.1,0.89,2,1.99,2H19c1.1,0,2-0.9,2-2V7 L15,1z M16.5,15h-6v-2h6V15z M16.5,9h-2v2h-2V9h-2V7h2V5h2v2h2V9z" />
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
                        <Path d="M18,23H4c-1.1,0-2-0.9-2-2V7h2v14h14V23z M14.5,7V5h-2v2h-2v2h2v2h2V9h2V7H14.5z M16.5,13h-6v2h6V13z M15,1H8 C6.9,1,6.01,1.9,6.01,3L6,17c0,1.1,0.89,2,1.99,2H19c1.1,0,2-0.9,2-2V7L15,1z M19,17H8V3h6.17L19,7.83V17z" />
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
                        <Path d="M3,7c0.55,0,1,0.45,1,1v13h13c0.55,0,1,0.45,1,1s-0.45,1-1,1H4c-1.1,0-2-0.9-2-2V8C2,7.45,2.45,7,3,7z M15.59,1.59 C15.21,1.21,14.7,1,14.17,1H8C6.9,1,6.01,1.9,6.01,3L6,17c0,1.1,0.89,2,1.99,2H19c1.1,0,2-0.9,2-2V7.83c0-0.53-0.21-1.04-0.59-1.41 L15.59,1.59z M15.5,15h-4c-0.55,0-1-0.45-1-1v0c0-0.55,0.45-1,1-1h4c0.55,0,1,0.45,1,1v0C16.5,14.55,16.05,15,15.5,15z M15.5,9h-1 v1c0,0.55-0.45,1-1,1h0c-0.55,0-1-0.45-1-1V9h-1c-0.55,0-1-0.45-1-1v0c0-0.55,0.45-1,1-1h1V6c0-0.55,0.45-1,1-1h0 c0.55,0,1,0.45,1,1v1h1c0.55,0,1,0.45,1,1v0C16.5,8.55,16.05,9,15.5,9z" />
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
                        <Path d="M18,23H2V7h2v14h14V23z M15,1H6.01L6,19h15V7L15,1z M16.5,15h-6v-2h6V15z M16.5,9h-2v2h-2V9h-2V7h2V5h2v2h2V9z" />
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
                        <Path d="M18,23H4c-1.1,0-2-0.9-2-2V7h2v14h14V23z M14.5,7V5h-2v2h-2v2h2v2h2V9h2V7H14.5z M16.5,13h-6v2h6V13z M15,1H8 C6.9,1,6.01,1.9,6.01,3L6,17c0,1.1,0.89,2,1.99,2H19c1.1,0,2-0.9,2-2V7L15,1z M19,17H8V3h6.17L19,7.83V17z" />
                    </G>
                </Icon>
            );
    }
}
