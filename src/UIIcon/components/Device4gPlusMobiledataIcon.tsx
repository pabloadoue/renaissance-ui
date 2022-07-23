import React from 'react';
import { G, Path } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconDevice4gPlusMobiledata(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Path d="M0,0h24v24H0V0z" fill="none" />
                    </G>
                    <G>
                        <G>
                            <Path d="M13,11v2h2v2h-4V9h6c0-1.1-0.9-2-2-2h-4C9.9,7,9,7.9,9,9v6c0,1.1,0.9,2,2,2h4c1.1,0,2-0.9,2-2v-4H13z M24,11h-2V9h-2v2h-2 v2h2v2h2v-2h2V11z M7,7H5v5H3V7H1v7h4v3h2v-3h1v-2H7V7z" />
                        </G>
                    </G>
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Path d="M0,0h24v24H0V0z" fill="none" />
                    </G>
                    <G>
                        <G>
                            <Path d="M13,11v2h2v2h-4V9h6c0-1.1-0.9-2-2-2h-4C9.9,7,9,7.9,9,9v6c0,1.1,0.9,2,2,2h4c1.1,0,2-0.9,2-2v-4H13z M24,11h-2V9h-2v2h-2 v2h2v2h2v-2h2V11z M7,7H5v5H3V7H1v7h4v3h2v-3h1v-2H7V7z" />
                        </G>
                    </G>
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Path d="M0,0h24v24H0V0z" fill="none" />
                    </G>
                    <G>
                        <G>
                            <Path d="M16,9c0.55,0,1-0.45,1-1s-0.45-1-1-1h-5C9.9,7,9,7.9,9,9v6c0,1.1,0.9,2,2,2h4c1.1,0,2-0.9,2-2v-3c0-0.55-0.45-1-1-1h-2 c-0.55,0-1,0.45-1,1s0.45,1,1,1h1v2h-4V9H16z" />
                            <Path d="M23,11h-1v-1c0-0.55-0.45-1-1-1s-1,0.45-1,1v1h-1c-0.55,0-1,0.45-1,1s0.45,1,1,1h1v1c0,0.55,0.45,1,1,1s1-0.45,1-1v-1h1 c0.55,0,1-0.45,1-1S23.55,11,23,11z" />
                            <Path d="M7,12V8c0-0.55-0.45-1-1-1S5,7.45,5,8v4H3V8c0-0.55-0.45-1-1-1S1,7.45,1,8v5c0,0.55,0.45,1,1,1h3v2c0,0.55,0.45,1,1,1 s1-0.45,1-1v-2c0.55,0,1-0.45,1-1S7.55,12,7,12z" />
                        </G>
                    </G>
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Path d="M0,0h24v24H0V0z" fill="none" />
                    </G>
                    <G>
                        <G>
                            <Path d="M13,11v2h2v2h-4V9h6V7H9v10h8v-6H13z M24,11h-2V9h-2v2h-2v2h2v2h2v-2h2V11z M7,7H5v5H3V7H1v7h4v3h2v-3h1v-2H7V7z" />
                        </G>
                    </G>
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Path d="M0,0h24v24H0V0z" fill="none" />
                    </G>
                    <G>
                        <G>
                            <Path d="M13,11v2h2v2h-4V9h6c0-1.1-0.9-2-2-2h-4C9.9,7,9,7.9,9,9v6c0,1.1,0.9,2,2,2h4c1.1,0,2-0.9,2-2v-4H13z M24,11h-2V9h-2v2h-2 v2h2v2h2v-2h2V11z M7,7H5v5H3V7H1v7h4v3h2v-3h1v-2H7V7z" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
