import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconNavigationAddHomeWork(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <Path d="M15,11.68V11L8,6l-7,5v10h5v-6h4v6h1.68C11.25,20.09,11,19.08,11,18C11,15.21,12.64,12.81,15,11.68z" />
                            <Path d="M23,13.11V3H10v1.97l7,5v1.11c0.33-0.05,0.66-0.08,1-0.08C19.96,11,21.73,11.81,23,13.11z M17,7h2v2h-2V7z" />
                            <G>
                                <Path d="M23,18c0-2.76-2.24-5-5-5s-5,2.24-5,5s2.24,5,5,5S23,20.76,23,18z M17.5,21v-2.5H15v-1h2.5V15h1v2.5H21v1h-2.5V21H17.5z" />
                            </G>
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
                            <Path d="M11,14H5v5H3v-6.97l5-3.57l5,3.57v1.08c0.57-0.59,1.25-1.07,2-1.42V11L8,6l-7,5v10h6v-5h2v5h2.68 C11.25,20.09,11,19.08,11,18V14z" />
                            <Rect height="2" width="2" x="17" y="7" />
                            <Path d="M23,13.11V3H10v1.97l2,1.43V5h9v6.68C21.75,12.04,22.43,12.52,23,13.11z" />
                            <G>
                                <Path d="M23,18c0-2.76-2.24-5-5-5s-5,2.24-5,5s2.24,5,5,5S23,20.76,23,18z M17.5,21v-2.5H15v-1h2.5V15h1v2.5H21v1h-2.5V21H17.5z" />
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
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <Path d="M14.96,11.7c-0.09-0.52-0.36-0.99-0.8-1.3l-5-3.57c-0.7-0.5-1.63-0.5-2.32,0l-5,3.57C1.31,10.78,1,11.38,1,12.03V19 c0,1.1,0.9,2,2,2h3v-6h4v6h1.68C11.25,20.09,11,19.08,11,18C11,15.22,12.62,12.83,14.96,11.7z" />
                            <Path d="M23,13.11V4.97C23,3.88,22.12,3,21.03,3h-9.06C10.88,3,10,3.88,10,4.97l0.02,0.05c0.1,0.06,0.21,0.11,0.3,0.18l5,3.57 c0.79,0.56,1.34,1.4,1.56,2.32C17.25,11.04,17.62,11,18,11C19.96,11,21.73,11.81,23,13.11z M17,7h2v2h-2V7z" />
                            <G>
                                <Path d="M23,18c0-2.76-2.24-5-5-5s-5,2.24-5,5s2.24,5,5,5S23,20.76,23,18z M17.5,21v-2.5H15v-1h2.5V15h1v2.5H21v1h-2.5V21H17.5z" />
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
                            <Path d="M15,11.68V11L8,6l-7,5v10h5v-6h4v6h1.68C11.25,20.09,11,19.08,11,18C11,15.21,12.64,12.81,15,11.68z" />
                            <Path d="M23,13.11V3H10v1.97l7,5v1.11c0.33-0.05,0.66-0.08,1-0.08C19.96,11,21.73,11.81,23,13.11z M17,7h2v2h-2V7z" />
                            <G>
                                <Path d="M23,18c0-2.76-2.24-5-5-5s-5,2.24-5,5s2.24,5,5,5S23,20.76,23,18z M17.5,21v-2.5H15v-1h2.5V15h1v2.5H21v1h-2.5V21H17.5z" />
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
                            <Path d="M11,14H5v5H3v-6.97l5-3.57l5,3.57v1.08c0.57-0.59,1.25-1.07,2-1.42V11L8,6l-7,5v10h6v-5h2v5h2.68 C11.25,20.09,11,19.08,11,18V14z" />
                            <Rect height="2" width="2" x="17" y="7" />
                            <Path d="M23,13.11V3H10v1.97l2,1.43V5h9v6.68C21.75,12.04,22.43,12.52,23,13.11z" />
                            <G>
                                <Path d="M23,18c0-2.76-2.24-5-5-5s-5,2.24-5,5s2.24,5,5,5S23,20.76,23,18z M17.5,21v-2.5H15v-1h2.5V15h1v2.5H21v1h-2.5V21H17.5z" />
                            </G>
                        </G>
                    </G>
                </Icon>
            );
    }
}
