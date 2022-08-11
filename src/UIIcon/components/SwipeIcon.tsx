import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconSwipe(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" x="0" />
                    </G>
                    <G>
                        <G>
                            <Path d="M18.89,14.75l-4.09-2.04c-0.28-0.14-0.58-0.21-0.89-0.21H13v-6C13,5.67,12.33,5,11.5,5S10,5.67,10,6.5v10.74L6.75,16.5 c-0.33-0.07-0.68,0.03-0.92,0.28L5,17.62l4.54,4.79C9.92,22.79,10.68,23,11.21,23h6.16c1,0,1.84-0.73,1.98-1.72l0.63-4.46 C20.1,15.97,19.66,15.14,18.89,14.75z" />
                            <Path d="M20.13,3.87C18.69,2.17,15.6,1,12,1S5.31,2.17,3.87,3.87L2,2v5h5L4.93,4.93c1-1.29,3.7-2.43,7.07-2.43 s6.07,1.14,7.07,2.43L17,7h5V2L20.13,3.87z" />
                        </G>
                    </G>
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" x="0" />
                    </G>
                    <G>
                        <G>
                            <Path d="M20.5,2v2.02C18.18,2.13,15.22,1,12,1S5.82,2.13,3.5,4.02V2H2v3.5V7h1.5H7V5.5H4.09c2.11-1.86,4.88-3,7.91-3 s5.79,1.14,7.91,3H17V7h3.5H22V5.5V2H20.5z" />
                            <G>
                                <Path d="M18.89,13.77l-3.8-1.67C14.96,12.04,14.81,12,14.65,12H14l0-4.37c0-1.32-0.96-2.5-2.27-2.62C10.25,4.88,9,6.05,9,7.5 v8.15l-1.87-0.4c-0.19-0.03-1.02-0.15-1.73,0.56L4,17.22l5.12,5.19C9.49,22.79,10,23,10.53,23h6.55c0.98,0,1.81-0.7,1.97-1.67 l0.92-5.44C20.12,15.03,19.68,14.17,18.89,13.77z M18,15.56L17.08,21h-6.55l-3.7-3.78L11,18.11V7.5C11,7.22,11.22,7,11.5,7 S12,7.22,12,7.5v6.18h1.76L18,15.56z" />
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
                            <Path d="M21.15,2.85l-1.02,1.02C18.69,2.17,15.6,1,12,1S5.31,2.17,3.87,3.87L2.85,2.85C2.54,2.54,2,2.76,2,3.21V6.5 C2,6.78,2.22,7,2.5,7h3.29c0.45,0,0.67-0.54,0.35-0.85L4.93,4.93c1-1.29,3.7-2.43,7.07-2.43s6.07,1.14,7.07,2.43l-1.22,1.22 C17.54,6.46,17.76,7,18.21,7h3.29C21.78,7,22,6.78,22,6.5V3.21C22,2.76,21.46,2.54,21.15,2.85z" />
                            <Path d="M14.5,12.71c-0.28-0.14-0.58-0.21-0.89-0.21H13v-6C13,5.67,12.33,5,11.5,5S10,5.67,10,6.5v10.74l-3.44-0.72 c-0.37-0.08-0.76,0.04-1.03,0.31l0,0c-0.43,0.44-0.43,1.14,0.01,1.58l4.01,4.01C9.92,22.79,10.43,23,10.96,23h6.41 c1,0,1.84-0.73,1.98-1.72l0.63-4.46c0.12-0.85-0.32-1.69-1.09-2.07L14.5,12.71z" />
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
                            <Path d="M20.13,3.87C18.69,2.17,15.6,1,12,1S5.31,2.17,3.87,3.87L2,2v5h5L4.93,4.93c1-1.29,3.7-2.43,7.07-2.43 s6.07,1.14,7.07,2.43L17,7h5V2L20.13,3.87z" />
                            <Path d="M13,12.5v-6C13,5.67,12.33,5,11.5,5S10,5.67,10,6.5v10.74l-4.04-0.85l-1.21,1.23L10.13,23h8.97l1.09-7.64l-6.11-2.86H13z" />
                        </G>
                    </G>
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" x="0" />
                    </G>
                    <G>
                        <G>
                            <Path d="M20.5,2v2.02C18.18,2.13,15.22,1,12,1S5.82,2.13,3.5,4.02V2H2v3.5V7h1.5H7V5.5H4.09c2.11-1.86,4.88-3,7.91-3 s5.79,1.14,7.91,3H17V7h3.5H22V5.5V2H20.5z" />
                            <G>
                                <Path d="M18.89,13.77l-3.8-1.67C14.96,12.04,14.81,12,14.65,12H14l0-4.37c0-1.32-0.96-2.5-2.27-2.62C10.25,4.88,9,6.05,9,7.5 v8.15l-1.87-0.4c-0.19-0.03-1.02-0.15-1.73,0.56L4,17.22l5.12,5.19C9.49,22.79,10,23,10.53,23h6.55c0.98,0,1.81-0.7,1.97-1.67 l0.92-5.44C20.12,15.03,19.68,14.17,18.89,13.77z M18,15.56L17.08,21h-6.55l-3.7-3.78L11,18.11V7.5C11,7.22,11.22,7,11.5,7 S12,7.22,12,7.5v6.18h1.76L18,15.56z" />
                            </G>
                        </G>
                    </G>
                </Icon>
            );
    }
}
