import React from "react";
import Current from "./Current";
import Search from "./Search";
import './main.css'


function MainPage() {
  return (
    <div className="container-fluid background">
      <div className="row">
        <div className="col-md-7">
          <Current />
        </div>
        <div className="col-md-5">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
