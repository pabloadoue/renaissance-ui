import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconAvClosedCaptionOff(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0z" fill="none" />
                    <Path d="M19.5 5.5v13h-15v-13h15zM19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 7H9.5v-.5h-2v3h2V13H11v1c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1zm7 0h-1.5v-.5h-2v3h2V13H18v1c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1z" />
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G enable-background="new">
                            <G>
                                <Path d="M19,4H5C3.89,4,3,4.9,3,6v12c0,1.1,0.89,2,2,2h14c1.1,0,2-0.9,2-2V6C21,4.9,20.1,4,19,4z M19,18H5V6h14V18z" />
                                <Path d="M7,15h3c0.55,0,1-0.45,1-1v-1H9.5v0.5h-2v-3h2V11H11v-1c0-0.55-0.45-1-1-1H7c-0.55,0-1,0.45-1,1v4C6,14.55,6.45,15,7,15z" />
                                <Path d="M14,15h3c0.55,0,1-0.45,1-1v-1h-1.5v0.5h-2v-3h2V11H18v-1c0-0.55-0.45-1-1-1h-3c-0.55,0-1,0.45-1,1v4 C13,14.55,13.45,15,14,15z" />
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
                    </G>
                    <G>
                        <G enable-background="new">
                            <Path d="M19,4H5C3.89,4,3,4.9,3,6v12c0,1.1,0.89,2,2,2h14c1.1,0,2-0.9,2-2V6C21,4.9,20.1,4,19,4z M11,10.5 c0,0.28-0.22,0.5-0.5,0.5H10c-0.28,0-0.5-0.22-0.5-0.5h-2v3h2c0-0.28,0.22-0.5,0.5-0.5h0.5c0.28,0,0.5,0.22,0.5,0.5V14 c0,0.55-0.45,1-1,1H7c-0.55,0-1-0.45-1-1v-4c0-0.55,0.45-1,1-1h3c0.55,0,1,0.45,1,1V10.5z M18,10.5c0,0.28-0.22,0.5-0.5,0.5H17 c-0.28,0-0.5-0.22-0.5-0.5h-2v3h2c0-0.28,0.22-0.5,0.5-0.5h0.5c0.28,0,0.5,0.22,0.5,0.5V14c0,0.55-0.45,1-1,1h-3 c-0.55,0-1-0.45-1-1v-4c0-0.55,0.45-1,1-1h3c0.55,0,1,0.45,1,1V10.5z" />
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
                        <G enable-background="new">
                            <Path d="M21,4H3v16h18V4z M11,11H9.5v-0.5h-2v3h2V13H11v2H6V9h5V11z M18,11h-1.5v-0.5h-2v3h2V13H18v2h-5V9h5V11z" />
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
                        <G enable-background="new">
                            <G>
                                <Path d="M19,4H5C3.89,4,3,4.9,3,6v12c0,1.1,0.89,2,2,2h14c1.1,0,2-0.9,2-2V6C21,4.9,20.1,4,19,4z M19,18H5V6h14V18z" />
                                <Path d="M7,15h3c0.55,0,1-0.45,1-1v-1H9.5v0.5h-2v-3h2V11H11v-1c0-0.55-0.45-1-1-1H7c-0.55,0-1,0.45-1,1v4C6,14.55,6.45,15,7,15z" />
                                <Path d="M14,15h3c0.55,0,1-0.45,1-1v-1h-1.5v0.5h-2v-3h2V11H18v-1c0-0.55-0.45-1-1-1h-3c-0.55,0-1,0.45-1,1v4 C13,14.55,13.45,15,14,15z" />
                            </G>
                        </G>
                    </G>
                </Icon>
            );
    }
}
