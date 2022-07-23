import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconFileFolderCopy(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <Path d="M3,6H1v13c0,1.1,0.9,2,2,2h17v-2H3V6z" />
                            <Path d="M21,4h-7l-2-2H7C5.9,2,5.01,2.9,5.01,4L5,15c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V6C23,4.9,22.1,4,21,4z" />
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
                        <Path d="M3,19h17v2H3c-1.1,0-2-0.9-2-2V6h2V19z M23,6v9c0,1.1-0.9,2-2,2H7c-1.1,0-2-0.9-2-2L5.01,4C5.01,2.9,5.9,2,7,2h5l2,2h7 C22.1,4,23,4.9,23,6z M7,15h14V6h-7.83l-2-2H7V15z" />
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
                            <Path d="M2,6L2,6C1.45,6,1,6.45,1,7v12c0,1.1,0.9,2,2,2h16c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H3V7C3,6.45,2.55,6,2,6z" />
                            <Path d="M21,4h-7l-1.41-1.41C12.21,2.21,11.7,2,11.17,2H7C5.9,2,5.01,2.9,5.01,4L5,15c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V6 C23,4.9,22.1,4,21,4z" />
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
                            <Polygon points="3,6 1,6 1,21 20,21 20,19 3,19" />
                            <Path d="M23,4h-9l-2-2H5.01L5,17h18V4z" />
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
                        <Path d="M3,19h17v2H3c-1.1,0-2-0.9-2-2V6h2V19z M23,6v9c0,1.1-0.9,2-2,2H7c-1.1,0-2-0.9-2-2L5.01,4C5.01,2.9,5.9,2,7,2h5l2,2h7 C22.1,4,23,4.9,23,6z M7,15h14V6h-7.83l-2-2H7V15z" />
                    </G>
                </Icon>
            );
    }
}
