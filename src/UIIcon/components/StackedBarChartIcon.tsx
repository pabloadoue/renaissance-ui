import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconStackedBarChart(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <Rect height="11" width="4" x="4" y="9" />
                            <Rect height="4" width="4" x="4" y="4" />
                            <Rect height="4" width="4" x="10" y="7" />
                            <Rect height="4" width="4" x="16" y="10" />
                            <Rect height="5" width="4" x="16" y="15" />
                            <Rect height="8" width="4" x="10" y="12" />
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
                            <Rect height="11" width="4" x="4" y="9" />
                            <Rect height="4" width="4" x="4" y="4" />
                            <Rect height="4" width="4" x="10" y="7" />
                            <Rect height="4" width="4" x="16" y="10" />
                            <Rect height="5" width="4" x="16" y="15" />
                            <Rect height="8" width="4" x="10" y="12" />
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
                            <Path d="M6,20L6,20c1.1,0,2-0.9,2-2V9H4v9C4,19.1,4.9,20,6,20z" />
                            <Path d="M4,8h4V6c0-1.1-0.9-2-2-2h0C4.9,4,4,4.9,4,6V8z" />
                            <Path d="M10,11h4V9c0-1.1-0.9-2-2-2h0c-1.1,0-2,0.9-2,2V11z" />
                            <Path d="M16,12v2h4v-2c0-1.1-0.9-2-2-2h0C16.9,10,16,10.9,16,12z" />
                            <Path d="M18,20L18,20c1.1,0,2-0.9,2-2v-3h-4v3C16,19.1,16.9,20,18,20z" />
                            <Path d="M12,20L12,20c1.1,0,2-0.9,2-2v-6h-4v6C10,19.1,10.9,20,12,20z" />
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
                            <Rect height="11" width="4" x="4" y="9" />
                            <Rect height="4" width="4" x="4" y="4" />
                            <Rect height="4" width="4" x="10" y="7" />
                            <Rect height="4" width="4" x="16" y="10" />
                            <Rect height="5" width="4" x="16" y="15" />
                            <Rect height="8" width="4" x="10" y="12" />
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
                            <Rect height="11" width="4" x="4" y="9" />
                            <Rect height="4" width="4" x="4" y="4" />
                            <Rect height="4" width="4" x="10" y="7" />
                            <Rect height="4" width="4" x="16" y="10" />
                            <Rect height="5" width="4" x="16" y="15" />
                            <Rect height="8" width="4" x="10" y="12" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
