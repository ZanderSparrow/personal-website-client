import React from 'react';

import CV from './CV';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';
import ProjectList from './ProjectList';

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <ProjectList />
      <CV />
      <Footer />
    </div>
  );
};

export default App;