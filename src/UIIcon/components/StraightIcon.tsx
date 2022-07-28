import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconStraight(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <Polygon points="11,6.83 9.41,8.41 8,7 12,3 16,7 14.59,8.41 13,6.83 13,21 11,21" />
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
                        <Polygon points="11,6.83 9.41,8.41 8,7 12,3 16,7 14.59,8.41 13,6.83 13,21 11,21" />
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
                        <Path d="M13,6.83l0.88,0.88c0.39,0.39,1.02,0.39,1.41,0c0.39-0.39,0.39-1.02,0-1.41l-2.59-2.59c-0.39-0.39-1.02-0.39-1.41,0 L8.71,6.29c-0.39,0.39-0.39,1.02,0,1.41c0.39,0.39,1.02,0.39,1.41,0L11,6.83V20c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1V6.83 L13,6.83z" />
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
                        <Polygon points="11,6.83 9.41,8.41 8,7 12,3 16,7 14.59,8.41 13,6.83 13,21 11,21" />
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
                        <Polygon points="11,6.83 9.41,8.41 8,7 12,3 16,7 14.59,8.41 13,6.83 13,21 11,21" />
                    </G>
                </Icon>
            );
    }
}
