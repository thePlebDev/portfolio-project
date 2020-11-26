import React,{useState} from 'react';
import styled from 'styled-components';

import Form from '../Form'
import AdminTextInput from '../AdminTextInput';
import SubmitButton from '../SubmitButton'
import TextArea from '../TextArea'

import useBlogPost from '../../Hooks/useBlogPost'
import validation from '../../utils/Validation'

const Container = styled.div`

  width:80%;
  text-align:center;
  margin:0 auto;
`

const BlogPostEditor =({useApiCal=useBlogPost})=>{
  const {state,errors,handleChange,handleSubmit} = useApiCal(validation.blogPost)

  return(
    <Container data-testid="container">
        <Form onSubmit={handleSubmit}>
          <AdminTextInput data-testid="input" state={state.imageLink} name={'imageLink'} handleChange={handleChange} error={errors.imageLink} />
          <AdminTextInput data-testid="input" state={state.title} name={'title'} handleChange={handleChange} error={errors.title} />
          <AdminTextInput data-testid="input" state={state.description} name={'description'} handleChange={handleChange} error={errors.description} />
          <AdminTextInput data-testid="input" state={state.filters} name={'filters'} handleChange={handleChange} error={errors.filters} />
          <TextArea data-testid="input" value={state.body} handleChange={handleChange} name={'body'} />
          <SubmitButton data-testid="button">Click</SubmitButton>
        </Form>
    </Container>
  )
}

export default BlogPostEditor
