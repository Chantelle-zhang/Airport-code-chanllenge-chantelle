import { shallow } from "enzyme/build";
import React from "react";
import {ModalView } from "./ModalView";
const mockDispatch = jest.fn();

it('Test modal close ', () => {
    const wrapper = shallow(
        <ModalView showModal={true} dispatch={mockDispatch}/>)
    wrapper.find("[data-test='close']").at(0).simulate('click');
    expect(mockDispatch).toHaveBeenCalledTimes(1)

});
