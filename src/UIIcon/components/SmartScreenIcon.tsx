import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconSmartScreen(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" y="0" />
                    </G>
                    <G>
                        <G>
                            <Path d="M21,5H3C1.9,5,1,5.9,1,7v10c0,1.1,0.9,2,2,2h18c1.1,0,2-0.9,2-2V7C23,5.9,22.1,5,21,5z M18,17H6V7h12V17z" />
                            <Rect height="1.5" width="1.5" x="15" y="11.25" />
                            <Rect height="1.5" width="1.5" x="12.5" y="11.25" />
                            <Rect height="1.5" width="1.5" x="10" y="11.25" />
                            <Rect height="1.5" width="1.5" x="7.5" y="11.25" />
                        </G>
                    </G>
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" y="0" />
                    </G>
                    <G>
                        <G>
                            <Rect height="1.5" width="1.5" x="12.5" y="11.25" />
                            <Rect height="1.5" width="1.5" x="15" y="11.25" />
                            <Rect height="1.5" width="1.5" x="10" y="11.25" />
                            <Rect height="1.5" width="1.5" x="7.5" y="11.25" />
                            <Path d="M21,5H3C1.9,5,1,5.9,1,7v10c0,1.1,0.9,2,2,2h18c1.1,0,2-0.9,2-2V7C23,5.9,22.1,5,21,5z M4,17H3V7h1V17z M18,17H6V7h12V17z M21,17h-1V7h1V17z" />
                        </G>
                    </G>
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" y="0" />
                    </G>
                    <G>
                        <G>
                            <Path d="M21,5H3C1.9,5,1,5.9,1,7v10c0,1.1,0.9,2,2,2h18c1.1,0,2-0.9,2-2V7C23,5.9,22.1,5,21,5z M18,7v10H6V7H18z M14,12 c0-0.41-0.34-0.75-0.75-0.75S12.5,11.59,12.5,12s0.34,0.75,0.75,0.75S14,12.41,14,12z M9,12c0-0.41-0.34-0.75-0.75-0.75 S7.5,11.59,7.5,12s0.34,0.75,0.75,0.75S9,12.41,9,12z M16.5,12c0-0.41-0.34-0.75-0.75-0.75S15,11.59,15,12s0.34,0.75,0.75,0.75 S16.5,12.41,16.5,12z M11.5,12c0-0.41-0.34-0.75-0.75-0.75S10,11.59,10,12s0.34,0.75,0.75,0.75S11.5,12.41,11.5,12z" />
                        </G>
                    </G>
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" y="0" />
                    </G>
                    <G>
                        <G>
                            <Path d="M1,5v14h22V5H1z M18,17H6V7h12V17z" />
                            <Rect height="1.5" width="1.5" x="12.5" y="11.25" />
                            <Rect height="1.5" width="1.5" x="15" y="11.25" />
                            <Rect height="1.5" width="1.5" x="10" y="11.25" />
                            <Rect height="1.5" width="1.5" x="7.5" y="11.25" />
                        </G>
                    </G>
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" y="0" />
                    </G>
                    <G>
                        <G>
                            <Rect height="1.5" width="1.5" x="12.5" y="11.25" />
                            <Rect height="1.5" width="1.5" x="15" y="11.25" />
                            <Rect height="1.5" width="1.5" x="10" y="11.25" />
                            <Rect height="1.5" width="1.5" x="7.5" y="11.25" />
                            <Path d="M21,5H3C1.9,5,1,5.9,1,7v10c0,1.1,0.9,2,2,2h18c1.1,0,2-0.9,2-2V7C23,5.9,22.1,5,21,5z M4,17H3V7h1V17z M18,17H6V7h12V17z M21,17h-1V7h1V17z" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
