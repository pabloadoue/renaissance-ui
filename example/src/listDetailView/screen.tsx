import React, { useMemo } from 'react';
import { useWindowDimensions } from 'react-native';
import findValue from '@pabloadoue/find-value';
import { View } from 'native-base';
import {
    TUIHeaderControllDefinition,
    TUIHeaderProps,
    TUIListItem,
    UIDrawerLayoutScreenWrapper,
    UIHeader,
    UIListDetailViewLayout,
} from 'renaissance-ui';

import dummyData from './dummyData';

export default function DrawerView(props: any) {
    const { navigation, route } = props;
    const { params } = route;
    const { width } = useWindowDimensions();

    const headerLeft: TUIHeaderControllDefinition = useMemo(() => {
        if (width >= 768) {
            return undefined;
        } else {
            const control: TUIHeaderControllDefinition = {
                icon: 'menu',
                color: 'primary.500',
                press: () => {
                    navigation.openDrawer();
                },
            };
            return control;
        }
    }, [width, navigation]);

    const selected = useMemo(() => {
        const value = findValue(params, 'selected') || null;
        return value;
    }, [params]);

    const load = (_page: number, _search: string | false) => {
        return new Promise<TUIListItem[]>((resolve) => {
            const data = dummyData();
            setTimeout(() => {
                resolve(data);
            }, 2000);
        });
    };

    return (
        <UIDrawerLayoutScreenWrapper>
            <UIListDetailViewLayout
                title="List View"
                left={headerLeft}
                results={load}
                items={load}
                select={(id) => {
                    navigation.setParams({ selected: id });
                }}
                emptyMessage="Seleccione un elemento de la lista"
                selected={selected}
                // eslint-disable-next-line react/no-unstable-nested-components
                detail={(detailProps) => <Detail {...detailProps} />}
            />
        </UIDrawerLayoutScreenWrapper>
    );
}

const Detail = (props: any) => {
    const { back } = props;
    const { width } = useWindowDimensions();
    const headerProps: TUIHeaderProps = useMemo(() => {
        let result: TUIHeaderProps = {
            title: 'Detalle',
            shadow: true,
            safeArea: width < 768,
            bg: {
                light: 'white',
                dark: 'gray5.500',
            },
        };

        if (width < 768) {
            result.left = {
                icon: 'arrow-back-ios',
                color: 'gray',
                size: 'md',
                press: () => {
                    back();
                },
            };
        }
        return result;
    }, [width, back]);

    return (
        <View flex={1}>
            <UIHeader {...headerProps} />
        </View>
    );
};
