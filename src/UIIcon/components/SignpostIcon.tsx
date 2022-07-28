import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconSignpost(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <Polygon points="13,10 18,10 21,7 18,4 13,4 13,2 11,2 11,4 4,4 4,10 11,10 11,12 6,12 3,15 6,18 11,18 11,22 13,22 13,18 20,18 20,12 13,12" />
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
                        <Path d="M13,10h5l3-3l-3-3h-5V2h-2v2H4v6h7v2H6l-3,3l3,3h5v4h2v-4h7v-6h-7V10z M6,6h11.17l1,1l-1,1H6V6z M18,16H6.83l-1-1l1-1H18 V16z" />
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
                        <G>
                            <Polygon points="13,10 18,10 21,7 18,4 13,4 13,2 11,2 11,4 4,4 4,10 11,10 11,12 6,12 3,15 6,18 11,18 11,22 13,22 13,18 20,18 20,12 13,12" />
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
                            <Path d="M12,2c-0.55,0-1,0.45-1,1v1H5.5C4.67,4,4,4.67,4,5.5v3C4,9.33,4.67,10,5.5,10H11v2H6.62c-0.4,0-0.78,0.16-1.06,0.44 l-1.5,1.5c-0.59,0.59-0.59,1.54,0,2.12l1.5,1.5C5.84,17.84,6.22,18,6.62,18H11v3c0,0.55,0.45,1,1,1c0.55,0,1-0.45,1-1v-3h5.5 c0.83,0,1.5-0.67,1.5-1.5v-3c0-0.83-0.67-1.5-1.5-1.5H13v-2h4.38c0.4,0,0.78-0.16,1.06-0.44l1.5-1.5c0.59-0.59,0.59-1.54,0-2.12 l-1.5-1.5C18.16,4.16,17.78,4,17.38,4H13V3C13,2.45,12.55,2,12,2z" />
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
                        <Path d="M13,10h5l3-3l-3-3h-5V2h-2v2H4v6h7v2H6l-3,3l3,3h5v4h2v-4h7v-6h-7V10z M6,6h11.17l1,1l-1,1H6V6z M18,16H6.83l-1-1l1-1H18 V16z" />
                    </G>
                </Icon>
            );
    }
}
