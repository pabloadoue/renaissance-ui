import React from 'react';
import { G, Path } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconLtePlusMobiledata(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Path d="M0,0h24v24H0V0z" fill="none" />
                    </G>
                    <G>
                        <G>
                            <Path d="M3,14h3v2H1V8h2V14z M5,10h2v6h2v-6h2V8H5V10z M12,16h5v-2h-3v-1h3v-2h-3v-1h3V8h-5V16z M24,11h-2V9h-2v2h-2v2h2v2h2v-2h2 V11z" />
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
                            <Path d="M3,14h3v2H1V8h2V14z M5,10h2v6h2v-6h2V8H5V10z M12,16h5v-2h-3v-1h3v-2h-3v-1h3V8h-5V16z M24,11h-2V9h-2v2h-2v2h2v2h2v-2h2 V11z" />
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
                            <Path d="M3,14h2c0.55,0,1,0.45,1,1v0c0,0.55-0.45,1-1,1H2c-0.55,0-1-0.45-1-1V9c0-0.55,0.45-1,1-1h0c0.55,0,1,0.45,1,1V14z M6,10 h1v5c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-5h1c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H6C5.45,8,5,8.45,5,9v0 C5,9.55,5.45,10,6,10z M13,16h3c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1h-2v-1h2c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1h-2v-1h2 c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1h-3c-0.55,0-1,0.45-1,1v6C12,15.55,12.45,16,13,16z M23,11h-1v-1c0-0.55-0.45-1-1-1h0 c-0.55,0-1,0.45-1,1v1h-1c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h1v1c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-1h1 c0.55,0,1-0.45,1-1v0C24,11.45,23.55,11,23,11z" />
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
                            <Path d="M3,14h3v2H1V8h2V14z M5,10h2v6h2v-6h2V8H5V10z M12,16h5v-2h-3v-1h3v-2h-3v-1h3V8h-5V16z M24,11h-2V9h-2v2h-2v2h2v2h2v-2h2 V11z" />
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
                            <Path d="M3,14h3v2H1V8h2V14z M5,10h2v6h2v-6h2V8H5V10z M12,16h5v-2h-3v-1h3v-2h-3v-1h3V8h-5V16z M24,11h-2V9h-2v2h-2v2h2v2h2v-2h2 V11z" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
