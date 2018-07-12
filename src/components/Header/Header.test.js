import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import toJSON from 'enzyme-to-json';
import Header from './Header';

Enzyme.configure({ adapter: new Adapter() });

/*****************************
* Profile chart Selected Anomaly Visibility
*/
function setup() {
  const props = {};

  const enzymeWrapper = shallow(<Header {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

//test wrapper and props
const { enzymeWrapper, props } = setup();

describe('<Header />', () => {
  //snapshot testing
  test('should render correctly', () => {

    expect(toJSON(enzymeWrapper)).toMatchSnapshot();
  });
});
