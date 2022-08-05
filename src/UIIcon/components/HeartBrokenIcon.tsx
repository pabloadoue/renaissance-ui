import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconHeartBroken(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <Path d="M16.5,3c-0.96,0-1.9,0.25-2.73,0.69L12,9h3l-3,10l1-9h-3l1.54-5.39C10.47,3.61,9.01,3,7.5,3C4.42,3,2,5.42,2,8.5 c0,4.13,4.16,7.18,10,12.5c5.47-4.94,10-8.26,10-12.5C22,5.42,19.58,3,16.5,3z" />
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
                        <Path d="M16.5,3c-0.96,0-1.9,0.25-2.73,0.69L12,9h3l-3,10l1-9h-3l1.54-5.39C10.47,3.61,9.01,3,7.5,3C4.42,3,2,5.42,2,8.5 c0,4.13,4.16,7.18,10,12.5c5.47-4.94,10-8.26,10-12.5C22,5.42,19.58,3,16.5,3z M10.24,16.73C6.45,13.34,4,11,4,8.5 C4,6.54,5.54,5,7.5,5c0.59,0,1.19,0.15,1.73,0.42L7.35,12h3.42L10.24,16.73z M15.13,15.53L17.69,7h-2.91l0.61-1.82 C15.75,5.06,16.13,5,16.5,5C18.46,5,20,6.54,20,8.5C20,10.71,17.98,12.93,15.13,15.53z" />
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
                        <Path d="M19.57,3.95c-1.92-1.29-4.08-1.17-5.8-0.26L12,9h1.66c0.67,0,1.15,0.65,0.96,1.29l-1.82,6.07c-0.09,0.29-0.52,0.2-0.49-0.1 L13,10h-1.67c-0.66,0-1.14-0.64-0.96-1.27l1.18-4.11c0,0,0,0,0,0C9.7,2.89,6.71,2.32,4.27,4.04C2.82,5.07,2,6.7,2,8.49 c-0.01,3.81,3.53,6.71,8.66,11.3c0.76,0.68,1.92,0.69,2.69,0.01c4.98-4.42,8.87-7.58,8.64-11.62C21.9,6.45,21,4.92,19.57,3.95z" />
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
                        <Path d="M16.5,3c-0.96,0-1.9,0.25-2.73,0.69L12,9h3l-3,10l1-9h-3l1.54-5.39C10.47,3.61,9.01,3,7.5,3C4.42,3,2,5.42,2,8.5 c0,4.13,4.16,7.18,10,12.5c5.47-4.94,10-8.26,10-12.5C22,5.42,19.58,3,16.5,3z" />
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
                        <Path d="M16.5,3c-0.96,0-1.9,0.25-2.73,0.69L12,9h3l-3,10l1-9h-3l1.54-5.39C10.47,3.61,9.01,3,7.5,3C4.42,3,2,5.42,2,8.5 c0,4.13,4.16,7.18,10,12.5c5.47-4.94,10-8.26,10-12.5C22,5.42,19.58,3,16.5,3z M10.24,16.73C6.45,13.34,4,11,4,8.5 C4,6.54,5.54,5,7.5,5c0.59,0,1.19,0.15,1.73,0.42L7.35,12h3.42L10.24,16.73z M15.13,15.53L17.69,7h-2.91l0.61-1.82 C15.75,5.06,16.13,5,16.5,5C18.46,5,20,6.54,20,8.5C20,10.71,17.98,12.93,15.13,15.53z" />
                    </G>
                </Icon>
            );
    }
}