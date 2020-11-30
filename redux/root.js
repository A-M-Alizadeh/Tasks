import React from 'react'
import { Provider } from 'react-redux'
import Navigation from '../navigation/Navigation';
import {store} from './index'
const Root = () => (
    <Provider store={store}>
      <Navigation/>
    </Provider>
)
export default Root;