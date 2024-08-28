import React from "react";
import { NavLink } from "react-router-dom";

const about = () => {
  return (
    <div>
      <div className="conatiner py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4"> About Us</h1>
            <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui aut culpa exercitationem quibusdam eligendi rem soluta commodi ullam nisi unde amet eum nihil libero nemo odit, magnam sequi praesentium? Tempora nostrum amet culpa illum saepe, dolorem autem id quod! Non illum natus at, deserunt quis vitae odio? Veniam itaque ad repellendus ipsam molestiae incidunt magni id, ipsum dicta praesentium sequi natus laboriosam nisi maiores dignissimos. Neque, qui suscipit eveniet totam ab tempore a voluptatum iste ex at reiciendis et exercitationem commodi sequi fugiat aliquam animi? Eligendi tempora aspernatur odit deserunt. Commodi voluptatibus ipsa, vero qui accusamus in ducimus officia ipsam.</p>

            <NavLink to ="/contact" className="btn btn-outline-primary px-3"> Contact Us</NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img src="/public/assets/images/about.png" alt="About Us" height='400px' width='400px'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
