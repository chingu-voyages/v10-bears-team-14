import React from 'react'
import { shallow } from 'enzyme'
import LoginForm from '../containers/Login/LoginForm.js'
/*
describe('<LoginForm />',()=>{
    it('should call login() when click login button',()=>{
        const wrapper=mount(<LoginForm />);
        const spy=jest.spyOn(wrapper.instance(),'login');
        wrapper.instance().forceUpdate();
        wrapper.find('#loginBtn').simulate('click');
        expect(spy).toHaveBeenCalled();
    })
})*/
describe('LoginForm Component',()=>{
    it('contains element <form>',()=>{
        const loginForm = shallow(<LoginForm />);
        expect(loginForm).toContainReact(<form />);
    })
});
