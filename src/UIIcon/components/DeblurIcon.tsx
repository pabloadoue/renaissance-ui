import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconDeblur(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <Path d="M12,3v18c4.97,0,9-4.03,9-9C21,7.03,16.97,3,12,3z" />
                            <circle cx="6" cy="14" r="1" />
                            <circle cx="6" cy="18" r="1" />
                            <circle cx="6" cy="10" r="1" />
                            <circle cx="3" cy="10" r=".5" />
                            <circle cx="6" cy="6" r="1" />
                            <circle cx="3" cy="14" r=".5" />
                            <circle cx="10" cy="21" r=".5" />
                            <circle cx="10" cy="3" r=".5" />
                            <circle cx="10" cy="6" r="1" />
                            <circle cx="10" cy="14" r="1.5" />
                            <circle cx="10" cy="10" r="1.5" />
                            <circle cx="10" cy="18" r="1" />
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
                            <circle cx="6" cy="14" r="1" />
                            <circle cx="6" cy="18" r="1" />
                            <circle cx="6" cy="10" r="1" />
                            <circle cx="3" cy="10" r=".5" />
                            <circle cx="6" cy="6" r="1" />
                            <circle cx="3" cy="14" r=".5" />
                            <circle cx="10" cy="21" r=".5" />
                            <circle cx="10" cy="3" r=".5" />
                            <circle cx="10" cy="6" r="1" />
                            <circle cx="10" cy="14" r="1.5" />
                            <circle cx="10" cy="10" r="1.5" />
                            <circle cx="10" cy="18" r="1" />
                            <Path d="M12,3v2c3.86,0,7,3.14,7,7s-3.14,7-7,7v2c4.96,0,9-4.04,9-9S16.96,3,12,3z" />
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
                            <Path d="M12,3v18c4.97,0,9-4.03,9-9C21,7.03,16.97,3,12,3z" />
                            <circle cx="6" cy="14" r="1" />
                            <circle cx="6" cy="18" r="1" />
                            <circle cx="6" cy="10" r="1" />
                            <circle cx="3" cy="10" r=".5" />
                            <circle cx="6" cy="6" r="1" />
                            <circle cx="3" cy="14" r=".5" />
                            <circle cx="10" cy="21" r=".5" />
                            <circle cx="10" cy="3" r=".5" />
                            <circle cx="10" cy="6" r="1" />
                            <circle cx="10" cy="14" r="1.5" />
                            <circle cx="10" cy="10" r="1.5" />
                            <circle cx="10" cy="18" r="1" />
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
                            <Path d="M12,3v18c4.97,0,9-4.03,9-9C21,7.03,16.97,3,12,3z" />
                            <circle cx="6" cy="14" r="1" />
                            <circle cx="6" cy="18" r="1" />
                            <circle cx="6" cy="10" r="1" />
                            <circle cx="3" cy="10" r=".5" />
                            <circle cx="6" cy="6" r="1" />
                            <circle cx="3" cy="14" r=".5" />
                            <circle cx="10" cy="21" r=".5" />
                            <circle cx="10" cy="3" r=".5" />
                            <circle cx="10" cy="6" r="1" />
                            <circle cx="10" cy="14" r="1.5" />
                            <circle cx="10" cy="10" r="1.5" />
                            <circle cx="10" cy="18" r="1" />
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
                            <circle cx="6" cy="14" r="1" />
                            <circle cx="6" cy="18" r="1" />
                            <circle cx="6" cy="10" r="1" />
                            <circle cx="3" cy="10" r=".5" />
                            <circle cx="6" cy="6" r="1" />
                            <circle cx="3" cy="14" r=".5" />
                            <circle cx="10" cy="21" r=".5" />
                            <circle cx="10" cy="3" r=".5" />
                            <circle cx="10" cy="6" r="1" />
                            <circle cx="10" cy="14" r="1.5" />
                            <circle cx="10" cy="10" r="1.5" />
                            <circle cx="10" cy="18" r="1" />
                            <Path d="M12,3v2c3.86,0,7,3.14,7,7s-3.14,7-7,7v2c4.96,0,9-4.04,9-9S16.96,3,12,3z" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
