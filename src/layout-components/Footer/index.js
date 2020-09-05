import React from 'react';

import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { List, ListItem } from '@material-ui/core';

import { connect } from 'react-redux';

const Footer = (props) => {
  const { footerShadow, footerBgTransparent } = props;

  return (
    <>
      <div
        className={clsx('app-footer text-black-50', {
          'app-footer--shadow': footerShadow,
          'app-footer--opacity-bg': footerBgTransparent
        })}>
        <div className="app-footer--first">
          <List component="div" className="d-flex align-items-center">
            <ListItem
              button
              component={Link}
              to="/Homepage"
              className="rounded-sm">
              Home
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/Overview"
              className="rounded-sm">
              Overview
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/Wallets"
              className="rounded-sm">
              Wallets
            </ListItem>
          </List>
        </div>
        <div className="app-footer--second">
          <span>Bamburgh React Crypto Application with Material-UI PRO</span> ©
          2020 - crafted with <span className="text-danger px-1">❤</span> by{' '}
          <a
            href="https://uifort.com"
            target="_blank"
            rel="noopener noreferrer"
            title="UiFort.com">
            UiFort.com
          </a>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  footerFixed: state.ThemeOptions.footerFixed,
  footerShadow: state.ThemeOptions.footerShadow,
  footerBgTransparent: state.ThemeOptions.footerBgTransparent
});

export default connect(mapStateToProps)(Footer);
