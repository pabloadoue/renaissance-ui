import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconHomeCurtains(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <Path d="M20,19V3H4v16H2v2h20v-2H20z M8.19,12c2.04-1.35,3.5-3.94,3.76-7h0.09c0.26,3.06,1.72,5.65,3.76,7 c-2.04,1.35-3.5,3.94-3.76,7h-0.09C11.69,15.94,10.23,13.35,8.19,12z" />
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
                        <Path d="M20,19V3H4v16H2v2h20v-2H20z M18,10.86c-2.05-0.58-3.64-2.93-3.94-5.86H18V10.86z M15.81,12c-2.04,1.35-3.5,3.94-3.76,7 h-0.09c-0.26-3.06-1.72-5.65-3.76-7c2.04-1.35,3.5-3.94,3.76-7h0.09C12.31,8.06,13.77,10.65,15.81,12z M9.94,5 C9.64,7.93,8.05,10.27,6,10.86V5H9.94z M6,13.14c2.05,0.58,3.64,2.93,3.94,5.86H6V13.14z M14.06,19c0.3-2.93,1.89-5.27,3.94-5.86 V19H14.06z" />
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
                        <Path d="M20,19V5c0-1.1-0.9-2-2-2H6C4.9,3,4,3.9,4,5v14H3c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h18c0.55,0,1-0.45,1-1v0 c0-0.55-0.45-1-1-1H20z M8.19,12c2.04-1.35,3.5-3.94,3.76-7h0.09c0.26,3.06,1.72,5.65,3.76,7c-2.04,1.35-3.5,3.94-3.76,7h-0.09 C11.69,15.94,10.23,13.35,8.19,12z" />
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
                        <Path d="M20,19V3H4v16H2v2h20v-2H20z M8.19,12c2.04-1.35,3.5-3.94,3.76-7h0.09c0.26,3.06,1.72,5.65,3.76,7 c-2.04,1.35-3.5,3.94-3.76,7h-0.09C11.69,15.94,10.23,13.35,8.19,12z" />
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
                        <Path d="M20,19V3H4v16H2v2h20v-2H20z M18,10.86c-2.05-0.58-3.64-2.93-3.94-5.86H18V10.86z M15.81,12c-2.04,1.35-3.5,3.94-3.76,7 h-0.09c-0.26-3.06-1.72-5.65-3.76-7c2.04-1.35,3.5-3.94,3.76-7h0.09C12.31,8.06,13.77,10.65,15.81,12z M9.94,5 C9.64,7.93,8.05,10.27,6,10.86V5H9.94z M6,13.14c2.05,0.58,3.64,2.93,3.94,5.86H6V13.14z M14.06,19c0.3-2.93,1.89-5.27,3.94-5.86 V19H14.06z" />
                    </G>
                </Icon>
            );
    }
}
