import React from 'react';
import { shallow } from 'enzyme';
import { CardsComponent } from './Cards';

describe('Component Cards', () => {
  it('Should render without crashing', () => {
    const component = shallow(< CardsComponent />);
    expect(component).toBeTruthy();
  });
});
