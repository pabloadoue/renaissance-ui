import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function Icon24mp(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0z" fill="none" />
                    <Path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 15.5h-1.5V14h-1v3H8v-3H7v4.5H5.5v-5c0-.55.45-1 1-1H11c.55 0 1 .45 1 1v5zm3.5 0H14v-6h3.5c.55 0 1 .45 1 1V16c0 .55-.45 1-1 1h-2v1.5zM10 9H8v1h3v1.5H6.5V9c0-.55.45-1 1-1h2V7h-3V5.5H10c.55 0 1 .45 1 1V8c0 .55-.45 1-1 1zm8.5 1h-1v1.5H16V10h-3V5.5h1.5v3H16v-3h1.5v3h1V10zm-3 4H17v1.5h-1.5z" />
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
                            <Path d="M7.5,14h1v3H10v-3h1v4.5h1.5v-5c0-0.55-0.45-1-1-1H7c-0.55,0-1,0.45-1,1v5h1.5V14z" />
                            <Path d="M17,12.5h-3.5v6H15V17h2c0.55,0,1-0.45,1-1v-2.5C18,12.95,17.55,12.5,17,12.5z M16.5,15.5H15V14h1.5V15.5z" />
                            <Path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z" />
                            <Path d="M11,10H8V9h2c0.55,0,1-0.45,1-1V6.5c0-0.55-0.45-1-1-1H6.5V7h3v1h-2c-0.55,0-1,0.45-1,1v2.5H11V10z" />
                            <Polygon points="16,11.5 17.5,11.5 17.5,10 18.5,10 18.5,8.5 17.5,8.5 17.5,5.5 16,5.5 16,8.5 14.5,8.5 14.5,5.5 13,5.5 13,10 16,10" />
                        </G>
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
                        <G>
                            <Path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M6.5,9c0-0.55,0.45-1,1-1h2V7H7.25 C6.84,7,6.5,6.66,6.5,6.25S6.84,5.5,7.25,5.5H10c0.55,0,1,0.45,1,1V8c0,0.55-0.45,1-1,1H8v1h2.25c0.41,0,0.75,0.34,0.75,0.75 s-0.34,0.75-0.75,0.75H7.5c-0.55,0-1-0.45-1-1V9z M12.5,17.75c0,0.41-0.34,0.75-0.75,0.75S11,18.16,11,17.75V14h-1v2.25 C10,16.66,9.66,17,9.25,17S8.5,16.66,8.5,16.25V14h-1v3.75c0,0.41-0.34,0.75-0.75,0.75S6,18.16,6,17.75V13.5c0-0.55,0.45-1,1-1 h4.5c0.55,0,1,0.45,1,1V17.75z M18,16c0,0.55-0.45,1-1,1h-2v0.75c0,0.41-0.34,0.75-0.75,0.75s-0.75-0.34-0.75-0.75V13.5 c0-0.55,0.45-1,1-1H17c0.55,0,1,0.45,1,1V16z M17.75,10H17.5v0.75c0,0.41-0.34,0.75-0.75,0.75S16,11.16,16,10.75V10h-2 c-0.55,0-1-0.45-1-1V6.25c0-0.41,0.34-0.75,0.75-0.75s0.75,0.34,0.75,0.75V8.5H16V6.25c0-0.41,0.34-0.75,0.75-0.75 s0.75,0.34,0.75,0.75V8.5h0.25c0.41,0,0.75,0.34,0.75,0.75S18.16,10,17.75,10z" />
                            <Rect height="1.5" width="1.5" x="15" y="14" />
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
                            <Rect height="1.5" width="1.5" x="15" y="14" />
                            <Path d="M3,3v18h18V3H3z M6.5,8h3V7h-3V5.5H11V9H8v1h3v1.5H6.5V8z M12.5,18.5H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5V18.5z M18,17h-3 v1.5h-1.5v-6H18V17z M18.5,10h-1v1.5H16V10h-3V5.5h1.5v3H16v-3h1.5v3h1V10z" />
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
                            <Path d="M7.5,14h1v3H10v-3h1v4.5h1.5v-5c0-0.55-0.45-1-1-1H7c-0.55,0-1,0.45-1,1v5h1.5V14z" />
                            <Path d="M17,12.5h-3.5v6H15V17h2c0.55,0,1-0.45,1-1v-2.5C18,12.95,17.55,12.5,17,12.5z M16.5,15.5H15V14h1.5V15.5z" />
                            <Path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z" />
                            <Path d="M11,10H8V9h2c0.55,0,1-0.45,1-1V6.5c0-0.55-0.45-1-1-1H6.5V7h3v1h-2c-0.55,0-1,0.45-1,1v2.5H11V10z" />
                            <Polygon points="16,11.5 17.5,11.5 17.5,10 18.5,10 18.5,8.5 17.5,8.5 17.5,5.5 16,5.5 16,8.5 14.5,8.5 14.5,5.5 13,5.5 13,10 16,10" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
