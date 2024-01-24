import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { useAuth } from '../../hooks/auth'
import styled from 'styled-components';

const clientId = "949022787391-reo50io8kup6ec5gmcu2ss93phdb1v79.apps.googleusercontent.com";


const Content = styled.div`
  margin-top:20px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

const CustomGoogleLoginButton = styled.button`
  width: 100%;
  padding: 10px;
  height: 48px;
  background-color: #4285f4;
  color: #fff;
  border: none;
  border-radius:10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  transition: all 0.3s;

  &:hover {
  transform: scale(1.03);
box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.05);
}

  span {
    font-weight: bold;
  }
`;
export const Login = () => {
  const [loading, setLoading] = useState(false);
  const [componentMounted, setComponentMounted] = useState(false);
  const navigate = useNavigate();
  const { signInSocial } = useAuth();

  useEffect(() => {
    setComponentMounted(true);
    return () => setComponentMounted(false);
  }, []);

  const onSuccess = async (res) => {
    try {
      if (!componentMounted) {
        return;
      }

      setLoading(true);

      const { email, name, googleId } = res.profileObj;
      await signInSocial({
        email,
        name,
        provider_id: googleId,
      });

      console.log("LOGIN SUCCESS!");
      navigate('/home');
    } catch (error) {
      console.error("LOGIN FAILED!", error);
    } finally {
      setLoading(false);
    }
  };
  const onFailure = (res) => {
    console.error("LOGIN FAILED!", res);
  };
  return (
    <Content>
      <GoogleLogin
        clientId={clientId}
        buttonText='Login with Google'
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
        render={(renderProps) => (
          <CustomGoogleLoginButton onClick={renderProps.onClick}>
            <span>Login with Google</span>
          </CustomGoogleLoginButton>
        )}
      />
    </Content>
  );
};
