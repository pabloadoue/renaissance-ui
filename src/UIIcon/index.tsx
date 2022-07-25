import React from 'react';
import type { IIconProps } from 'native-base';

import Icon3dRotation from './components/3dRotationIcon';
import Icon123 from './components/123Icon';
import IconAbc from './components/AbcIcon';
import IconAccessibility from './components/AccessibilityIcon';
import IconAccessibilityNew from './components/AccessibilityNewIcon';
import IconAccessibleForward from './components/AccessibleForwardIcon';
import IconAccessible from './components/AccessibleIcon';
import IconAccountBalance from './components/AccountBalanceIcon';
import IconAccountBalanceWallet from './components/AccountBalanceWalletIcon';
import IconAccountBox from './components/AccountBoxIcon';
import IconAccountCircle from './components/AccountCircleIcon';

export function UIIcon(props: TUIIconProps) {
    switch (props.name) {
        case '123':
            return <Icon123 {...props} />;
        case '3d-rotation':
            return <Icon3dRotation {...props} />;
        case 'abc':
            return <IconAbc {...props} />;
        case 'accessibility':
            return <IconAccessibility {...props} />;
        case 'accessibility-new':
            return <IconAccessibilityNew {...props} />;
        case 'accessible':
            return <IconAccessible {...props} />;
        case 'accessible-forward':
            return <IconAccessibleForward {...props} />;
        case 'account-balance':
            return <IconAccountBalance {...props} />;
        case 'account-balance-wallet':
            return <IconAccountBalanceWallet {...props} />;
        case 'account-box':
            return <IconAccountBox {...props} />;
        case 'account-circle':
            return <IconAccountCircle {...props} />;
    }
}

export interface TUIIconProps extends IIconProps {
    name: TUIIconName;
}
export type TUIIconName =
    | '123'
    | '3d-rotation'
    | 'abc'
    | 'accessibility'
    | 'accessibility-new'
    | 'accessible'
    | 'accessible-forward'
    | 'account-balance'
    | 'account-balance-wallet'
    | 'account-box'
    | 'account-circle';
export const UIIcons = [
    '123',
    '3d-rotation',
    'abc',
    'accessibility',
    'accessibility-new',
    'accessible',
    'accessible-forward',
    'account-balance',
    'account-balance-wallet',
    'account-box',
    'account-circle',
];
