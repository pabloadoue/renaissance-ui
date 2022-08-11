import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconFace6(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <Path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8c0-0.01,0-0.02,0-0.03 c2.31-0.22,3.43-1.59,4.34-3.41C8.51,8.21,8.85,8,9.24,8h5.53c0.38,0,0.72,0.21,0.89,0.55c0.9,1.8,1.99,3.19,4.34,3.41 c0,0.01,0,0.02,0,0.03C20,16.41,16.41,20,12,20z" />
                            <circle cx="9" cy="13" r="1.25" />
                            <circle cx="15" cy="13" r="1.25" />
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
                            <Path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,4c3.68,0,6.78,2.51,7.71,5.9 c-0.6-0.16-1.33-0.37-2.26-2.24C16.94,6.64,15.91,6,14.76,6H9.24C8.09,6,7.06,6.64,6.55,7.66C5.62,9.52,4.97,9.72,4.29,9.9 C5.22,6.51,8.32,4,12,4z M12,20c-4.41,0-8-3.59-8-8c0-0.01,0-0.02,0-0.03c2.31-0.22,3.43-1.59,4.34-3.41C8.51,8.21,8.85,8,9.24,8 h5.53c0.38,0,0.72,0.21,0.89,0.55c0.9,1.8,1.99,3.19,4.34,3.41c0,0.01,0,0.02,0,0.03C20,16.41,16.41,20,12,20z" />
                            <circle cx="9" cy="13" r="1.25" />
                            <circle cx="15" cy="13" r="1.25" />
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
                            <Path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8c0-0.01,0-0.02,0-0.03 c2.31-0.22,3.43-1.59,4.34-3.41C8.51,8.21,8.85,8,9.24,8h5.53c0.38,0,0.72,0.21,0.89,0.55c0.9,1.8,1.99,3.19,4.34,3.41 c0,0.01,0,0.02,0,0.03C20,16.41,16.41,20,12,20z" />
                            <circle cx="9" cy="13" r="1.25" />
                            <circle cx="15" cy="13" r="1.25" />
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
                            <Path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10c5.52,0,10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8h2.62l2-4h6.76l2,4 H20C20,16.41,16.41,20,12,20z" />
                            <circle cx="9" cy="13" r="1.25" />
                            <circle cx="15" cy="13" r="1.25" />
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
                            <Path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,4c3.68,0,6.78,2.51,7.71,5.9 c-0.6-0.16-1.33-0.37-2.26-2.24C16.94,6.64,15.91,6,14.76,6H9.24C8.09,6,7.06,6.64,6.55,7.66C5.62,9.52,4.97,9.72,4.29,9.9 C5.22,6.51,8.32,4,12,4z M12,20c-4.41,0-8-3.59-8-8c0-0.01,0-0.02,0-0.03c2.31-0.22,3.43-1.59,4.34-3.41C8.51,8.21,8.85,8,9.24,8 h5.53c0.38,0,0.72,0.21,0.89,0.55c0.9,1.8,1.99,3.19,4.34,3.41c0,0.01,0,0.02,0,0.03C20,16.41,16.41,20,12,20z" />
                            <circle cx="9" cy="13" r="1.25" />
                            <circle cx="15" cy="13" r="1.25" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
