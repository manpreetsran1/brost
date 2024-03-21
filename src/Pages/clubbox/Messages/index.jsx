import React from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import AppImages from '../../../Themes/AppImages'

const CommentExampleComment = () => (
    <div className="main">
    <section>
      <div className="navvar">
        <div className="container-fluid">
          <div className="py-2">
            <div className="row">
              <div className="col-2">
                <img
                  src={AppImages.clubboxxlogo1}
                  className="img-fluid logo-clubbox"
                  alt=""
                />
              </div>
              <div className="col-6 d-flex align-items-center">
                <form className=" " role="search" style={{width:'100%'}}>
                  <input
                    className="form-control me-2 border-rounded"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </form>
              </div>
              <div className="col-2 d-flex justify-content-center align-items-center"
              >
                <img src={AppImages.brost} className="img-fluid" alt="" />
              </div>
              <div className="col-2 d-flex justify-content-center align-items-center"
              >
                <img src={AppImages.userIcon} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
          {/* <!-- <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                   
                     
                  <form className="d-flex" role="search">
                      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                       
                    </form>
                    
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><img src="./brost..png" className="img-fluid" alt=""></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><img src="./icon 1.png" className="img-fluid" alt=""></a>
                </li>
                
              </ul> --> */}
        </div>
      </div>
    </section>
    <section>
  <Comment.Group className='commentContainer'>
    <Header as='h3' dividing>
      Comments
    </Header>

    <Comment>
      <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
      <Comment.Content>
        <Comment.Author as='a'>Matt</Comment.Author>
        <Comment.Metadata>
          <div>Today at 5:42PM</div>
        </Comment.Metadata>
        <Comment.Text>How artistic!</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Comment>
      <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
      <Comment.Content>
        <Comment.Author as='a'>Elliot Fu</Comment.Author>
        <Comment.Metadata>
          <div>Yesterday at 12:30AM</div>
        </Comment.Metadata>
        <Comment.Text>
          <p>This has been very useful for my research. Thanks as well!</p>
        </Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
      <Comment.Group>
        <Comment>
          <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
          <Comment.Content>
            <Comment.Author as='a'>Jenny Hess</Comment.Author>
            <Comment.Metadata>
              <div>Just now</div>
            </Comment.Metadata>
            <Comment.Text>Elliot you are always so right :)</Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    </Comment>

    <Comment>
      <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
      <Comment.Content>
        <Comment.Author as='a'>Joe Henderson</Comment.Author>
        <Comment.Metadata>
          <div>5 days ago</div>
        </Comment.Metadata>
        <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Form reply>
      <Form.TextArea />
      <Button content='Add Reply' labelPosition='left' icon='edit' primary />
    </Form>
  </Comment.Group>
  </section>
  </div>
)

export default CommentExampleComment
