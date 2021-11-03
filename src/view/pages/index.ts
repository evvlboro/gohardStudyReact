// Core
import { lazy } from 'react';

// Pages
export const Main = lazy(() => import(/* webpackChunkName: "Main" */ './Main'));
export const Register = lazy(() => import(/* webpackChunkName: "Register" */ './Register'));
export const News = lazy(() => import(/* webpackChunkName: "News" */ './News'));
export const Contacts = lazy(() => import(/* webpackChunkName: "Contacts" */ './Contacts'));
export const Secret = lazy(() => import(/* webpackChunkName: "Secret" */ './Secret'));
