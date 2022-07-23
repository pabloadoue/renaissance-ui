import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconCommunicationQrCode(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <Path d="M3,11h8V3H3V11z M5,5h4v4H5V5z" />
                            <Path d="M3,21h8v-8H3V21z M5,15h4v4H5V15z" />
                            <Path d="M13,3v8h8V3H13z M19,9h-4V5h4V9z" />
                            <Rect height="2" width="2" x="19" y="19" />
                            <Rect height="2" width="2" x="13" y="13" />
                            <Rect height="2" width="2" x="15" y="15" />
                            <Rect height="2" width="2" x="13" y="17" />
                            <Rect height="2" width="2" x="15" y="19" />
                            <Rect height="2" width="2" x="17" y="17" />
                            <Rect height="2" width="2" x="17" y="13" />
                            <Rect height="2" width="2" x="19" y="15" />
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
                            <Path d="M3,11h8V3H3V11z M5,5h4v4H5V5z" />
                            <Path d="M3,21h8v-8H3V21z M5,15h4v4H5V15z" />
                            <Path d="M13,3v8h8V3H13z M19,9h-4V5h4V9z" />
                            <Rect height="2" width="2" x="19" y="19" />
                            <Rect height="2" width="2" x="13" y="13" />
                            <Rect height="2" width="2" x="15" y="15" />
                            <Rect height="2" width="2" x="13" y="17" />
                            <Rect height="2" width="2" x="15" y="19" />
                            <Rect height="2" width="2" x="17" y="17" />
                            <Rect height="2" width="2" x="17" y="13" />
                            <Rect height="2" width="2" x="19" y="15" />
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
                            <Path d="M5,11h4c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2H5C3.9,3,3,3.9,3,5v4C3,10.1,3.9,11,5,11z M5,5h4v4H5V5z" />
                            <Path d="M5,21h4c1.1,0,2-0.9,2-2v-4c0-1.1-0.9-2-2-2H5c-1.1,0-2,0.9-2,2v4C3,20.1,3.9,21,5,21z M5,15h4v4H5V15z" />
                            <Path d="M13,5v4c0,1.1,0.9,2,2,2h4c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2h-4C13.9,3,13,3.9,13,5z M19,9h-4V5h4V9z" />
                            <Path d="M21,20.5v-1c0-0.28-0.22-0.5-0.5-0.5h-1c-0.28,0-0.5,0.22-0.5,0.5v1c0,0.28,0.22,0.5,0.5,0.5h1C20.78,21,21,20.78,21,20.5 z" />
                            <Path d="M13,13.5v1c0,0.28,0.22,0.5,0.5,0.5h1c0.28,0,0.5-0.22,0.5-0.5v-1c0-0.28-0.22-0.5-0.5-0.5h-1C13.22,13,13,13.22,13,13.5z" />
                            <Path d="M16.5,15h-1c-0.28,0-0.5,0.22-0.5,0.5v1c0,0.28,0.22,0.5,0.5,0.5h1c0.28,0,0.5-0.22,0.5-0.5v-1C17,15.22,16.78,15,16.5,15 z" />
                            <Path d="M13,17.5v1c0,0.28,0.22,0.5,0.5,0.5h1c0.28,0,0.5-0.22,0.5-0.5v-1c0-0.28-0.22-0.5-0.5-0.5h-1C13.22,17,13,17.22,13,17.5z" />
                            <Path d="M15.5,21h1c0.28,0,0.5-0.22,0.5-0.5v-1c0-0.28-0.22-0.5-0.5-0.5h-1c-0.28,0-0.5,0.22-0.5,0.5v1C15,20.78,15.22,21,15.5,21 z" />
                            <Path d="M17.5,19h1c0.28,0,0.5-0.22,0.5-0.5v-1c0-0.28-0.22-0.5-0.5-0.5h-1c-0.28,0-0.5,0.22-0.5,0.5v1C17,18.78,17.22,19,17.5,19 z" />
                            <Path d="M18.5,13h-1c-0.28,0-0.5,0.22-0.5,0.5v1c0,0.28,0.22,0.5,0.5,0.5h1c0.28,0,0.5-0.22,0.5-0.5v-1C19,13.22,18.78,13,18.5,13 z" />
                            <Path d="M19.5,17h1c0.28,0,0.5-0.22,0.5-0.5v-1c0-0.28-0.22-0.5-0.5-0.5h-1c-0.28,0-0.5,0.22-0.5,0.5v1C19,16.78,19.22,17,19.5,17 z" />
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
                            <Path d="M3,11h8V3H3V11z M5,5h4v4H5V5z" />
                            <Path d="M3,21h8v-8H3V21z M5,15h4v4H5V15z" />
                            <Path d="M13,3v8h8V3H13z M19,9h-4V5h4V9z" />
                            <Rect height="2" width="2" x="19" y="19" />
                            <Rect height="2" width="2" x="13" y="13" />
                            <Rect height="2" width="2" x="15" y="15" />
                            <Rect height="2" width="2" x="13" y="17" />
                            <Rect height="2" width="2" x="15" y="19" />
                            <Rect height="2" width="2" x="17" y="17" />
                            <Rect height="2" width="2" x="17" y="13" />
                            <Rect height="2" width="2" x="19" y="15" />
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
                            <Path d="M3,11h8V3H3V11z M5,5h4v4H5V5z" />
                            <Path d="M3,21h8v-8H3V21z M5,15h4v4H5V15z" />
                            <Path d="M13,3v8h8V3H13z M19,9h-4V5h4V9z" />
                            <Rect height="2" width="2" x="19" y="19" />
                            <Rect height="2" width="2" x="13" y="13" />
                            <Rect height="2" width="2" x="15" y="15" />
                            <Rect height="2" width="2" x="13" y="17" />
                            <Rect height="2" width="2" x="15" y="19" />
                            <Rect height="2" width="2" x="17" y="17" />
                            <Rect height="2" width="2" x="17" y="13" />
                            <Rect height="2" width="2" x="19" y="15" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
