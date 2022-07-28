import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconMarkUnreadChatAlt(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <G>
                            <circle cx="19" cy="3" r="3" />
                            <Path d="M6,8V6h9.03c-1.21-1.6-1.08-3.21-0.92-4H4.01c-1.1,0-2,0.89-2,2L2,22l4-4h14c1.1,0,2-0.9,2-2V6.97 C21.16,7.61,20.13,8,19,8H6z M14,14H6v-2h8V14z M18,11H6V9h12V11z" />
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
                            <Path d="M20,16H4V4h10.1c-0.08-0.39-0.18-1.11,0-2H4C2.9,2,2,2.9,2,4v18l4-4h14c1.1,0,2-0.9,2-2V6.98c-0.58,0.44-1.26,0.77-2,0.92 V16z" />
                            <circle cx="19" cy="3" r="3" />
                            <Rect height="2" width="8" x="6" y="12" />
                            <Rect height="2" width="12" x="6" y="9" />
                            <Path d="M6,8h12V7.9c-1.21-0.25-2.25-0.95-2.97-1.9H6V8z" />
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
                            <circle cx="19" cy="3" r="3" />
                            <Path d="M7,8C6.45,8,6,7.55,6,7c0-0.55,0.45-1,1-1h8.03c-1.21-1.6-1.08-3.21-0.92-4H4.01c-1.1,0-2,0.89-2,2L2,19.58 c0,0.89,1.08,1.34,1.71,0.71L6,18h14c1.1,0,2-0.9,2-2V6.97C21.16,7.61,20.13,8,19,8H7z M13,14H7c-0.55,0-1-0.45-1-1 c0-0.55,0.45-1,1-1h6c0.55,0,1,0.45,1,1C14,13.55,13.55,14,13,14z M17,11H7c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1h10 c0.55,0,1,0.45,1,1C18,10.55,17.55,11,17,11z" />
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
                            <circle cx="19" cy="3" r="3" />
                            <Path d="M6,8V6h9.03c-1.21-1.6-1.08-3.21-0.92-4H2.01L2,22l4-4h16V6.97C21.16,7.61,20.13,8,19,8H6z M14,14H6v-2h8V14z M18,11H6V9 h12V11z" />
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
                            <Path d="M20,16H4V4h10.1c-0.08-0.39-0.18-1.11,0-2H4C2.9,2,2,2.9,2,4v18l4-4h14c1.1,0,2-0.9,2-2V6.98c-0.58,0.44-1.26,0.77-2,0.92 V16z" />
                            <circle cx="19" cy="3" r="3" />
                            <Rect height="2" width="8" x="6" y="12" />
                            <Rect height="2" width="12" x="6" y="9" />
                            <Path d="M6,8h12V7.9c-1.21-0.25-2.25-0.95-2.97-1.9H6V8z" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
