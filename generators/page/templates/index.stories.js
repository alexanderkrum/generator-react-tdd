import React from 'react';
import { storiesOf } from '@storybook/react';
import <%= name %> from './index'


storiesOf('Pages/<%= name %>', module)
  .add('default', () => <<%= name %>/>)
