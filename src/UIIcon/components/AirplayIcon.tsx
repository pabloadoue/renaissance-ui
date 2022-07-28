import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconAirplay(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <G>
                        <Polygon points="6,22 18,22 12,16" />
                        <Path d="M21,3H3C1.9,3,1,3.9,1,5v12c0,1.1,0.9,2,2,2h4v-2H3V5h18v12h-4v2h4c1.1,0,2-0.9,2-2V5C23,3.9,22.1,3,21,3z" />
                    </G>
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                        <Rect fill="none" height="24" width="24" />
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G />
                        <G>
                            <Polygon points="6,22 18,22 12,16" />
                            <Path d="M21,3H3C1.9,3,1,3.9,1,5v12c0,1.1,0.9,2,2,2h4v-2H3V5h18v12h-4v2h4c1.1,0,2-0.9,2-2V5C23,3.9,22.1,3,21,3z" />
                        </G>
                    </G>
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M8.41 22h7.17c.89 0 1.34-1.08.71-1.71L12.7 16.7c-.39-.39-1.02-.39-1.41 0L7.7 20.29c-.62.63-.18 1.71.71 1.71zM21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h3c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1h-2c-.55 0-1 .45-1 1s.45 1 1 1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                        <Rect fill="none" height="24" width="24" />
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <Path d="M6,22h12l-6-6L6,22z M23,3H1v16h6v-2H3V5h18v12h-4v2h6V3z" />
                    </G>
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                        <Rect fill="none" height="24" width="24" />
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G />
                        <G>
                            <Polygon points="6,22 18,22 12,16" />
                            <Path d="M21,3H3C1.9,3,1,3.9,1,5v12c0,1.1,0.9,2,2,2h4v-2H3V5h18v12h-4v2h4c1.1,0,2-0.9,2-2V5C23,3.9,22.1,3,21,3z" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
