"use client"
import { persistor, store } from './index'

import { Provider } from 'react-redux'
import React,{ReactNode} from 'react'
import { PersistGate } from 'redux-persist/integration/react'

const ReduxProvider = ({children}:{children:ReactNode}) => {
  return (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
{children}
        </PersistGate>
    </Provider>
  )
}

export default ReduxProvider
