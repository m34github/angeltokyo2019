import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';

import Test from './components/Test.jsx';
import store from './modules/store';
import { theme } from './styles';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router>
            <Switch>
              <Route path="/test" component={Test} />
              <Redirect to="/test" />
            </Switch>
          </Router>
        </ThemeProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
