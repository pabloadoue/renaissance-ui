import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconPentagon(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <Polygon points="2,9 6,21 18,21 22,9 12,2" />
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
                        <Path d="M19.63,9.78L16.56,19H7.44L4.37,9.78L12,4.44L19.63,9.78z M2,9l4,12h12l4-12L12,2L2,9z" />
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
                        <Path d="M2.47,10.42l3.07,9.22C5.82,20.45,6.58,21,7.44,21h9.12c0.86,0,1.63-0.55,1.9-1.37l3.07-9.22 c0.28-0.84-0.03-1.76-0.75-2.27L13.15,2.8c-0.69-0.48-1.61-0.48-2.29,0L3.22,8.14C2.5,8.65,2.19,9.58,2.47,10.42z" />
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
                        <Polygon points="2,9 6,21 18,21 22,9 12,2" />
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
                        <Path d="M19.63,9.78L16.56,19H7.44L4.37,9.78L12,4.44L19.63,9.78z M2,9l4,12h12l4-12L12,2L2,9z" />
                    </G>
                </Icon>
            );
    }
}
