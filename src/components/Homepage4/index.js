import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Card, CardContent } from '@material-ui/core';

import Slider from 'react-slick';

import people2 from '../../assets/images/stock-photos/people-2.jpg';
import people3 from '../../assets/images/stock-photos/people-3.jpg';
import people1 from '../../assets/images/stock-photos/people-1.jpg';

function SliderArrowNext(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FontAwesomeIcon icon={['fas', 'chevron-right']} />
    </div>
  );
}

function SliderArrowPrev(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FontAwesomeIcon icon={['fas', 'chevron-left']} />
    </div>
  );
}

export default function LivePreviewExample() {
  const marketingTestimonials1 = {
    dots: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SliderArrowNext />,
    prevArrow: <SliderArrowPrev />,
    responsive: [
      {
        breakpoint: 1100,
        settings: { slidesToShow: 1, slidesToScroll: 1 }
      }
    ]
  };

  return (
    <>
      <div className="py-5 bg-secondary">
        <Container className="px-3 py-5">
          <div className="text-center">
            <h1 className="display-3 text-black mb-2 font-weight-bold">
              Our customer stories
            </h1>
            <p className="font-size-xl mb-0 mb-lg-5 text-black-50">
              Read how customers around the world use our services to build
              their projects
            </p>
          </div>
          <Slider
            {...marketingTestimonials1}
            className="slider-arrows-outside slider-arrows-dark slider-dots-outside">
            <div>
              <Card className="m-4">
                <CardContent>
                  <div className="align-box-row align-items-start">
                    <div>
                      <Card className="card-transparent">
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="card-img-wrapper rounded">
                          <img
                            src={people1}
                            className="card-img-top rounded-circle"
                            style={{ width: 80 }}
                            alt="..."
                          />
                        </a>
                      </Card>
                    </div>
                    <div className="pl-4">
                      <FontAwesomeIcon
                        icon={['fas', 'quote-right']}
                        className="text-primary font-size-xxl"
                      />
                      <blockquote className="my-3 text-black-50">
                        Our general manager quit and started a competing
                        business. Before he walked out the door he downloaded
                        our entire database. Thanks to you, emails were useless.
                      </blockquote>
                      <div className="font-size-lg font-weight-bold">
                        Daragh
                        <small className="text-black-50 pl-2">
                          Group Communications Manager
                        </small>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className="m-4">
                <CardContent>
                  <div className="align-box-row align-items-start">
                    <div>
                      <Card className="card-transparent">
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="card-img-wrapper rounded">
                          <img
                            src={people2}
                            className="card-img-top rounded-circle"
                            style={{ width: 80 }}
                            alt="..."
                          />
                        </a>
                      </Card>
                    </div>
                    <div className="pl-4">
                      <FontAwesomeIcon
                        icon={['fas', 'quote-right']}
                        className="text-primary font-size-xxl"
                      />
                      <blockquote className="my-3 text-black-50">
                        We handle over three million unique data records and
                        have spun these up into over 10 million tumbled
                        addresses for secure and terminable sharing with our
                        licensees.
                      </blockquote>
                      <div className="font-size-lg font-weight-bold">
                        Michael
                        <small className="text-black-50 pl-2">
                          CISO at PoweredLocal
                        </small>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className="m-4">
                <CardContent>
                  <div className="align-box-row align-items-start">
                    <div>
                      <Card className="card-transparent">
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="card-img-wrapper rounded">
                          <img
                            src={people3}
                            className="card-img-top rounded-circle"
                            style={{ width: 80 }}
                            alt="..."
                          />
                        </a>
                      </Card>
                    </div>
                    <div className="pl-4">
                      <FontAwesomeIcon
                        icon={['fas', 'quote-right']}
                        className="text-primary font-size-xxl"
                      />
                      <blockquote className="my-3 text-black-50">
                        We have a team of sales development reps but have a CRM
                        full of leads and contacts, I've been able to lower
                        human outreach errors by programming in the opt-in
                        status of our contacts.
                      </blockquote>
                      <div className="font-size-lg font-weight-bold">
                        Gary
                        <small className="text-black-50 pl-2">
                          CRM Manager at LeadChat
                        </small>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </Slider>
        </Container>

        <div className="pb-5" />
      </div>
    </>
  );
}
