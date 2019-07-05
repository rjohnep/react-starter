// Asynchronously loads the component for Table

import React from 'react';

import loadable from '@app/utils/loadable';
import LoadingIndicator from '@app/components/LoadingIndicator';

export default loadable(() => import('./index'), {
  fallback: <LoadingIndicator />
});
