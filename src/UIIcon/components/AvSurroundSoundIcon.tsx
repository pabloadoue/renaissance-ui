import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconAvSurroundSound(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0z" fill="none" />
                    <Path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7.76 16.24l-1.41 1.41C4.78 16.1 4 14.05 4 12c0-2.05.78-4.1 2.34-5.66l1.41 1.41C6.59 8.93 6 10.46 6 12s.59 3.07 1.76 4.24zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm5.66 1.66l-1.41-1.41C17.41 15.07 18 13.54 18 12s-.59-3.07-1.76-4.24l1.41-1.41C19.22 7.9 20 9.95 20 12c0 2.05-.78 4.1-2.34 5.66zM12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                        <Rect fill="none" height="24" width="24" />
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G />
                        <G>
                            <Path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M20,18H4V6h16V18z" />
                            <Path d="M8.29,15.71C7.27,14.69,6.75,13.35,6.75,12c0-1.35,0.52-2.69,1.53-3.72L7.05,7.05C5.68,8.41,5,10.21,5,12 s0.68,3.59,2.06,4.94L8.29,15.71z" />
                            <Path d="M12,15.5c1.93,0,3.5-1.57,3.5-3.5c0-1.93-1.57-3.5-3.5-3.5c-1.93,0-3.5,1.57-3.5,3.5C8.5,13.93,10.07,15.5,12,15.5z M12,10.5c0.83,0,1.5,0.67,1.5,1.5s-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S11.17,10.5,12,10.5z" />
                            <Path d="M15.72,15.72l1.23,1.23C18.32,15.59,19,13.79,19,12s-0.68-3.59-2.06-4.94l-1.23,1.23c1.02,1.02,1.54,2.36,1.54,3.71 C17.25,13.35,16.73,14.69,15.72,15.72z" />
                        </G>
                    </G>
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7.11 16.89c-.43.43-1.14.39-1.51-.09C4.53 15.39 4 13.69 4 12s.53-3.38 1.59-4.8c.37-.48 1.08-.53 1.51-.1.35.35.39.9.1 1.29C6.4 9.46 6 10.73 6 12s.4 2.53 1.2 3.6c.3.39.26.94-.09 1.29zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm4.9.9c-.35-.35-.39-.9-.09-1.29C17.6 14.54 18 13.27 18 12s-.4-2.53-1.2-3.6c-.3-.39-.26-.95.09-1.3.43-.43 1.14-.39 1.51.09 1.07 1.41 1.6 3.1 1.6 4.8 0 1.69-.53 3.38-1.59 4.8-.37.49-1.08.54-1.51.11zM12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                        <Rect fill="none" height="24" width="24" />
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <Path d="M22,4H2v16h20V4z M7.76,16.24l-1.41,1.41C4.78,16.1,4,14.05,4,12s0.78-4.1,2.34-5.66l1.41,1.41C6.59,8.93,6,10.46,6,12 S6.59,15.07,7.76,16.24z M12,16c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,16,12,16z M17.66,17.66l-1.41-1.41 C17.41,15.07,18,13.54,18,12s-0.59-3.07-1.76-4.24l1.41-1.41C19.22,7.9,20,9.95,20,12S19.22,16.1,17.66,17.66z M12,10 c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S13.1,10,12,10z" />
                    </G>
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                        <Rect fill="none" height="24" width="24" />
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G />
                        <G>
                            <Path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M20,18H4V6h16V18z" />
                            <Path d="M8.29,15.71C7.27,14.69,6.75,13.35,6.75,12c0-1.35,0.52-2.69,1.53-3.72L7.05,7.05C5.68,8.41,5,10.21,5,12 s0.68,3.59,2.06,4.94L8.29,15.71z" />
                            <Path d="M12,15.5c1.93,0,3.5-1.57,3.5-3.5c0-1.93-1.57-3.5-3.5-3.5c-1.93,0-3.5,1.57-3.5,3.5C8.5,13.93,10.07,15.5,12,15.5z M12,10.5c0.83,0,1.5,0.67,1.5,1.5s-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S11.17,10.5,12,10.5z" />
                            <Path d="M15.72,15.72l1.23,1.23C18.32,15.59,19,13.79,19,12s-0.68-3.59-2.06-4.94l-1.23,1.23c1.02,1.02,1.54,2.36,1.54,3.71 C17.25,13.35,16.73,14.69,15.72,15.72z" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
