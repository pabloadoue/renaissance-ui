import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconMapsCelebration(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <Polygon points="2,22 16,17 7,8" />
                            <Path d="M14.53,12.53l5.59-5.59c0.49-0.49,1.28-0.49,1.77,0l0.59,0.59l1.06-1.06l-0.59-0.59c-1.07-1.07-2.82-1.07-3.89,0 l-5.59,5.59L14.53,12.53z" />
                            <Path d="M10.06,6.88L9.47,7.47l1.06,1.06l0.59-0.59c1.07-1.07,1.07-2.82,0-3.89l-0.59-0.59L9.47,4.53l0.59,0.59 C10.54,5.6,10.54,6.4,10.06,6.88z" />
                            <Path d="M17.06,11.88l-1.59,1.59l1.06,1.06l1.59-1.59c0.49-0.49,1.28-0.49,1.77,0l1.61,1.61l1.06-1.06l-1.61-1.61 C19.87,10.81,18.13,10.81,17.06,11.88z" />
                            <Path d="M15.06,5.88l-3.59,3.59l1.06,1.06l3.59-3.59c1.07-1.07,1.07-2.82,0-3.89l-1.59-1.59l-1.06,1.06l1.59,1.59 C15.54,4.6,15.54,5.4,15.06,5.88z" />
                        </G>
                    </G>
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" y="0" />
                    </G>
                    <G>
                        <G>
                            <G>
                                <Path d="M2,22l14-5L7,8L2,22z M12.35,16.18L5.3,18.7l2.52-7.05L12.35,16.18z" />
                                <Path d="M14.53,12.53l5.59-5.59c0.49-0.49,1.28-0.49,1.77,0l0.59,0.59l1.06-1.06l-0.59-0.59c-1.07-1.07-2.82-1.07-3.89,0 l-5.59,5.59L14.53,12.53z" />
                                <Path d="M10.06,6.88L9.47,7.47l1.06,1.06l0.59-0.59c1.07-1.07,1.07-2.82,0-3.89l-0.59-0.59L9.47,4.53l0.59,0.59 C10.54,5.6,10.54,6.4,10.06,6.88z" />
                                <Path d="M17.06,11.88l-1.59,1.59l1.06,1.06l1.59-1.59c0.49-0.49,1.28-0.49,1.77,0l1.61,1.61l1.06-1.06l-1.61-1.61 C19.87,10.81,18.13,10.81,17.06,11.88z" />
                                <Path d="M15.06,5.88l-3.59,3.59l1.06,1.06l3.59-3.59c1.07-1.07,1.07-2.82,0-3.89l-1.59-1.59l-1.06,1.06l1.59,1.59 C15.54,4.6,15.54,5.4,15.06,5.88z" />
                            </G>
                        </G>
                    </G>
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" y="0" />
                    </G>
                    <G>
                        <G>
                            <G>
                                <Path d="M3.99,21.29l9.04-3.23c1.38-0.49,1.78-2.26,0.74-3.3l-4.53-4.53c-1.04-1.04-2.8-0.64-3.3,0.74l-3.23,9.04 C2.43,20.81,3.19,21.57,3.99,21.29z" />
                                <Path d="M15.06,12l5.06-5.06c0.49-0.49,1.28-0.49,1.77,0L21.95,7c0.29,0.29,0.77,0.29,1.06,0l0,0c0.29-0.29,0.29-0.77,0-1.06 l-0.06-0.06c-1.07-1.07-2.82-1.07-3.89,0L14,10.94c-0.29,0.29-0.29,0.77,0,1.06l0,0C14.29,12.29,14.77,12.29,15.06,12z" />
                                <Path d="M10.06,6.88L10,6.94C9.71,7.23,9.71,7.71,10,8l0,0c0.29,0.29,0.77,0.29,1.06,0l0.06-0.06c1.07-1.07,1.07-2.82,0-3.89 L11.07,4C10.77,3.7,10.29,3.7,10,4l0,0c-0.29,0.29-0.29,0.77,0,1.06l0.06,0.06C10.54,5.6,10.54,6.4,10.06,6.88z" />
                                <Path d="M17.06,11.88L16,12.94c-0.29,0.29-0.29,0.77,0,1.06l0,0c0.29,0.29,0.77,0.29,1.06,0l1.06-1.06 c0.49-0.49,1.28-0.49,1.77,0l1.08,1.08c0.29,0.29,0.77,0.29,1.06,0l0,0c0.29-0.29,0.29-0.77,0-1.06l-1.08-1.08 C19.87,10.81,18.13,10.81,17.06,11.88z" />
                                <Path d="M15.06,5.88L12,8.94c-0.29,0.29-0.29,0.77,0,1.06l0,0c0.29,0.29,0.77,0.29,1.06,0l3.06-3.06c1.07-1.07,1.07-2.82,0-3.89 l-1.06-1.06c-0.29-0.29-0.77-0.29-1.06,0l0,0c-0.29,0.29-0.29,0.77,0,1.06l1.06,1.06C15.54,4.6,15.54,5.4,15.06,5.88z" />
                            </G>
                        </G>
                    </G>
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" y="0" />
                    </G>
                    <G>
                        <G>
                            <G>
                                <Polygon points="2,22 16,17 7,8" />
                                <Path d="M14.53,12.53L21,6.05l1.48,1.48l1.06-1.06L21,3.93l-7.53,7.53L14.53,12.53z" />
                                <Path d="M10.94,6L9.47,7.47l1.06,1.06l2.54-2.54l-2.54-2.53L9.47,4.53L10.94,6z" />
                                <Path d="M18.97,9.97l-3.5,3.5l1.06,1.06L19,12.06l2.5,2.49l1.06-1.06L18.97,9.97z" />
                                <Path d="M15.97,4.97l-4.5,4.5l1.06,1.06L18.07,5l-3.53-3.53l-1.06,1.06L15.97,4.97z" />
                            </G>
                        </G>
                    </G>
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" y="0" />
                    </G>
                    <G>
                        <G>
                            <G>
                                <Path d="M2,22l14-5L7,8L2,22z M12.35,16.18L5.3,18.7l2.52-7.05L12.35,16.18z" />
                                <Path d="M14.53,12.53l5.59-5.59c0.49-0.49,1.28-0.49,1.77,0l0.59,0.59l1.06-1.06l-0.59-0.59c-1.07-1.07-2.82-1.07-3.89,0 l-5.59,5.59L14.53,12.53z" />
                                <Path d="M10.06,6.88L9.47,7.47l1.06,1.06l0.59-0.59c1.07-1.07,1.07-2.82,0-3.89l-0.59-0.59L9.47,4.53l0.59,0.59 C10.54,5.6,10.54,6.4,10.06,6.88z" />
                                <Path d="M17.06,11.88l-1.59,1.59l1.06,1.06l1.59-1.59c0.49-0.49,1.28-0.49,1.77,0l1.61,1.61l1.06-1.06l-1.61-1.61 C19.87,10.81,18.13,10.81,17.06,11.88z" />
                                <Path d="M15.06,5.88l-3.59,3.59l1.06,1.06l3.59-3.59c1.07-1.07,1.07-2.82,0-3.89l-1.59-1.59l-1.06,1.06l1.59,1.59 C15.54,4.6,15.54,5.4,15.06,5.88z" />
                            </G>
                        </G>
                    </G>
                </Icon>
            );
    }
}
