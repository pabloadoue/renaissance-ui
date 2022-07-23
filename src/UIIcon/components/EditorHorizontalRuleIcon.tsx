import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconEditorHorizontalRule(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect
                            fill="none"
                            height="24"
                            width="24"
                            fillRule="evenodd"
                        />
                        <Rect
                            height="2"
                            width="16"
                            x="4"
                            y="11"
                            fillRule="evenodd"
                        />
                    </G>
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect
                            fill="none"
                            height="24"
                            width="24"
                            fillRule="evenodd"
                        />
                        <G>
                            <Rect
                                height="2"
                                width="16"
                                x="4"
                                y="11"
                                fillRule="evenodd"
                            />
                        </G>
                    </G>
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect
                            fill="none"
                            height="24"
                            width="24"
                            fillRule="evenodd"
                        />
                        <G>
                            <Path
                                d="M19,13H5c-0.55,0-1-0.45-1-1v0c0-0.55,0.45-1,1-1h14c0.55,0,1,0.45,1,1v0 C20,12.55,19.55,13,19,13z"
                                fillRule="evenodd"
                            />
                        </G>
                    </G>
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect
                            fill="none"
                            height="24"
                            width="24"
                            fillRule="evenodd"
                        />
                        <G>
                            <Rect
                                height="2"
                                width="16"
                                x="4"
                                y="11"
                                fillRule="evenodd"
                            />
                        </G>
                    </G>
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect
                            fill="none"
                            height="24"
                            width="24"
                            fillRule="evenodd"
                        />
                        <G>
                            <Rect
                                height="2"
                                width="16"
                                x="4"
                                y="11"
                                fillRule="evenodd"
                            />
                        </G>
                    </G>
                </Icon>
            );
    }
}
