import * as React from 'react';
import {Provider} from 'react-redux'
import AppNavigator from './src/navigation/index'
import store from "./src/redux/store";

export default function App() {
  return (
     <Provider store={store}>
         <AppNavigator/>
     </Provider>
  );
}
