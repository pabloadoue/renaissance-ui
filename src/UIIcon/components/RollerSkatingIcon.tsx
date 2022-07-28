import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconRollerSkating(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <Path d="M9,6.5C9,6.22,9.22,6,9.5,6h2.52L12,5H9.5C9.22,5,9,4.78,9,4.5C9,4.22,9.22,4,9.5,4H12V1H4v15h3h13l0-2.88 c0-2.1-1.55-3.53-3.03-3.88l-2.7-0.67C13.4,8.35,12.7,7.76,12.32,7H9.5C9.22,7,9,6.78,9,6.5z M5,23c-1.66,0-3-1.34-3-3s1.34-3,3-3 s3,1.34,3,3S6.66,23,5,23z M19,23c-1.66,0-3-1.34-3-3s1.34-3,3-3s3,1.34,3,3S20.66,23,19,23z M12,23c-1.66,0-3-1.34-3-3 s1.34-3,3-3s3,1.34,3,3S13.66,23,12,23z" />
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
                                <Path d="M20,12c0-1.79-1.19-3.34-2.91-3.82l-2.62-0.74C13.62,7.19,13,6.39,13,5.5V1H4v15h16V12z M18,14H6V3h5v1H9.5 C9.22,4,9,4.22,9,4.5C9,4.78,9.22,5,9.5,5H11l0.1,1H9.5C9.22,6,9,6.22,9,6.5C9,6.78,9.22,7,9.5,7h1.81 c0.45,1.12,1.4,2.01,2.6,2.36l2.62,0.73C17.4,10.33,18,11.1,18,12V14z M5,17c-1.66,0-3,1.34-3,3s1.34,3,3,3s3-1.34,3-3 S6.66,17,5,17z M5,21c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1s1,0.45,1,1C6,20.55,5.55,21,5,21z M19,17c-1.66,0-3,1.34-3,3 s1.34,3,3,3s3-1.34,3-3S20.66,17,19,17z M19,21c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1s1,0.45,1,1C20,20.55,19.55,21,19,21z M12,17c-1.66,0-3,1.34-3,3s1.34,3,3,3s3-1.34,3-3S13.66,17,12,17z M12,21c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1s1,0.45,1,1 C13,20.55,12.55,21,12,21z" />
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
                            <Path d="M18,16c1.1,0,2-0.9,2-2l0-0.88c0-2.1-1.55-3.53-3.03-3.88l-2.7-0.67C13.4,8.35,12.7,7.76,12.32,7H9.5C9.22,7,9,6.78,9,6.5 S9.22,6,9.5,6h2.52L12,5H9.5C9.22,5,9,4.78,9,4.5C9,4.22,9.22,4,9.5,4H12V3c0-1.1-0.9-2-2-2H6C4.9,1,4,1.9,4,3v11c0,1.1,0.9,2,2,2 H18z M5,23c-1.66,0-3-1.34-3-3s1.34-3,3-3s3,1.34,3,3S6.66,23,5,23z M19,23c-1.66,0-3-1.34-3-3s1.34-3,3-3s3,1.34,3,3 S20.66,23,19,23z M12,23c-1.66,0-3-1.34-3-3s1.34-3,3-3s3,1.34,3,3S13.66,23,12,23z" />
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
                            <Path d="M20,16l-0.01-6l-5.71-1.43C13.4,8.35,12.7,7.76,12.32,7H9V6h3.02L12,5H9V4h3V1H4v15H20z M5,23c-1.66,0-3-1.34-3-3 s1.34-3,3-3s3,1.34,3,3S6.66,23,5,23z M19,23c-1.66,0-3-1.34-3-3s1.34-3,3-3s3,1.34,3,3S20.66,23,19,23z M12,23 c-1.66,0-3-1.34-3-3s1.34-3,3-3s3,1.34,3,3S13.66,23,12,23z" />
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
                                <Path d="M20,12c0-1.79-1.19-3.34-2.91-3.82l-2.62-0.74C13.62,7.19,13,6.39,13,5.5V1H4v15h16V12z M18,14H6V3h5v1H9.5 C9.22,4,9,4.22,9,4.5C9,4.78,9.22,5,9.5,5H11l0.1,1H9.5C9.22,6,9,6.22,9,6.5C9,6.78,9.22,7,9.5,7h1.81 c0.45,1.12,1.4,2.01,2.6,2.36l2.62,0.73C17.4,10.33,18,11.1,18,12V14z M5,17c-1.66,0-3,1.34-3,3s1.34,3,3,3s3-1.34,3-3 S6.66,17,5,17z M5,21c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1s1,0.45,1,1C6,20.55,5.55,21,5,21z M19,17c-1.66,0-3,1.34-3,3 s1.34,3,3,3s3-1.34,3-3S20.66,17,19,17z M19,21c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1s1,0.45,1,1C20,20.55,19.55,21,19,21z M12,17c-1.66,0-3,1.34-3,3s1.34,3,3,3s3-1.34,3-3S13.66,17,12,17z M12,21c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1s1,0.45,1,1 C13,20.55,12.55,21,12,21z" />
                            </G>
                        </G>
                    </G>
                </Icon>
            );
    }
}
