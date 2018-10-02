import { StackNavigator } from 'react-navigation'

// screen
import LoginContainer from '../containers/login-container';
import SplashContainer from '../containers/splash-container';
import HomeContainer from '../containers/home-container';
import RegisterContainer from '../containers/register-container';
import ForgotContainer from '../containers/forgot-container';
/**
 * account stack navigator
 */
export default StackNavigator(
    {
        SplashContainer: {
            screen: SplashContainer
        },
        LoginContainer: {
            screen: LoginContainer
        },
        HomeContainer: {
            screen: HomeContainer
        },
        RegisterContainer: {
            screen: RegisterContainer
        },
        ForgotContainer: {
            screen: ForgotContainer
        }
    }, {
        headerMode: 'none',
        mode: 'modal',
        initialRouteName: 'SplashContainer'
    }
);