import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconImageAutofpsSelect(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <Polygon points="12.03,6.3 11.97,6.3 10.95,9.19 13.05,9.19" />
                            <Rect height="5" width="2" x="3" y="17" />
                            <Path d="M12,15c3.31,0,6-2.69,6-6s-2.69-6-6-6S6,5.69,6,9S8.69,15,12,15z M11.37,5h1.25l2.63,7h-1.21l-0.63-1.79h-2.83L9.96,12 H8.74L11.37,5z" />
                            <Rect height="5" width="2" x="7" y="17" />
                            <Rect height="5" width="2" x="11" y="17" />
                            <Rect height="5" width="6" x="15" y="17" />
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
                            <Polygon points="12.03,6.3 11.97,6.3 10.95,9.19 13.05,9.19" />
                            <Rect height="5" width="2" x="3" y="17" />
                            <Path d="M12,15c3.31,0,6-2.69,6-6s-2.69-6-6-6S6,5.69,6,9S8.69,15,12,15z M11.37,5h1.25l2.63,7h-1.21l-0.63-1.79h-2.83L9.96,12 H8.74L11.37,5z" />
                            <Rect height="5" width="2" x="7" y="17" />
                            <Rect height="5" width="2" x="11" y="17" />
                            <Rect height="5" width="6" x="15" y="17" />
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
                            <Polygon points="12.03,6.3 11.97,6.3 10.95,9.19 13.05,9.19" />
                            <Path d="M4,22L4,22c0.55,0,1-0.45,1-1v-3c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v3C3,21.55,3.45,22,4,22z" />
                            <Path d="M12,15c3.31,0,6-2.69,6-6s-2.69-6-6-6S6,5.69,6,9S8.69,15,12,15z M12,5L12,5c0.38,0,0.71,0.23,0.85,0.59l2.12,5.65 c0.14,0.37-0.13,0.76-0.53,0.76h0c-0.24,0-0.45-0.15-0.53-0.38l-0.49-1.41h-2.83l-0.5,1.41C10.01,11.85,9.8,12,9.56,12h0 c-0.39,0-0.67-0.39-0.53-0.76l2.12-5.65C11.29,5.23,11.62,5,12,5z" />
                            <Path d="M8,22L8,22c0.55,0,1-0.45,1-1v-3c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v3C7,21.55,7.45,22,8,22z" />
                            <Path d="M12,22L12,22c0.55,0,1-0.45,1-1v-3c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v3C11,21.55,11.45,22,12,22z" />
                            <Path d="M15,18v3c0,0.55,0.45,1,1,1h4c0.55,0,1-0.45,1-1v-3c0-0.55-0.45-1-1-1h-4C15.45,17,15,17.45,15,18z" />
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
                            <Polygon points="12.03,6.3 11.97,6.3 10.95,9.19 13.05,9.19" />
                            <Rect height="5" width="2" x="3" y="17" />
                            <Path d="M12,15c3.31,0,6-2.69,6-6s-2.69-6-6-6S6,5.69,6,9S8.69,15,12,15z M11.37,5h1.25l2.63,7h-1.21l-0.63-1.79h-2.83L9.96,12 H8.74L11.37,5z" />
                            <Rect height="5" width="2" x="7" y="17" />
                            <Rect height="5" width="2" x="11" y="17" />
                            <Rect height="5" width="6" x="15" y="17" />
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
                            <Polygon points="12.03,6.3 11.97,6.3 10.95,9.19 13.05,9.19" />
                            <Rect height="5" width="2" x="3" y="17" />
                            <Path d="M12,15c3.31,0,6-2.69,6-6s-2.69-6-6-6S6,5.69,6,9S8.69,15,12,15z M11.37,5h1.25l2.63,7h-1.21l-0.63-1.79h-2.83L9.96,12 H8.74L11.37,5z" />
                            <Rect height="5" width="2" x="7" y="17" />
                            <Rect height="5" width="2" x="11" y="17" />
                            <Rect height="5" width="6" x="15" y="17" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
