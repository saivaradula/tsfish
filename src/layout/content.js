import React, { Suspense } from 'react'
import Loading from '../components/loading'

import { Route, Routes, BrowserRouter, HashRouter } from 'react-router-dom'
import routes from './routes'

import LandingPage from '../views/landing'

const ContentPage = () => {
    return (
        <Suspense fallback={<Loading />}>
            <HashRouter>
                <Routes>
                    {
                        routes.map((route, idx) => (
                            route.component && (
                                <Route
                                    element={<><route.component /></>}
                                    path={route.path}
                                />
                            ))
                        )
                    }
                </Routes>
            </HashRouter>
        </Suspense>
    )
}

export default ContentPage;