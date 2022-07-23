import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconActionViewComfyAlt(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <Path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M11,17H7v-4h4V17z M11,11H7V7h4V11 z M17,17h-4v-4h4V17z M17,11h-4V7h4V11z" />
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
                            <Rect height="4" width="4" x="7" y="7" />
                            <Rect height="4" width="4" x="13" y="7" />
                            <Rect height="4" width="4" x="7" y="13" />
                            <Rect height="4" width="4" x="13" y="13" />
                            <Path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M20,18H4V6h16V18z" />
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
                            <Path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M10.5,17h-3 C7.22,17,7,16.78,7,16.5v-3C7,13.22,7.22,13,7.5,13h3c0.28,0,0.5,0.22,0.5,0.5v3C11,16.78,10.78,17,10.5,17z M10.5,11h-3 C7.22,11,7,10.78,7,10.5v-3C7,7.22,7.22,7,7.5,7h3C10.78,7,11,7.22,11,7.5v3C11,10.78,10.78,11,10.5,11z M16.5,17h-3 c-0.28,0-0.5-0.22-0.5-0.5v-3c0-0.28,0.22-0.5,0.5-0.5h3c0.28,0,0.5,0.22,0.5,0.5v3C17,16.78,16.78,17,16.5,17z M16.5,11h-3 c-0.28,0-0.5-0.22-0.5-0.5v-3C13,7.22,13.22,7,13.5,7h3C16.78,7,17,7.22,17,7.5v3C17,10.78,16.78,11,16.5,11z" />
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
                            <Path d="M2,4v16h20V4H2z M11,17H7v-4h4V17z M11,11H7V7h4V11z M17,17h-4v-4h4V17z M17,11h-4V7h4V11z" />
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
                            <Rect height="4" width="4" x="7" y="7" />
                            <Rect height="4" width="4" x="13" y="7" />
                            <Rect height="4" width="4" x="7" y="13" />
                            <Rect height="4" width="4" x="13" y="13" />
                            <Path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M20,18H4V6h16V18z" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
