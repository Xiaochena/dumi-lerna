import { ConfigProvider } from 'antd';
import React, { PropsWithChildren } from 'react';
import '../styles/remai.less';

const ChangeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  ConfigProvider.config({ prefixCls: 'remai' });
  return <ConfigProvider prefixCls="remai">{children}</ConfigProvider>;
};

export default ChangeProvider;
