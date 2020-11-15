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

const BlogPostEditor =()=>{
  const {state,errors,handleChange,handleSubmit} = useBlogPost(validation.blogPost)

  return(
    <Container>
        <Form onSubmit={handleSubmit}>
          <AdminTextInput state={state.imageLink} name={'imageLink'} handleChange={handleChange} error={errors.imageLink} />
          <AdminTextInput state={state.title} name={'title'} handleChange={handleChange} error={errors.title} />
          <AdminTextInput state={state.description} name={'description'} handleChange={handleChange} error={errors.description} />
          <AdminTextInput state={state.filters} name={'filters'} handleChange={handleChange} error={errors.filters} />
          <TextArea value={state.body} handleChange={handleChange} name={'body'} />
          <SubmitButton>Click</SubmitButton>
        </Form>
    </Container>
  )
}

export default BlogPostEditor
