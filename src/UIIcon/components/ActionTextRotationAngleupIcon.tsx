import React from 'react';
import { Path } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconActionTextRotationAngleup(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0z" fill="none" />
                    <Path d="M4.49 4.21L3.43 5.27 7.85 16.4l1.48-1.48-.92-2.19 3.54-3.54 2.19.92 1.48-1.48L4.49 4.21zm3.09 6.8L5.36 6.14l4.87 2.23-2.65 2.64zm12.99-1.68h-4.24l1.41 1.41-8.84 8.84L10.32 21l8.84-8.84 1.41 1.41V9.33z" />
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path
                        d="M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z"
                        fill="none"
                    />
                    <Path d="M16.76 9l1.41 1.41-9.19 9.19 1.41 1.41 9.19-9.19L21 13.24V9h-4.24zm-8.28 3.75l3.54-3.54 2.19.92 1.48-1.48L4.56 4.23 3.5 5.29l4.42 11.14 1.48-1.48-.92-2.2zm-.82-1.72L5.43 6.16l4.87 2.23-2.64 2.64z" />
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path
                        d="M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z"
                        fill="none"
                    />
                    <Path d="M17.61 9.85l.56.56-8.48 8.49c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l8.49-8.49.56.56c.31.32.85.1.85-.34V9.5c0-.28-.22-.5-.5-.5h-2.54c-.44 0-.66.54-.35.85zm-9.13 2.9l3.54-3.54 1.6.67c.36.15.77.07 1.05-.21.49-.49.32-1.31-.32-1.57L5.26 4.5c-.43-.16-.91-.06-1.23.26-.32.32-.42.8-.25 1.23l3.61 9.09c.25.64 1.08.81 1.57.32.28-.28.36-.69.21-1.05l-.69-1.6zm-.82-1.72L5.43 6.16l4.87 2.23-2.64 2.64z" />
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path
                        d="M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z"
                        fill="none"
                    />
                    <Path d="M16.76 9l1.41 1.41-9.19 9.19 1.41 1.41 9.19-9.19L21 13.24V9h-4.24zm-8.28 3.75l3.54-3.54 2.19.92 1.48-1.48L4.56 4.23 3.5 5.29l4.42 11.14 1.48-1.48-.92-2.2zm-.82-1.72L5.43 6.16l4.87 2.23-2.64 2.64z" />
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path
                        d="M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z"
                        fill="none"
                    />
                    <Path d="M16.76 9l1.41 1.41-9.19 9.19 1.41 1.41 9.19-9.19L21 13.24V9h-4.24zm-8.28 3.75l3.54-3.54 2.19.92 1.48-1.48L4.56 4.23 3.5 5.29l4.42 11.14 1.48-1.48-.92-2.2zm-.82-1.72L5.43 6.16l4.87 2.23-2.64 2.64z" />
                </Icon>
            );
    }
}
