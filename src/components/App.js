import React from 'react';
import Header from './Header';
import Dog from './Dog';

export default function App() {
  return (
    <>
      <Header />
      <Dog name="jimmothy" age={28} sign="virgo" />
    </>
  );
}
