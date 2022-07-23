import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconActionOutgoingMail(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <Path d="M18.5,11c0.17,0,0.34,0.01,0.5,0.03V6.87C19,5.84,18.16,5,17.13,5H3.87C2.84,5,2,5.84,2,6.87v10.26 C2,18.16,2.84,19,3.87,19h9.73C13.22,18.25,13,17.4,13,16.5C13,13.46,15.46,11,18.5,11z M10.4,13L4,9.19V7h0.23l6.18,3.68L16.74,7 H17v2.16L10.4,13z" />
                            <Polygon points="19,13 17.59,14.41 19.17,16 15,16 15,18 19.17,18 17.59,19.59 19,21 23,17" />
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
                            <Path d="M18.5,11c0.17,0,0.34,0.01,0.5,0.03V6.87C19,5.84,18.16,5,17.13,5H3.87C2.84,5,2,5.84,2,6.87v10.26 C2,18.16,2.84,19,3.87,19h9.73C13.22,18.25,13,17.4,13,16.5C13,13.46,15.46,11,18.5,11z M10.4,13L4,9.19V7h0.23l6.18,3.68L16.74,7 H17v2.16L10.4,13z" />
                            <Polygon points="19,13 17.59,14.41 19.17,16 15,16 15,18 19.17,18 17.59,19.59 19,21 23,17" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
