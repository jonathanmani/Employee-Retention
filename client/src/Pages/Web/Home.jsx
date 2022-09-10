import React from "react";
import Nav from "../../Layouts/Nav";
import Page from "../../Layouts/Page";
const Home = () => {
  return (
    <div>
      <Nav>
        <Page>
          <main>
            <div class="container py-4">
              <div class="p-5 mb-4 bg-light rounded-3">
                <div class="container-fluid py-5">
                  <h1 class="display-5 fw-bold">
                    Helping Mothers to be Get support while on maternity leave
                  </h1>
                  <p class="col-md-8 fs-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Tempora, consectetur dicta dignissimos nobis sint autem odit
                    eaque, aspernatur ad nostrum et culpa unde quia ducimus
                    reiciendis dolores voluptate soluta alias?
                  </p>
                  <button class="btn btn-info text-white btn-lg" type="button">
                    Get Started
                  </button>
                </div>
              </div>

              <div class="row align-items-md-stretch">
                <div class="col-md-6">
                  <div class="h-100 p-5 text-bg-dark rounded-3">
                    <h2>Increase Retention</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptates sequi, at quos architecto debitis.
                    </p>
                    
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="h-100 p-5 bg-light border rounded-3">
                    <h2>Return to Workforce</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quam ipsa reprehenderit, magni quis culpa molestiae est sunt iusto voluptatem?
                    </p>
                  </div>
                </div>
              </div>

              <footer class="pt-3 mt-4 text-muted border-top">
                &copy; 2022
              </footer>
            </div>
          </main>
        </Page>
      </Nav>
    </div>
  );
};

export default Home;
