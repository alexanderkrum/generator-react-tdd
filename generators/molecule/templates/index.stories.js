import React from 'react';
import { storiesOf } from '@storybook/react';
import <%= name %> from './index'


storiesOf('Molecules/<%= name %>', module)
  .add('default', () => <<%= name %>/>)
