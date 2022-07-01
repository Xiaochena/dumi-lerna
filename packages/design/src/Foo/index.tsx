import React from 'react';
import { Button, ButtonProps } from 'antd';
import ChangeProvider from '../util/ChangeProvider';

const Foo: React.FC<ButtonProps> = (props) => {
  return (
    <ChangeProvider>
      <Button {...props} />
    </ChangeProvider>
  );
};

export default Foo;
