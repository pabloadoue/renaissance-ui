import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconWeekend(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                        <Path d="M21,10c-1.1,0-2,0.9-2,2v3H5v-3c0-1.1-0.89-2-2-2s-2,0.9-2,2v5c0,1.1,0.9,2,2,2h18c1.1,0,2-0.9,2-2v-5 C23,10.9,22.1,10,21,10z M18,5H6C4.9,5,4,5.9,4,7v2.15c1.16,0.41,2,1.52,2,2.81V14h12v-2.03c0-1.3,0.84-2.4,2-2.81V7 C20,5.9,19.1,5,18,5z" />
                    </G>
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0z" fill="none" />
                    <Path d="M21 9V7c0-1.65-1.35-3-3-3H6C4.35 4 3 5.35 3 7v2c-1.65 0-3 1.35-3 3v5c0 1.65 1.35 3 3 3h18c1.65 0 3-1.35 3-3v-5c0-1.65-1.35-3-3-3zM5 7c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v2.78c-.61.55-1 1.34-1 2.22v2H6v-2c0-.88-.39-1.67-1-2.22V7zm17 10c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1v-5c0-.55.45-1 1-1s1 .45 1 1v4h16v-4c0-.55.45-1 1-1s1 .45 1 1v5z" />
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0z" fill="none" />
                    <Path d="M21 10c-1.1 0-2 .9-2 2v3H5v-3c0-1.1-.9-2-2-2s-2 .9-2 2v5c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2zm-3-5H6c-1.1 0-2 .9-2 2v2.15c1.16.41 2 1.51 2 2.82V14h12v-2.03c0-1.3.84-2.4 2-2.82V7c0-1.1-.9-2-2-2z" />
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0z" fill="none" />
                    <Path d="M6 9.03V14h12V9.03h2V5H4v4.03zM19 15H5v-4.97H1V19h22v-8.97h-4z" />
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0z" fill="none" />
                    <Path d="M21 9V7c0-1.65-1.35-3-3-3H6C4.35 4 3 5.35 3 7v2c-1.65 0-3 1.35-3 3v5c0 1.65 1.35 3 3 3h18c1.65 0 3-1.35 3-3v-5c0-1.65-1.35-3-3-3zM5 7c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v2.78c-.61.55-1 1.34-1 2.22v2H6v-2c0-.88-.39-1.67-1-2.22V7zm17 10c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1v-5c0-.55.45-1 1-1s1 .45 1 1v4h16v-4c0-.55.45-1 1-1s1 .45 1 1v5z" />
                </Icon>
            );
    }
}
