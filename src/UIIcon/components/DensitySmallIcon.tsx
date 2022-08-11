import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconDensitySmall(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <Rect height="2" width="18" x="3" y="2" />
                            <Rect height="2" width="18" x="3" y="20" />
                            <Rect height="2" width="18" x="3" y="14" />
                            <Rect height="2" width="18" x="3" y="8" />
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
                            <Rect height="2" width="18" x="3" y="2" />
                            <Rect height="2" width="18" x="3" y="20" />
                            <Rect height="2" width="18" x="3" y="14" />
                            <Rect height="2" width="18" x="3" y="8" />
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
                            <Path d="M3,3L3,3c0,0.55,0.45,1,1,1h16c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H4C3.45,2,3,2.45,3,3z" />
                            <Path d="M4,22h16c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H4c-0.55,0-1,0.45-1,1v0C3,21.55,3.45,22,4,22z" />
                            <Path d="M4,16h16c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H4c-0.55,0-1,0.45-1,1v0C3,15.55,3.45,16,4,16z" />
                            <Path d="M4,10h16c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H4C3.45,8,3,8.45,3,9v0C3,9.55,3.45,10,4,10z" />
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
                            <Rect height="2" width="18" x="3" y="2" />
                            <Rect height="2" width="18" x="3" y="20" />
                            <Rect height="2" width="18" x="3" y="14" />
                            <Rect height="2" width="18" x="3" y="8" />
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
                            <Rect height="2" width="18" x="3" y="2" />
                            <Rect height="2" width="18" x="3" y="20" />
                            <Rect height="2" width="18" x="3" y="14" />
                            <Rect height="2" width="18" x="3" y="8" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
