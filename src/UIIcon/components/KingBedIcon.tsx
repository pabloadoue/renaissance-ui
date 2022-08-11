import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconKingBed(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <Rect
                                fill="none"
                                height="3"
                                width="5"
                                x="6"
                                y="7"
                            />
                            <Rect
                                fill="none"
                                height="3"
                                width="5"
                                x="13"
                                y="7"
                            />
                            <Path d="M20,10V7c0-1.1-0.9-2-2-2H6C4.9,5,4,5.9,4,7v3c-1.1,0-2,0.9-2,2v5h1.33L4,19h1l0.67-2h12.67L19,19h1l0.67-2H22v-5 C22,10.9,21.1,10,20,10z M11,10H6V7h5V10z M18,10h-5V7h5V10z" />
                        </G>
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
                        <Path d="M22,12c0-1.1-0.9-2-2-2V7c0-1.1-0.9-2-2-2H6C4.9,5,4,5.9,4,7v3c-1.1,0-2,0.9-2,2v5h1.33L4,19h1l0.67-2h12.67L19,19h1 l0.67-2H22V12z M18,10h-5V7h5V10z M6,7h5v3H6V7z M4,12h16v3H4V12z" />
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
                        <G>
                            <Rect
                                fill="none"
                                height="3"
                                width="5"
                                x="6"
                                y="7"
                            />
                            <Rect
                                fill="none"
                                height="3"
                                width="5"
                                x="13"
                                y="7"
                            />
                            <Path d="M20,10V7c0-1.1-0.9-2-2-2H6C4.9,5,4,5.9,4,7v3c-1.1,0-2,0.9-2,2v5h1.33l0.51,1.53C3.94,18.81,4.2,19,4.5,19h0 c0.3,0,0.56-0.19,0.66-0.47L5.67,17h12.67l0.51,1.53C18.94,18.81,19.2,19,19.5,19l0,0c0.3,0,0.56-0.19,0.66-0.47L20.67,17H22v-5 C22,10.9,21.1,10,20,10z M11,10H6V8c0-0.55,0.45-1,1-1h4V10z M18,10h-5V7h4c0.55,0,1,0.45,1,1V10z" />
                        </G>
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
                        <G>
                            <Rect
                                fill="none"
                                height="3"
                                width="5"
                                x="6"
                                y="7"
                            />
                            <Rect
                                fill="none"
                                height="3"
                                width="5"
                                x="13"
                                y="7"
                            />
                            <Path d="M20,10V5H4v5H2v7h1.33L4,19h1l0.67-2h12.67L19,19h1l0.67-2H22v-7H20z M11,10H6V7h5V10z M18,10h-5V7h5V10z" />
                        </G>
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
                        <Path d="M22,12c0-1.1-0.9-2-2-2V7c0-1.1-0.9-2-2-2H6C4.9,5,4,5.9,4,7v3c-1.1,0-2,0.9-2,2v5h1.33L4,19h1l0.67-2h12.67L19,19h1 l0.67-2H22V12z M18,10h-5V7h5V10z M6,7h5v3H6V7z M4,12h16v3H4V12z" />
                    </G>
                </Icon>
            );
    }
}
