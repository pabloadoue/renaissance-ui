import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconCurrencyYuan(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <Polygon points="13.28,12 18,12 18,14 13,14 13,21 11,21 11,14 6,14 6,12 10.72,12 5,3 7.37,3 12,10.29 16.63,3 19,3" />
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
                        <Polygon points="13.28,12 18,12 18,14 13,14 13,21 11,21 11,14 6,14 6,12 10.72,12 5,3 7.37,3 12,10.29 16.63,3 19,3" />
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
                        <Path d="M12,21c-0.55,0-1-0.45-1-1v-6H7c-0.55,0-1-0.45-1-1s0.45-1,1-1h3.72L5.98,4.54C5.55,3.87,6.03,3,6.82,3 c0.34,0,0.66,0.17,0.84,0.46L12,10.29l4.34-6.83C16.52,3.17,16.84,3,17.18,3c0.79,0,1.27,0.87,0.84,1.54L13.28,12H17 c0.55,0,1,0.45,1,1s-0.45,1-1,1h-4v6C13,20.55,12.55,21,12,21z" />
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
                        <Polygon points="13.28,12 18,12 18,14 13,14 13,21 11,21 11,14 6,14 6,12 10.72,12 5,3 7.37,3 12,10.29 16.63,3 19,3" />
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
                        <Polygon points="13.28,12 18,12 18,14 13,14 13,21 11,21 11,14 6,14 6,12 10.72,12 5,3 7.37,3 12,10.29 16.63,3 19,3" />
                    </G>
                </Icon>
            );
    }
}
