import React from 'react';

const Header = React.lazy(() => import('header/Header'));
const Ask = React.lazy(() => import('ask/Ask'));

const App = () => (
  <div>
    <Header />
    <div>content</div>
    <Ask />
  </div>
);

export default App;
