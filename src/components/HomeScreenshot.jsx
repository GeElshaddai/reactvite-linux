const HomeScreenshot = () => {
  return (
    <div className="px-4 pt-5 mt-2 text-center">
      <h1 className="display-4 fw-bold text-body-emphasis">
        Centered Screenshot
      </h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Quickly design and customize responsive mobile-first sites with
          Bootstrap, the world’s most popular front-end open source toolkit,
          featuring Sass variables and mixins, responsive grid system, extensive
          prebuilt components, and powerful JavaScript plugins.
        </p>
      </div>
      <div className="overflow-hidden" style={{ height: "30vh" }}>
        <div className="container px-5 pt-4 pt-md-0">
          <img
            src="../src/assets/img/bootstrap-docs.png"
            className="img-fluid rounded-3 shadow-lg"
            alt="Example Img"
            width={"700"}
            height={"500"}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeScreenshot;
