import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Nav() {
  let userName = localStorage.getItem("user");
  const [data, setData] = useState([]);
  const[filterData , setFilterData] = useState([]);

  const getData = () => {
    let url = "https://jsonplaceholder.typicode.com/posts";

    axios.get(url).then((res) =>{ setData(res.data)
    setFilterData(res.data)}
    );
  };

  useEffect(() => {
    getData();
  }, []);

  const serchFun = (e) =>{
    //console.log(e)
    if(e){
     data.filter(obj => {
      if(obj.id 
        === parseInt(e)){
        setFilterData ([obj])
console.log(obj)
      } })  
    }else{
      setFilterData(data)
    }
    
  }
console.log(filterData);
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ width: "100%" }}
      >
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
            <li className="nav-item">
              <a className="navbar-brand" href="#" style={{marginLeft:"6rem"}}>
              {userName}
              </a>
            </li>
            <li className="nav-item"></li>
            <li className="nav-item">{/* {userName} */}</li>
          </ul>
          <form className="d-flex w-50 mt-4">
            <input
              className="form-control mr-sm-2 d-flex"
              type="search"
              placeholder="Search by id"
              aria-label="Search"
              onChange={(e)=>serchFun(e.target.value)}
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div style={{display:"flex",justifyContent:"center",marginTop:"3rem"}}>
         <h2 >Table</h2> 
        </div>
        
        <div style={{margin:'5rem'}}>
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">id</th>
                <th scope="col">user Id</th>
                <th scope="col">title</th>
                <th scope="col"> body</th>
              </tr>
            </thead>
            <tbody>
            {filterData.map((item, key) => {
            return (
              <tr key={key}>
                <td>{item.id}</td>
                <td>{item.userId}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
              </tr>
            );
          })}
            </tbody>
          </table>
        </div>
        {/* <table style={{border:'1px solid black', width:800, backgroundColor:'skyBlue',cellSpacing:0}}>
        <tbody>
          <tr>
            <th style={{width:5}}> user Id:</th>
            <th style={{width:5}}> id </th>
            <th style={{width:5}}> title:</th>
            <th style={{width:5}}> body :</th>
          </tr>

          {data.slice(0,10).map((item, key) => {
            return (
              <tr key={key}>
                <td>{item.userId}</td>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
              </tr>
            );
          })}
        </tbody>
      </table> */}
      </div>
    </>
  );
}
