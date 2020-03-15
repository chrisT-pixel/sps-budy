import React, { useState } from 'react';

import Layout from '../Layout/Layout';
import LogIn from '../LogIn/LogIn';
import EnrolmentView from '../EnrolmentView/EnrolmentView';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronRight, faChevronLeft, faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(faChevronRight, faChevronLeft, faEnvelope)





const App = (props) => {



  return (
    <Layout>

    <LogIn />

  
    </Layout>
  );
}

export default App;
