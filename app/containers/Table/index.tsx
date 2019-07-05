import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';

import injectReducer from '@app/utils/injectReducer';
import Button from '@app/components/Button';
import { epic$ } from '@app/epics';

import reducer from './reducer';
import epics from './epics';
import { fetchDataRequest } from './actions';

epic$.next(epics[0]);
const withReducer = injectReducer({ key: 'table', reducer });
const mapDispatchToProps = {
  loadData: fetchDataRequest
};
const withConnect = connect(
  null,
  mapDispatchToProps
);

type TTableProps = typeof mapDispatchToProps;

class Table extends PureComponent<TTableProps> {
  static propTypes = {
    loading: PropTypes.bool,
    loadData: PropTypes.func.isRequired
  };

  onTestDataLoad = () => this.props.loadData([]);

  render() {
    return (
      <Fragment>
        <Button onClick={this.onTestDataLoad}>Load Test Data</Button>
      </Fragment>
    );
  }
}

export default compose(
  withReducer,
  withConnect
)(Table);
