import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconAvPlaylistPlay(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <Rect height="2" width="11" x="3" y="10" />
                            <Rect height="2" width="11" x="3" y="6" />
                            <Rect height="2" width="7" x="3" y="14" />
                            <Polygon points="16,13 16,21 22,17" />
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
                            <Rect height="2" width="11" x="3" y="10" />
                            <Rect height="2" width="11" x="3" y="6" />
                            <Rect height="2" width="7" x="3" y="14" />
                            <Polygon points="16,13 16,21 22,17" />
                        </G>
                    </G>
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M5 10h10c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1zm0-4h10c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1zm0 8h6c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1zm9 .88v4.23c0 .39.42.63.76.43l3.53-2.12c.32-.19.32-.66 0-.86l-3.53-2.12c-.34-.19-.76.05-.76.44z" />
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
                            <Rect height="2" width="11" x="3" y="10" />
                            <Rect height="2" width="11" x="3" y="6" />
                            <Rect height="2" width="7" x="3" y="14" />
                            <Polygon points="16,13 16,21 22,17" />
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
                            <Rect height="2" width="11" x="3" y="10" />
                            <Rect height="2" width="11" x="3" y="6" />
                            <Rect height="2" width="7" x="3" y="14" />
                            <Polygon points="16,13 16,21 22,17" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
