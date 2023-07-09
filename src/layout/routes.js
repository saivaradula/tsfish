import React from 'react'

const LandingPage = React.lazy(() => import('../views/landing'))
// const OnlinePage = React.lazy(() => import('../views/online'))
const Dashboard = React.lazy(() => import('../views/dashboard'))
const UCPage = React.lazy(() => import('../views/under_construction'))

const routes = [
    { path: '/', exact: true, name: 'Home' },
    { path: 'home', name: 'Home', component: LandingPage },
    { path: 'dashboard', name: 'Dashboard', component: Dashboard },
    { path: 'online', name: 'Online', component: UCPage },
    { path: 'registration/lhcs', name: 'registration LHCS', component: UCPage },
    { path: 'registration/fmcs', name: 'registration fmcs', component: UCPage },
    { path: 'registration/fwcs', name: 'registration fwcs', component: UCPage },
    { path: 'registration/pfcs', name: 'registration pfcs', component: UCPage },
    { path: 'member/lhcs', name: 'Member LHCS', component: UCPage },
    { path: 'member/fmcs', name: 'Member fmcs', component: UCPage },
    { path: 'member/fwcs', name: 'Member fwcs', component: UCPage },
    { path: 'member/pfcs', name: 'Member pfcs', component: UCPage },
    { path: 'contact', name: 'Member pfcs', component: UCPage },
];

export default routes;