import { StackNavigator } from 'react-navigation';

// navigator
import AccountNavigator from './account-stack-navigator';

export default StackNavigator(
    {
        AccountNavigator: {
            screen: AccountNavigator
        }
    },
    {
        headerMode: 'none',
        mode: 'modal',
        initialRouteName: 'AccountNavigator'
    }
);



