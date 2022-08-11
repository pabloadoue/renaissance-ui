import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconViewCozy(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <Path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M11.25,16.75h-4v-4h4V16.75z M11.25,11.25h-4v-4h4V11.25z M16.75,16.75h-4v-4h4V16.75z M16.75,11.25h-4v-4h4V11.25z" />
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
                            <Rect height="4" width="4" x="7.25" y="7.25" />
                            <Rect height="4" width="4" x="12.75" y="7.25" />
                            <Rect height="4" width="4" x="7.25" y="12.75" />
                            <Rect height="4" width="4" x="12.75" y="12.75" />
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
                            <Path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M10.75,16.75h-3 c-0.28,0-0.5-0.22-0.5-0.5v-3c0-0.28,0.22-0.5,0.5-0.5h3c0.28,0,0.5,0.22,0.5,0.5v3C11.25,16.53,11.03,16.75,10.75,16.75z M10.75,11.25h-3c-0.28,0-0.5-0.22-0.5-0.5v-3c0-0.28,0.22-0.5,0.5-0.5h3c0.28,0,0.5,0.22,0.5,0.5v3 C11.25,11.03,11.03,11.25,10.75,11.25z M16.25,16.75h-3c-0.28,0-0.5-0.22-0.5-0.5v-3c0-0.28,0.22-0.5,0.5-0.5h3 c0.28,0,0.5,0.22,0.5,0.5v3C16.75,16.53,16.53,16.75,16.25,16.75z M16.25,11.25h-3c-0.28,0-0.5-0.22-0.5-0.5v-3 c0-0.28,0.22-0.5,0.5-0.5h3c0.28,0,0.5,0.22,0.5,0.5v3C16.75,11.03,16.53,11.25,16.25,11.25z" />
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
                            <Path d="M22,4H2v16h20V4z M11.25,16.75h-4v-4h4V16.75z M11.25,11.25h-4v-4h4V11.25z M16.75,16.75h-4v-4h4V16.75z M16.75,11.25h-4 v-4h4V11.25z" />
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
                            <Rect height="4" width="4" x="7.25" y="7.25" />
                            <Rect height="4" width="4" x="12.75" y="7.25" />
                            <Rect height="4" width="4" x="7.25" y="12.75" />
                            <Rect height="4" width="4" x="12.75" y="12.75" />
                            <Path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M20,18H4V6h16V18z" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
