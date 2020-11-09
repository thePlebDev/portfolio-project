<InputText type={'text'} name='name' error={errors.name} value={state.name} onChange={handleChange} />
<InputText type={'email'} name='email' error={errors.email} value={state.email} onChange={handleChange} />
<InputTextArea name='subject' error={errors.subject}  value={state.subject} onChange={handleChange} />
<SubmitButton />
