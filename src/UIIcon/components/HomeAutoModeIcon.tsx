import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconHomeAutoMode(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <Path d="M19.03,3.56c-1.67-1.39-3.74-2.3-6.03-2.51v2.01c1.73,0.19,3.31,0.88,4.61,1.92L19.03,3.56z" />
                            <Path d="M11,3.06V1.05C8.71,1.25,6.64,2.17,4.97,3.56l1.42,1.42C7.69,3.94,9.27,3.25,11,3.06z" />
                            <Path d="M4.98,6.39L3.56,4.97C2.17,6.64,1.26,8.71,1.05,11h2.01C3.25,9.27,3.94,7.69,4.98,6.39z" />
                            <Path d="M20.94,11h2.01c-0.21-2.29-1.12-4.36-2.51-6.03l-1.42,1.42C20.06,7.69,20.75,9.27,20.94,11z" />
                            <Polygon points="7,12 10.44,13.56 12,17 13.56,13.56 17,12 13.56,10.44 12,7 10.44,10.44" />
                            <Path d="M12,21c-3.11,0-5.85-1.59-7.46-4H7v-2H1v6h2v-2.7c1.99,2.84,5.27,4.7,9,4.7c4.87,0,9-3.17,10.44-7.56l-1.96-0.45 C19.25,18.48,15.92,21,12,21z" />
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
                            <Path d="M19.03,3.56c-1.67-1.39-3.74-2.3-6.03-2.51v2.01c1.73,0.19,3.31,0.88,4.61,1.92L19.03,3.56z" />
                            <Path d="M11,3.06V1.05C8.71,1.25,6.64,2.17,4.97,3.56l1.42,1.42C7.69,3.94,9.27,3.25,11,3.06z" />
                            <Path d="M4.98,6.39L3.56,4.97C2.17,6.64,1.26,8.71,1.05,11h2.01C3.25,9.27,3.94,7.69,4.98,6.39z" />
                            <Path d="M20.94,11h2.01c-0.21-2.29-1.12-4.36-2.51-6.03l-1.42,1.42C20.06,7.69,20.75,9.27,20.94,11z" />
                            <Polygon points="7,12 10.44,13.56 12,17 13.56,13.56 17,12 13.56,10.44 12,7 10.44,10.44" />
                            <Path d="M12,21c-3.11,0-5.85-1.59-7.46-4H7v-2H1v6h2v-2.7c1.99,2.84,5.27,4.7,9,4.7c4.87,0,9-3.17,10.44-7.56l-1.96-0.45 C19.25,18.48,15.92,21,12,21z" />
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
                            <Path d="M18.06,2.83c-1.15-0.77-2.46-1.32-3.86-1.61C13.58,1.1,13,1.57,13,2.21v0c0,0.46,0.31,0.88,0.76,0.97 c1.17,0.23,2.26,0.7,3.21,1.34c0.39,0.26,0.9,0.19,1.23-0.14l0,0C18.66,3.93,18.59,3.18,18.06,2.83z" />
                            <Path d="M11,2.21L11,2.21c0-0.64-0.58-1.11-1.2-0.99c-1.4,0.29-2.71,0.84-3.86,1.61c-0.52,0.35-0.59,1.1-0.15,1.54l0,0 c0.33,0.33,0.84,0.4,1.23,0.14c0.96-0.64,2.04-1.1,3.21-1.34C10.69,3.09,11,2.67,11,2.21z" />
                            <Path d="M4.38,5.79L4.38,5.79C3.93,5.34,3.18,5.42,2.84,5.94C2.07,7.09,1.51,8.39,1.23,9.8C1.1,10.42,1.58,11,2.21,11h0 c0.46,0,0.88-0.31,0.97-0.76c0.23-1.17,0.7-2.26,1.34-3.22C4.77,6.64,4.7,6.12,4.38,5.79z" />
                            <Path d="M21.79,11L21.79,11c0.63,0,1.11-0.58,0.98-1.2c-0.29-1.4-0.84-2.7-1.61-3.86c-0.35-0.52-1.1-0.6-1.54-0.15l0,0 c-0.33,0.33-0.4,0.84-0.14,1.23c0.64,0.96,1.1,2.05,1.34,3.22C20.91,10.69,21.33,11,21.79,11z" />
                            <Path d="M8,12.46l2.44,1.11L11.54,16c0.18,0.39,0.73,0.39,0.91,0l1.11-2.44L16,12.46c0.39-0.18,0.39-0.73,0-0.91l-2.44-1.11 L12.46,8c-0.18-0.39-0.73-0.39-0.91,0l-1.11,2.44L8,11.54C7.61,11.72,7.61,12.28,8,12.46z" />
                            <Path d="M12,21c-3.11,0-5.85-1.59-7.46-4H6c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H2c-0.55,0-1,0.45-1,1v4c0,0.55,0.45,1,1,1h0 c0.55,0,1-0.45,1-1v-1.7c1.99,2.84,5.27,4.7,9,4.7c4.45,0,8.27-2.64,10-6.43c0.26-0.57-0.08-1.25-0.69-1.39l0,0 c-0.45-0.1-0.93,0.11-1.12,0.54C18.77,18.83,15.64,21,12,21z" />
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
                            <Path d="M19.03,3.56c-1.67-1.39-3.74-2.3-6.03-2.51v2.01c1.73,0.19,3.31,0.88,4.61,1.92L19.03,3.56z" />
                            <Path d="M11,3.06V1.05C8.71,1.25,6.64,2.17,4.97,3.56l1.42,1.42C7.69,3.94,9.27,3.25,11,3.06z" />
                            <Path d="M4.98,6.39L3.56,4.97C2.17,6.64,1.26,8.71,1.05,11h2.01C3.25,9.27,3.94,7.69,4.98,6.39z" />
                            <Path d="M20.94,11h2.01c-0.21-2.29-1.12-4.36-2.51-6.03l-1.42,1.42C20.06,7.69,20.75,9.27,20.94,11z" />
                            <Polygon points="7,12 10.44,13.56 12,17 13.56,13.56 17,12 13.56,10.44 12,7 10.44,10.44" />
                            <Path d="M12,21c-3.11,0-5.85-1.59-7.46-4H7v-2H1v6h2v-2.7c1.99,2.84,5.27,4.7,9,4.7c4.87,0,9-3.17,10.44-7.56l-1.96-0.45 C19.25,18.48,15.92,21,12,21z" />
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
                            <Path d="M19.03,3.56c-1.67-1.39-3.74-2.3-6.03-2.51v2.01c1.73,0.19,3.31,0.88,4.61,1.92L19.03,3.56z" />
                            <Path d="M11,3.06V1.05C8.71,1.25,6.64,2.17,4.97,3.56l1.42,1.42C7.69,3.94,9.27,3.25,11,3.06z" />
                            <Path d="M4.98,6.39L3.56,4.97C2.17,6.64,1.26,8.71,1.05,11h2.01C3.25,9.27,3.94,7.69,4.98,6.39z" />
                            <Path d="M20.94,11h2.01c-0.21-2.29-1.12-4.36-2.51-6.03l-1.42,1.42C20.06,7.69,20.75,9.27,20.94,11z" />
                            <Polygon points="7,12 10.44,13.56 12,17 13.56,13.56 17,12 13.56,10.44 12,7 10.44,10.44" />
                            <Path d="M12,21c-3.11,0-5.85-1.59-7.46-4H7v-2H1v6h2v-2.7c1.99,2.84,5.27,4.7,9,4.7c4.87,0,9-3.17,10.44-7.56l-1.96-0.45 C19.25,18.48,15.92,21,12,21z" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
