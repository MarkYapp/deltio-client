import React from 'react';
import { shallow } from 'enzyme';

import Card from './card';

describe('Card', () => {
  it('renders without crashing', () => {
    shallow(<Card />);
  });
});
