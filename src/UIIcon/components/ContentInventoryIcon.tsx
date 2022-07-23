import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconContentInventory(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0z" fill="none" />
                    <Path d="M20 2H4c-1 0-2 .9-2 2v3.01c0 .72.43 1.34 1 1.69V20c0 1.1 1.1 2 2 2h14c.9 0 2-.9 2-2V8.7c.57-.35 1-.97 1-1.69V4c0-1.1-1-2-2-2zm-5 12H9v-2h6v2zm5-7H4V4l16-.02V7z" />
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
                            <Path d="M5,5h2v3h10V5h2v5h2V5c0-1.1-0.9-2-2-2h-4.18C14.4,1.84,13.3,1,12,1S9.6,1.84,9.18,3H5C3.9,3,3,3.9,3,5v14 c0,1.1,0.9,2,2,2h6v-2H5V5z M12,3c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S11.45,3,12,3z" />
                            <Polygon points="21,11.5 15.51,17 12.5,14 11,15.5 15.51,20 22.5,13" />
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
                            <Path d="M5,5h2v1c0,1.1,0.9,2,2,2h6c1.1,0,2-0.9,2-2V5h2v5h2V5c0-1.1-0.9-2-2-2h-4.18C14.4,1.84,13.3,1,12,1S9.6,1.84,9.18,3H5 C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h6v-2H5V5z M12,3c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S11.45,3,12,3z" />
                            <Path d="M21.75,12.25c-0.41-0.41-1.09-0.41-1.5,0L15.51,17l-2.26-2.25c-0.41-0.41-1.08-0.41-1.5,0l0,0c-0.41,0.41-0.41,1.09,0,1.5 l3.05,3.04c0.39,0.39,1.02,0.39,1.41,0l5.53-5.54C22.16,13.34,22.16,12.66,21.75,12.25z" />
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
                            <Path d="M5,5h2v3h10V5h2v5h2V3h-6.18C14.4,1.84,13.3,1,12,1S9.6,1.84,9.18,3H3v18h8v-2H5V5z M12,3c0.55,0,1,0.45,1,1s-0.45,1-1,1 s-1-0.45-1-1S11.45,3,12,3z" />
                            <Polygon points="21,11.5 15.51,17 12.5,14 11,15.5 15.51,20 22.5,13" />
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
                            <Path d="M5,5h2v3h10V5h2v5h2V5c0-1.1-0.9-2-2-2h-4.18C14.4,1.84,13.3,1,12,1S9.6,1.84,9.18,3H5C3.9,3,3,3.9,3,5v14 c0,1.1,0.9,2,2,2h6v-2H5V5z M12,3c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S11.45,3,12,3z" />
                            <Polygon points="21,11.5 15.51,17 12.5,14 11,15.5 15.51,20 22.5,13" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
