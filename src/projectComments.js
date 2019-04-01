import React from 'react'
import { Comment, Icon } from 'semantic-ui-react'

const ProjectComments = () => {
  return (
  <Comment.Group>
    <Comment>
      <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
      <Comment.Content>
        <Comment.Author>Persons Name</Comment.Author>
        <Comment.Metadata>
          <div>10/10/2019</div>
        </Comment.Metadata>
        <Comment.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
do eiusmod tempor incididunt ut labore et dolore magna
aliqua. Ut enim ad minim veniam, quis nostrud.
        </Comment.Text>
      </Comment.Content>
    </Comment>
    <Comment>
      <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
      <Comment.Content>
        <Comment.Author>Persons Name</Comment.Author>
        <Comment.Metadata>
          <div>10/10/2019</div>
        </Comment.Metadata>
        <Comment.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
do eiusmod tempor incididunt ut labore et dolore magna
aliqua. Ut enim ad minim veniam, quis nostrud.
        </Comment.Text>
      </Comment.Content>
    </Comment>
    <Comment>
      <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
      <Comment.Content>
        <Comment.Author>Persons Name</Comment.Author>
        <Comment.Metadata>
          <div>10/10/2019</div>
        </Comment.Metadata>
        <Comment.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
do eiusmod tempor incididunt ut labore et dolore magna
aliqua. Ut enim ad minim veniam, quis nostrud.
        </Comment.Text>
      </Comment.Content>
    </Comment>
  </Comment.Group>
);
};
export default ProjectComments
