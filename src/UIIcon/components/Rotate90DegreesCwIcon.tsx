import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconRotate90DegreesCw(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <Path d="M4.64,19.37c3.03,3.03,7.67,3.44,11.15,1.25l-1.46-1.46c-2.66,1.43-6.04,1.03-8.28-1.21c-2.73-2.73-2.73-7.17,0-9.9 C7.42,6.69,9.21,6.03,11,6.03V9l4-4l-4-4v3.01c-2.3,0-4.61,0.87-6.36,2.63C1.12,10.15,1.12,15.85,4.64,19.37z M11,13l6,6l6-6l-6-6 L11,13z" />
                        </G>
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
                            <Path d="M2,13c0,4.97,4.03,9,9,9c1.76,0,3.4-0.51,4.79-1.38l-1.46-1.46C13.34,19.69,12.2,20,11,20c-3.86,0-7-3.14-7-7s3.14-7,7-7 h0.17L9.59,7.59L11,9l4-4l-4-4L9.58,2.41L11.17,4H11C6.03,4,2,8.03,2,13z M11,13l6,6l6-6l-6-6L11,13z M17,16.17L13.83,13L17,9.83 L20.17,13L17,16.17z" />
                        </G>
                    </G>
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <Path d="M3.86,18.46c2.65,3.45,7.11,4.37,10.74,2.79c0.61-0.27,0.74-1.09,0.27-1.56l-0.05-0.05c-0.29-0.29-0.72-0.35-1.1-0.19 c-2.96,1.24-6.59,0.37-8.58-2.62c-1.58-2.37-1.55-5.37,0.05-7.73C6.6,7.03,8.8,6.03,11,6.03v1.76c0,0.45,0.54,0.67,0.86,0.36 l2.79-2.79c0.2-0.2,0.2-0.51,0-0.71l-2.8-2.79C11.54,1.54,11,1.76,11,2.21v1.8c-2.76,0-5.52,1.25-7.34,3.78 C1.38,10.96,1.46,15.37,3.86,18.46z" />
                            <G>
                                <Path d="M17.7,7.71c-0.39-0.39-1.02-0.39-1.41,0l-4.59,4.58c-0.39,0.39-0.39,1.02,0,1.41l4.59,4.59c0.39,0.39,1.02,0.39,1.41,0 l4.59-4.59c0.39-0.39,0.39-1.02,0-1.41L17.7,7.71z" />
                            </G>
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
                            <Path d="M4.64,19.37c3.03,3.03,7.67,3.44,11.15,1.25l-1.46-1.46c-2.66,1.43-6.04,1.03-8.28-1.21c-2.73-2.73-2.73-7.17,0-9.9 C7.42,6.69,9.21,6.03,11,6.03V9l4-4l-4-4v3.01c-2.3,0-4.61,0.87-6.36,2.63C1.12,10.15,1.12,15.85,4.64,19.37z" />
                            <G>
                                <Path d="M17,7l-6,6l6,6l6-6L17,7z" />
                            </G>
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
                            <Path d="M2,13c0,4.97,4.03,9,9,9c1.76,0,3.4-0.51,4.79-1.38l-1.46-1.46C13.34,19.69,12.2,20,11,20c-3.86,0-7-3.14-7-7s3.14-7,7-7 h0.17L9.59,7.59L11,9l4-4l-4-4L9.58,2.41L11.17,4H11C6.03,4,2,8.03,2,13z M11,13l6,6l6-6l-6-6L11,13z M17,16.17L13.83,13L17,9.83 L20.17,13L17,16.17z" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
