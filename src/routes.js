import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import 'react-native-gesture-handler';

import Home from './pages/Home';

export default createAppContainer(
    createStackNavigator({
        Home: { screen: Home, navigationOptions: { headerShown: false } }
    },
    {
        initialRouteName:'Home'
    })
)