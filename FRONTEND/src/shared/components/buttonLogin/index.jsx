import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { useAuth } from '../../hooks/auth'
import { Content } from './styles';

const clientId = "949022787391-reo50io8kup6ec5gmcu2ss93phdb1v79.apps.googleusercontent.com";

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
    <Content id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText='Login with Google'
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </Content>
  );
};
