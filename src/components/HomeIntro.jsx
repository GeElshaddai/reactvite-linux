import { Link } from "react-router-dom";
import * as Code from "react-bootstrap-icons";

const HomeIntro = () => {
  return (
    <div className="px-4 px-md-5 py-5 my-2 text-center align-items-center bg-body-tertiary shadow-lg">
      <Code.CodeSlash width={"4em"} height={"3em"} />
      <h1 className="display-5 fw-bold text-body-emphasis">Hero Testing</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead">
          Quickly design and customize responsive mobile-first sites with React,
          React-Bootstrap and Vite, the world's most popular front-end open
          source toolkit, featuring Sass variables and mixins, responsive grid
          system, extensive prebuilt components, and powerful JavaScript
          plugins. Create your own most memorable moment with us.
        </p>
        <Link to="/product" className="btn btn-lg btn-outline-success">
          See Our Products
        </Link>
      </div>
    </div>
  );
};

export default HomeIntro;
