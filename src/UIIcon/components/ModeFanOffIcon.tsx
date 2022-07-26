import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconModeFanOff(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <G>
                                <Path d="M16.34,8.36l-2.29,0.82c-0.18-0.13-0.38-0.25-0.58-0.34c0.17-0.83,0.63-1.58,1.36-2.06C16.85,5.44,16.18,2,13.39,2 c-3.08,0-4.9,1.47-5.3,3.26L18.73,15.9c1.5,0.39,3.27-0.51,3.27-2.51C22,9,18.99,7.16,16.34,8.36z" />
                            </G>
                            <G>
                                <Path d="M2.81,2.81L1.39,4.22L5.27,8.1C3.77,7.7,2,8.61,2,10.61c0,4.4,3.01,6.24,5.66,5.03l2.29-0.82 c0.18,0.13,0.38,0.25,0.58,0.34c-0.17,0.83-0.63,1.58-1.36,2.06C7.15,18.56,7.82,22,10.61,22c3.08,0,4.9-1.47,5.3-3.26l3.87,3.87 l1.41-1.41L2.81,2.81z" />
                            </G>
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
                            <Path d="M18,8c-1.06,0-1.64,0.29-3.91,1.19c-0.19-0.14-0.4-0.27-0.62-0.37c0.25-1.03,0.61-1.53,1.33-2.04 C15.61,6.21,16,5.44,16,4.5C16,3.28,15.05,2,13.4,2c-3.08,0-4.92,1.47-5.32,3.26l2.33,2.33C10.07,6.69,10,6.38,10,6 c0-1.18,1.4-2,3.4-2C13.97,4,14,4.42,14,4.5c0,0.27-0.05,0.43-0.35,0.65c-1.27,0.9-1.83,1.91-2.16,3.39l-0.02,0.1l7.25,7.25 C18.96,15.95,19.22,16,19.5,16c1.22,0,2.5-0.95,2.5-2.6C22,9.91,20.11,8,18,8z M19.5,14c-0.27,0-0.43-0.05-0.65-0.35 c-0.9-1.27-1.91-1.83-3.39-2.16c-0.03-0.22-0.08-0.42-0.15-0.62C17.11,10.12,17.49,10,18,10c1.18,0,2,1.4,2,3.4 C20,13.97,19.58,14,19.5,14z" />
                            <Path d="M1.39,4.22l3.89,3.89C5.04,8.05,4.78,8,4.5,8C3.28,8,2,8.95,2,10.6C2,14.09,3.89,16,6,16c1.06,0,1.64-0.29,3.91-1.19 c0.19,0.14,0.4,0.27,0.62,0.37c-0.25,1.03-0.61,1.53-1.33,2.04C8.39,17.79,8,18.56,8,19.5c0,1.22,0.95,2.5,2.6,2.5 c3.08,0,4.92-1.47,5.32-3.26l3.86,3.86l1.41-1.41L2.81,2.81L1.39,4.22z M12.52,15.46c0.03,0,0.06-0.02,0.09-0.02l0.97,0.97 C13.93,17.31,14,17.62,14,18c0,1.18-1.4,2-3.4,2c-0.57,0-0.6-0.42-0.6-0.5c0-0.27,0.05-0.43,0.35-0.65 C11.63,17.96,12.18,16.94,12.52,15.46z M8.54,12.52c0.03,0.22,0.08,0.42,0.15,0.62C6.89,13.88,6.51,14,6,14c-1.18,0-2-1.4-2-3.4 C4,10.03,4.42,10,4.5,10c0.27,0,0.43,0.05,0.65,0.35C6.04,11.63,7.06,12.18,8.54,12.52z" />
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
                            <G>
                                <Path d="M16.34,8.36l-2.29,0.82c-0.18-0.13-0.38-0.25-0.58-0.34c0.17-0.83,0.63-1.58,1.36-2.06C16.85,5.44,16.18,2,13.39,2 c-3.08,0-4.9,1.47-5.3,3.26L18.73,15.9c1.5,0.39,3.27-0.51,3.27-2.51C22,9,18.99,7.16,16.34,8.36z" />
                            </G>
                            <G>
                                <Path d="M2.1,3.51L2.1,3.51c-0.39,0.39-0.39,1.02,0,1.41L5.27,8.1C3.77,7.7,2,8.61,2,10.61c0,4.4,3.01,6.24,5.66,5.03l2.29-0.82 c0.18,0.13,0.38,0.25,0.58,0.34c-0.17,0.83-0.63,1.58-1.36,2.06C7.15,18.56,7.82,22,10.61,22c3.08,0,4.9-1.47,5.3-3.26l3.16,3.16 c0.39,0.39,1.02,0.39,1.41,0l0,0c0.39-0.39,0.39-1.02,0-1.41L3.51,3.51C3.12,3.12,2.49,3.12,2.1,3.51z" />
                            </G>
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
                            <G>
                                <Path d="M16.34,8.36l-2.29,0.82c-0.18-0.13-0.38-0.25-0.58-0.34c0.17-0.83,0.63-1.58,1.36-2.06C16.85,5.44,16.18,2,13.39,2 c-3.08,0-4.9,1.47-5.3,3.26L18.73,15.9c1.5,0.39,3.27-0.51,3.27-2.51C22,9,18.99,7.16,16.34,8.36z" />
                            </G>
                            <G>
                                <Path d="M2.81,2.81L1.39,4.22L5.27,8.1C3.77,7.7,2,8.61,2,10.61c0,4.4,3.01,6.24,5.66,5.03l2.29-0.82 c0.18,0.13,0.38,0.25,0.58,0.34c-0.17,0.83-0.63,1.58-1.36,2.06C7.15,18.56,7.82,22,10.61,22c3.08,0,4.9-1.47,5.3-3.26l3.87,3.87 l1.41-1.41L2.81,2.81z" />
                            </G>
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
                            <Path d="M18,8c-1.06,0-1.64,0.29-3.91,1.19c-0.19-0.14-0.4-0.27-0.62-0.37c0.25-1.03,0.61-1.53,1.33-2.04 C15.61,6.21,16,5.44,16,4.5C16,3.28,15.05,2,13.4,2c-3.08,0-4.92,1.47-5.32,3.26l2.33,2.33C10.07,6.69,10,6.38,10,6 c0-1.18,1.4-2,3.4-2C13.97,4,14,4.42,14,4.5c0,0.27-0.05,0.43-0.35,0.65c-1.27,0.9-1.83,1.91-2.16,3.39l-0.02,0.1l7.25,7.25 C18.96,15.95,19.22,16,19.5,16c1.22,0,2.5-0.95,2.5-2.6C22,9.91,20.11,8,18,8z M19.5,14c-0.27,0-0.43-0.05-0.65-0.35 c-0.9-1.27-1.91-1.83-3.39-2.16c-0.03-0.22-0.08-0.42-0.15-0.62C17.11,10.12,17.49,10,18,10c1.18,0,2,1.4,2,3.4 C20,13.97,19.58,14,19.5,14z" />
                            <Path d="M1.39,4.22l3.89,3.89C5.04,8.05,4.78,8,4.5,8C3.28,8,2,8.95,2,10.6C2,14.09,3.89,16,6,16c1.06,0,1.64-0.29,3.91-1.19 c0.19,0.14,0.4,0.27,0.62,0.37c-0.25,1.03-0.61,1.53-1.33,2.04C8.39,17.79,8,18.56,8,19.5c0,1.22,0.95,2.5,2.6,2.5 c3.08,0,4.92-1.47,5.32-3.26l3.86,3.86l1.41-1.41L2.81,2.81L1.39,4.22z M12.52,15.46c0.03,0,0.06-0.02,0.09-0.02l0.97,0.97 C13.93,17.31,14,17.62,14,18c0,1.18-1.4,2-3.4,2c-0.57,0-0.6-0.42-0.6-0.5c0-0.27,0.05-0.43,0.35-0.65 C11.63,17.96,12.18,16.94,12.52,15.46z M8.54,12.52c0.03,0.22,0.08,0.42,0.15,0.62C6.89,13.88,6.51,14,6,14c-1.18,0-2-1.4-2-3.4 C4,10.03,4.42,10,4.5,10c0.27,0,0.43,0.05,0.65,0.35C6.04,11.63,7.06,12.18,8.54,12.52z" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
