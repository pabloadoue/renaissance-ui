import React from 'react';
import { Text, View } from 'native-base';

import Header from './header';

export default function Components(props: any) {
    return (
        <>
            <Header
                navigation={props.navigation}
                setColorMode={props.setColorMode}
            />
            <View flex={1} justifyContent="center" alignItems={'center'}>
                <Text>Hello Home</Text>
            </View>
        </>
    );
}
