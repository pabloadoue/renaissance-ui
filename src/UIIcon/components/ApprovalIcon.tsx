import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconApproval(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0z" fill="none" />
                    <Path d="M4 16v6h16v-6c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2zm14 2H6v-2h12v2zM12 2C9.24 2 7 4.24 7 7l5 7 5-7c0-2.76-2.24-5-5-5zm0 9L9 7c0-1.66 1.34-3 3-3s3 1.34 3 3l-3 4z" />
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
                            <Path d="M4,16v6h16v-6c0-1.1-0.9-2-2-2H6C4.9,14,4,14.9,4,16z M18,18H6v-2h12V18z M12,2C9.24,2,7,4.24,7,7l5,7l5-7 C17,4.24,14.76,2,12,2z M12,11L9,7c0-1.66,1.34-3,3-3s3,1.34,3,3L12,11z" />
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
                        <G>
                            <Path d="M4,16v4c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-4c0-1.1-0.9-2-2-2H6C4.9,14,4,14.9,4,16z M17,18H7c-0.55,0-1-0.45-1-1v0 c0-0.55,0.45-1,1-1h10c0.55,0,1,0.45,1,1v0C18,17.55,17.55,18,17,18z M12,2C9.54,2,7.48,3.79,7.07,6.13 C6.99,6.65,7.13,7.18,7.43,7.6l3.76,5.26c0.4,0.56,1.23,0.56,1.63,0l3.76-5.26c0.3-0.42,0.44-0.95,0.35-1.47 C16.52,3.79,14.46,2,12,2z" />
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
                            <Path d="M4,14v8h16v-8H4z M18,18H6v-2h12V18z M12,2C9.24,2,7,4.24,7,7l5,7l5-7C17,4.24,14.76,2,12,2z" />
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
                            <Path d="M4,16v6h16v-6c0-1.1-0.9-2-2-2H6C4.9,14,4,14.9,4,16z M18,18H6v-2h12V18z M12,2C9.24,2,7,4.24,7,7l5,7l5-7 C17,4.24,14.76,2,12,2z M12,11L9,7c0-1.66,1.34-3,3-3s3,1.34,3,3L12,11z" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
