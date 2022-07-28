import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconAppRegistration(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <Rect height="4" width="4" x="10" y="4" />
                            <Rect height="4" width="4" x="4" y="16" />
                            <Rect height="4" width="4" x="4" y="10" />
                            <Rect height="4" width="4" x="4" y="4" />
                            <Polygon points="14,12.42 14,10 10,10 10,14 12.42,14" />
                            <Path d="M20.88,11.29l-1.17-1.17c-0.16-0.16-0.42-0.16-0.58,0L18.25,11L20,12.75l0.88-0.88C21.04,11.71,21.04,11.45,20.88,11.29z" />
                            <Polygon points="11,18.25 11,20 12.75,20 19.42,13.33 17.67,11.58" />
                            <Rect height="4" width="4" x="16" y="4" />
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
                            <Rect height="4" width="4" x="10" y="4" />
                            <Rect height="4" width="4" x="4" y="16" />
                            <Rect height="4" width="4" x="4" y="10" />
                            <Rect height="4" width="4" x="4" y="4" />
                            <Rect height="4" width="4" x="16" y="4" />
                            <Polygon points="11,17.86 11,20 13.1,20 19.08,14.03 16.96,11.91" />
                            <Polygon points="14,12.03 14,10 10,10 10,14 12.03,14" />
                            <Path d="M20.85,11.56l-1.41-1.41c-0.2-0.2-0.51-0.2-0.71,0l-1.06,1.06l2.12,2.12l1.06-1.06C21.05,12.07,21.05,11.76,20.85,11.56z" />
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
                            <circle cx="12" cy="6" r="2" />
                            <circle cx="6" cy="18" r="2" />
                            <circle cx="6" cy="12" r="2" />
                            <circle cx="6" cy="6" r="2" />
                            <circle cx="18" cy="6" r="2" />
                            <Path d="M11,18.07v1.43c0,0.28,0.22,0.5,0.5,0.5h1.4c0.13,0,0.26-0.05,0.35-0.15l5.83-5.83l-2.12-2.12l-5.81,5.81 C11.05,17.81,11,17.94,11,18.07z" />
                            <Path d="M12.03,14L14,12.03V12c0-1.1-0.9-2-2-2s-2,0.9-2,2s0.9,2,2,2H12.03z" />
                            <Path d="M20.85,11.56l-1.41-1.41c-0.2-0.2-0.51-0.2-0.71,0l-1.06,1.06l2.12,2.12l1.06-1.06C21.05,12.07,21.05,11.76,20.85,11.56z" />
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
                            <Rect height="4" width="4" x="10" y="4" />
                            <Rect height="4" width="4" x="4" y="16" />
                            <Rect height="4" width="4" x="4" y="10" />
                            <Rect height="4" width="4" x="4" y="4" />
                            <Rect height="4" width="4" x="16" y="4" />
                            <Polygon points="11,17.86 11,20 13.1,20 19.08,14.03 16.96,11.91" />
                            <Polygon points="14,12.03 14,10 10,10 10,14 12.03,14" />
                            <Rect
                                height="3"
                                transform="matrix(0.7071 -0.7071 0.7071 0.7071 -2.481 17.1312)"
                                width="2"
                                x="18.44"
                                y="10.06"
                            />
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
                            <Rect height="4" width="4" x="10" y="4" />
                            <Rect height="4" width="4" x="4" y="16" />
                            <Rect height="4" width="4" x="4" y="10" />
                            <Rect height="4" width="4" x="4" y="4" />
                            <Rect height="4" width="4" x="16" y="4" />
                            <Polygon points="11,17.86 11,20 13.1,20 19.08,14.03 16.96,11.91" />
                            <Polygon points="14,12.03 14,10 10,10 10,14 12.03,14" />
                            <Path d="M20.85,11.56l-1.41-1.41c-0.2-0.2-0.51-0.2-0.71,0l-1.06,1.06l2.12,2.12l1.06-1.06C21.05,12.07,21.05,11.76,20.85,11.56z" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
