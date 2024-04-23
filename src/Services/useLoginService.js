import { useState } from 'react';
import LoginService from './LoginService';

const useLoginService = () => {
  const [loginService] = useState(LoginService);
  return loginService;
};

export default useLoginService;
