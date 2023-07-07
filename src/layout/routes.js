import React from 'react'

const LandingPage = React.lazy(() => import('../views/landing'))
const OnlinePage = React.lazy(() => import('../views/online'))

const routes = [
    { path: '/', exact: true, name: 'Home' },
    { path: 'home', name: 'Home', component: LandingPage },
    { path: 'online', name: 'Online', component: OnlinePage },

];

export default routes;