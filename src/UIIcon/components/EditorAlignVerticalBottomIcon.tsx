import React from 'react';
import { Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconEditorAlignVerticalBottom(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M22,22H2v-2h20V22z M10,2H7v16h3V2z M17,8h-3v10h3V8z" />
                </Icon>
            );
        case 'outline':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M22,22H2v-2h20V22z M10,2H7v16h3V2z M17,8h-3v10h3V8z" />
                </Icon>
            );
        case 'round':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M21,22H3c-0.55,0-1-0.45-1-1v0c0-0.55,0.45-1,1-1h18c0.55,0,1,0.45,1,1v0C22,21.55,21.55,22,21,22z M8.5,2L8.5,2 C7.67,2,7,2.67,7,3.5v13C7,17.33,7.67,18,8.5,18h0c0.83,0,1.5-0.67,1.5-1.5v-13C10,2.67,9.33,2,8.5,2z M15.5,8L15.5,8 C14.67,8,14,8.67,14,9.5v7c0,0.83,0.67,1.5,1.5,1.5h0c0.83,0,1.5-0.67,1.5-1.5v-7C17,8.67,16.33,8,15.5,8z" />
                </Icon>
            );
        case 'sharp':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M22,22H2v-2h20V22z M10,2H7v16h3V2z M17,8h-3v10h3V8z" />
                </Icon>
            );

        default:
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <Rect fill="none" height="24" width="24" />
                    <Path d="M22,22H2v-2h20V22z M10,2H7v16h3V2z M17,8h-3v10h3V8z" />
                </Icon>
            );
    }
}
