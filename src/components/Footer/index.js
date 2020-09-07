import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Container,
  List,
  ListItem,
  Button
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';

export default function LivePreviewExample() {
  return (
    <>
      <div className="bg-white pb-5 pt-0 pt-md-5 rounded">
        <Container className="pt-0 pt-xl-5">
          <div>
            <List
              component="div"
              className="nav-transparent-alt text-nowrap d-flex justify-content-center">
              <ListItem>
                <Button
                  variant="text"
                  className="text-facebook hover-scale-sm"
                  href="https://www.twitter.com/mailtumble">
                  <FontAwesomeIcon
                    icon={['fab', 'linkedin-in']}
                    className="font-size-lg"
                  />
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  variant="text"
                  className="text-twitter hover-scale-sm"
                  href="https://www.twitter.com/mailtumble">
                  <FontAwesomeIcon
                    icon={['fab', 'twitter']}
                    className="font-size-lg"
                  />
                </Button>
              </ListItem>
            </List>
            <div className="divider d-sm-none d-md-block rounded-circle bg-dark opacity-2 mx-auto my-4 w-25" />
            <div className="py-3 d-block d-lg-flex align-items-center justify-content-between">
              <div className="text-center d-block mb-3 mb-md-0">
                Copyright &copy; 2020 - Mailtumble
              </div>
              <List
                component="div"
                className="nav-transparent-alt text-nowrap d-flex justify-content-center">
                <ListItem
                  button
                  component={NavLink}
                  to="/privacy">
                  Privacy Policy
                </ListItem>
              </List>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
