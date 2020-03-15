import React, { Fragment } from 'react';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';

const Layout = (props) => {
  return (
    <Fragment>

      <Header />

      <main className="container">{props.children}</main>

      <Footer />

    </Fragment>
  );
};

export default Layout;
