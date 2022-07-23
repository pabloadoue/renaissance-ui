import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconSocialMan3(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <Path d="M14,7h-4C8.9,7,8,7.9,8,9v6h2v7h4v-7h2V9C16,7.9,15.1,7,14,7z" />
                            <Rect
                                height="3.18"
                                transform="matrix(0.7071 0.7071 -0.7071 0.7071 6.3431 -7.3137)"
                                width="3.18"
                                x="10.41"
                                y="2.41"
                            />
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
                            <Path d="M14,7h-4C8.9,7,8,7.9,8,9v6h2v7h4v-7h2V9C16,7.9,15.1,7,14,7z" />
                            <Rect
                                height="3.18"
                                transform="matrix(0.7071 0.7071 -0.7071 0.7071 6.3431 -7.3137)"
                                width="3.18"
                                x="10.41"
                                y="2.41"
                            />
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
                            <Path d="M14,7h-4C8.9,7,8,7.9,8,9v5c0,0.55,0.45,1,1,1h1v6c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-6h1c0.55,0,1-0.45,1-1V9 C16,7.9,15.1,7,14,7z" />
                            <Path d="M11.65,5.9L10.1,4.35c-0.2-0.2-0.2-0.51,0-0.71l1.54-1.54c0.2-0.2,0.51-0.2,0.71,0l1.54,1.54c0.2,0.2,0.2,0.51,0,0.71 L12.35,5.9C12.16,6.09,11.84,6.09,11.65,5.9z" />
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
                            <Polygon points="16,7 8,7 8,15 10,15 10,22 14,22 14,15 16,15" />
                            <Rect
                                height="3.18"
                                transform="matrix(0.7071 0.7071 -0.7071 0.7071 6.3431 -7.3137)"
                                width="3.18"
                                x="10.41"
                                y="2.41"
                            />
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
                            <Path d="M14,7h-4C8.9,7,8,7.9,8,9v6h2v7h4v-7h2V9C16,7.9,15.1,7,14,7z" />
                            <Rect
                                height="3.18"
                                transform="matrix(0.7071 0.7071 -0.7071 0.7071 6.3431 -7.3137)"
                                width="3.18"
                                x="10.41"
                                y="2.41"
                            />
                        </G>
                    </G>
                </Icon>
            );
    }
}
