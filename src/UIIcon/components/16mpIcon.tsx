import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function Icon16mp(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0z" fill="none" />
                    <Path d="M13.5 9H15v1.5h-1.5zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 15.5h-1.5V14h-1v3H8v-3H7v4.5H5.5v-5c0-.55.45-1 1-1H11c.55 0 1 .45 1 1v5zm3.5 0H14v-6h3.5c.55 0 1 .45 1 1V16c0 .55-.45 1-1 1h-2v1.5zM10 5.5v6H8.5V7H7V5.5h3zm3 6c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3.5V7h-3v1h2c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1H13zm2.5 2.5H17v1.5h-1.5z" />
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
                            <Path d="M13,11.5h2.5c0.55,0,1-0.45,1-1V9c0-0.55-0.45-1-1-1h-2V7h3V5.5H13c-0.55,0-1,0.45-1,1v4C12,11.05,12.45,11.5,13,11.5z M13.5,9H15v1.5h-1.5V9z" />
                            <Polygon points="8.5,11.5 10,11.5 10,5.5 7,5.5 7,7 8.5,7" />
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
                            <Rect height="1.5" width="1.5" x="13.5" y="9" />
                            <Rect height="1.5" width="1.5" x="15" y="14" />
                            <Path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M7.75,5.5H9c0.55,0,1,0.45,1,1 v4.25c0,0.41-0.34,0.75-0.75,0.75S8.5,11.16,8.5,10.75V7H7.75C7.34,7,7,6.66,7,6.25S7.34,5.5,7.75,5.5z M12.5,17.75 c0,0.41-0.34,0.75-0.75,0.75S11,18.16,11,17.75V14h-1v2.25C10,16.66,9.66,17,9.25,17S8.5,16.66,8.5,16.25V14h-1v3.75 c0,0.41-0.34,0.75-0.75,0.75S6,18.16,6,17.75V13.5c0-0.55,0.45-1,1-1h4.5c0.55,0,1,0.45,1,1V17.75z M12,10.5v-4c0-0.55,0.45-1,1-1 h2.75c0.41,0,0.75,0.34,0.75,0.75S16.16,7,15.75,7H13.5v1h2c0.55,0,1,0.45,1,1v1.5c0,0.55-0.45,1-1,1H13 C12.45,11.5,12,11.05,12,10.5z M18,16c0,0.55-0.45,1-1,1h-2v0.75c0,0.41-0.34,0.75-0.75,0.75s-0.75-0.34-0.75-0.75V13.5 c0-0.55,0.45-1,1-1H17c0.55,0,1,0.45,1,1V16z" />
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
                            <Path d="M3,3v18h18V3H3z M12,5.5h4.5V7h-3v1h3v3.5H12V5.5z M7,5.5h3v6H8.5V7H7V5.5z M12.5,18.5H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5 V18.5z M18,17h-3v1.5h-1.5v-6H18V17z" />
                            <Rect height="1.5" width="1.5" x="13.5" y="9" />
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
                            <Path d="M13,11.5h2.5c0.55,0,1-0.45,1-1V9c0-0.55-0.45-1-1-1h-2V7h3V5.5H13c-0.55,0-1,0.45-1,1v4C12,11.05,12.45,11.5,13,11.5z M13.5,9H15v1.5h-1.5V9z" />
                            <Polygon points="8.5,11.5 10,11.5 10,5.5 7,5.5 7,7 8.5,7" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
