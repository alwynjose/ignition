import React, { Component } from 'react'
import { Image, Icon, Input, Menu } from 'semantic-ui-react'

export default class MenuExampleSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Item>
          <img src='https://react.semantic-ui.com/logo.png' />
        </Menu.Item>
        <Menu.Item icon='add circle'  name='new project' active={activeItem === 'new project'} onClick={this.handleItemClick} />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item>
            <Icon name='question circle' />
          </Menu.Item>
          <Menu.Item>
            <Icon name='setting' />
          </Menu.Item>
          <Menu.Item>
            <Icon name='bell' />
          </Menu.Item>
          <Menu.Item>
          <div>
            <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' avatar />
              <span>Username</span>
          </div>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}
