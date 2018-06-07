{/*import React from 'react';
import ReactDOM from 'react-dom';
import App from './index.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
}); */}
import React from 'react';
import { shallow } from 'enzyme';
import App from './index.js';

const wrapper = shallow(<MyComponent/>);

describe('(Component) App', () => {
  it('renders without exploding', () => {
    expect(wrapper).toHaveLength(1)
  });
});
