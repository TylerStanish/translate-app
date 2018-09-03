import React from 'react';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import {createBottomTabNavigator} from 'react-navigation';

import TranslateScreen from './screens/TranslateScreen';
import PracticeScreen from './screens/PracticeScreen';

import reducers from './reducers';

const TabNavigator = createBottomTabNavigator({
  Translate: TranslateScreen,
  Practice: PracticeScreen
});

const store = createStore(reducers);

export default class extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <TabNavigator/>
      </Provider>
    );
  }
}
