import React from 'react'
import { Table, Label, Segment, Loader, Dimmer, Image } from 'semantic-ui-react'

const TableExampleVeryPadded = () => {
  return (
  <div className='ui container'>

  <Table padded='very'>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Priority</Table.HeaderCell>
        <Table.HeaderCell>Activity<i className='dropdown icon'></i></Table.HeaderCell>
        <Table.HeaderCell>Project<i className='dropdown icon'></i></Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell><Label circular color='black'>1</Label></Table.Cell>
        <Table.Cell>Confirm Information Assets</Table.Cell>
        <Table.Cell>
          Project name here which would be quite long
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell><Label circular color='grey'>2</Label></Table.Cell>
        <Table.Cell>Execute penetration test</Table.Cell>
        <Table.Cell>Project name here which would be quite long</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell><Label circular color='grey'>3</Label></Table.Cell>
        <Table.Cell>Risk Treatment</Table.Cell>
        <Table.Cell>Project name here which would be quite long</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
  <div>
    <Segment>
      <Dimmer active inverted>
        <Loader indeterminate>Graphics Not Ready Yet!</Loader>
      </Dimmer>
      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>
  </div>
  </div>
);
};

export default TableExampleVeryPadded
