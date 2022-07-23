import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconContentAmpStories(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G />
                        <G>
                            <Rect height="15" width="10" x="7" y="4" />
                            <Rect height="11" width="2" x="3" y="6" />
                            <Rect height="11" width="2" x="19" y="6" />
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
                        <G />
                        <G>
                            <Path d="M7,19h10V4H7V19z M9,6h6v11H9V6z" />
                            <Rect height="11" width="2" x="3" y="6" />
                            <Rect height="11" width="2" x="19" y="6" />
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
                        <G />
                        <G>
                            <Path d="M16,4H8C7.45,4,7,4.45,7,5v13c0,0.55,0.45,1,1,1h8c0.55,0,1-0.45,1-1V5C17,4.45,16.55,4,16,4z" />
                            <Path d="M4,6C3.45,6,3,6.45,3,7v9c0,0.55,0.45,1,1,1s1-0.45,1-1V7C5,6.45,4.55,6,4,6z" />
                            <Path d="M20,6c-0.55,0-1,0.45-1,1v9c0,0.55,0.45,1,1,1s1-0.45,1-1V7C21,6.45,20.55,6,20,6z" />
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
                        <G />
                        <G>
                            <Rect height="15" width="10" x="7" y="4" />
                            <Rect height="11" width="2" x="3" y="6" />
                            <Rect height="11" width="2" x="19" y="6" />
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
                        <G />
                        <G>
                            <Path d="M7,19h10V4H7V19z M9,6h6v11H9V6z" />
                            <Rect height="11" width="2" x="3" y="6" />
                            <Rect height="11" width="2" x="19" y="6" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
