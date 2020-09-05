import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Container, Card, Button, Tooltip } from '@material-ui/core';

import particles2 from '../../../assets/images/hero-bg/particles-2.svg';
import illustration1 from '../../../assets/images/illustrations/pack1/time.svg';

import MarketingHeaders6 from './CryptoHeader';

export default function LivePreviewExample() {
  return (
    <>
      <div className="hero-wrapper bg-composed-wrapper bg-white">
        <Container className="pt-3">
          <MarketingHeaders6 />
        </Container>
        <div className="hero-wrapper--content">
          <div
            className="bg-composed-wrapper--image bg-composed-filter-rm opacity-7"
            style={{ backgroundImage: 'url(' + particles2 + ')' }}
          />
          <div className="bg-composed-wrapper--content">
            <div className="py-3 py-xl-5">
              <Container className="text-black py-5">
                <Grid container spacing={6}>
                  <Grid item xl={6} className="d-flex align-items-center">
                    <div>
                      <div className="d-flex align-items-center">
                        <div className="badge badge-pill badge-success px-4 h-auto py-1">
                          New version
                        </div>
                        <Tooltip
                          placement="right"
                          title="More info placeholder!"
                          arrow>
                          <span className="text-black-50 ml-3">
                            <FontAwesomeIcon
                              icon={['far', 'question-circle']}
                            />
                          </span>
                        </Tooltip>
                      </div>
                      <div className="text-black mt-3">
                        <h1 className="display-2 mb-3 font-weight-bold">
                          Bamburgh React Admin Dashboard with Material-UI PRO
                        </h1>
                        <p className="font-size-lg text-black-50">
                          Bamburgh is a <b>Free Bootstrap 4 UI Kit</b> that
                          enhances the standard Bootstrap styles and components.
                        </p>
                        <p className="text-black-50">
                          In addition, it contains extra customized widgets,
                          pages and multiple landing pages.
                        </p>
                        <div className="divider border-2 border-dark my-4 border-light opacity-2 rounded-circle w-25" />
                        <div>
                          <Button
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            size="large"
                            className="btn-first d-block d-sm-inline-block">
                            <span className="btn-wrapper--label">
                              Browse gallery
                            </span>
                            <span className="btn-wrapper--icon">
                              <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                            </span>
                          </Button>
                          <Button
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            size="large"
                            variant="text"
                            className="btn-outline-first d-block d-sm-inline-block ml-0 mt-3 mt-sm-0 ml-sm-3">
                            <span>Plans & pricing</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Grid>
                  <Grid
                    item
                    xl={6}
                    className="px-0 d-none d-xl-flex align-items-center">
                    <img
                      src={illustration1}
                      className="w-100 mx-auto d-block img-fluid"
                      alt="..."
                    />
                  </Grid>
                </Grid>
              </Container>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
