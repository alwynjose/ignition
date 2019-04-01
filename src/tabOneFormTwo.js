import React from 'react'
import { Tab, Form, TextArea, Button, Grid } from 'semantic-ui-react'
import TabOneFormTwoTabOne from './TabOneFormTwoTabOne.js'
import TabOneFormTwoTabTwo from './TabOneFormTwoTabTwo.js'
import TabOneFormTwoTabThree from './TabOneFormTwoTabThree.js'
import TabOneFormTwoTabFour from './TabOneFormTwoTabFour.js'
import ProjectComments from './projectComments.js'

const panes = [
  { menuItem: 'About', render: () => <Tab.Pane><TabOneFormTwoTabOne /></Tab.Pane> },
  { menuItem: 'Triage', render: () => <Tab.Pane><TabOneFormTwoTabTwo /></Tab.Pane> },
  { menuItem: 'Estimates & Benefits', render: () => <Tab.Pane><TabOneFormTwoTabThree /></Tab.Pane> },
  { menuItem: 'contacts', render: () => <Tab.Pane><TabOneFormTwoTabFour /></Tab.Pane> },
]

const TabOneFormTwo = () => {
  return (

      <div className='ui container'>
        <Tab menu={{ fluid: true, vertical: false, tabular: true }} panes={panes} />
        <Grid divided='vertically' padded='vertically'>
          <Grid.Row columns={2}>
              <Grid.Column>
                <Form>
                  <h4 style={{paddingTop:'20px'}}> Comments </h4>
                  <Form.Group>
                    <TextArea placeholder='Join the discussion' />
                  </Form.Group>
                  <Form.Field control={Button}>ADD COMMENT</Form.Field>
                </Form>
              </Grid.Column>
              <Grid.Column>
                <ProjectComments />
              </Grid.Column>
            </Grid.Row>
        </Grid>
      </div>
    );
  };

export default TabOneFormTwo
