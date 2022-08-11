import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconMedication(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Path d="M0,0h24v24H0V0z" fill="none" />
                    </G>
                    <G>
                        <G>
                            <Rect height="2" width="12" x="6" y="3" />
                            <Path d="M17,6H7C5.9,6,5,6.9,5,8v11c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V8C19,6.9,18.1,6,17,6z M16,15h-2.5v2.5h-3V15H8v-3h2.5 V9.5h3V12H16V15z" />
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
                            <Path d="M10.5,15H8v-3h2.5V9.5h3V12H16v3h-2.5v2.5h-3V15z M19,8v11c0,1.1-0.9,2-2,2H7c-1.1,0-2-0.9-2-2V8c0-1.1,0.9-2,2-2h10 C18.1,6,19,6.9,19,8z M17,8H7v11h10V8z M18,3H6v2h12V3z" />
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
                            <Path d="M17,3H7C6.45,3,6,3.45,6,4v0c0,0.55,0.45,1,1,1h10c0.55,0,1-0.45,1-1v0C18,3.45,17.55,3,17,3z" />
                            <Path d="M17,6H7C5.9,6,5,6.9,5,8v11c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V8C19,6.9,18.1,6,17,6z M14.5,15h-1v1 c0,0.83-0.67,1.5-1.5,1.5h0c-0.83,0-1.5-0.67-1.5-1.5v-1h-1C8.67,15,8,14.33,8,13.5v0C8,12.67,8.67,12,9.5,12h1v-1 c0-0.83,0.67-1.5,1.5-1.5h0c0.83,0,1.5,0.67,1.5,1.5v1h1c0.83,0,1.5,0.67,1.5,1.5v0C16,14.33,15.33,15,14.5,15z" />
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
                            <Rect height="2" width="12" x="6" y="3" />
                            <Path d="M19,6H5v15h14V6z M16,15h-2.5v2.5h-3V15H8v-3h2.5V9.5h3V12H16V15z" />
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
                            <Path d="M10.5,15H8v-3h2.5V9.5h3V12H16v3h-2.5v2.5h-3V15z M19,8v11c0,1.1-0.9,2-2,2H7c-1.1,0-2-0.9-2-2V8c0-1.1,0.9-2,2-2h10 C18.1,6,19,6.9,19,8z M17,8H7v11h10V8z M18,3H6v2h12V3z" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
