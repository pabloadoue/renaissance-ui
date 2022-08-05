import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconNotAccessible(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                        <Path d="M14,11.05l-3.42-3.42c0.32-0.34,0.74-0.57,1.23-0.61c0.48-0.04,0.84,0.07,1.2,0.26c0.19,0.1,0.39,0.22,0.63,0.46l1.29,1.43 c0.98,1.08,2.53,1.85,4.07,1.83v2C17.25,12.99,15.29,12.12,14,11.05z M12,6c1.1,0,2-0.9,2-2s-0.9-2-2-2c-1.1,0-2,0.9-2,2 S10.9,6,12,6z M2.81,2.81L1.39,4.22L10,12.83V15c0,1.1,0.9,2,2,2h2.17l5.61,5.61l1.41-1.41L2.81,2.81z M10,20c-1.66,0-3-1.34-3-3 c0-1.31,0.84-2.41,2-2.83V12.1c-2.28,0.46-4,2.48-4,4.9c0,2.76,2.24,5,5,5c2.42,0,4.44-1.72,4.9-4h-2.07 C12.42,19.16,11.31,20,10,20z" />
                    </G>
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                        <Path d="M10,4c0-1.1,0.9-2,2-2s2,0.9,2,2s-0.9,2-2,2S10,5.1,10,4z M19,13v-2c-1.54,0.02-3.09-0.75-4.07-1.83l-1.29-1.43 C13.4,7.5,13.2,7.38,13.01,7.28c-0.36-0.19-0.72-0.3-1.2-0.26c-0.49,0.04-0.91,0.27-1.23,0.61L14,11.05 C15.29,12.12,17.25,12.99,19,13z M10,20c-1.66,0-3-1.34-3-3c0-1.31,0.84-2.41,2-2.83V12.1c-2.28,0.46-4,2.48-4,4.9 c0,2.76,2.24,5,5,5c2.42,0,4.44-1.72,4.9-4h-2.07C12.42,19.16,11.31,20,10,20z M2.81,2.81L1.39,4.22L10,12.83V15c0,1.1,0.9,2,2,2 h2.17l5.61,5.61l1.41-1.41L2.81,2.81z" />
                    </G>
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                        <Path d="M12,2c1.1,0,2,0.9,2,2s-0.9,2-2,2s-2-0.9-2-2S10.9,2,12,2z M10,20c-1.66,0-3-1.34-3-3c0-1.31,0.84-2.41,2-2.83V12.1 c-2.28,0.46-4,2.48-4,4.9c0,2.76,2.24,5,5,5c2.42,0,4.44-1.72,4.9-4h-2.07C12.42,19.16,11.31,20,10,20z M20.49,20.49L3.51,3.51 c-0.39-0.39-1.02-0.39-1.41,0c-0.39,0.39-0.39,1.02,0,1.41l7.9,7.9V15c0,1.1,0.9,2,2,2h2.17l4.9,4.9c0.39,0.39,1.02,0.39,1.41,0 C20.88,21.51,20.88,20.88,20.49,20.49z M18.16,10.93c-1.25-0.21-2.43-0.88-3.23-1.76l-1.29-1.43C13.4,7.5,13.2,7.38,13.01,7.28 c-0.36-0.19-0.72-0.3-1.2-0.26c-0.49,0.04-0.91,0.27-1.23,0.61L14,11.05c1,0.83,2.4,1.54,3.8,1.82C18.42,13,19,12.53,19,11.9 C19,11.42,18.64,11.01,18.16,10.93z" />
                    </G>
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                        <Path d="M12,2c1.1,0,2,0.9,2,2s-0.9,2-2,2s-2-0.9-2-2S10.9,2,12,2z M10,20c-1.66,0-3-1.34-3-3c0-1.31,0.84-2.41,2-2.83V12.1 c-2.28,0.46-4,2.48-4,4.9c0,2.76,2.24,5,5,5c2.42,0,4.44-1.72,4.9-4h-2.07C12.42,19.16,11.31,20,10,20z M21.19,21.19L2.81,2.81 L1.39,4.22L10,12.83V17h4.17l5.61,5.61L21.19,21.19z M19,11c-1.54,0.02-3.09-0.75-4.07-1.83l-1.29-1.43 C13.4,7.5,13.2,7.38,13.01,7.28c-0.36-0.19-0.72-0.3-1.2-0.26c-0.49,0.04-0.91,0.27-1.23,0.61L14,11.05c1.29,1.07,3.25,1.94,5,1.95 V11z" />
                    </G>
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                        <Path d="M10,4c0-1.1,0.9-2,2-2s2,0.9,2,2s-0.9,2-2,2S10,5.1,10,4z M19,13v-2c-1.54,0.02-3.09-0.75-4.07-1.83l-1.29-1.43 C13.4,7.5,13.2,7.38,13.01,7.28c-0.36-0.19-0.72-0.3-1.2-0.26c-0.49,0.04-0.91,0.27-1.23,0.61L14,11.05 C15.29,12.12,17.25,12.99,19,13z M10,20c-1.66,0-3-1.34-3-3c0-1.31,0.84-2.41,2-2.83V12.1c-2.28,0.46-4,2.48-4,4.9 c0,2.76,2.24,5,5,5c2.42,0,4.44-1.72,4.9-4h-2.07C12.42,19.16,11.31,20,10,20z M2.81,2.81L1.39,4.22L10,12.83V15c0,1.1,0.9,2,2,2 h2.17l5.61,5.61l1.41-1.41L2.81,2.81z" />
                    </G>
                </Icon>
            );
    }
}