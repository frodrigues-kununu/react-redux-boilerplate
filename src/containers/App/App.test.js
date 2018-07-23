import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJSON from 'enzyme-to-json';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    path: '',
  };

  const enzymeWrapper = shallow(<App {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

//test wrapper and props
const { enzymeWrapper, props } = setup();

describe('<App />', () => {
  //snapshot testing
  test('should render correctly ', () => {
    expect(toJSON(enzymeWrapper)).toMatchSnapshot();
  });
});
