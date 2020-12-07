const app = require('./index.js')
const supertest = require('supertest')
const mongoose = require('mongoose')
const request = supertest(app)



describe('testing endpoints', async()=>{
  beforeAll(async ()=>{
    const url = 'mongodb://127.0.0.1:27017/test'
    await mongoose.connect(url,{useNewUrlParser:true})
  })

  it('just testing to see if it works',async (done)=>{
    done()
  })
})
