import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconAdUnits(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0z" fill="none" />
                    <Path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H7V5h10v14zM8 6h8v2H8z" />
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                        <G>
                            <G>
                                <Path d="M17,1H7C5.9,1,5,1.9,5,3v18c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V3C19,1.9,18.1,1,17,1L17,1z M7,4V3h10v1H7L7,4z M7,18V6 h10v12H7L7,18z M7,21v-1h10v1H7L7,21z" />
                            </G>
                            <G>
                                <Polygon points="16,7 8,7 8,9 16,9 16,7" />
                            </G>
                        </G>
                    </G>
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" x="0" />
                        <G>
                            <Path d="M17,1H7C5.9,1,5,1.9,5,3v18c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V3C19,1.9,18.1,1,17,1z M16,19H8c-0.55,0-1-0.45-1-1V6 c0-0.55,0.45-1,1-1h8c0.55,0,1,0.45,1,1v12C17,18.55,16.55,19,16,19z" />
                            <Path d="M15,6H9C8.45,6,8,6.45,8,7v0c0,0.55,0.45,1,1,1h6c0.55,0,1-0.45,1-1v0C16,6.45,15.55,6,15,6z" />
                        </G>
                    </G>
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" x="0" />
                        <G>
                            <Path d="M19,1H5v22h14V1z M17,19H7V5h10V19z" />
                            <Rect height="2" width="8" x="8" y="6" />
                        </G>
                    </G>
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                        <G>
                            <G>
                                <Path d="M17,1H7C5.9,1,5,1.9,5,3v18c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V3C19,1.9,18.1,1,17,1L17,1z M7,4V3h10v1H7L7,4z M7,18V6 h10v12H7L7,18z M7,21v-1h10v1H7L7,21z" />
                            </G>
                            <G>
                                <Polygon points="16,7 8,7 8,9 16,9 16,7" />
                            </G>
                        </G>
                    </G>
                </Icon>
            );
    }
}
