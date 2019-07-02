import React, { Fragment } from 'react';
import styled from 'styled-components';

import Table from '../Table';
import GroupedTable from '../GroupedTable';

const columns = [
  { dataKey: 'name', title: 'Name' },
  { dataKey: 'sex', title: 'Sex' },
  { dataKey: 'city', title: 'City' },
  { dataKey: 'car', title: 'Car' }
];
let rows = [
  { sex: 'Female', name: 'Sandra', city: 'Las Vegas', car: 'Audi A4' },
  { sex: 'Male', name: 'Paul', city: 'Paris', car: 'Nissan Altima' },
  { sex: 'Male', name: 'Mark', city: 'Paris', car: 'Honda Accord' },
  { sex: 'Male', name: 'Paul', city: 'Paris', car: 'Nissan Altima' },
  { sex: 'Female', name: 'Linda', city: 'Austin', car: 'Toyota Corolla' },
  { sex: 'Male', name: 'Robert', city: 'Las Vegas', car: 'Chevrolet Cruze' },
  { sex: 'Female', name: 'Lisa', city: 'London', car: 'BMW 750' },
  { sex: 'Male', name: 'Mark', city: 'Chicago', car: 'Toyota Corolla' },
  { sex: 'Male', name: 'Thomas', city: 'Rio de Janeiro', car: 'Honda Accord' },
  { sex: 'Male', name: 'Robert', city: 'Las Vegas', car: 'Honda Civic' },
  { sex: 'Female', name: 'Betty', city: 'Paris', car: 'Honda Civic' },
  { sex: 'Male', name: 'Robert', city: 'Los Angeles', car: 'Honda Accord' },
  { sex: 'Male', name: 'William', city: 'Los Angeles', car: 'Honda Civic' },
  { sex: 'Male', name: 'Mark', city: 'Austin', car: 'Nissan Altima' }
];

rows = rows.concat(...rows);
rows = rows.concat(...rows);
rows = rows.concat(...rows);
rows = rows.concat(...rows);
rows = rows.concat(...rows);

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
`;

const Divider = styled.div`
  width: 80px;
`;

export default () => {
  return (
    <Fragment>
      Test Material UI Table
      <Wrapper>
        <Table />
        <Divider />
        <GroupedTable columns={columns} rows={rows} />
      </Wrapper>
    </Fragment>
  );
};
