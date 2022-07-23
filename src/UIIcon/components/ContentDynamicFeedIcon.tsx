import React from 'react';
import { G, Path, Polygon, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconContentDynamicFeed(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G />
                        <G>
                            <Path d="M8,8H6v7c0,1.1,0.9,2,2,2h9v-2H8V8z" />
                            <Path d="M20,3h-8c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V5C22,3.9,21.1,3,20,3z M20,11h-8V7h8V11z" />
                            <Path d="M4,12H2v7c0,1.1,0.9,2,2,2h9v-2H4V12z" />
                        </G>
                    </G>
                    <G display="none">
                        <G display="inline" />
                        <G display="inline">
                            <Path d="M8,8H6v7c0,1.1,0.9,2,2,2h9v-2H8V8z" />
                            <Path d="M20,3h-8c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V5C22,3.9,21.1,3,20,3z M20,11h-8V7h8V11z" />
                            <Path d="M4,12H2v7c0,1.1,0.9,2,2,2h9v-2H4V12z" />
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
                        <G />
                        <G>
                            <Path d="M8,8H6v7c0,1.1,0.9,2,2,2h9v-2H8V8z" />
                            <Path d="M20,3h-8c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V5C22,3.9,21.1,3,20,3z M20,11h-8V7h8V11z" />
                            <Path d="M4,12H2v7c0,1.1,0.9,2,2,2h9v-2H4V12z" />
                        </G>
                    </G>
                    <G display="none">
                        <G display="inline" />
                        <G display="inline">
                            <Path d="M8,8H6v7c0,1.1,0.9,2,2,2h9v-2H8V8z" />
                            <Path d="M20,3h-8c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V5C22,3.9,21.1,3,20,3z M20,11h-8V7h8V11z" />
                            <Path d="M4,12H2v7c0,1.1,0.9,2,2,2h9v-2H4V12z" />
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
                            <G>
                                <Path d="M7,8L7,8C6.45,8,6,8.45,6,9v6c0,1.1,0.9,2,2,2h8c0.55,0,1-0.45,1-1l0,0c0-0.55-0.45-1-1-1H8V9C8,8.45,7.55,8,7,8z" />
                                <Path d="M20,3h-8c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V5C22,3.9,21.1,3,20,3z M20,11h-8V7h8V11z" />
                                <Path d="M3,12L3,12c-0.55,0-1,0.45-1,1v6c0,1.1,0.9,2,2,2h8c0.55,0,1-0.45,1-1l0,0c0-0.55-0.45-1-1-1H4v-6C4,12.45,3.55,12,3,12z" />
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
                        <G />
                        <G>
                            <Polygon points="8,8 6,8 6,17 17,17 17,15 8,15" />
                            <Path d="M22,3H10v10h12V3z M20,11h-8V7h8V11z" />
                            <Polygon points="4,12 2,12 2,21 13,21 13,19 4,19" />
                        </G>
                    </G>
                    <G display="none">
                        <G display="inline" />
                        <G display="inline">
                            <Polygon points="8,8 6,8 6,17 17,17 17,15 8,15" />
                            <Path d="M22,3H10v10h12V3z M20,11h-8V7h8V11z" />
                            <Polygon points="4,12 2,12 2,21 13,21 13,19 4,19" />
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
                        <G />
                        <G>
                            <Path d="M8,8H6v7c0,1.1,0.9,2,2,2h9v-2H8V8z" />
                            <Path d="M20,3h-8c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V5C22,3.9,21.1,3,20,3z M20,11h-8V7h8V11z" />
                            <Path d="M4,12H2v7c0,1.1,0.9,2,2,2h9v-2H4V12z" />
                        </G>
                    </G>
                    <G display="none">
                        <G display="inline" />
                        <G display="inline">
                            <Path d="M8,8H6v7c0,1.1,0.9,2,2,2h9v-2H8V8z" />
                            <Path d="M20,3h-8c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V5C22,3.9,21.1,3,20,3z M20,11h-8V7h8V11z" />
                            <Path d="M4,12H2v7c0,1.1,0.9,2,2,2h9v-2H4V12z" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
