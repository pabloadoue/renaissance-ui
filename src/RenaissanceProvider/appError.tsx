import React, { createContext, useState } from 'react';
import uuid from 'react-native-uuid';

import { UIAlertDialog } from '../UIAlertDialog';

export const AppErrorContext = createContext<TAppErrorContextType>({
    errors: [],
    appError: (_error) => {},
    removeError: (_id) => {},
});

type TAppErrorContextType = {
    errors: IAppError[];
    appError: (error: TAppError) => void;
    removeError: (id: string) => void;
};

export type TAppError = {
    code?: string | number;
    errorCode?: string;
    data: string;
};

interface IAppError extends TAppError {
    id: string;
}

export const AppErrorProvider = (props: any) => {
    const [errors, setErrors] = useState<IAppError[]>([]);

    const newError = (error: TAppError) => {
        setErrors([...errors, { id: uuid.v4() as string, ...error }]);
    };

    const removeError = (id: string) => {
        setErrors(errors.filter((error) => error.id !== id));
    };

    const renderErrors = () => {
        return errors.map((error, index) => {
            return (
                <UIAlertDialog
                    title={
                        typeof error.errorCode === 'string'
                            ? error.errorCode
                            : ''
                    }
                    zIndex={3000 + index}
                    open={true}
                    body={error.data}
                    key={error.id}
                    icon={'error'}
                    close={() => removeError(error.id)}
                />
            );
        });
    };

    return (
        <AppErrorContext.Provider
            value={{
                errors: errors,
                appError: newError,
                removeError: removeError,
            }}
        >
            <AppErrorCatcher>
                {renderErrors()}
                {props.children}
            </AppErrorCatcher>
        </AppErrorContext.Provider>
    );
};

class AppErrorCatcher extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { hasError: false };

        this.handleError = this.handleError.bind(this);

        if (typeof ErrorUtils !== 'undefined') {
            ErrorUtils.setGlobalHandler((error: Error) => {
                this.handleError(error);
            });
            //@ts-expect-error
        } else if (typeof window !== 'undefined') {
            //@ts-expect-error
            window.addEventListener('error', (event: any) => {
                //console.log(event.error);
                this.handleError(event.error);
                // prevent React's listener from firing
                event.stopImmediatePropagation();
                // prevent the browser's console error message
                event.preventDefault();
            });
        }
    }

    componentDidCatch(error: Error) {
        this.handleError(error);
    }

    handleError(error: Error) {
        const { context } = this;
        if (
            error.message !==
            `An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`
        ) {
            context.appError({ errorCode: error.name, data: error.message });
        }
    }

    render() {
        return this.props.children;
    }
}

AppErrorCatcher.contextType = AppErrorContext;
