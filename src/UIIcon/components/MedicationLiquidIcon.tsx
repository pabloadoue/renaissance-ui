import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconMedicationLiquid(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <Rect height="2" width="12" x="3" y="3" />
                            <Path d="M14,6H4C2.9,6,2,6.9,2,8v11c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V8C16,6.9,15.1,6,14,6z M13,15h-2.5v2.5h-3V15H5v-3h2.5 V9.5h3V12H13V15z" />
                            <Path d="M20,6c-1.68,0-3,1.76-3,4c0,1.77,0.83,3.22,2,3.76V20c0,0.55,0.45,1,1,1s1-0.45,1-1v-6.24c1.17-0.54,2-1.99,2-3.76 C23,7.76,21.68,6,20,6z" />
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
                            <Rect height="2" width="12" x="3" y="3" />
                            <Path d="M2,21h14V6H2V21z M5,12h2.5V9.5h3V12H13v3h-2.5v2.5h-3V15H5V12z" />
                            <Path d="M20,6c-1.68,0-3,1.76-3,4c0,1.77,0.83,3.22,2,3.76V21h2v-7.24c1.17-0.54,2-1.99,2-3.76C23,7.76,21.68,6,20,6z" />
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
                            <Path d="M4,5h10c0.55,0,1-0.45,1-1s-0.45-1-1-1H4C3.45,3,3,3.45,3,4S3.45,5,4,5z" />
                            <Path d="M14,6H4C2.9,6,2,6.9,2,8v11c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V8C16,6.9,15.1,6,14,6z M11.5,15h-1v1 c0,0.83-0.67,1.5-1.5,1.5S7.5,16.83,7.5,16v-1h-1C5.67,15,5,14.33,5,13.5C5,12.67,5.67,12,6.5,12h1v-1c0-0.83,0.67-1.5,1.5-1.5 s1.5,0.67,1.5,1.5v1h1c0.83,0,1.5,0.67,1.5,1.5C13,14.33,12.33,15,11.5,15z" />
                            <Path d="M20,6c-1.68,0-3,1.76-3,4c0,1.77,0.83,3.22,2,3.76V20c0,0.55,0.45,1,1,1s1-0.45,1-1v-6.24c1.17-0.54,2-1.99,2-3.76 C23,7.76,21.68,6,20,6z" />
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
                            <Rect height="2" width="12" x="3" y="3" />
                            <Polygon points="7.5,17.5 10.5,17.5 10.5,15 13,15 13,12 10.5,12 10.5,9.5 7.5,9.5 7.5,12 5,12 5,15 7.5,15" />
                            <Path d="M14,6H4C2.9,6,2,6.9,2,8v11c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V8C16,6.9,15.1,6,14,6z M14,19H4V8h10V19z" />
                            <Path d="M20,6c-1.68,0-3,1.76-3,4c0,1.77,0.83,3.22,2,3.76V20c0,0.55,0.45,1,1,1s1-0.45,1-1v-6.24c1.17-0.54,2-1.99,2-3.76 C23,7.76,21.68,6,20,6z M20,12c-0.41,0-1-0.78-1-2s0.59-2,1-2s1,0.78,1,2S20.41,12,20,12z" />
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
                            <Rect height="2" width="12" x="3" y="3" />
                            <Path d="M2,21h14V6H2V21z M5,12h2.5V9.5h3V12H13v3h-2.5v2.5h-3V15H5V12z" />
                            <Path d="M20,6c-1.68,0-3,1.76-3,4c0,1.77,0.83,3.22,2,3.76V21h2v-7.24c1.17-0.54,2-1.99,2-3.76C23,7.76,21.68,6,20,6z" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
