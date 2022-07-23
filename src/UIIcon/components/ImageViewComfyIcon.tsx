import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconImageViewComfy(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <Path d="M2,4v7h20V4H2z M10,20h12v-7H10V20z M2,20h6v-7H2V20z" />
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
                            <Path d="M2,4v16h20V4H2z M4,6h16v5H4V6z M4,18v-5h4v5H4z M10,18v-5h10v5H10z" />
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
                        <Path d="M2,5v5c0,0.55,0.45,1,1,1h18c0.55,0,1-0.45,1-1V5c0-0.55-0.45-1-1-1H3C2.45,4,2,4.45,2,5z M11,20h10c0.55,0,1-0.45,1-1v-5 c0-0.55-0.45-1-1-1H11c-0.55,0-1,0.45-1,1v5C10,19.55,10.45,20,11,20z M3,20h4c0.55,0,1-0.45,1-1v-5c0-0.55-0.45-1-1-1H3 c-0.55,0-1,0.45-1,1v5C2,19.55,2.45,20,3,20z" />
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
                        <Path d="M2,4v7h20V4H2z M10,20h12v-7H10V20z M2,20h6v-7H2V20z" />
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
                            <Path d="M2,4v16h20V4H2z M4,6h16v5H4V6z M4,18v-5h4v5H4z M10,18v-5h10v5H10z" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
