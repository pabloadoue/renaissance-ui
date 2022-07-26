import { LogBox } from 'react-native';
LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
]);

import {
    FormHandler,
    TFormHanderRef,
    TFormHandlerFields,
    TSelectField,
    TSelectOption,
    TTextInputField,
    TCurrencyField
} from './FormHandler';
import {
    RenaissanceProvider,
    TRenaissanceProviderPallete,
    TRenaissanceProviderProps,
} from './RenaissanceProvider';
import { TUIButtonProps, UIButton } from './UIButton';
import { UICurrencyInput } from './UICurrencyInput';
import { TUIHeaderProps, UIHeader } from './UIHeader';
import { TUIIconName, TUIIconProps, UIIcon } from './UIIcon';
import { TUIModalProps, UIModal } from './UIModal';
import { TUIModalEditProps, UIModalEdit } from './UIModalEdit';
import { UISelect } from './UISelect';
import { TUITableProps, UITable } from './UITable';
import { UITextInput } from './UITextInput';

export {
    UIButton,
    UICurrencyInput,
    UIHeader,
    UIIcon,
    UIModal,
    UIModalEdit,
    UITable,
    UITextInput,
    UISelect,
    FormHandler,
    RenaissanceProvider,
};

export type {
    TRenaissanceProviderProps,
    TRenaissanceProviderPallete,
    TUIHeaderProps,
    TUIModalProps,
    TUIModalEditProps,
    TUIIconName,
    TUIIconProps,
    TUIButtonProps,
    TFormHanderRef,
    TFormHandlerFields,
    TTextInputField,
    TCurrencyField,
    TSelectField,
    TSelectOption,
    TUITableProps,
};
