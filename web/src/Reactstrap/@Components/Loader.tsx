import React from 'react'
// import { Container } from "reactstrap";
// import loader from "Assets/images/loader.gif";

/**
 * Page Loader
 */
export default () => {
  // return (
  //   <Container className="d-flex justify-content-center text-center">
  //     <img className="img-fluid" src={loader} alt="page loader" />
  //   </Container>
  // );
  return (
    <div className="spinner-border text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  )
}