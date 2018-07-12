import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJSON from 'enzyme-to-json';
import Footer from './Footer';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {};

  const enzymeWrapper = shallow(<Footer {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

//test wrapper and props
const { enzymeWrapper, props } = setup();

describe('<Footer />', () => {
  //snapshot testing
  test('should render correctly', () => {
    // const tree = renderer
    //   .create(<Header page="http://www.facebook.com"></Header>)
    //   .toJSON();

    expect(toJSON(enzymeWrapper)).toMatchSnapshot();
  });
});
