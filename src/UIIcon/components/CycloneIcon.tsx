import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconCyclone(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <Path d="M12,8c-2.21,0-4,1.79-4,4c0,2.21,1.79,4,4,4c2.21,0,4-1.79,4-4C16,9.79,14.21,8,12,8z M12,14c-1.1,0-2-0.9-2-2 c0-1.1,0.9-2,2-2s2,0.9,2,2C14,13.1,13.1,14,12,14z" />
                            <Path d="M22,7.47V5.35C20.05,4.77,16.56,4,12,4C9.85,4,7.89,4.86,6.46,6.24C6.59,5.39,6.86,3.84,7.47,2H5.35 C4.77,3.95,4,7.44,4,12c0,2.15,0.86,4.11,2.24,5.54c-0.85-0.14-2.4-0.4-4.24-1.01v2.12C3.95,19.23,7.44,20,12,20 c2.15,0,4.11-0.86,5.54-2.24c-0.14,0.85-0.4,2.4-1.01,4.24h2.12C19.23,20.05,20,16.56,20,12c0-2.15-0.86-4.11-2.24-5.54 C18.61,6.59,20.16,6.86,22,7.47z M12,18c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S15.31,18,12,18z" />
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
                            <Path d="M12,8c-2.21,0-4,1.79-4,4c0,2.21,1.79,4,4,4c2.21,0,4-1.79,4-4C16,9.79,14.21,8,12,8z M12,14c-1.1,0-2-0.9-2-2 c0-1.1,0.9-2,2-2s2,0.9,2,2C14,13.1,13.1,14,12,14z" />
                            <Path d="M22,7.47V5.35C20.05,4.77,16.56,4,12,4C9.85,4,7.89,4.86,6.46,6.24C6.59,5.39,6.86,3.84,7.47,2H5.35 C4.77,3.95,4,7.44,4,12c0,2.15,0.86,4.11,2.24,5.54c-0.85-0.14-2.4-0.4-4.24-1.01v2.12C3.95,19.23,7.44,20,12,20 c2.15,0,4.11-0.86,5.54-2.24c-0.14,0.85-0.4,2.4-1.01,4.24h2.12C19.23,20.05,20,16.56,20,12c0-2.15-0.86-4.11-2.24-5.54 C18.61,6.59,20.16,6.86,22,7.47z M12,18c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S15.31,18,12,18z" />
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
                            <Path d="M12,8c-2.21,0-4,1.79-4,4c0,2.21,1.79,4,4,4c2.21,0,4-1.79,4-4C16,9.79,14.21,8,12,8z M12,14c-1.1,0-2-0.9-2-2 c0-1.1,0.9-2,2-2s2,0.9,2,2C14,13.1,13.1,14,12,14z" />
                            <Path d="M22,6.11L22,6.11c0-0.46-0.3-0.86-0.74-0.97C19.23,4.6,16.03,4,12,4C9.85,4,7.89,4.86,6.46,6.24 c0.1-0.65,0.28-1.69,0.62-2.96C7.25,2.64,6.78,2,6.11,2h0C5.66,2,5.26,2.3,5.14,2.74C4.6,4.77,4,7.97,4,12 c0,2.15,0.86,4.11,2.24,5.54c-0.65-0.1-1.69-0.28-2.96-0.62C2.64,16.75,2,17.22,2,17.89v0c0,0.46,0.3,0.86,0.74,0.97 C4.77,19.4,7.97,20,12,20c2.15,0,4.11-0.86,5.54-2.24c-0.1,0.65-0.28,1.69-0.62,2.96c-0.17,0.64,0.3,1.28,0.97,1.28h0 c0.46,0,0.86-0.3,0.97-0.74C19.4,19.23,20,16.03,20,12c0-2.15-0.86-4.11-2.24-5.54c0.65,0.1,1.69,0.28,2.96,0.62 C21.36,7.25,22,6.78,22,6.11z M12,18c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S15.31,18,12,18z" />
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
                            <Path d="M12,8c-2.21,0-4,1.79-4,4c0,2.21,1.79,4,4,4c2.21,0,4-1.79,4-4C16,9.79,14.21,8,12,8z M12,14c-1.1,0-2-0.9-2-2 c0-1.1,0.9-2,2-2s2,0.9,2,2C14,13.1,13.1,14,12,14z" />
                            <Path d="M22,7.47V5.35C20.05,4.77,16.56,4,12,4C9.85,4,7.89,4.86,6.46,6.24C6.59,5.39,6.86,3.84,7.47,2H5.35 C4.77,3.95,4,7.44,4,12c0,2.15,0.86,4.11,2.24,5.54c-0.85-0.14-2.4-0.4-4.24-1.01v2.12C3.95,19.23,7.44,20,12,20 c2.15,0,4.11-0.86,5.54-2.24c-0.14,0.85-0.4,2.4-1.01,4.24h2.12C19.23,20.05,20,16.56,20,12c0-2.15-0.86-4.11-2.24-5.54 C18.61,6.59,20.16,6.86,22,7.47z M12,18c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S15.31,18,12,18z" />
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
                            <Path d="M12,8c-2.21,0-4,1.79-4,4c0,2.21,1.79,4,4,4c2.21,0,4-1.79,4-4C16,9.79,14.21,8,12,8z M12,14c-1.1,0-2-0.9-2-2 c0-1.1,0.9-2,2-2s2,0.9,2,2C14,13.1,13.1,14,12,14z" />
                            <Path d="M22,7.47V5.35C20.05,4.77,16.56,4,12,4C9.85,4,7.89,4.86,6.46,6.24C6.59,5.39,6.86,3.84,7.47,2H5.35 C4.77,3.95,4,7.44,4,12c0,2.15,0.86,4.11,2.24,5.54c-0.85-0.14-2.4-0.4-4.24-1.01v2.12C3.95,19.23,7.44,20,12,20 c2.15,0,4.11-0.86,5.54-2.24c-0.14,0.85-0.4,2.4-1.01,4.24h2.12C19.23,20.05,20,16.56,20,12c0-2.15-0.86-4.11-2.24-5.54 C18.61,6.59,20.16,6.86,22,7.47z M12,18c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S15.31,18,12,18z" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
