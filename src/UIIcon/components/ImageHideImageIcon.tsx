import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconImageHideImage(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <Path d="M21,5c0-1.1-0.9-2-2-2H5.83L21,18.17V5z" />
                            <Path d="M2.81,2.81L1.39,4.22L3,5.83V19c0,1.1,0.9,2,2,2h13.17l1.61,1.61l1.41-1.41L2.81,2.81z M6,17l3-4l2.25,3l0.82-1.1l2.1,2.1 H6z" />
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
                        <G>
                            <Path d="M19,5v11.17l2,2V5c0-1.1-0.9-2-2-2H5.83l2,2H19z" />
                            <Path d="M2.81,2.81L1.39,4.22L3,5.83V19c0,1.1,0.9,2,2,2h13.17l1.61,1.61l1.41-1.41L2.81,2.81z M5,19V7.83l7.07,7.07L11.25,16 L9,13l-3,4h8.17l2,2H5z" />
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
                        <G>
                            <Path d="M19,3H5.83L21,18.17V5C21,3.9,20.1,3,19,3z" />
                            <Path d="M3.51,3.51c-0.39-0.39-1.02-0.39-1.41,0c-0.39,0.39-0.39,1.02,0,1.41L3,5.83V19c0,1.1,0.9,2,2,2h13.17l0.9,0.9 c0.39,0.39,1.02,0.39,1.41,0c0.39-0.39,0.39-1.02,0-1.41L3.51,3.51z M7,17c-0.41,0-0.65-0.47-0.4-0.8l2-2.67 c0.2-0.27,0.6-0.27,0.8,0L11.25,16l0.82-1.1l2.1,2.1H7z" />
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
                            <Polygon points="21,3 5.83,3 21,18.17" />
                            <Path d="M2.81,2.81L1.39,4.22L3,5.83V21h15.17l1.61,1.61l1.41-1.41L2.81,2.81z M6,17l3-4l2.25,3l0.82-1.1l2.1,2.1H6z" />
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
                        <G>
                            <Path d="M19,5v11.17l2,2V5c0-1.1-0.9-2-2-2H5.83l2,2H19z" />
                            <Path d="M2.81,2.81L1.39,4.22L3,5.83V19c0,1.1,0.9,2,2,2h13.17l1.61,1.61l1.41-1.41L2.81,2.81z M5,19V7.83l7.07,7.07L11.25,16 L9,13l-3,4h8.17l2,2H5z" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
