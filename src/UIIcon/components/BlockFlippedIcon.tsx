import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconBlockFlipped(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <Path d="M22,12c0-5.5-4.5-10-10-10S2,6.5,2,12s4.5,10,10,10S22,17.5,22,12z M5.7,7.1l11.2,11.2c-1.3,1.1-3,1.7-4.9,1.7 c-4.4,0-8-3.6-8-8C4,10.1,4.6,8.4,5.7,7.1z M20,12c0,1.9-0.6,3.6-1.7,4.9L7.1,5.7C8.4,4.6,10.1,4,12,4C16.4,4,20,7.6,20,12z" />
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
                        <Path d="M22,12c0-5.5-4.5-10-10-10S2,6.5,2,12s4.5,10,10,10S22,17.5,22,12z M5.7,7.1l11.2,11.2c-1.3,1.1-3,1.7-4.9,1.7 c-4.4,0-8-3.6-8-8C4,10.1,4.6,8.4,5.7,7.1z M20,12c0,1.9-0.6,3.6-1.7,4.9L7.1,5.7C8.4,4.6,10.1,4,12,4C16.4,4,20,7.6,20,12z" />
                    </G>
                </Icon>
            );
    }
}