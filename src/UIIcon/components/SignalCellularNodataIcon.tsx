import React from 'react';
import { G, Path } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconSignalCellularNodata(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Path d="M0,0h24v24H0V0z" fill="none" />
                    </G>
                    <G>
                        <G>
                            <Path d="M22,13h-9v9H2L22,2V13z M21,15.41L19.59,14l-2.09,2.09L15.41,14L14,15.41l2.09,2.09L14,19.59L15.41,21l2.09-2.08L19.59,21 L21,19.59l-2.08-2.09L21,15.41z" />
                        </G>
                    </G>
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Path d="M0,0h24v24H0V0z" fill="none" />
                    </G>
                    <G>
                        <G>
                            <Path d="M22,13h-9v9H2L22,2V13z M21,15.41L19.59,14l-2.09,2.09L15.41,14L14,15.41l2.09,2.09L14,19.59L15.41,21l2.09-2.08L19.59,21 L21,19.59l-2.08-2.09L21,15.41z" />
                        </G>
                    </G>
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Path d="M0,0h24v24H0V0z" fill="none" />
                    </G>
                    <G>
                        <G>
                            <Path d="M22,13h-7c-1.1,0-2,0.9-2,2v7H4.41c-0.89,0-1.34-1.08-0.71-1.71L20.29,3.71C20.92,3.08,22,3.52,22,4.41V13z M20.3,14.71 L20.3,14.71c-0.39-0.39-1.02-0.39-1.41,0l-1.39,1.39l-1.39-1.39c-0.39-0.39-1.02-0.39-1.41,0l0,0c-0.39,0.39-0.39,1.02,0,1.41 l1.39,1.39l-1.39,1.39c-0.39,0.39-0.39,1.02,0,1.41l0,0c0.39,0.39,1.02,0.39,1.41,0l1.39-1.38l1.39,1.38 c0.39,0.39,1.02,0.39,1.41,0l0,0c0.39-0.39,0.39-1.02,0-1.41l-1.38-1.39l1.38-1.39C20.69,15.73,20.69,15.1,20.3,14.71z" />
                        </G>
                    </G>
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Path d="M0,0h24v24H0V0z" fill="none" />
                    </G>
                    <G>
                        <G>
                            <Path d="M22,13h-9v9H2L22,2V13z M21,15.41L19.59,14l-2.09,2.09L15.41,14L14,15.41l2.09,2.09L14,19.59L15.41,21l2.09-2.08L19.59,21 L21,19.59l-2.08-2.09L21,15.41z" />
                        </G>
                    </G>
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Path d="M0,0h24v24H0V0z" fill="none" />
                    </G>
                    <G>
                        <G>
                            <Path d="M22,13h-9v9H2L22,2V13z M21,15.41L19.59,14l-2.09,2.09L15.41,14L14,15.41l2.09,2.09L14,19.59L15.41,21l2.09-2.08L19.59,21 L21,19.59l-2.08-2.09L21,15.41z" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
