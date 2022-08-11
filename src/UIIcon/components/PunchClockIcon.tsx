import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconPunchClock(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <Path d="M19,6h-1V1H6v5H5C3.9,6,3,6.9,3,8v12c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V8C21,6.9,20.1,6,19,6z M8,3h8v3H8V3z M12,19 c-2.76,0-5-2.24-5-5s2.24-5,5-5c2.76,0,5,2.24,5,5S14.76,19,12,19z" />
                            <Polygon points="12.5,11.5 11.5,11.5 11.5,14.21 13.14,15.85 13.85,15.14 12.5,13.79" />
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
                            <Path d="M19,6h-1V1H6v5H5C3.9,6,3,6.9,3,8v12c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V8C21,6.9,20.1,6,19,6z M8,3h8v3H8V3z M19,20H5V8 h14V20z" />
                            <Path d="M12,9c-2.76,0-5,2.24-5,5s2.24,5,5,5c2.76,0,5-2.24,5-5S14.76,9,12,9z M12,17.5c-1.93,0-3.5-1.57-3.5-3.5 s1.57-3.5,3.5-3.5s3.5,1.57,3.5,3.5S13.93,17.5,12,17.5z" />
                            <Polygon points="12.5,11.5 11.5,11.5 11.5,14.21 13.14,15.85 13.85,15.14 12.5,13.79" />
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
                            <Path d="M19,6h-1V3c0-1.1-0.9-2-2-2H8C6.9,1,6,1.9,6,3v3H5C3.9,6,3,6.9,3,8v12c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V8 C21,6.9,20.1,6,19,6z M8,3h8v3H8V3z M12,19c-2.76,0-5-2.24-5-5s2.24-5,5-5c2.76,0,5,2.24,5,5S14.76,19,12,19z" />
                            <Path d="M12.5,13.79V12c0-0.28-0.22-0.5-0.5-0.5h0c-0.28,0-0.5,0.22-0.5,0.5v2c0,0.13,0.05,0.26,0.15,0.35l1.14,1.14 c0.2,0.2,0.51,0.2,0.71,0c0.2-0.2,0.2-0.51,0-0.71L12.5,13.79z" />
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
                            <Path d="M21,6h-3V1H6v5H3v16h18V6z M8,3h8v3H8V3z M12,19c-2.76,0-5-2.24-5-5s2.24-5,5-5c2.76,0,5,2.24,5,5S14.76,19,12,19z" />
                            <Polygon points="12.5,11.5 11.5,11.5 11.5,14.21 13.14,15.85 13.85,15.14 12.5,13.79" />
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
                            <Path d="M19,6h-1V1H6v5H5C3.9,6,3,6.9,3,8v12c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V8C21,6.9,20.1,6,19,6z M8,3h8v3H8V3z M19,20H5V8 h14V20z" />
                            <Path d="M12,9c-2.76,0-5,2.24-5,5s2.24,5,5,5c2.76,0,5-2.24,5-5S14.76,9,12,9z M12,17.5c-1.93,0-3.5-1.57-3.5-3.5 s1.57-3.5,3.5-3.5s3.5,1.57,3.5,3.5S13.93,17.5,12,17.5z" />
                            <Polygon points="12.5,11.5 11.5,11.5 11.5,14.21 13.14,15.85 13.85,15.14 12.5,13.79" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
