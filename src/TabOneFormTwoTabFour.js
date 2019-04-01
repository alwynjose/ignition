import React, { Component } from 'react'
import { Divider, Grid, Segment, Button, Checkbox, Form, Input, Select, Table} from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'DevOps', value: 'devops' },
  { key: 'f', text: 'Testing', value: 'testing' },
]

class TabOneFormTwoTabFour extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Segment>
      <Grid columns={2} relaxed='very'>
      <Grid.Column>
      <div className='ui container'>
        <Form>
          <Form.Group widths='equal'>
            <Form.Field control={Input} label='Project Sponsor' placeholder='Something here' />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Field control={Input} label='Project Contact Name' placeholder='Something here' />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Field control={Input} label='Project Contact Phone' placeholder='Something here' />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Field control={Input} label='Lead Soultion Architect Name' placeholder='Something here' />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Field control={Input} label='Lead Soultion Architect Phone' placeholder='Something here' />
          </Form.Group>
          <Form.Field control={Button}>SAVE</Form.Field>
        </Form>
      </div>
      </Grid.Column>
      <Grid.Column>
      <div className='ui container'>
        <p style={{float: 'left'}}>Contact</p>
        <p style={{float: 'right'}}><u>Add New Contact +</u></p>

        <Table basic='very'>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Persons Name</Table.Cell>
              <Table.Cell>Role title here which might be long</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Persons Name</Table.Cell>
              <Table.Cell>Role title here which might be long</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

      </div>
      </Grid.Column>
      </Grid>
      <Divider vertical/>
      </Segment>
    )
  }
}

export default TabOneFormTwoTabFour
