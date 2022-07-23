import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconActionCommit(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <Path d="M16.9,11L16.9,11c-0.46-2.28-2.48-4-4.9-4s-4.44,1.72-4.9,4h0H2v2h5.1h0c0.46,2.28,2.48,4,4.9,4s4.44-1.72,4.9-4h0H22v-2 H16.9z M12,15c-1.66,0-3-1.34-3-3s1.34-3,3-3s3,1.34,3,3S13.66,15,12,15z" />
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
                        <Path d="M16.9,11L16.9,11c-0.46-2.28-2.48-4-4.9-4s-4.44,1.72-4.9,4h0H2v2h5.1h0c0.46,2.28,2.48,4,4.9,4s4.44-1.72,4.9-4h0H22v-2 H16.9z M12,15c-1.66,0-3-1.34-3-3s1.34-3,3-3s3,1.34,3,3S13.66,15,12,15z" />
                    </G>
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <Path d="M21,13c0.55,0,1-0.45,1-1s-0.45-1-1-1h-4.1h0c-0.46-2.28-2.48-4-4.9-4s-4.44,1.72-4.9,4h0H3c-0.55,0-1,0.45-1,1s0.45,1,1,1 h4.1h0c0.46,2.28,2.48,4,4.9,4s4.44-1.72,4.9-4h0H21z M12,15c-1.66,0-3-1.34-3-3s1.34-3,3-3s3,1.34,3,3S13.66,15,12,15z" />
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
                        <Path d="M16.9,11L16.9,11c-0.46-2.28-2.48-4-4.9-4s-4.44,1.72-4.9,4h0H2v2h5.1h0c0.46,2.28,2.48,4,4.9,4s4.44-1.72,4.9-4h0H22v-2 H16.9z M12,15c-1.66,0-3-1.34-3-3s1.34-3,3-3s3,1.34,3,3S13.66,15,12,15z" />
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
                        <Path d="M16.9,11L16.9,11c-0.46-2.28-2.48-4-4.9-4s-4.44,1.72-4.9,4h0H2v2h5.1h0c0.46,2.28,2.48,4,4.9,4s4.44-1.72,4.9-4h0H22v-2 H16.9z M12,15c-1.66,0-3-1.34-3-3s1.34-3,3-3s3,1.34,3,3S13.66,15,12,15z" />
                    </G>
                </Icon>
            );
    }
}
