import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconImageHdrPlus(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <Rect height="1" width="2" x="8.5" y="14.5" />
                            <Rect height="3" width="1.5" x="14.5" y="7.5" />
                            <Path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,15.5c0,0.6-0.4,1.1-0.9,1.4L12,19h-1.5l-0.9-2 H8.5v2H7v-6h3.5c0.8,0,1.5,0.7,1.5,1.5V15.5z M12,12h-1.5V9.5h-2V12H7V6h1.5v2h2V6H12V12z M17.5,16H16v1.5h-1.5V16H13v-1.5h1.5V13 H16v1.49h1.5V16z M17.5,10.5c0,0.8-0.7,1.5-1.5,1.5h-3V6h3c0.8,0,1.5,0.7,1.5,1.5V10.5z" />
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
                            <Path d="M8.13,19c1.15,0.64,2.47,1,3.87,1c4.41,0,8-3.59,8-8s-3.59-8-8-8s-8,3.59-8,8c0,2.52,1.17,4.77,3,6.24V13h3.5 c0.8,0,1.5,0.7,1.5,1.5v1c0,0.6-0.4,1.1-0.9,1.4L12,19h-1.5l-0.9-2H8.5v2H8.13z M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10 S2,17.52,2,12S6.48,2,12,2z M17.5,16H16v1.5h-1.5V16H13v-1.5h1.5V13H16v1.49h1.5V16z M10.5,15.5v-1h-2v1H10.5z M10.5,8V6H12v6 h-1.5V9.5h-2V12H7V6h1.5v2H10.5z M16,6c0.8,0,1.5,0.7,1.5,1.5v3c0,0.8-0.7,1.5-1.5,1.5h-3V6H16z M16,10.5v-3h-1.5v3H16z" />
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
                            <Rect height="1" width="2" x="8.5" y="14.5" />
                            <Rect height="3" width="1.5" x="14.5" y="7.5" />
                            <Path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,15.5c0,0.6-0.4,1.1-0.9,1.4l0.49,1.13 c0.2,0.46-0.14,0.97-0.64,0.97h0c-0.27,0-0.52-0.16-0.63-0.41L9.6,17H8.5v1.31C8.5,18.69,8.19,19,7.81,19H7.69 C7.31,19,7,18.69,7,18.31V14c0-0.55,0.45-1,1-1h2.5c0.82,0,1.5,0.68,1.5,1.5V15.5z M11.25,12L11.25,12 c-0.41,0-0.75-0.34-0.75-0.75V9.5h-2v1.75C8.5,11.66,8.16,12,7.75,12h0C7.34,12,7,11.66,7,11.25v-4.5C7,6.34,7.34,6,7.75,6h0 C8.16,6,8.5,6.34,8.5,6.75V8h2V6.75C10.5,6.34,10.84,6,11.25,6h0C11.66,6,12,6.34,12,6.75v4.5C12,11.66,11.66,12,11.25,12z M16.75,16H16v0.75c0,0.41-0.34,0.75-0.75,0.75h0c-0.41,0-0.75-0.34-0.75-0.75V16h-0.75C13.34,16,13,15.66,13,15.25v0 c0-0.41,0.34-0.75,0.75-0.75h0.75v-0.75c0-0.41,0.34-0.75,0.75-0.75h0c0.41,0,0.75,0.34,0.75,0.75v0.74h0.75 c0.41,0,0.75,0.34,0.75,0.75v0.01C17.5,15.66,17.16,16,16.75,16z M17.5,10.5c0,0.82-0.67,1.5-1.5,1.5h-2.5 c-0.28,0-0.5-0.22-0.5-0.5v-5C13,6.22,13.22,6,13.5,6H16c0.83,0,1.5,0.68,1.5,1.5V10.5z" />
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
                            <Rect height="1" width="2" x="8.5" y="14.5" />
                            <Rect height="3" width="1.5" x="14.5" y="7.5" />
                            <Path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,17l-0.86-0.01L12,19h-1.5l-0.9-2H8.5v2H7v-6h5 c0,0,0,0.7,0,1.5V17z M12,12h-1.5V9.5h-2V12H7V6h1.5v2h2V6H12V12z M17.5,16H16v1.5h-1.5V16H13v-1.5h1.5V13H16v1.49h1.5V16z M17.5,10.5c0,0.8-0.7,1.5-1.5,1.5h-3V6h3c0.8,0,1.5,0.7,1.5,1.5V10.5z" />
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
                            <Path d="M8.13,19c1.15,0.64,2.47,1,3.87,1c4.41,0,8-3.59,8-8s-3.59-8-8-8s-8,3.59-8,8c0,2.52,1.17,4.77,3,6.24V13h3.5 c0.8,0,1.5,0.7,1.5,1.5v1c0,0.6-0.4,1.1-0.9,1.4L12,19h-1.5l-0.9-2H8.5v2H8.13z M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10 S2,17.52,2,12S6.48,2,12,2z M17.5,16H16v1.5h-1.5V16H13v-1.5h1.5V13H16v1.49h1.5V16z M10.5,15.5v-1h-2v1H10.5z M10.5,8V6H12v6 h-1.5V9.5h-2V12H7V6h1.5v2H10.5z M16,6c0.8,0,1.5,0.7,1.5,1.5v3c0,0.8-0.7,1.5-1.5,1.5h-3V6H16z M16,10.5v-3h-1.5v3H16z" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
