import React from 'react';

type Props = {
  error: boolean;
};
export default ({ error = false }: Props) => {
  if (error) {
    console.error(error);
    return <div>Sorry, there was a problem loading the page.</div>;
  }
  return <h1>LOADING BRUHHHHHH....</h1>;
};