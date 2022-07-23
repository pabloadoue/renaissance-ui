import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconDeviceMonitorWeight(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Path d="M0,0h24v24H0V0z" fill="none" />
                    </G>
                    <G>
                        <G>
                            <Path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M12,12c-1.66,0-3-1.34-3-3 s1.34-3,3-3s3,1.34,3,3S13.66,12,12,12z" />
                            <Rect height="1" width="1" x="10" y="8.5" />
                            <Rect height="1" width="1" x="11.5" y="8.5" />
                            <Rect height="1" width="1" x="13" y="8.5" />
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
                        <G>
                            <Path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z M12,6 c-1.66,0-3,1.34-3,3s1.34,3,3,3s3-1.34,3-3S13.66,6,12,6z M11,9.5h-1v-1h1V9.5z M12.5,9.5h-1v-1h1V9.5z M14,9.5h-1v-1h1V9.5z" />
                        </G>
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
                            <Path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M12,12c-1.66,0-3-1.34-3-3 s1.34-3,3-3s3,1.34,3,3S13.66,12,12,12z" />
                            <circle cx="10.5" cy="9" r=".5" />
                            <circle cx="13.5" cy="9" r=".5" />
                            <circle cx="12" cy="9" r=".5" />
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
                            <Path d="M21,3H3v18h18V3z M14.2,11.2c-3.23,2.43-6.84-1.18-4.4-4.41C13.03,4.37,16.63,7.98,14.2,11.2z" />
                            <Rect height="1" width="1" x="10" y="8.5" />
                            <Rect height="1" width="1" x="11.5" y="8.5" />
                            <Rect height="1" width="1" x="13" y="8.5" />
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
                        <G>
                            <Path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z M12,6 c-1.66,0-3,1.34-3,3s1.34,3,3,3s3-1.34,3-3S13.66,6,12,6z M11,9.5h-1v-1h1V9.5z M12.5,9.5h-1v-1h1V9.5z M14,9.5h-1v-1h1V9.5z" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
