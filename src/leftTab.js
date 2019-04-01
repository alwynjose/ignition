import React from 'react'
import { Tab } from 'semantic-ui-react'
import TableExampleVeryPadded from './tabOne.js'
import ProjectsDashboard from './projects.js'

const panes = [
  { menuItem: 'Dashboard', render: () => <Tab.Pane><TableExampleVeryPadded /></Tab.Pane> },
  { menuItem: 'Projects', render: () => <Tab.Pane><ProjectsDashboard /></Tab.Pane> },
  { menuItem: 'Another Item', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
]

const TabExampleVerticalTabular = () => (
  <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
)

export default TabExampleVerticalTabular
