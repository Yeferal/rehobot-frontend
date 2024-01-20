'use client'
import { Provider } from 'react-redux';
import store, { persistor } from '../store/store';

// import { AppProps } from 'next/app';
import { PersistGate } from 'redux-persist/integration/react';



function ReduxProvider({ children }: {children: React.ReactNode}) {
    
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
            {children}
            </PersistGate>
        </Provider>
    );
}

export default ReduxProvider;