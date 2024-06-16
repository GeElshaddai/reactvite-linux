const HomeWelcome = () => {
  return (
    <>
      <div className="home-welcome align-items-center">
        <div className="container px-4">
          <div className="row flex-lg-row-reverse align-items-center justify-content-center g-5 pb-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src="../src/assets/img/bootstrap-themes.png"
                className="d-block mx-lg-auto img-fluid"
                alt="Bootstrap templates"
                width={"700"}
                height={"500"}
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold text-body-emphasis lh-2 mb-3">
                Fast landing page website with ReactJS
              </h1>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore ipsa facere, hic laudantium perspiciatis earum, dicta
                similique quasi quis at cupiditate iure deserunt cum saepe nihil
                impedit modi distinctio numquam?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeWelcome;
