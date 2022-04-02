import React, { memo } from 'react';
import { Route, Switch } from 'react-router-dom';

import OrdersListPage from './List';

const OrderIndexPage = memo(() => {
  return (
    <Switch>
      <Route path='/' component={OrdersListPage} />
    </Switch>
  );
});

export default OrderIndexPage;
