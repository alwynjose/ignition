import React from 'react';
import ReactDom from 'react-dom';
import { Grid } from 'semantic-ui-react';
import MenuExampleSecondary from './menu.js';
import TabExampleVerticalTabular from './leftTab.js';

const App = () => {
    return (
      <div className="ui container">
        <MenuExampleSecondary />
          <div style={{margin: '50px 0px'}}>
            <Grid columns={4}>
              <Grid.Row>
                <Grid.Column>
                </Grid.Column>
                <Grid.Column>
                  <div>
                    <h3>Dashboard</h3>
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <TabExampleVerticalTabular />
          </div>
        </div>
);
};

ReactDom.render(<App />, document.querySelector('#root'));
