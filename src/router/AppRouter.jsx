import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { startChecking } from '../store/actions/auth';
import { LoginScreen } from '../components/auth/LoginScreen';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {

  const dispatch = useDispatch();
  const {checking, uid} = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);

  if(checking){
    return <div>Cargando...</div>
  }

  return (
    <Router>
        <Routes>
            <Route 
              path='/login' 
              element={
                <PublicRoute isAuth={!!uid}>
                  <LoginScreen />
                </PublicRoute>
              }
            />
            <Route 
              path='/*'
              element={
                <PrivateRoute isAuth={!!uid}>
                  <DashboardRoutes />
                </PrivateRoute>
              }
            />
        </Routes>
    </Router>
  )
}
