import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconMapsTakeoutDining(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <Path
                            d="M5.26,11h13.48l-0.67,9H5.93L5.26,11z M9.02,4h5.95L19,7.38l1.59-1.59L22,7.21 L19.21,10H4.79L2,7.21l1.41-1.41L5,7.38L9.02,4z"
                            fillRule="evenodd"
                        />
                    </G>
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
                                <Path d="M7.79,18l-0.51-7h9.46l-0.51,7H7.79z M9.83,5h4.33l2.8,2.73L16.87,9H7.12L7.03,7.73L9.83,5z M22,7.46l-1.41-1.41L19,7.63 l0.03-0.56L14.98,3H9.02L4.97,7.07L5,7.57L3.41,6.01L2,7.44l3.23,3.11L5.93,20h12.14l0.7-9.44L22,7.46z" />
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
                            <Path d="M21.29,6.75c-0.39-0.39-1.01-0.39-1.4,0L19,7.63l0.03-0.56l-3.46-3.48C15.19,3.21,14.68,3,14.15,3h-4.3 C9.32,3,8.81,3.21,8.43,3.59L4.97,7.07L5,7.57L4.11,6.7C3.72,6.32,3.1,6.32,2.72,6.71L2.7,6.73C2.32,7.12,2.32,7.75,2.72,8.13 L4.66,10h14.69l1.92-1.84C21.67,7.78,21.68,7.14,21.29,6.75z" />
                            <Path d="M5.79,18.15C5.87,19.19,6.74,20,7.79,20h8.43c1.05,0,1.92-0.81,1.99-1.85l0.49-6.6H5.3L5.79,18.15z" />
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
                            <Polygon points="22,7.46 20.59,6.05 19,7.63 19.03,7.07 14.98,3 9.02,3 4.97,7.07 5,7.57 3.41,6.01 2,7.44 4.66,10 19.35,10" />
                            <Polygon points="5.93,20 18.07,20 18.7,11.55 5.3,11.55" />
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
                                <Path d="M7.79,18l-0.51-7h9.46l-0.51,7H7.79z M9.83,5h4.33l2.8,2.73L16.87,9H7.12L7.03,7.73L9.83,5z M22,7.46l-1.41-1.41L19,7.63 l0.03-0.56L14.98,3H9.02L4.97,7.07L5,7.57L3.41,6.01L2,7.44l3.23,3.11L5.93,20h12.14l0.7-9.44L22,7.46z" />
                            </G>
                        </G>
                    </G>
                </Icon>
            );
    }
}
