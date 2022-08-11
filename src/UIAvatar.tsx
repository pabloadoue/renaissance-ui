import React, { useMemo } from 'react';
import { Avatar, IAvatarProps } from 'native-base';

export const UIAvatar = (props: TUIAvatarProps) => {
    const anagram = useMemo(() => {
        const result: string[] = [];
        if (typeof props.name === 'string') {
            result.push(props.name.charAt(0).toUpperCase());
        }

        if (typeof props.lastName === 'string') {
            result.push(props.lastName.charAt(0).toUpperCase());
        }

        return result.join('');
    }, [props.name, props.lastName]);

    return <Avatar size={props.size}>{anagram}</Avatar>;
};

UIAvatar.defaultProps = {
    size: 'sm',
};

export type TUIAvatarProps = {
    name: string;
    lastName: String;
    avatar?: string;
    size?: IAvatarProps['size'];
};
