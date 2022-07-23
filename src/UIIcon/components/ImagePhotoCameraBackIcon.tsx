import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconImagePhotoCameraBack(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Path d="M0 0h24v24H0z" fill="none" />
                    <Path d="M20 5c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h3.17L9 3h6l1.83 2H20zm0 14V7H4v12h16zm-6-7l-3 3.72L9 13l-3 4h12l-4-5z" />
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
                            <Path d="M20,5h-3.17L15,3H9L7.17,5H4C2.9,5,2,5.9,2,7v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V7C22,5.9,21.1,5,20,5z M20,19H4V7 h4.05l1.83-2h4.24l1.83,2H20V19z" />
                            <Polygon points="11.25,16 9,13 6,17 18,17 14.25,12" />
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
                        <Path d="M20,5h-3.17l-1.24-1.35C15.22,3.24,14.68,3,14.12,3H9.88C9.32,3,8.78,3.24,8.41,3.65L7.17,5H4C2.9,5,2,5.9,2,7v12 c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V7C22,5.9,21.1,5,20,5z M17,17H7c-0.41,0-0.65-0.47-0.4-0.8l2-2.67c0.2-0.27,0.6-0.27,0.8,0 L11.25,16l2.6-3.47c0.2-0.27,0.6-0.27,0.8,0l2.75,3.67C17.65,16.53,17.41,17,17,17z" />
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
                        <Path d="M16.83,5L15,3H9L7.17,5H2v16h20V5H16.83z M6,17l3-4l2.25,3l3-4L18,17H6z" />
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
                            <Path d="M20,5h-3.17L15,3H9L7.17,5H4C2.9,5,2,5.9,2,7v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V7C22,5.9,21.1,5,20,5z M20,19H4V7 h4.05l1.83-2h4.24l1.83,2H20V19z" />
                            <Polygon points="11.25,16 9,13 6,17 18,17 14.25,12" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
