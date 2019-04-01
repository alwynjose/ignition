import React, { Component } from 'react'
import { Label, Button, Checkbox, Form, Input, Select, Grid, Segment, Divider} from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'DevOps', value: 'devops' },
  { key: 'f', text: 'Testing', value: 'testing' },
]

class TabOneFormTwoTabTwo extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
    <Segment>
      <Grid columns={2} relaxed='very'>
        <Grid.Column>
            <Form>

              <Form.Field control={Checkbox} label='Do you have high information availability requirements for the system? E.g. System must be exceptionally reliable and not fail.' />
              <Form.Field control={Checkbox} label='Do you have high information integrity requirements for the system? E.g. strong requirement for non repudiation and tamper-proof audit trails.' />
              <Form.Field control={Checkbox} label='Does your system have any of these types of data? E.g. Transactional Data, Credit Cards, Payroll or HR, Personally Identifiable
      Information, Customer Accounts, Regulatory Reports' />
    <Form.Group widths='equals'>
                <Form.Field control={Select} label='Where will the systems data be stored, processed or transmitted?' options={options} placeholder='Something here' />
              </Form.Group>
              <Form.Field control={Checkbox} label='Will data be flowing into or out of the Company in bulk? E.g. batch file transfer or real time web services?' />
              <Form.Field control={Checkbox} label='Is any component of the system accessed from the Internet?' />
              <Form.Field control={Checkbox} label='Does the system have Company entity logo or branding?' />
              <Form.Group widths='equals'>
                <Form.Field control={Select} label='How many users will require access to the system? Please enter a number' options={options} placeholder='Something here' />
              </Form.Group>
              <Form.Field control={Checkbox} label='Will any 3rd party suppliers or service providers require regular access? E.g. for support or data processing purposes.' />
              <Form.Field control={Checkbox} label='Will customers require access?' />
              <Form.Group widths='equals'>
                <Form.Field control={Select} label='Who is involved in the implementation, delivery or development of this solution?' options={options} placeholder='Something here' />
              </Form.Group>
              <Form.Field control={Checkbox} label='Do any non-Company managed devices require access to the system or the Companys network?' />
              <Form.Field control={Button}>SAVE</Form.Field>
            </Form>
        </Grid.Column>
        <Grid.Column>
          <h4>Inherent Risk score</h4>
          <Label circular color='black' size='massive'>
            9
          </Label>
          <p style={{paddingTop:'15px'}}>Key Risks</p>
            <ol>
              <li>External Breach</li>
              <li>Site Something</li>
              <li>Data loss</li>
            </ol>
        </Grid.Column>
    </Grid>

  <Divider vertical></Divider>
  </Segment>

    )
  }
}

export default TabOneFormTwoTabTwo
