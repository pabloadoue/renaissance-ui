import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconCases(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0z" fill="none" />
                    <Path d="M18 6V4l-2-2h-5L9 4v2H5v11s1 2 2 2h13s2-.98 2-2V6h-4zM4 9H2v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2H4V9zm7-4c0-.55.53-1 1-1h3c.46 0 1 .54 1 1v1h-5V5zM5 6h17v11c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V6z" />
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
                            <Path d="M3,9H1v11c0,1.11,0.89,2,2,2h17v-2H3V9z" />
                            <Path d="M18,5V3c0-1.1-0.9-2-2-2h-4c-1.1,0-2,0.9-2,2v2H5v11c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5H18z M12,3h4v2h-4V3z M21,16H7 V7h14V16z" />
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
                        <Path d="M18,5V3c0-1.1-0.9-2-2-2h-4c-1.1,0-2,0.9-2,2v2H7C5.9,5,5,5.9,5,7v9c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V7c0-1.1-0.9-2-2-2 H18z M16,5h-4V3h4V5z M2,9L2,9c-0.55,0-1,0.45-1,1v10c0,1.1,0.9,2,2,2h15c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H3V10 C3,9.45,2.55,9,2,9z" />
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
                        <Path d="M18,5V1h-8v4H5v13h18V5H18z M16,5h-4V3h4V5z M3,9H1v13h18v-2H3V9z" />
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
                            <Path d="M3,9H1v11c0,1.11,0.89,2,2,2h17v-2H3V9z" />
                            <Path d="M18,5V3c0-1.1-0.9-2-2-2h-4c-1.1,0-2,0.9-2,2v2H5v11c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5H18z M12,3h4v2h-4V3z M21,16H7 V7h14V16z" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
