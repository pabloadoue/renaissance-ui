import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconCurrencyRupee(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <Path d="M13.66,7C13.1,5.82,11.9,5,10.5,5L6,5V3h12v2l-3.26,0c0.48,0.58,0.84,1.26,1.05,2L18,7v2l-2.02,0c-0.25,2.8-2.61,5-5.48,5 H9.77l6.73,7h-2.77L7,14v-2h3.5c1.76,0,3.22-1.3,3.46-3L6,9V7L13.66,7z" />
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
                        <G>
                            <Path d="M13.66,7C13.1,5.82,11.9,5,10.5,5L6,5V3h12v2l-3.26,0c0.48,0.58,0.84,1.26,1.05,2L18,7v2l-2.02,0c-0.25,2.8-2.61,5-5.48,5 H9.77l6.73,7h-2.77L7,14v-2h3.5c1.76,0,3.22-1.3,3.46-3L6,9V7L13.66,7z" />
                        </G>
                    </G>
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <Path d="M10.5,14H9.77l5.1,5.31c0.61,0.64,0.16,1.69-0.72,1.69c-0.27,0-0.53-0.11-0.72-0.31L7.4,14.41C7.14,14.15,7,13.79,7,13.43 C7,12.64,7.64,12,8.43,12h2.07c1.76,0,3.22-1.3,3.46-3L7,9C6.45,9,6,8.55,6,8s0.45-1,1-1l6.66,0C13.1,5.82,11.9,5,10.5,5L7,5 C6.45,5,6,4.55,6,4s0.45-1,1-1h10c0.55,0,1,0.45,1,1s-0.45,1-1,1l-2.26,0c0.48,0.58,0.84,1.26,1.05,2L17,7c0.55,0,1,0.45,1,1 s-0.45,1-1,1l-1.02,0C15.72,11.8,13.36,14,10.5,14z" />
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
                            <Path d="M13.66,7C13.1,5.82,11.9,5,10.5,5L6,5V3h12v2l-3.26,0c0.48,0.58,0.84,1.26,1.05,2L18,7v2l-2.02,0c-0.25,2.8-2.61,5-5.48,5 H9.77l6.73,7h-2.77L7,14v-2h3.5c1.76,0,3.22-1.3,3.46-3L6,9V7L13.66,7z" />
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
                        <G>
                            <Path d="M13.66,7C13.1,5.82,11.9,5,10.5,5L6,5V3h12v2l-3.26,0c0.48,0.58,0.84,1.26,1.05,2L18,7v2l-2.02,0c-0.25,2.8-2.61,5-5.48,5 H9.77l6.73,7h-2.77L7,14v-2h3.5c1.76,0,3.22-1.3,3.46-3L6,9V7L13.66,7z" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
