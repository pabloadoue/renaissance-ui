import React from 'react';
import type { IIconProps } from 'native-base';

import IconAction3dRotation from './components/Action3dRotationIcon';
import IconAction123 from './components/Action123Icon';
import IconActionAbc from './components/ActionAbcIcon';
import IconActionAccessibility from './components/ActionAccessibilityIcon';
import IconActionAccessibilityNew from './components/ActionAccessibilityNewIcon';
import IconActionAccessibleForward from './components/ActionAccessibleForwardIcon';
import IconActionAccessible from './components/ActionAccessibleIcon';
import IconActionAccountBalance from './components/ActionAccountBalanceIcon';
import IconActionAccountBalanceWallet from './components/ActionAccountBalanceWalletIcon';
import IconActionAccountBox from './components/ActionAccountBoxIcon';
import IconActionAccountCircle from './components/ActionAccountCircleIcon';

export function UIIcon(props: TUIIconProps) {
    switch (props.name) {
        case 'action-123':
            return <IconAction123 {...props} />;
        case 'action-3d-rotation':
            return <IconAction3dRotation {...props} />;
        case 'action-abc':
            return <IconActionAbc {...props} />;
        case 'action-accessibility':
            return <IconActionAccessibility {...props} />;
        case 'action-accessibility-new':
            return <IconActionAccessibilityNew {...props} />;
        case 'action-accessible':
            return <IconActionAccessible {...props} />;
        case 'action-accessible-forward':
            return <IconActionAccessibleForward {...props} />;
        case 'action-account-balance':
            return <IconActionAccountBalance {...props} />;
        case 'action-account-balance-wallet':
            return <IconActionAccountBalanceWallet {...props} />;
        case 'action-account-box':
            return <IconActionAccountBox {...props} />;
        case 'action-account-circle':
            return <IconActionAccountCircle {...props} />;
    }
}

export interface TUIIconProps extends IIconProps {
    name: TUIIconName;
}
export type TUIIconName =
    | 'action-123'
    | 'action-3d-rotation'
    | 'action-abc'
    | 'action-accessibility'
    | 'action-accessibility-new'
    | 'action-accessible'
    | 'action-accessible-forward'
    | 'action-account-balance'
    | 'action-account-balance-wallet'
    | 'action-account-box'
    | 'action-account-circle';
export const UIIcons = [
    'Action123',
    'Action3dRotation',
    'ActionAbc',
    'ActionAccessibility',
    'ActionAccessibilityNew',
    'ActionAccessible',
    'ActionAccessibleForward',
    'ActionAccountBalance',
    'ActionAccountBalanceWallet',
    'ActionAccountBox',
    'ActionAccountCircle',
];
