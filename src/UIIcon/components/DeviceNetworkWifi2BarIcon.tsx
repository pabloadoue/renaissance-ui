import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconDeviceNetworkWifi2Bar(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <Path d="M12,4C7.31,4,3.07,5.9,0,8.98L12,21L24,8.98C20.93,5.9,16.69,4,12,4z M16.78,13.38C15.4,12.5,13.76,12,12,12 c-1.76,0-3.4,0.5-4.78,1.38l-4.3-4.3C5.51,7.08,8.67,6,12,6s6.49,1.08,9.08,3.07L16.78,13.38z" />
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
                        <Path d="M12,4C7.31,4,3.07,5.9,0,8.98L12,21L24,8.98C20.93,5.9,16.69,4,12,4z M16.78,13.38C15.4,12.5,13.76,12,12,12 c-1.76,0-3.4,0.5-4.78,1.38l-4.3-4.3C5.51,7.08,8.67,6,12,6s6.49,1.08,9.08,3.07L16.78,13.38z" />
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
                        <Path d="M12,4C7.7,4,3.78,5.6,0.79,8.24C0.35,8.63,0.32,9.3,0.73,9.71l10.56,10.58c0.39,0.39,1.02,0.39,1.42,0L23.27,9.71 c0.41-0.41,0.38-1.08-0.06-1.47C20.22,5.6,16.3,4,12,4z M16.78,13.38C15.4,12.5,13.76,12,12,12c-1.76,0-3.4,0.5-4.78,1.38l-4.3-4.3 C5.51,7.08,8.67,6,12,6s6.49,1.08,9.08,3.07L16.78,13.38z" />
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
                        <Path d="M12,4C7.31,4,3.07,5.9,0,8.98L12,21L24,8.98C20.93,5.9,16.69,4,12,4z M16.78,13.38C15.4,12.5,13.76,12,12,12 c-1.76,0-3.4,0.5-4.78,1.38l-4.3-4.3C5.51,7.08,8.67,6,12,6s6.49,1.08,9.08,3.07L16.78,13.38z" />
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
                        <Path d="M12,4C7.31,4,3.07,5.9,0,8.98L12,21L24,8.98C20.93,5.9,16.69,4,12,4z M16.78,13.38C15.4,12.5,13.76,12,12,12 c-1.76,0-3.4,0.5-4.78,1.38l-4.3-4.3C5.51,7.08,8.67,6,12,6s6.49,1.08,9.08,3.07L16.78,13.38z" />
                    </G>
                </Icon>
            );
    }
}
