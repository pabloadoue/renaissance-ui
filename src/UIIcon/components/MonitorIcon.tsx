import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconMonitor(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3l-1 1v2h12v-2l-1-1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H4V5h16v11z" />
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" y="0" />
                    </G>
                    <G>
                        <G>
                            <Path d="M20,3H4C2.9,3,2,3.9,2,5v11c0,1.1,0.9,2,2,2h3l-1,1v2h12v-2l-1-1h3c1.1,0,2-0.9,2-2V5C22,3.9,21.1,3,20,3z M20,16H4V5h16 V16z" />
                        </G>
                    </G>
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" y="0" />
                    </G>
                    <G>
                        <G>
                            <Path d="M20,3H4C2.9,3,2,3.9,2,5v11c0,1.1,0.9,2,2,2h3c-0.55,0.55-1,0.87-1,1.59v0C6,20.37,6.63,21,7.41,21h9.17 c0.78,0,1.41-0.63,1.41-1.41v0c0-0.72-0.44-1.03-1-1.59h3c1.1,0,2-0.9,2-2V5C22,3.9,21.1,3,20,3z M20,16H4V5h16V16z" />
                        </G>
                    </G>
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" y="0" />
                    </G>
                    <G>
                        <G>
                            <Path d="M22,3H2v15h5l-1,1v2h12v-2l-1-1h5V3z M20,16H4V5h16V16z" />
                        </G>
                    </G>
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" y="0" />
                    </G>
                    <G>
                        <G>
                            <Path d="M20,3H4C2.9,3,2,3.9,2,5v11c0,1.1,0.9,2,2,2h3l-1,1v2h12v-2l-1-1h3c1.1,0,2-0.9,2-2V5C22,3.9,21.1,3,20,3z M20,16H4V5h16 V16z" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
