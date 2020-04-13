import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import { Route, Switch } from 'react-router-dom';
import SwatchList from './containers/Swatches/SwatchList/SwatchList';
import SwatchEditor from './containers/Swatches/SwatchEditor/SwatchEditor';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/:swatchName" exact component={SwatchEditor} />
            <Route path="/" exact component={SwatchList} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
