import React from 'react';

import logo1 from '../../assets/images/stock-logos/mt/land-rover.png';
import logo2 from '../../assets/images/stock-logos/mt/coles.png';
import logo3 from '../../assets/images/stock-logos/mt/luna-park.png';
import logo4 from '../../assets/images/stock-logos/mt/subway.png';
import logo5 from '../../assets/images/stock-logos/mt/7-eleven.png';
import logo6 from '../../assets/images/stock-logos/mt/f45-training.png';

export default function LivePreviewExample() {
  return (
    <>
      <div className="rounded bg-neutral-primary">
        <div className="py-5">
          <div className="d-flex align-items-center justify-content-center flex-wrap">
            <div className="p-3 m-3 d-flex align-self-stretch">
              <div className="hover-scale-rounded object-skew shadow-sm bg-white opacity-9 rounded-sm p-4">
                <img
                  src={logo1}
                  style={{ height: 40 }}
                  className="m-auto img-fluid text-white"
                  alt="Land-Rover"
                />
              </div>
            </div>
            <div className="p-3 m-3 d-flex align-self-stretch">
              <div className="hover-scale-rounded object-skew shadow-sm bg-white opacity-9 rounded-sm p-4">
                <img
                  src={logo2}
                  style={{ height: 40 }}
                  className="m-auto img-fluid text-white"
                  alt="Coles"
                />
              </div>
            </div>
            <div className="p-3 m-3 d-flex align-self-stretch">
              <div className="hover-scale-rounded object-skew shadow-sm bg-white opacity-9 rounded-sm p-4">
                <img
                  src={logo3}
                  style={{ height: 40 }}
                  className="m-auto img-fluid text-white"
                  alt="..."
                />
              </div>
            </div>
            <div className="p-3 m-3 d-flex align-self-stretch">
              <div className="hover-scale-rounded object-skew shadow-sm bg-white opacity-9 rounded-sm p-4">
                <img
                  src={logo4}
                  style={{ height: 40 }}
                  className="m-auto img-fluid text-white"
                  alt="..."
                />
              </div>
            </div>
            <div className="p-3 m-3 d-flex align-self-stretch">
              <div className="hover-scale-rounded object-skew shadow-sm bg-white opacity-9 rounded-sm p-4">
                <img
                  src={logo5}
                  style={{ height: 40 }}
                  className="m-auto img-fluid text-white"
                  alt="..."
                />
              </div>
            </div>
            <div className="p-3 m-3 d-flex align-self-stretch">
              <div className="hover-scale-rounded object-skew shadow-sm bg-white opacity-9 rounded-sm p-4">
                <img
                  src={logo6}
                  style={{ height: 40 }}
                  className="m-auto img-fluid text-white"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
