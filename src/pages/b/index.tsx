import React from 'react';
import { Link } from 'umi';

interface Props {}
const Component: React.FC<Props> = ({}) => {
  return (
    <div>
      <p>View B</p>
      <Link to="/">To view home</Link>
      <br />
      <Link to="/a">To view a</Link>
    </div>
  );
};
export default Component;
