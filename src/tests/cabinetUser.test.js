import React from 'react';
import { create as renderer } from 'react-test-renderer';
import createTestContext from 'react-cosmos-test/generic';
import fixture from '../__fixtures__/cabinetUser';

const { mount, getWrapper } = createTestContext({
    renderer,
    fixture
});

beforeEach(mount);

test('matches snapshot', () => {
    expect(getWrapper().toJSON()).toMatchSnapshot();
});