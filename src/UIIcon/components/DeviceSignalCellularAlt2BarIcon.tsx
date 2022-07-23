import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconDeviceSignalCellularAlt2Bar(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <Path d="M5,14h3v6H5V14z M11,9h3v11h-3V9z" />
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
                            <Path d="M5,14h3v6H5V14z M11,9h3v11h-3V9z" />
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
                            <Path d="M6.5,20C5.67,20,5,19.33,5,18.5v-3C5,14.67,5.67,14,6.5,14S8,14.67,8,15.5v3C8,19.33,7.33,20,6.5,20z M12.5,20 c-0.83,0-1.5-0.67-1.5-1.5v-8C11,9.67,11.67,9,12.5,9S14,9.67,14,10.5v8C14,19.33,13.33,20,12.5,20z" />
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
                            <Path d="M5,14h3v6H5V14z M11,9h3v11h-3V9z" />
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
                            <Path d="M5,14h3v6H5V14z M11,9h3v11h-3V9z" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
