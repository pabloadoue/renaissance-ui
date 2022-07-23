import React from 'react';
import { Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconPlacesNightShelter(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M12,3L4,9v12h16V9L12,3z M9.75,12.5c0.69,0,1.25,0.56,1.25,1.25S10.44,15,9.75,15S8.5,14.44,8.5,13.75S9.06,12.5,9.75,12.5z M17,18h-1v-1.5H8V18H7v-7h1v4.5h3.5V12H15c1.1,0,2,0.9,2,2V18z" />
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M12,5.5l6,4.5v9H6v-9L12,5.5 M12,3L4,9v12h16V9L12,3L12,3z M15,12h-3.5v3.5H8V11H7v7h1v-1.5h8V18h1v-4 C17,12.9,16.1,12,15,12z M9.75,12.5c-0.69,0-1.25,0.56-1.25,1.25C8.5,14.44,9.06,15,9.75,15S11,14.44,11,13.75 C11,13.06,10.44,12.5,9.75,12.5z" />
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M10.8,3.9l-6,4.5C4.3,8.78,4,9.37,4,10v9c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-9c0-0.63-0.3-1.22-0.8-1.6l-6-4.5 C12.49,3.37,11.51,3.37,10.8,3.9z M9.75,12.5c0.69,0,1.25,0.56,1.25,1.25S10.44,15,9.75,15S8.5,14.44,8.5,13.75S9.06,12.5,9.75,12.5 z M16.5,18L16.5,18c-0.28,0-0.5-0.22-0.5-0.5v-1H8v1C8,17.78,7.78,18,7.5,18h0C7.22,18,7,17.78,7,17.5v-6C7,11.22,7.22,11,7.5,11h0 C7.78,11,8,11.22,8,11.5v4h3.5v-3c0-0.28,0.22-0.5,0.5-0.5h3c1.1,0,2,0.9,2,2v3.5C17,17.78,16.78,18,16.5,18z" />
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M12,3L4,9v12h16V9L12,3z M9.75,12.5c0.69,0,1.25,0.56,1.25,1.25S10.44,15,9.75,15S8.5,14.44,8.5,13.75S9.06,12.5,9.75,12.5z M17,18h-1v-1.5H8V18H7v-7h1v4.5h3.5V12H17V18z" />
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M12,5.5l6,4.5v9H6v-9L12,5.5 M12,3L4,9v12h16V9L12,3L12,3z M15,12h-3.5v3.5H8V11H7v7h1v-1.5h8V18h1v-4 C17,12.9,16.1,12,15,12z M9.75,12.5c-0.69,0-1.25,0.56-1.25,1.25C8.5,14.44,9.06,15,9.75,15S11,14.44,11,13.75 C11,13.06,10.44,12.5,9.75,12.5z" />
                </Icon>
            );
    }
}
