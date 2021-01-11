
import React from 'react';
import {render} from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import ProjectsPage from '../../Components/ProjectsPage';
//have to test out the projects page.


const allData =[
  {
    title:'all the data',
    id:0
  },
  {
    title:'all the data',
    id:1
  }
]

const frontData =[
  {
    title:'frontend data',
    id:0
  },
  {
    title:'frontend data',
    id:1
  }
]

const fullStackData =[
  {
    title:'fullStack data',
    id:0
  },
  {
    title:'fullStack data',
    id:1
  },
  {
    title:'fullStack data',
    id:2
  }
]



describe('testing the projects page',()=>{
  it('should render properly ',()=>{
    const {asFragment} = render(<ProjectsPage />);
    expect(asFragment()).toMatchSnapshot()
  })

  it('should test the rendered data',()=>{
    const {getAllByText} = render(<ProjectsPage all={allData} />)
    expect(getAllByText('all the data').length).toBe(allData.length)
  })

  it('should test the filter buttons',()=>{
     const {getAllByText,getByText} = render(<ProjectsPage all={allData} front={frontData} full={fullStackData} />)

     //USER CLICKS ON THE FULLSTACK FILTER BUTTON
     userEvent.click(getByText('Full Stack'))
     expect(getAllByText('fullStack data').length).toBe(fullStackData.length)

     //USER CLICKS ON THE FRONT FILTER BUTTON
     userEvent.click(getByText('Frontend'))
     expect(getAllByText('frontend data').length).toBe(frontData.length)

     //USER CLICKS ON THE ALL FILTER BUTTON
     userEvent.click(getByText('All'))
     expect(getAllByText('all the data').length).toBe(allData.lengt)
  })

})
