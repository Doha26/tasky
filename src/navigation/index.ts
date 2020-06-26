import {createAppContainer} from 'react-navigation';
import Home from '~/screens/Home';
import {createStackNavigator} from "react-navigation-stack";


const navigator = createStackNavigator({
    home: Home,
}, {
    initialRouteName: 'home', // Initial route,
    headerMode: 'none',
    defaultNavigationOptions: () => ({
        header: undefined,
    }),
});

export default createAppContainer(navigator);
