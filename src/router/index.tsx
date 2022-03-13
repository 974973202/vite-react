// router/index.js
import { lazy, Suspense } from "react";
import Index from '../pages/index'
// import About from '../pages/test'

const Test = lazy(() => import("../pages/test"))

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
]

export default routes