import React from 'react'
import { Form, Label, Progress } from 'semantic-ui-react'

const FormExampleWidthField = () => {
  return (
  <div className='ui container'>

      <h4> Project name here which might be quite long </h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

  <div style={{display:'inline'}}>
  <Form>
    <Form.Group>
      <Form.Input label='PROJECT ID' placeholder='12345' width={3} />
      <Form.Input label='ASSIGNEE' placeholder='Person Name' width={9} />
      <Form.Field control='select' label='PRIORITY' width={2}>
        <option value='High'>High</option>
        <option value='Medium'>Medium</option>
        <option value='Low'>Low</option>
      </Form.Field>
      <Form.Input label='STATUS' placeholder='On Hold' width={2} />
    </Form.Group>
  </Form>
    <Label key='mini' size='mini'>COMPLETE: 51</Label>
    <div style={{paddingTop:'5px'}}>
      <Progress percent={51} size='small' progress />
    </div>
  </div>
</div>

);
};
export default FormExampleWidthField
