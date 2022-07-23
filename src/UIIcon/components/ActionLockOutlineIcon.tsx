import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconActionLockOutline(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" x="0" />
                    </G>
                    <G>
                        <G>
                            <G>
                                <Path d="M12,17c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S10.9,17,12,17z M18,8h-1V6c0-2.76-2.24-5-5-5S7,3.24,7,6v2H6 c-1.1,0-2,0.9-2,2v10c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V10C20,8.9,19.1,8,18,8z M8.9,6c0-1.71,1.39-3.1,3.1-3.1 s3.1,1.39,3.1,3.1v2H8.9V6z M18,20H6V10h12V20z" />
                            </G>
                        </G>
                    </G>
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0z" fill="none" />
                    <Path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm8 14H7c-.55 0-1-.45-1-1v-8c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1zm-5-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0z" fill="none" />
                    <Path d="M17 8V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H4v14h16V8h-3zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" x="0" />
                    </G>
                    <G>
                        <G>
                            <G>
                                <Path d="M12,17c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S10.9,17,12,17z M18,8h-1V6c0-2.76-2.24-5-5-5S7,3.24,7,6v2H6 c-1.1,0-2,0.9-2,2v10c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V10C20,8.9,19.1,8,18,8z M8.9,6c0-1.71,1.39-3.1,3.1-3.1 s3.1,1.39,3.1,3.1v2H8.9V6z M18,20H6V10h12V20z" />
                            </G>
                        </G>
                    </G>
                </Icon>
            );
    }
}
