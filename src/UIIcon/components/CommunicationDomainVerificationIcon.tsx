import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconCommunicationDomainVerification(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <Polygon points="16.6,10.88 15.18,9.46 10.94,13.71 8.82,11.58 7.4,13 10.94,16.54" />
                            <Path d="M19,4H5C3.89,4,3,4.9,3,6v12c0,1.1,0.89,2,2,2h14c1.1,0,2-0.9,2-2V6C21,4.9,20.11,4,19,4z M19,18H5V8h14V18z" />
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
                            <Polygon points="16.6,10.88 15.18,9.46 10.94,13.71 8.82,11.58 7.4,13 10.94,16.54" />
                            <Path d="M19,4H5C3.89,4,3,4.9,3,6v12c0,1.1,0.89,2,2,2h14c1.1,0,2-0.9,2-2V6C21,4.9,20.11,4,19,4z M19,18H5V8h14V18z" />
                        </G>
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
                        <G>
                            <Path d="M10.23,15.83c0.39,0.39,1.02,0.39,1.41,0l4.24-4.24c0.39-0.39,0.39-1.02,0-1.42v0c-0.39-0.39-1.02-0.39-1.41,0l-3.54,3.53 l-1.41-1.41c-0.39-0.39-1.02-0.39-1.42,0s-0.39,1.02,0,1.41L10.23,15.83z" />
                            <Path d="M19,4H5C3.89,4,3,4.9,3,6v12c0,1.1,0.89,2,2,2h14c1.1,0,2-0.9,2-2V6C21,4.9,20.11,4,19,4z M19,17c0,0.55-0.45,1-1,1H6 c-0.55,0-1-0.45-1-1V8h14V17z" />
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
                            <Polygon points="16.6,10.88 15.18,9.46 10.94,13.71 8.82,11.58 7.4,13 10.94,16.54" />
                            <Path d="M3,4v16h18V4H3z M19,18H5V8h14V18z" />
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
                            <Polygon points="16.6,10.88 15.18,9.46 10.94,13.71 8.82,11.58 7.4,13 10.94,16.54" />
                            <Path d="M19,4H5C3.89,4,3,4.9,3,6v12c0,1.1,0.89,2,2,2h14c1.1,0,2-0.9,2-2V6C21,4.9,20.11,4,19,4z M19,18H5V8h14V18z" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
