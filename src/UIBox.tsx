import React from 'react';
import { View } from 'native-base';

export const UIBox = (props: TUIBoxProps) => {
    return (
        <View bg={{ _dark: 'gray5.500', _light: 'white' }} borderRadius={8}>
            {props.children}
        </View>
    );
};

export type TUIBoxProps = {
    children: JSX.Element | JSX.Element[];
};
