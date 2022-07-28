import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconDataset(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <Path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M11,17H7v-4h4V17z M11,11H7V7h4V11 z M17,17h-4v-4h4V17z M17,11h-4V7h4V11z" />
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
                            <G>
                                <Rect height="4" width="4" x="7" y="13" />
                            </G>
                            <G>
                                <Rect height="4" width="4" x="13" y="13" />
                            </G>
                            <G>
                                <Path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z" />
                            </G>
                            <G>
                                <Rect height="4" width="4" x="7" y="7" />
                            </G>
                            <G>
                                <Rect height="4" width="4" x="13" y="7" />
                            </G>
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
                            <Path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M11,17H7v-4h4V17z M11,11H7V7h4V11 z M17,17h-4v-4h4V17z M17,11h-4V7h4V11z" />
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
                            <Path d="M21,3H3v18h18V3z M11,17H7v-4h4V17z M11,11H7V7h4V11z M17,17h-4v-4h4V17z M17,11h-4V7h4V11z" />
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
                            <G>
                                <Rect height="4" width="4" x="7" y="13" />
                            </G>
                            <G>
                                <Rect height="4" width="4" x="13" y="13" />
                            </G>
                            <G>
                                <Path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z" />
                            </G>
                            <G>
                                <Rect height="4" width="4" x="7" y="7" />
                            </G>
                            <G>
                                <Rect height="4" width="4" x="13" y="7" />
                            </G>
                        </G>
                    </G>
                </Icon>
            );
    }
}
