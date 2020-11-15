import React,{useState} from 'react';
import styled from 'styled-components';

import Form from '../Form'

import useBlogPost from '../../Hooks/useBlogPost'
import validation from '../../utils/Validation'

const Container = styled.div`
  border:1px solid red;
  width:80%;
  margin:0 auto;
`

const BlogPostEditor =()=>{
  const {state,handleChange,handleSubmit} = useBlogPost(validation.blogPost)

  return(
    <Container>
        <Form onSubmit={handleSubmit}>
          <div>
            <label>
              image link
              <input name="imageLink" onChange={(e)=>handleChange(e)} value={state.imageLinke}/>
            </label>
          </div>
          <div>
            <label>
              title
              <input name="title" onChange={(e)=>handleChange(e)} value={state.title}/>
            </label>
          </div>
          <div>
            <label>
              description
              <input name="description" onChange={(e)=>handleChange(e)} value={state.description}/>
            </label>
          </div>
          <div>
            <label>
              filters
              <input name="filters" onChange={(e)=>handleChange(e)} value={state.filters}/>
            </label>
          </div>
          <div>
            <label>
              body
              <textarea name="body" onChange={(e)=>handleChange(e)} value={state.body}/>
            </label>
          </div>
          <button>Click</button>
        </Form>
    </Container>
  )
}

export default BlogPostEditor
