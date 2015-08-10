import test from 'tape';
import React from 'react/addons';
import Hello from '../Hello';

const TestUtils = React.addons.TestUtils;

// http://simonsmith.io/unit-testing-react-components-without-a-dom/
var createComponent = function (component, props = {}, ...children) {
  const renderer = TestUtils.createRenderer();
  renderer.render(React.createElement(component, props, children.length > 1 ? children : children[0]));
  return renderer.getRenderOutput();
};


test('Components:Hello', t => {

  t.plan(1);

  let component = createComponent(Hello),
    expected = React.DOM.h1({}, 'Hello Mumm!!');

  t.deepEqual(component.props.children, expected);
});
