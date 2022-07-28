import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconBloodtype(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Path d="M0,0h24v24H0V0z" fill="none" />
                    </G>
                    <G>
                        <Path d="M12,2c-5.33,4.55-8,8.48-8,11.8c0,4.98,3.8,8.2,8,8.2s8-3.22,8-8.2C20,10.48,17.33,6.55,12,2z M15,18H9v-2h6V18z M15,13h-2 v2h-2v-2H9v-2h2V9h2v2h2V13z" />
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
                            <Rect height="2" width="6" x="9" y="16" />
                            <Polygon points="13,9 11,9 11,11 9,11 9,13 11,13 11,15 13,15 13,13 15,13 15,11 13,11" />
                            <Path d="M12,2c-5.33,4.55-8,8.48-8,11.8c0,4.98,3.8,8.2,8,8.2s8-3.22,8-8.2C20,10.48,17.33,6.55,12,2z M12,20 c-3.35,0-6-2.57-6-6.2c0-2.34,1.95-5.44,6-9.14c4.05,3.7,6,6.79,6,9.14C18,17.43,15.35,20,12,20z" />
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
                        <Path d="M12.66,2.58c-0.38-0.33-0.95-0.33-1.33,0C6.45,6.88,4,10.62,4,13.8c0,4.98,3.8,8.2,8,8.2s8-3.22,8-8.2 C20,10.62,17.55,6.88,12.66,2.58z M14,18h-4c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1h4c0.55,0,1,0.45,1,1C15,17.55,14.55,18,14,18z M14,13h-1v1c0,0.55-0.45,1-1,1s-1-0.45-1-1v-1h-1c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1h1v-1c0-0.55,0.45-1,1-1s1,0.45,1,1v1h1 c0.55,0,1,0.45,1,1C15,12.55,14.55,13,14,13z" />
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
                        <Path d="M12,2c-5.33,4.55-8,8.48-8,11.8c0,4.98,3.8,8.2,8,8.2s8-3.22,8-8.2C20,10.48,17.33,6.55,12,2z M15,18H9v-2h6V18z M15,13h-2 v2h-2v-2H9v-2h2V9h2v2h2V13z" />
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
                            <Rect height="2" width="6" x="9" y="16" />
                            <Polygon points="13,9 11,9 11,11 9,11 9,13 11,13 11,15 13,15 13,13 15,13 15,11 13,11" />
                            <Path d="M12,2c-5.33,4.55-8,8.48-8,11.8c0,4.98,3.8,8.2,8,8.2s8-3.22,8-8.2C20,10.48,17.33,6.55,12,2z M12,20 c-3.35,0-6-2.57-6-6.2c0-2.34,1.95-5.44,6-9.14c4.05,3.7,6,6.79,6,9.14C18,17.43,15.35,20,12,20z" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
