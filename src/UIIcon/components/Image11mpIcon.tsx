import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconImage11mp(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0V0z" fill="none" />
                    <Path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 15.5h-1.5V14h-1v3H8v-3H7v4.5H5.5v-5c0-.55.45-1 1-1H11c.55 0 1 .45 1 1v5zm3.5 0H14v-6h3.5c.55 0 1 .45 1 1V16c0 .55-.45 1-1 1h-2v1.5zM11 5.5v6H9.5V7H8V5.5h3zm5 0v6h-1.5V7H13V5.5h3zm-.5 8.5H17v1.5h-1.5z" />
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
                            <G>
                                <Path d="M7.5,14h1v3H10v-3h1v4.5h1.5v-5c0-0.55-0.45-1-1-1H7c-0.55,0-1,0.45-1,1v5h1.5V14z" />
                            </G>
                            <G>
                                <Path d="M13.5,18.5H15V17h2c0.55,0,1-0.45,1-1v-2.5c0-0.55-0.45-1-1-1h-3.5V18.5z M15,14h1.5v1.5H15V14z" />
                            </G>
                            <G>
                                <Path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z" />
                            </G>
                            <G>
                                <Polygon points="9.5,11.5 11,11.5 11,5.5 8,5.5 8,7 9.5,7" />
                            </G>
                            <G>
                                <Polygon points="14.5,11.5 16,11.5 16,5.5 13,5.5 13,7 14.5,7" />
                            </G>
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
                            <Path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M8.75,5.5H10c0.55,0,1,0.45,1,1 v4.25c0,0.41-0.34,0.75-0.75,0.75S9.5,11.16,9.5,10.75V7H8.75C8.34,7,8,6.66,8,6.25S8.34,5.5,8.75,5.5z M12.5,17.75 c0,0.41-0.34,0.75-0.75,0.75S11,18.16,11,17.75V14h-1v2.25C10,16.66,9.66,17,9.25,17S8.5,16.66,8.5,16.25V14h-1v3.75 c0,0.41-0.34,0.75-0.75,0.75S6,18.16,6,17.75V13.5c0-0.55,0.45-1,1-1h4.5c0.55,0,1,0.45,1,1V17.75z M13,6.25 c0-0.41,0.34-0.75,0.75-0.75H15c0.55,0,1,0.45,1,1v4.25c0,0.41-0.34,0.75-0.75,0.75s-0.75-0.34-0.75-0.75V7h-0.75 C13.34,7,13,6.66,13,6.25z M18,16c0,0.55-0.45,1-1,1h-2v0.75c0,0.41-0.34,0.75-0.75,0.75s-0.75-0.34-0.75-0.75V13.5 c0-0.55,0.45-1,1-1H17c0.55,0,1,0.45,1,1V16z" />
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
                            <Path d="M3,3v18h18V3H3z M8,5.5h3v6H9.5V7H8V5.5z M12.5,18.5H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5V18.5z M13,5.5h3v6h-1.5V7H13V5.5z M18,17h-3v1.5h-1.5v-6H18V17z" />
                            <Rect height="1.5" width="1.5" x="15" y="14" />
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
                            <G>
                                <Path d="M7.5,14h1v3H10v-3h1v4.5h1.5v-5c0-0.55-0.45-1-1-1H7c-0.55,0-1,0.45-1,1v5h1.5V14z" />
                            </G>
                            <G>
                                <Path d="M13.5,18.5H15V17h2c0.55,0,1-0.45,1-1v-2.5c0-0.55-0.45-1-1-1h-3.5V18.5z M15,14h1.5v1.5H15V14z" />
                            </G>
                            <G>
                                <Path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z" />
                            </G>
                            <G>
                                <Polygon points="9.5,11.5 11,11.5 11,5.5 8,5.5 8,7 9.5,7" />
                            </G>
                            <G>
                                <Polygon points="14.5,11.5 16,11.5 16,5.5 13,5.5 13,7 14.5,7" />
                            </G>
                        </G>
                    </G>
                </Icon>
            );
    }
}
