import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconImage5mp(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0z" fill="none" />
                    <Path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 15.5h-1.5V14h-1v3H8v-3H7v4.5H5.5v-5c0-.55.45-1 1-1H11c.55 0 1 .45 1 1v5zm3.5 0H14v-6h3.5c.55 0 1 .45 1 1V16c0 .55-.45 1-1 1h-2v1.5zM14.5 7h-3v1h2c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1H10V10h3V9h-3V5.5h4.5V7zm1 7H17v1.5h-1.5z" />
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
                            <Path d="M13.5,18.5H15V17h2c0.55,0,1-0.45,1-1v-2.5c0-0.55-0.45-1-1-1h-3.5V18.5z M15,14h1.5v1.5H15V14z" />
                            <Path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z" />
                            <Path d="M14.5,10.5V9c0-0.55-0.45-1-1-1h-2V7h3V5.5H10V9h3v1h-3v1.5h3.5C14.05,11.5,14.5,11.05,14.5,10.5z" />
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
                            <Rect height="1.5" width="1.5" x="15" y="14" />
                            <Path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M11,9c-0.55,0-1-0.45-1-1V6.5 c0-0.55,0.45-1,1-1h2.75c0.41,0,0.75,0.34,0.75,0.75S14.16,7,13.75,7H11.5v1h2c0.55,0,1,0.45,1,1v1.5c0,0.55-0.45,1-1,1h-2.75 c-0.41,0-0.75-0.34-0.75-0.75S10.34,10,10.75,10H13V9H11z M12.5,17.75c0,0.41-0.34,0.75-0.75,0.75S11,18.17,11,17.75V14h-1v2.25 C10,16.67,9.66,17,9.25,17S8.5,16.67,8.5,16.25V14h-1v3.75c0,0.41-0.34,0.75-0.75,0.75S6,18.17,6,17.75V13.5c0-0.55,0.45-1,1-1 h4.5c0.55,0,1,0.45,1,1V17.75z M18,16c0,0.55-0.45,1-1,1h-2v0.75c0,0.41-0.34,0.75-0.75,0.75s-0.75-0.34-0.75-0.75V13.5 c0-0.55,0.45-1,1-1H17c0.55,0,1,0.45,1,1V16z" />
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
                            <Path d="M3,3v18h18V3H3z M10,10h3V9h-3V5.5h4.5V7h-3v1h3v3.5H10V10z M12.5,18.5H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5V18.5z M18,17 h-3v1.5h-1.5v-6H18V17z" />
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
                            <Path d="M13.5,18.5H15V17h2c0.55,0,1-0.45,1-1v-2.5c0-0.55-0.45-1-1-1h-3.5V18.5z M15,14h1.5v1.5H15V14z" />
                            <Path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z" />
                            <Path d="M14.5,10.5V9c0-0.55-0.45-1-1-1h-2V7h3V5.5H10V9h3v1h-3v1.5h3.5C14.05,11.5,14.5,11.05,14.5,10.5z" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
