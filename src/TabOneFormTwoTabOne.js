import React, { Component } from 'react'
import { Button, Checkbox, Form, Input, Select} from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'DevOps', value: 'devops' },
  { key: 'f', text: 'Testing', value: 'testing' },
]

class TabOneFormTwoTabOne extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Field control={Input} label='Project Management System Number' placeholder='Something here' />
          <Form.Field control={Select} label='Business Unit' options={options} placeholder='Something here' />
        </Form.Group>
        <Form.Group widths='equal' >
          <Form.Field control={Input} label='Department' placeholder='Something here' />
          <Form.Field control={Input} label='Department' placeholder='Something here' />
        </Form.Group>
        <Form.Field control={Checkbox} label='Engagement Criteria Met?' />
        <Form.Field control={Checkbox} label='Is this project for a program (a group of Projects)?' />
        <Form.Field control={Button}>SAVE</Form.Field>
      </Form>
    )
  }
}

export default TabOneFormTwoTabOne
