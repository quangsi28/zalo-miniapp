import React from 'react';
import { Link } from 'umi';

interface Props {}
const Component: React.FC<Props> = ({}) => {
  return (
    <div>
      <p>View A</p>
      <Link to="/">To view home</Link>
      <br />
      <Link to="/b">To view b</Link>
    </div>
  );
};
export default Component;
