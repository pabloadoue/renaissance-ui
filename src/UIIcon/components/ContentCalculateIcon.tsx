import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconContentCalculate(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <Path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M13.03,7.06L14.09,6l1.41,1.41 L16.91,6l1.06,1.06l-1.41,1.41l1.41,1.41l-1.06,1.06L15.5,9.54l-1.41,1.41l-1.06-1.06l1.41-1.41L13.03,7.06z M6.25,7.72h5v1.5h-5 V7.72z M11.5,16h-2v2H8v-2H6v-1.5h2v-2h1.5v2h2V16z M18,17.25h-5v-1.5h5V17.25z M18,14.75h-5v-1.5h5V14.75z" />
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
                            <Path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z" />
                            <Rect height="1.5" width="5" x="6.25" y="7.72" />
                            <Rect height="1.5" width="5" x="13" y="15.75" />
                            <Rect height="1.5" width="5" x="13" y="13.25" />
                            <Polygon points="8,18 9.5,18 9.5,16 11.5,16 11.5,14.5 9.5,14.5 9.5,12.5 8,12.5 8,14.5 6,14.5 6,16 8,16" />
                            <Polygon points="14.09,10.95 15.5,9.54 16.91,10.95 17.97,9.89 16.56,8.47 17.97,7.06 16.91,6 15.5,7.41 14.09,6 13.03,7.06 14.44,8.47 13.03,9.89" />
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
                        <Path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M13.56,6.53L13.56,6.53 c0.29-0.29,0.77-0.29,1.06,0l0.88,0.88l0.88-0.88c0.29-0.29,0.77-0.29,1.06,0l0,0c0.29,0.29,0.29,0.77,0,1.06l-0.88,0.88l0.88,0.88 c0.29,0.29,0.29,0.77,0,1.06v0c-0.29,0.29-0.77,0.29-1.06,0L15.5,9.54l-0.88,0.88c-0.29,0.29-0.77,0.29-1.06,0l0,0 c-0.29-0.29-0.29-0.77,0-1.06l0.88-0.88l-0.88-0.88C13.26,7.3,13.26,6.82,13.56,6.53z M7,7.72h3.5c0.41,0,0.75,0.34,0.75,0.75v0 c0,0.41-0.34,0.75-0.75,0.75H7c-0.41,0-0.75-0.34-0.75-0.75v0C6.25,8.06,6.59,7.72,7,7.72z M10.75,16H9.5v1.25 C9.5,17.66,9.16,18,8.75,18h0C8.34,18,8,17.66,8,17.25V16H6.75C6.34,16,6,15.66,6,15.25v0c0-0.41,0.34-0.75,0.75-0.75H8v-1.25 c0-0.41,0.34-0.75,0.75-0.75h0c0.41,0,0.75,0.34,0.75,0.75v1.25h1.25c0.41,0,0.75,0.34,0.75,0.75v0C11.5,15.66,11.16,16,10.75,16z M17.25,17.25h-3.5c-0.41,0-0.75-0.34-0.75-0.75l0,0c0-0.41,0.34-0.75,0.75-0.75h3.5c0.41,0,0.75,0.34,0.75,0.75l0,0 C18,16.91,17.66,17.25,17.25,17.25z M17.25,14.75h-3.5C13.34,14.75,13,14.41,13,14v0c0-0.41,0.34-0.75,0.75-0.75h3.5 c0.41,0,0.75,0.34,0.75,0.75v0C18,14.41,17.66,14.75,17.25,14.75z" />
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
                        <Path d="M21,3H3v18h18V3z M13.03,7.06L14.09,6l1.41,1.41L16.91,6l1.06,1.06l-1.41,1.41l1.41,1.41l-1.06,1.06L15.5,9.54l-1.41,1.41 l-1.06-1.06l1.41-1.41L13.03,7.06z M6.25,7.72h5v1.5h-5V7.72z M11.5,16h-2v2H8v-2H6v-1.5h2v-2h1.5v2h2V16z M18,17.25h-5v-1.5h5 V17.25z M18,14.75h-5v-1.5h5V14.75z" />
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
                            <Path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z" />
                            <Rect height="1.5" width="5" x="6.25" y="7.72" />
                            <Rect height="1.5" width="5" x="13" y="15.75" />
                            <Rect height="1.5" width="5" x="13" y="13.25" />
                            <Polygon points="8,18 9.5,18 9.5,16 11.5,16 11.5,14.5 9.5,14.5 9.5,12.5 8,12.5 8,14.5 6,14.5 6,16 8,16" />
                            <Polygon points="14.09,10.95 15.5,9.54 16.91,10.95 17.97,9.89 16.56,8.47 17.97,7.06 16.91,6 15.5,7.41 14.09,6 13.03,7.06 14.44,8.47 13.03,9.89" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
