import React from 'react';
import { G, Path, Rect } from 'react-native-svg';
import { Icon } from 'native-base';

export default function IconActionPending(props: any) {
    switch (props.variant) {
        case 'solid':
            return (
                <Icon viewBox="0 0 24 24" {...props}>
                    <G>
                        <Rect fill="none" height="24" width="24" />
                    </G>
                    <G>
                        <Path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M7,13.5c-0.83,0-1.5-0.67-1.5-1.5 c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5C8.5,12.83,7.83,13.5,7,13.5z M12,13.5c-0.83,0-1.5-0.67-1.5-1.5 c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5C13.5,12.83,12.83,13.5,12,13.5z M17,13.5c-0.83,0-1.5-0.67-1.5-1.5 c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5C18.5,12.83,17.83,13.5,17,13.5z" />
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
                            <Path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M12,20c-4.42,0-8-3.58-8-8 c0-4.42,3.58-8,8-8s8,3.58,8,8C20,16.42,16.42,20,12,20z" />
                            <circle cx="7" cy="12" r="1.5" />
                            <circle cx="12" cy="12" r="1.5" />
                            <circle cx="17" cy="12" r="1.5" />
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
                        <Path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M7,13.5c-0.83,0-1.5-0.67-1.5-1.5 c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5C8.5,12.83,7.83,13.5,7,13.5z M12,13.5c-0.83,0-1.5-0.67-1.5-1.5 c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5C13.5,12.83,12.83,13.5,12,13.5z M17,13.5c-0.83,0-1.5-0.67-1.5-1.5 c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5C18.5,12.83,17.83,13.5,17,13.5z" />
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
                        <Path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M7,13.5c-0.83,0-1.5-0.67-1.5-1.5 c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5C8.5,12.83,7.83,13.5,7,13.5z M12,13.5c-0.83,0-1.5-0.67-1.5-1.5 c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5C13.5,12.83,12.83,13.5,12,13.5z M17,13.5c-0.83,0-1.5-0.67-1.5-1.5 c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5C18.5,12.83,17.83,13.5,17,13.5z" />
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
                            <Path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M12,20c-4.42,0-8-3.58-8-8 c0-4.42,3.58-8,8-8s8,3.58,8,8C20,16.42,16.42,20,12,20z" />
                            <circle cx="7" cy="12" r="1.5" />
                            <circle cx="12" cy="12" r="1.5" />
                            <circle cx="17" cy="12" r="1.5" />
                        </G>
                    </G>
                </Icon>
            );
    }
}
