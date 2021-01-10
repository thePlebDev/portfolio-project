import React from 'react';
import {render} from "@testing-library/react";
import Home from '../../Components/Home'


describe('testing the home components',()=>{
  it('should test the ui upon render',()=>{
    //const {getByTestId,getByText} = render(<Home />);
    const {asFragment} = render(<Home />);
    expect(asFragment()).toMatchSnapshot();

    //now I need to find the button, trigger it and then check the snapshot again

  })
})
