import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconEmergencyRecording(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <Path d="M18,10.48V6c0-1.1-0.9-2-2-2H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-4.48l4,3.98v-11L18,10.48z M12,12 l3,1.73l-1,1.73l-3-1.73V17H9v-3.27l-3,1.73l-1-1.73L8,12l-3-1.73l1-1.73l3,1.73V7h2v3.27l3-1.73l1,1.73L12,12z" />
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
                        <Path d="M18,10.48V6c0-1.1-0.9-2-2-2H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-4.48l4,3.98v-11L18,10.48z M16,18 H4V6h12V18z M12,12l3,1.73l-1,1.73l-3-1.73V17H9v-3.27l-3,1.73l-1-1.73L8,12l-3-1.73l1-1.73l3,1.73V7h2v3.27l3-1.73l1,1.73L12,12z" />
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
                        <Path d="M18,10.48V6c0-1.1-0.9-2-2-2H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-4.48l3.15,3.13 C21.46,16.97,22,16.74,22,16.3V7.7c0-0.44-0.54-0.67-0.85-0.35L18,10.48z M14.5,14.6c-0.28,0.48-0.89,0.64-1.37,0.37L11,13.73V16 c0,0.55-0.45,1-1,1s-1-0.45-1-1v-2.27l-2.13,1.23c-0.48,0.28-1.09,0.11-1.37-0.37c-0.28-0.48-0.11-1.09,0.37-1.37L8,12l-2.13-1.23 C5.39,10.49,5.22,9.88,5.5,9.4c0.28-0.48,0.89-0.64,1.37-0.37L9,10.27V8c0-0.55,0.45-1,1-1s1,0.45,1,1v2.27l2.13-1.23 c0.48-0.28,1.09-0.11,1.37,0.37c0.28,0.48,0.11,1.09-0.37,1.37L12,12l2.13,1.23C14.61,13.51,14.78,14.12,14.5,14.6z" />
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
                        <Path d="M18,10.48V4H2v16h16v-6.48l4,3.98v-11L18,10.48z M12,12l3,1.73l-1,1.73l-3-1.73V17H9v-3.27l-3,1.73l-1-1.73L8,12l-3-1.73 l1-1.73l3,1.73V7h2v3.27l3-1.73l1,1.73L12,12z" />
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
                        <Path d="M18,10.48V6c0-1.1-0.9-2-2-2H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-4.48l4,3.98v-11L18,10.48z M16,18 H4V6h12V18z M12,12l3,1.73l-1,1.73l-3-1.73V17H9v-3.27l-3,1.73l-1-1.73L8,12l-3-1.73l1-1.73l3,1.73V7h2v3.27l3-1.73l1,1.73L12,12z" />
                    </G>
                </Icon>
            );
    }
}
