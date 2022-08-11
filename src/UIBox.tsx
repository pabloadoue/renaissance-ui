import React from 'react';
import { useColorMode, View } from 'native-base';

export const UIBox = (props: TUIBoxProps) => {
    const { colorMode } = useColorMode();
    return (
        <View
            bg={colorMode === 'dark' ? 'gray5.500' : 'white'}
            borderRadius={props.borderRadius}
            padding={props.padding}
        >
            {props.children}
        </View>
    );
};

UIBox.defaultProps = {
    borderRadius: 8,
    padding: 4,
};

export type TUIBoxProps = {
    children: JSX.Element | JSX.Element[];
    padding?: number;
    borderRadius?: number;
};
