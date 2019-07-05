import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Link from '@app/components/Link';

import LoadableTable from '../Table/Loadable';

export default () => {
  return (
    <Fragment>
      <Typography variant="h2">React Starter DEMO</Typography>
      <Link to="/">Home</Link>
      <Link to="/table">Table Demo</Link>
      <br />

      <Switch>
        <Route path="/table" component={LoadableTable} />
      </Switch>
    </Fragment>
  );
};
