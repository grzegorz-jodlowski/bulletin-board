import React from 'react';
import { shallow } from 'enzyme';
import { HeaderComponent } from './Header';

describe('Component Header', () => {
  it('Should render without crashing', () => {
    const component = shallow(< HeaderComponent />);
    expect(component).toBeTruthy();
  });
});
