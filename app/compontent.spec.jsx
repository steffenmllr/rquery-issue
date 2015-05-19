'use strict';

import React from 'react/addons';

import Component from './compontent';

describe('Test Case', () => {

    let TestUtils = React.addons.TestUtils;


    it('it works', () => {
        var component = TestUtils.renderIntoDocument(<Component />);
        TestUtils.Simulate.click($R(component).find('a').get(0));
        component = $R(component).get(0);
        expect(component.state.open).to.equal(true);

    });

    it('it also works', () => {
        var component = TestUtils.renderIntoDocument(<Component />);
        var button = TestUtils.findRenderedDOMComponentWithTag(component, 'a');
        TestUtils.Simulate.click(button);
        expect(component.state.open).to.equal(true);
    });

    it('it doesnt work', () => {
        var component = TestUtils.renderIntoDocument(<Component />);
        $R(component).find('a').click();
        component = $R(component).get(0);
        expect(component.state.open).to.equal(true);
    });
});
