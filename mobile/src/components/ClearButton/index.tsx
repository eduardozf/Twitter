import React from 'react';

import { CButton } from './styles';

const ClearButton: React.FC = ({ children, ...rest }) => {
  return <CButton {...rest}>{children}</CButton>;
};

export default ClearButton;
