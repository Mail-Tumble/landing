import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Container, Button } from '@material-ui/core';

import particles2 from '../../assets/images/hero-bg/particles-2.svg';
import illustration1 from '../../assets/images/illustrations/mt/1.png';

import MarketingHeaders6 from './Header';

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
                      <div className="text-black">
                        <h1 className="display-2 mb-3 font-weight-bold">
                          Stop the possibility of a data breach or leak
                        </h1>
                        <p className="font-size-lg text-black-50">
                          Use our email relay to hot-swap email addresses in
                          your databases and CRMs so that if there is an
                          accidental breach, a malicious hack or the simple
                          mistake of a group email using CC rather than BCC.
                        </p>
                        <p className="text-black-50">
                          Your insurance, PR team and CISO will love you.
                        </p>
                        <div className="divider border-2 border-dark my-4 border-light opacity-2 rounded-circle w-25" />
                        <div>
                          <Button
                            href="https://calendly.com/tumble/explore"
                            size="large"
                            className="btn-first d-block d-sm-inline-block">
                            <span className="btn-wrapper--label">
                              Book in a product exploration
                            </span>
                            <span className="btn-wrapper--icon">
                              <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                            </span>
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
