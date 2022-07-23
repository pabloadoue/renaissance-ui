import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconDeviceWifi2Bar(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G display="none">
                        <Rect
                            display="inline"
                            fill="none"
                            height="24"
                            width="24"
                        />
                    </G>
                    <G>
                        <Path d="M12,10c3.03,0,5.78,1.23,7.76,3.22l-2.12,2.12C16.2,13.9,14.2,13,12,13c-2.2,0-4.2,0.9-5.64,2.35l-2.12-2.12 C6.22,11.23,8.97,10,12,10z M12,16c-1.38,0-2.63,0.56-3.53,1.46L12,21l3.53-3.54C14.63,16.56,13.38,16,12,16z" />
                    </G>
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G display="none">
                        <Rect
                            display="inline"
                            fill="none"
                            height="24"
                            width="24"
                        />
                    </G>
                    <G>
                        <Path d="M12,10c3.03,0,5.78,1.23,7.76,3.22l-2.12,2.12C16.2,13.9,14.2,13,12,13c-2.2,0-4.2,0.9-5.64,2.35l-2.12-2.12 C6.22,11.23,8.97,10,12,10z M12,16c-1.38,0-2.63,0.56-3.53,1.46L12,21l3.53-3.54C14.63,16.56,13.38,16,12,16z" />
                    </G>
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G display="none">
                        <Rect
                            display="inline"
                            fill="none"
                            height="24"
                            width="24"
                        />
                        <Rect
                            display="inline"
                            fill="none"
                            height="24"
                            width="24"
                        />
                    </G>
                    <G>
                        <Path d="M12,16c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S13.1,16,12,16z M5.38,14.37c-0.63-0.63-0.59-1.71,0.13-2.24 C7.33,10.79,9.57,10,12,10c2.43,0,4.67,0.79,6.49,2.13c0.72,0.53,0.76,1.6,0.13,2.24c-0.53,0.54-1.37,0.57-1.98,0.12 C15.33,13.55,13.73,13,12,13c-1.73,0-3.33,0.55-4.64,1.49C6.75,14.93,5.91,14.9,5.38,14.37z" />
                    </G>
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G display="none">
                        <Rect
                            display="inline"
                            fill="none"
                            height="24"
                            width="24"
                        />
                    </G>
                    <G>
                        <Path d="M12,10c3.03,0,5.78,1.23,7.76,3.22l-2.12,2.12C16.2,13.9,14.2,13,12,13c-2.2,0-4.2,0.9-5.64,2.35l-2.12-2.12 C6.22,11.23,8.97,10,12,10z M12,16c-1.38,0-2.63,0.56-3.53,1.46L12,21l3.53-3.54C14.63,16.56,13.38,16,12,16z" />
                    </G>
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G display="none">
                        <Rect
                            display="inline"
                            fill="none"
                            height="24"
                            width="24"
                        />
                    </G>
                    <G>
                        <Path d="M12,10c3.03,0,5.78,1.23,7.76,3.22l-2.12,2.12C16.2,13.9,14.2,13,12,13c-2.2,0-4.2,0.9-5.64,2.35l-2.12-2.12 C6.22,11.23,8.97,10,12,10z M12,16c-1.38,0-2.63,0.56-3.53,1.46L12,21l3.53-3.54C14.63,16.56,13.38,16,12,16z" />
                    </G>
                </Icon>
            );
    }
}
