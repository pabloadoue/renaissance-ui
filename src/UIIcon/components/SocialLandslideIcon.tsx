import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconSocialLandslide(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <Polygon points="15.47,13.79 12.89,12.76 6,15.05 2,13.51 2,15.61 6,16.95" />
                            <Polygon points="10.57,11.42 8,8 2,8 2,11.61 6,12.95" />
                            <Polygon points="6,19.05 2,17.72 2,22 22,22 17.03,15.38" />
                            <Polygon points="17,6 17,1 12,0 9,2 9,6 12,8" />
                            <Polygon points="18.5,7 16,9 16,12 18.5,14 23,12 23,8" />
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
                            <Path d="M11,12L8,8H2v14h20l-6-8L11,12z M12.53,14.77L6,16.95l-2-0.67v-1.89l2,0.67l3.95-1.32L12.53,14.77z M7,10l1.57,2.09 L6,12.95l-2-0.67V10H7z M4,20v-1.61l2,0.67l9.03-3.01L18,20H4z" />
                            <Path d="M17,6V1l-5-1L9,2v4l3,2L17,6z M11,3.07l1.42-0.95L15,2.64v2.01l-2.77,1.11L11,4.93V3.07z" />
                            <Path d="M18.5,7L16,9v3l2.5,2l4.5-2V8L18.5,7z M21,10.7l-2.2,0.98L18,11.04V9.96l1-0.8l2,0.44V10.7z" />
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
                            <Polygon points="15.47,13.79 12.89,12.76 6,15.05 2,13.51 2,15.61 6,16.95" />
                            <Path d="M10.57,11.42L8.6,8.8C8.22,8.3,7.63,8,7,8H4c-1.1,0-2,0.9-2,2v1.61l4,1.33L10.57,11.42z" />
                            <Path d="M6,19.05l-4-1.33V20c0,1.1,0.9,2,2,2h14c1.65,0,2.59-1.88,1.6-3.2l-2.57-3.42L6,19.05z" />
                            <Path d="M17,4.65V2.64c0-0.95-0.67-1.77-1.61-1.96l-2.58-0.52c-0.52-0.1-1.06,0-1.5,0.3L9.89,1.41C9.33,1.78,9,2.4,9,3.07v1.86 C9,5.6,9.33,6.22,9.89,6.59l1.23,0.82c0.55,0.37,1.24,0.44,1.85,0.19l2.77-1.11C16.5,6.2,17,5.46,17,4.65z" />
                            <Path d="M17.75,7.6l-1,0.8C16.28,8.78,16,9.35,16,9.96v1.08c0,0.61,0.28,1.18,0.75,1.56l0.8,0.64c0.58,0.47,1.38,0.57,2.06,0.27 l2.2-0.98C22.53,12.21,23,11.49,23,10.7V9.6c0-0.94-0.65-1.75-1.57-1.95l-2-0.44C18.84,7.08,18.22,7.22,17.75,7.6z" />
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
                            <Polygon points="15.47,13.79 12.89,12.76 6,15.05 2,13.51 2,15.61 6,16.95" />
                            <Polygon points="10.57,11.42 8,8 2,8 2,11.61 6,12.95" />
                            <Polygon points="6,19.05 2,17.72 2,22 22,22 17.03,15.38" />
                            <Polygon points="17,6 17,1 12,0 9,2 9,6 12,8" />
                            <Polygon points="18.5,7 16,9 16,12 18.5,14 23,12 23,8" />
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
                            <Path d="M11,12L8,8H2v14h20l-6-8L11,12z M12.53,14.77L6,16.95l-2-0.67v-1.89l2,0.67l3.95-1.32L12.53,14.77z M7,10l1.57,2.09 L6,12.95l-2-0.67V10H7z M4,20v-1.61l2,0.67l9.03-3.01L18,20H4z" />
                            <Path d="M17,6V1l-5-1L9,2v4l3,2L17,6z M11,3.07l1.42-0.95L15,2.64v2.01l-2.77,1.11L11,4.93V3.07z" />
                            <Path d="M18.5,7L16,9v3l2.5,2l4.5-2V8L18.5,7z M21,10.7l-2.2,0.98L18,11.04V9.96l1-0.8l2,0.44V10.7z" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
