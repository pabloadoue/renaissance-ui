import React, { useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { ScrollView } from 'native-base';
import { UIButton } from 'renaissance-ui';

import Header from '../header';

import Edit from './edit';

export default function Components(props: any) {
    const [modalEdit, setModalEdit] = useState(false);
    const { width } = useWindowDimensions();
    return (
        <>
            {width < 768 && (
                <Header
                    title={props.title}
                    navigation={props.navigation}
                    setColorMode={props.setColorMode}
                />
            )}
            <ScrollView
                height="100%"
                width="100%"
                contentContainerStyle={{ paddingTop: 120 }}
            >
                <UIButton
                    label="Open Modal Edit"
                    onPress={() => setModalEdit(true)}
                />
            </ScrollView>
            <Edit open={modalEdit} close={() => setModalEdit(false)} />
        </>
    );
}
