import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconSocialTornado(props: any) {
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
                                <Polygon points="20.11,8 23,3 1,3 3.89,8" />
                            </G>
                            <G>
                                <Polygon points="7.95,15 12,22 16.05,15" />
                            </G>
                            <G>
                                <Polygon points="18.95,10 5.05,10 6.79,13 17.21,13" />
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
                        <Path d="M23,3H1l11,19L23,3z M19.53,5l-1.74,3H6.21L4.47,5H19.53z M10.26,15h3.48L12,18.01L10.26,15z M14.9,13H9.1l-1.74-3h9.27 L14.9,13z" />
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
                                <Path d="M20.11,8l1.16-2c0.77-1.33-0.19-3-1.73-3H4.47c-1.54,0-2.5,1.67-1.73,3l1.16,2H20.11z" />
                            </G>
                            <G>
                                <Path d="M7.95,15l2.32,4.01c0.77,1.33,2.69,1.33,3.46,0L16.05,15H7.95z" />
                            </G>
                            <G>
                                <Polygon points="18.95,10 5.05,10 6.79,13 17.21,13" />
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
                                <Polygon points="20.11,8 23,3 1,3 3.89,8" />
                            </G>
                            <G>
                                <Polygon points="7.95,15 12,22 16.05,15" />
                            </G>
                            <G>
                                <Polygon points="18.95,10 5.05,10 6.79,13 17.21,13" />
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
                        <Path d="M23,3H1l11,19L23,3z M19.53,5l-1.74,3H6.21L4.47,5H19.53z M10.26,15h3.48L12,18.01L10.26,15z M14.9,13H9.1l-1.74-3h9.27 L14.9,13z" />
                    </G>
                </Icon>
            );
    }
}
