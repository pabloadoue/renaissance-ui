import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconHomeCurtainsClosed(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <Path d="M20,19V3H4v16H2v2h20v-2H20z M11,5h2v14h-2V5z" />
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
                        <Path d="M20,19V3H4v16H2v2h20v-2H20z M13,5v14h-2V5H13z M6,5h3v14H6V5z M15,19V5h3v14H15z" />
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
                        <Path d="M20,19V5c0-1.1-0.9-2-2-2H6C4.9,3,4,3.9,4,5v14H3c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h18c0.55,0,1-0.45,1-1v0 c0-0.55-0.45-1-1-1H20z M11,5h2v14h-2V5z" />
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
                        <Path d="M20,19V3H4v16H2v2h20v-2H20z M11,5h2v14h-2V5z" />
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
                        <Path d="M20,19V3H4v16H2v2h20v-2H20z M13,5v14h-2V5H13z M6,5h3v14H6V5z M15,19V5h3v14H15z" />
                    </G>
                </Icon>
            );
    }
}
