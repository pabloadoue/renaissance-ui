import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconMapsDiamond(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <G>
                                <Polygon points="12.16,3 11.84,3 9.21,8.25 14.79,8.25" />
                            </G>
                            <G>
                                <Polygon points="16.46,8.25 21.62,8.25 19,3 13.84,3" />
                            </G>
                            <G>
                                <Polygon points="21.38,9.75 12.75,9.75 12.75,20.1" />
                            </G>
                            <G>
                                <Polygon points="11.25,20.1 11.25,9.75 2.62,9.75" />
                            </G>
                            <G>
                                <Polygon points="7.54,8.25 10.16,3 5,3 2.38,8.25" />
                            </G>
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
                        <Path d="M19,3H5L2,9l10,12L22,9L19,3z M9.62,8l1.5-3h1.76l1.5,3H9.62z M11,10v6.68L5.44,10H11z M13,10h5.56L13,16.68V10z M19.26,8 h-2.65l-1.5-3h2.65L19.26,8z M6.24,5h2.65l-1.5,3H4.74L6.24,5z" />
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
                            <G>
                                <Polygon points="12.16,3 11.84,3 9.21,8.25 14.79,8.25" />
                            </G>
                            <G>
                                <Path d="M16.46,8.25h5.16l-2.07-4.14C19.21,3.43,18.52,3,17.76,3h-3.93L16.46,8.25z" />
                            </G>
                            <G>
                                <Polygon points="21.38,9.75 12.75,9.75 12.75,20.1" />
                            </G>
                            <G>
                                <Polygon points="11.25,20.1 11.25,9.75 2.62,9.75" />
                            </G>
                            <G>
                                <Path d="M7.54,8.25L10.16,3H6.24C5.48,3,4.79,3.43,4.45,4.11L2.38,8.25H7.54z" />
                            </G>
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
                            <G>
                                <Polygon points="12.16,3 11.84,3 9.21,8.25 14.79,8.25" />
                            </G>
                            <G>
                                <Polygon points="16.46,8.25 21.62,8.25 19,3 13.84,3" />
                            </G>
                            <G>
                                <Polygon points="21.38,9.75 12.75,9.75 12.75,20.1" />
                            </G>
                            <G>
                                <Polygon points="11.25,20.1 11.25,9.75 2.62,9.75" />
                            </G>
                            <G>
                                <Polygon points="7.54,8.25 10.16,3 5,3 2.38,8.25" />
                            </G>
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
                        <Path d="M19,3H5L2,9l10,12L22,9L19,3z M9.62,8l1.5-3h1.76l1.5,3H9.62z M11,10v6.68L5.44,10H11z M13,10h5.56L13,16.68V10z M19.26,8 h-2.65l-1.5-3h2.65L19.26,8z M6.24,5h2.65l-1.5,3H4.74L6.24,5z" />
                    </G>
                </Icon>
            );
    }
}
