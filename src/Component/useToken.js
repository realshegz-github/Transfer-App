import { useState, useEffect } from 'react';

const useToken = () => {
    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken?.token
      };
  
      const[token, setToken] = useState('');

      const saveToken = userToken => {
        localStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken.token)
};

  useEffect(() => {
    const token = getToken()
    // console.log(">>>", token)
    setToken(()=> token)
  }, [token])
        return {
            setToken: saveToken,
            token
        }
}
export default useToken
