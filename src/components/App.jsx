import React, { useEffect, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useAuth } from './hooks';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { refreshUser } from 'redux/auth/authOperations';

import Layout from './Layout/Layout';
import Loader from './Loader/Loader';

import style from './App.module.css';

const HomePage = lazy(() => import('../Page/HomePage/HomePage'));
const Register = lazy(() => import('../Page/RegistrationPage/Registration'));
const LoginPage = lazy(() => import('../Page/Login/Login'));
const ContactPage = lazy(() => import('../Page/ContactPage/ContactPage'));

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <div className={style.div}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="registration"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactPage />} />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />{' '}
        </Route>
      </Routes>
    </div>
  );
}
export default App;
