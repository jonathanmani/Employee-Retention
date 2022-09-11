import React from "react";

const TripleCard = () => {
  return (
    <div>
      <div class="container px-4 py-5" id="custom-cards">
        <h2 class="pb-2 border-bottom">Manage Your Career</h2>

        <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <div class="col">
            <div
              class="card card-cover h-100 overflow-hidden text-bg-dark bg-warning bg-gradient rounded-4 shadow-lg"
            //   style="background-image: url('unsplash-photo-1.jpg');"
            >
              <div class="d-flex flex-column h-100 p-5 pb-3 text-white ">
                <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold ">
                  Post a Job
                </h2>
                <ul class="d-flex list-unstyled mt-auto">
                  <li class="me-auto">
                    {/* <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white"> */}
                  </li>
                  <li class="d-flex align-items-center me-3">
                    <svg class="bi me-2" width="1em" height="1em"></svg>
                    <small><i>Submit a coverage request</i></small>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col">
            <div
              class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg  bg-success bg-gradient"
            //   style="background-image: url('unsplash-photo-2.jpg');"
            >
              <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Manage Your Timeline
                </h2>
                <ul class="d-flex list-unstyled mt-auto">
                  <li class="me-auto">
                    {/* <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white"> */}
                  </li>
                  <li class="d-flex align-items-center me-3">
                    <svg class="bi me-2" width="1em" height="1em"></svg>
                    <small><i>Organize your leave</i></small>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col">
            <div
              class="card bg-primary bg-gradient
               card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            >
              <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Updates
                </h2>
                <ul class="d-flex list-unstyled justify-content-end mt-auto">
                  <li class="d-flex align-items-center  me-3">
                    <small> <i>View updates on your job</i></small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripleCard;
