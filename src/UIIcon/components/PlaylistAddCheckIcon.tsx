import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconPlaylistAddCheck(props: any) {
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
                            <Polygon points="20.59,11.93 16.34,16.17 14.22,14.05 12.81,15.46 16.34,19 22,13.34" />
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
                            <Polygon points="20.59,11.93 16.34,16.17 14.22,14.05 12.81,15.46 16.34,19 22,13.34" />
                        </G>
                    </G>
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M13 10H3c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1zm0-4H3c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1zM3 16h6c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1s.45 1 1 1zm19.21-3.79l.09.09c.39.39.39 1.02 0 1.41l-5.58 5.59c-.39.39-1.02.39-1.41 0l-3.09-3.09c-.39-.39-.39-1.02 0-1.41l.09-.09c.39-.39 1.02-.39 1.41 0l2.3 2.3 4.78-4.79c.38-.4 1.02-.4 1.41-.01z" />
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
                            <Polygon points="20.59,11.93 16.34,16.17 14.22,14.05 12.81,15.46 16.34,19 22,13.34" />
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
                            <Polygon points="20.59,11.93 16.34,16.17 14.22,14.05 12.81,15.46 16.34,19 22,13.34" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
