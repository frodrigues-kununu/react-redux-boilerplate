import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJSON from 'enzyme-to-json';
import MainContent from './MainContent';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {};

  const enzymeWrapper = shallow(<MainContent {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

//test wrapper and props
const { enzymeWrapper, props } = setup();

describe('<MainContent />', () => {
  //snapshot testing
  test('should render correctly', () => {

    expect(toJSON(enzymeWrapper)).toMatchSnapshot();
  });
});
