// router/index.js
import { lazy, Suspense } from "react";
import Index from '../pages/index'
// import About from '../pages/test'

const Test = lazy(() => import("../pages/test"))
const Login = lazy(() => import("../pages/login"))

const routes = [
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/test",
    caseSensitive: true,
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Test />
      </Suspense>
    ),
  },
  {
    path: "/login",
    caseSensitive: true,
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Login />
      </Suspense>
    ),
  },
]

export default routes