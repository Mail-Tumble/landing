import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Container,
  List,
  ListItem,
} from '@material-ui/core';

export default function LivePreviewExample() {
  return (
    <>
      <div className="bg-white pb-5 pt-0 pt-md-5 rounded">
        <Container className="pt-0 pt-xl-5">
          <div>
            <List
              component="div"
              className="nav-transparent-alt text-nowrap d-flex justify-content-center">
              <ListItem
                button
                className="text-facebook hover-scale-sm"
                href="#/"
                onClick={(e) => e.preventDefault()}>
                <FontAwesomeIcon
                  icon={['fab', 'linkedin-in']}
                  className="font-size-lg"
                />
              </ListItem>
              <ListItem
                button
                className="text-twitter hover-scale-sm"
                href="https://www.twitter.com/mailtumble"
                onClick={(e) => e.preventDefault()}>
                <FontAwesomeIcon
                  icon={['fab', 'twitter']}
                  className="font-size-lg"
                />
              </ListItem>
            </List>
            <div className="divider d-sm-none d-md-block rounded-circle bg-dark opacity-2 mx-auto my-4 w-25" />
            <div className="text-center d-block text-black-50">
              Copyright &copy; 2020 - Mailtumble.com
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
