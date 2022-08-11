import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconTempleHindu(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <Polygon points="6.6,11 17.4,11 16.5,8 7.5,8" />
                            <Polygon points="20,11 20,13 4,13 4,11 2,11 2,22 10,22 10,17 14,17 14,22 22,22 22,11" />
                            <Polygon points="15.9,6 15,3 15,1 13,1 13,3 10.97,3 10.97,1 8.97,1 8.97,3.12 8.1,6" />
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
                        <Path d="M20,11v2h-2L15,3V1h-2v2h-2.03V1h-2v2.12L6,13H4v-2H2v11h9v-5h2v5h9V11H20z M15.31,11H8.69l0.6-2h5.42L15.31,11z M14.11,7 H9.89l0.6-2h3.02L14.11,7z M20,20h-5v-5H9v5H4v-5h3.49l0.6-2h7.82l0.6,2H20V20z" />
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
                            <Polygon points="6.6,11 17.4,11 16.5,8 7.5,8" />
                            <Path d="M20,12v1H4v-1c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v8c0,1.1,0.9,2,2,2h6v-3c0-1.1,0.9-2,2-2h0c1.1,0,2,0.9,2,2v3h6 c1.1,0,2-0.9,2-2v-8c0-0.55-0.45-1-1-1h0C20.45,11,20,11.45,20,12z" />
                            <Path d="M15.9,6L15,3V2c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v1h-2.03V2c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v1.12L8.1,6 H15.9z" />
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
                            <Polygon points="6.6,11 17.4,11 16.5,8 7.5,8" />
                            <Polygon points="20,11 20,13 4,13 4,11 2,11 2,22 10,22 10,17 14,17 14,22 22,22 22,11" />
                            <Polygon points="15.9,6 15,3 15,1 13,1 13,3 10.97,3 10.97,1 8.97,1 8.97,3.12 8.1,6" />
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
                        <Path d="M20,11v2h-2L15,3V1h-2v2h-2.03V1h-2v2.12L6,13H4v-2H2v11h9v-5h2v5h9V11H20z M15.31,11H8.69l0.6-2h5.42L15.31,11z M14.11,7 H9.89l0.6-2h3.02L14.11,7z M20,20h-5v-5H9v5H4v-5h3.49l0.6-2h7.82l0.6,2H20V20z" />
                    </G>
                </Icon>
            );
    }
}
