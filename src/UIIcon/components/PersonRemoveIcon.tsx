import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconPersonRemove(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <Path d="M14,8c0-2.21-1.79-4-4-4S6,5.79,6,8s1.79,4,4,4S14,10.21,14,8z M17,10v2h6v-2H17z M2,18v2h16v-2c0-2.66-5.33-4-8-4 S2,15.34,2,18z" />
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
                            <Path d="M14,8c0-2.21-1.79-4-4-4C7.79,4,6,5.79,6,8c0,2.21,1.79,4,4,4C12.21,12,14,10.21,14,8z M12,8c0,1.1-0.9,2-2,2 c-1.1,0-2-0.9-2-2s0.9-2,2-2C11.1,6,12,6.9,12,8z" />
                            <Path d="M2,18v2h16v-2c0-2.66-5.33-4-8-4C7.33,14,2,15.34,2,18z M4,18c0.2-0.71,3.3-2,6-2c2.69,0,5.77,1.28,6,2H4z" />
                            <Rect height="2" width="6" x="17" y="10" />
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
                        <Path d="M14,8c0-2.21-1.79-4-4-4S6,5.79,6,8s1.79,4,4,4S14,10.21,14,8z M2,18v1c0,0.55,0.45,1,1,1h14c0.55,0,1-0.45,1-1v-1 c0-2.66-5.33-4-8-4S2,15.34,2,18z M18,10h4c0.55,0,1,0.45,1,1v0c0,0.55-0.45,1-1,1h-4c-0.55,0-1-0.45-1-1v0 C17,10.45,17.45,10,18,10z" />
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
                        <Path d="M14,8c0-2.21-1.79-4-4-4S6,5.79,6,8s1.79,4,4,4S14,10.21,14,8z M17,10v2h6v-2H17z M2,18v2h16v-2c0-2.66-5.33-4-8-4 S2,15.34,2,18z" />
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
                            <Path d="M14,8c0-2.21-1.79-4-4-4C7.79,4,6,5.79,6,8c0,2.21,1.79,4,4,4C12.21,12,14,10.21,14,8z M12,8c0,1.1-0.9,2-2,2 c-1.1,0-2-0.9-2-2s0.9-2,2-2C11.1,6,12,6.9,12,8z" />
                            <Path d="M2,18v2h16v-2c0-2.66-5.33-4-8-4C7.33,14,2,15.34,2,18z M4,18c0.2-0.71,3.3-2,6-2c2.69,0,5.77,1.28,6,2H4z" />
                            <Rect height="2" width="6" x="17" y="10" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
