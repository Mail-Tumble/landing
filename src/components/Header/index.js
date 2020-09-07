import React, { useState } from 'react';

import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Collapse, Button, List, ListItem, Container } from '@material-ui/core';
import { NavLink, Link } from 'react-router-dom';

import projectLogo from '../../assets/images/logo.png';

export default function LivePreviewExample() {
  const [collapse, setCollapse] = useState(false);
  const toggle = () => setCollapse(!collapse);

  return (
    <Container className="pt-3">
      <div className="header-nav-wrapper header-nav-wrapper-lg rounded navbar-light">
        <div className="app-nav-logo">
          <Link
            to="/"
            title="Mailtumble: Secure your data"
            className="app-nav-logo">
            <div
              className="app-nav-logo--icon"
              style={{
                width: 'auto',
                height: '32px',
                boxShadow: 'none',
                border: 'none'
              }}>
              <img
                style={{ animation: 'none', height: '100%', width: 'auto' }}
                alt="Mailtumble: Secure your data"
                src={projectLogo}
              />
            </div>
          </Link>
        </div>
        <div className="header-nav-actions flex-grow-0 flex-lg-grow-1">
          <span className="d-none d-lg-block">
            <Button
              href="https://calendly.com/tumble/explore"
              className="btn btn-warning d-block d-sm-inline-block">
              <span className="btn-wrapper--label">Explore MailTumble</span>
            </Button>
          </span>
          <span className="d-block d-lg-none">
            <button
              onClick={toggle}
              className={clsx('navbar-toggler hamburger hamburger--elastic', {
                'is-active': collapse
              })}>
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </button>
          </span>
        </div>
        <div className="d-flex d-lg-none" style={{ zIndex: 100 }}>
          <Collapse
            in={collapse}
            className="nav-collapsed-wrapper navbar-collapse">
            <div className="nav-inner-wrapper">
              <List
                component="div"
                className="nav-pills nav-neutral-primary nav-lg flex-column p-3">
                <ListItem
                  component={NavLink}
                  to="/privacy"
                  className="px-4 d-flex align-items-center">
                  <span>Privacy</span>
                  <FontAwesomeIcon
                    icon={['fas', 'angle-right']}
                    className="opacity-6 ml-auto"
                  />
                </ListItem>
              </List>
              <List
                component="div"
                className="nav-pills nav-neutral-primary nav-lg flex-column p-3">
                <ListItem
                  component="a"
                  href="https://mailtumble.apideck.com/all"
                  className="px-4 d-flex align-items-center">
                  <span>Integrations</span>
                  <FontAwesomeIcon
                    icon={['fas', 'angle-right']}
                    className="opacity-6 ml-auto"
                  />
                </ListItem>
              </List>
            </div>
          </Collapse>
        </div>
        <div
          className={clsx('collapse-page-trigger', { 'is-active': collapse })}
          onClick={toggle}
        />
      </div>
    </Container>
  );
}
