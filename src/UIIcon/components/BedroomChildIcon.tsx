import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconBedroomChild(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Path d="M0,0h24v24H0V0z" fill="none" />
                    </G>
                    <G>
                        <G>
                            <Rect height="2" width="6" x="9" y="8.5" />
                            <Path d="M15.64,12H8.37c-0.48,0-0.87,0.39-0.87,0.87h0.01V14h9v-1.13C16.51,12.39,16.12,12,15.64,12z" />
                            <Path d="M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M18,17h-1.5v-1.5h-9V17H6v-4.13 c0-1,0.62-1.85,1.5-2.2V9c0-1.1,0.9-2,2-2h5c1.1,0,2,0.9,2,2v1.67c0.88,0.35,1.5,1.2,1.5,2.2V17z" />
                        </G>
                    </G>
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Path d="M0,0h24v24H0V0z" fill="none" />
                    </G>
                    <G>
                        <Path d="M20,4v16H4V4H20 M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M16.5,10.67V9 c0-1.1-0.9-2-2-2h-5c-1.1,0-2,0.9-2,2v1.67c-0.88,0.35-1.5,1.2-1.5,2.2V17h1.5v-1.5h9V17H18v-4.13C18,11.87,17.38,11.02,16.5,10.67 z M15,8.5v2H9v-2H15z M7.5,12.87C7.5,12.39,7.89,12,8.37,12h7.27c0.48,0,0.87,0.39,0.87,0.87V14h-9v-1.13H7.5z" />
                    </G>
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Path d="M0,0h24v24H0V0z" fill="none" />
                    </G>
                    <G>
                        <G>
                            <Rect height="2" width="6" x="9" y="8.5" />
                            <Path d="M15.64,12H8.37c-0.48,0-0.87,0.39-0.87,0.87h0.01V14h9v-1.13C16.51,12.39,16.12,12,15.64,12z" />
                            <Path d="M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M17.25,17L17.25,17 c-0.41,0-0.75-0.34-0.75-0.75V15.5h-9v0.75C7.5,16.66,7.16,17,6.75,17h0C6.34,17,6,16.66,6,16.25v-3.38c0-1,0.62-1.85,1.5-2.2V9 c0-1.1,0.9-2,2-2h5c1.1,0,2,0.9,2,2v1.67c0.88,0.35,1.5,1.2,1.5,2.2v3.38C18,16.66,17.66,17,17.25,17z" />
                        </G>
                    </G>
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Path d="M0,0h24v24H0V0z" fill="none" />
                    </G>
                    <G>
                        <G>
                            <Rect height="2" width="6" x="9" y="8.5" />
                            <Rect height="2" width="9" x="7.51" y="12" />
                            <Path d="M22,2H2v20h20V2z M18,17h-1.5v-1.5h-9V17H6l0-6.32l1.5-0.01V7h9v3.67l1.5,0V17z" />
                        </G>
                    </G>
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Path d="M0,0h24v24H0V0z" fill="none" />
                    </G>
                    <G>
                        <Path d="M20,4v16H4V4H20 M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M16.5,10.67V9 c0-1.1-0.9-2-2-2h-5c-1.1,0-2,0.9-2,2v1.67c-0.88,0.35-1.5,1.2-1.5,2.2V17h1.5v-1.5h9V17H18v-4.13C18,11.87,17.38,11.02,16.5,10.67 z M15,8.5v2H9v-2H15z M7.5,12.87C7.5,12.39,7.89,12,8.37,12h7.27c0.48,0,0.87,0.39,0.87,0.87V14h-9v-1.13H7.5z" />
                    </G>
                </Icon>
            );
    }
}
