import React, { Component } from 'react'
import { Button, Checkbox, Form, Input, Select} from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'DevOps', value: 'devops' },
  { key: 'f', text: 'Testing', value: 'testing' },
]

class TabOneFormTwoTabThree extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Form>
        <Form.Group widths={3}>
          <Form.Field control={Input} label='Total Project Estimate' placeholder='$123123' />
        </Form.Group>
        <Form.Group widths={3}>
          <Form.Field control={Input} label='Estimate ROI' placeholder='$123123' />
        </Form.Group>
        <Form.Group>
          <Form.Field control={Checkbox} label='Tag name' />
          <Form.Field control={Checkbox} label='Tag name' />
        </Form.Group>
        <Form.Field control={Button}>SAVE</Form.Field>
      </Form>
    )
  }
}

export default TabOneFormTwoTabThree
