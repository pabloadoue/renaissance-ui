import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconActionDensityMedium(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <Rect height="2" width="18" x="3" y="3" />
                            <Rect height="2" width="18" x="3" y="19" />
                            <Rect height="2" width="18" x="3" y="11" />
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
                            <Rect height="2" width="18" x="3" y="3" />
                            <Rect height="2" width="18" x="3" y="19" />
                            <Rect height="2" width="18" x="3" y="11" />
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
                            <Path d="M4,5h16c0.55,0,1-0.45,1-1c0-0.55-0.45-1-1-1H4C3.45,3,3,3.45,3,4C3,4.55,3.45,5,4,5z" />
                            <Path d="M20,19H4c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1h16c0.55,0,1-0.45,1-1C21,19.45,20.55,19,20,19z" />
                            <Path d="M20,11H4c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1h16c0.55,0,1-0.45,1-1C21,11.45,20.55,11,20,11z" />
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
                            <Rect height="2" width="18" x="3" y="3" />
                            <Rect height="2" width="18" x="3" y="19" />
                            <Rect height="2" width="18" x="3" y="11" />
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
                            <Rect height="2" width="18" x="3" y="3" />
                            <Rect height="2" width="18" x="3" y="19" />
                            <Rect height="2" width="18" x="3" y="11" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
