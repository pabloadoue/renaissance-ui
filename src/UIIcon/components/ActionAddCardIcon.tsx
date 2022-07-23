import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconActionAddCard(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <Path d="M20,4H4C2.89,4,2.01,4.89,2.01,6L2,18c0,1.11,0.89,2,2,2h10v-2H4v-6h18V6C22,4.89,21.11,4,20,4z M20,8H4V6h16V8z M24,17v2 h-3v3h-2v-3h-3v-2h3v-3h2v3H24z" />
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
                        <Path d="M20,4H4C2.89,4,2.01,4.89,2.01,6L2,18c0,1.11,0.89,2,2,2h10v-2H4v-6h18V6C22,4.89,21.11,4,20,4z M20,8H4V6h16V8z M24,17v2 h-3v3h-2v-3h-3v-2h3v-3h2v3H24z" />
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
                        <Path d="M14,19c0-0.55-0.45-1-1-1H4v-6h18V6c0-1.1-0.9-2-2-2H4C2.89,4,2.01,4.89,2.01,6L2,18c0,1.11,0.89,2,2,2h9 C13.55,20,14,19.55,14,19z M20,8H4V6h16V8z M20,22c-0.55,0-1-0.45-1-1v-2h-2c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1h2v-2 c0-0.55,0.45-1,1-1c0.55,0,1,0.45,1,1v2h2c0.55,0,1,0.45,1,1c0,0.55-0.45,1-1,1h-2v2C21,21.55,20.55,22,20,22z" />
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
                        <Path d="M2.01,4L2,20h12v-2H4v-6h18V4H2.01z M20,8H4V6h16V8z M24,17v2h-3v3h-2v-3h-3v-2h3v-3h2v3H24z" />
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
                        <Path d="M20,4H4C2.89,4,2.01,4.89,2.01,6L2,18c0,1.11,0.89,2,2,2h10v-2H4v-6h18V6C22,4.89,21.11,4,20,4z M20,8H4V6h16V8z M24,17v2 h-3v3h-2v-3h-3v-2h3v-3h2v3H24z" />
                    </G>
                </Icon>
            );
    }
}
