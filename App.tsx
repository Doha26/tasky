import * as React from 'react';
import {Provider} from 'react-redux'
import { StyleSheet} from 'react-native'
import AppNavigator from './src/navigation/index'
import store from "./src/redux/store";

export default function App() {
  return (
     <Provider store={store}>
         <AppNavigator/>
     </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
