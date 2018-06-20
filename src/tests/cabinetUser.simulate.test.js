import createTestContext from 'react-cosmos-test/enzyme';
import fixture from '../__fixtures__/cabinetUser';
import { URL } from '../constants';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

configure({ adapter: new Adapter() })

const { mount, getWrapper, get } = createTestContext({ fixture });

beforeEach(mount);

test('redirects to home page after signing out', () => {
    console.log(getWrapper('button'))
    getWrapper('button').simulate('click');
    expect(get('url')).toBe(URL.ROOT);
});