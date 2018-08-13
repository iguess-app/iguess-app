import React, { Component } from 'react';
import Orientation from 'react-native-orientation';
import { Router, Stack, Scene } from 'react-native-router-flux';
import {
  Home,
  Core,
  Support,
  Terms,
  About,
  SignUp,
  SignIn,
  Loading,
  HowItWorks,
  PreviousLines,
  Leagues,
  CreateLeague,
  AddFriends,
  AddedFriends,
  LeagueDetails,
  ConfirmSendMail,
  ConfirmToken,
  ForgotMyPassword,
  RedefinePassword,
} from '@scenes';
import { Provider } from 'react-redux';
import createStore from '@store/create';
import { loginWithStoredToken } from '@helpers';

export const store = createStore();

export default class Kernel extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: undefined };
  }

  async componentDidMount() {
    Orientation.lockToPortrait();
    const logged = await loginWithStoredToken();
    this.setState({ loggedIn: logged });
  }

  componentWillUnmount() {
    Orientation.unlockAllOrientations();
  }

  render() {
    if (this.state.loggedIn !== undefined) {
      return (
        <Provider store={store}>
          <Router>
            <Stack key="root">
              <Scene key="home" component={Home} hideNavBar={true} />
              <Scene
                key="core"
                component={Core}
                hideNavBar={true}
                initial={this.state.loggedIn}
              />
              <Scene key="signup" component={SignUp} hideNavBar={true} />
              <Scene key="signin" component={SignIn} hideNavBar={true} />
              <Scene key="support" component={Support} hideNavBar={true} />
              <Scene key="terms" component={Terms} hideNavBar={true} />
              <Scene key="about" component={About} hideNavBar={true} />
              <Scene key="leagues" component={Leagues} hideNavBar={true} />
              <Scene
                key="createleague"
                component={CreateLeague}
                hideNavBar={true}
              />
              <Scene
                key="addfriends"
                component={AddFriends}
                hideNavBar={true}
              />
              <Scene
                key="addedfriends"
                component={AddedFriends}
                hideNavBar={true}
              />
              <Scene
                key="leaguedetails"
                component={LeagueDetails}
                hideNavBar={true}
              />
              <Scene
                key="howitworks"
                component={HowItWorks}
                hideNavBar={true}
              />
              <Scene key="previouslines" component={PreviousLines} hideNavBar />
              <Scene
                key="forgotpassword"
                component={ForgotMyPassword}
                hideNavBar
              />
              <Scene
                key="confirmsendmail"
                component={ConfirmSendMail}
                hideNavBar
              />
              <Scene key="confirmtoken" component={ConfirmToken} hideNavBar />
              <Scene
                key="redefinepassword"
                component={RedefinePassword}
                hideNavBar
              />
            </Stack>
          </Router>
        </Provider>
      );
    } else {
      return <Loading />;
    }
  }
}
