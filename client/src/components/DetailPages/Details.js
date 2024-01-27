import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { cdlist1, cdlist2 } from "../data/Data";
import { Link } from "react-router-dom";

const Details = () => {
  //const [a, sa] = useState({});
  let params = useParams();

  //   useEffect(() => {
  //     const a = cdlist1.filter((e) => e.id == 0);
  //     sa(a);
  //   }, []);

  const b = params.id;
  var p = 1;
  if (b <= 3) {
    p = cdlist1.filter((e) => {
      return e.id == b;
    });
  } else {
    p = cdlist2.filter((e) => {
      return e.id == b;
    });
  }

  //console.log(b);
  console.log(p[0].id);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="project-info-box mt-0">
              <h1 style={{ margin: "20px", color: "red" }}>{p[0].name}</h1>
              <p className="mb-0">{/* {d} */}</p>
            </div>

            <div className="project-info-box">
              <h4>Details</h4>

              <p>
                <b>Date of Exam :</b> {p[0].date}
              </p>
              <p>
                <b> Qualification :</b> {p[0].qualification}
              </p>
              <p>
                <b>Age Limit :</b> {p[0].age}
              </p>
              <p>
                <b>Percentage Required :</b> {p[0].percentage}
              </p>

              {/* <Link to={p[0].web}> */}
              <a href={p[0].web}>
                <button className="btn2" style={{ margin: "10px" }}>
                  Go to Official Website
                </button>
              </a>
            </div>
          </div>
          <div className="col-md-7">
            <img
              style={{ margin: "10px" }}
              src={p[0].image}
              alt={p[0].name}
              className="rounded"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
