  
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJSON from 'enzyme-to-json';
import renderer from 'react-test-renderer';

// **Overview: We will be testing LOGIN, REGISTER, and chatWindow(input button) using enzyme shallow rendering
// test FUNCTIONALITY and UI rendering for each**

// Enzyme is a wrapper around React test utilities which makes it easier to
// shallow render and traverse the shallow rendered tree.
// ... import componenets
import Login from '../client/loginSignUp/login';
import RegistraionForm from '../client/loginSignUp/register';
import ChatWindow from '../client/chat/chatWindow';

// Newer Enzyme versions require an adapter to a particular version of React
configure({ adapter: new Adapter() });

describe('React unit tests', () => {

    // Test for LOGIN
    describe('Login', () => {

        it('renders correctly', () => {
            const tree = renderer.create(
              <Login />
            ).toJSON();
            expect(tree).toMatchSnapshot();
          });
    })

});