import React, {Component} from 'react';
import { Text } from 'react-native'; 
import { Router, Stack, Scene } from 'react-native-router-flux';
import {
  Home,
  Core,
  Support,
  Terms,
  About,
  SignUp,
  SignIn,
  Loading
} from '@scenes';
import { Provider } from 'react-redux';
import createStore from '@store/create';
import { loginWithStoredToken } from '@helpers';

export const store = createStore();

export default class Kernel extends Component {

  constructor(props) {
    super(props);
    this.state = {loggedIn: undefined};
  }

  async componentDidMount() {
    const logged = await loginWithStoredToken();
    this.setState({loggedIn: logged});
  }
  
  render() {

    if(this.state.loggedIn !== undefined) {
      return (
        <Provider store={store}>
          <Router>
            <Stack key="root">
              <Scene key="home" component={Home} hideNavBar={true} />
              <Scene key="core" component={Core} hideNavBar={true} initial={this.state.loggedIn}/>
              <Scene key="signup" component={SignUp} hideNavBar={true} />
              <Scene key="signin" component={SignIn} hideNavBar={true} />
              <Scene key="support" component={Support} hideNavBar={true} />
              <Scene key="terms" component={Terms} hideNavBar={true} />
              <Scene key="about" component={About} hideNavBar={true} />
            </Stack>
          </Router>
        </Provider>
      );
    } else {
      return <Loading />
    }

  }
}