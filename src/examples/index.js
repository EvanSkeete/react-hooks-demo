import { lazy } from 'react';

export default [
  {
    name: 'useState',
    path: '/use-state',
    component: lazy(() => import('./use-state'))
  },
  {
    name: 'useEffect',
    path: '/use-effect',
    component: lazy(() => import('./use-effect'))
  },
  {
    name: 'useContext',
    path: '/use-context',
    component: lazy(() => import('./use-context'))
  },
  {
    name: 'useReducer',
    path: '/use-reducer',
    component: lazy(() => import('./use-reducer'))
  },
  {
    name: 'useCallback',
    path: '/use-callback',
    component: lazy(() => import('./use-callback'))
  },
  {
    name: 'useMemo',
    path: '/use-memo',
    component: lazy(() => import('./use-memo'))
  },
  {
    name: 'useRef',
    path: '/use-ref',
    component: lazy(() => import('./use-ref'))
  },
  {
    name: 'useImperativeMethods',
    path: '/use-imperative-methods',
    component: lazy(() => import('./use-imperative-methods'))
  },
  {
    name: 'memo',
    path: '/memo',
    component: lazy(() => import('./memo-example'))
  },
  {
    name: 'Example App',
    path: '/example-app',
    component: lazy(() => import('./example-app'))
  },
  {
    name: 'Suspense example',
    path: '/example-app-suspense',
    component: lazy(() => import('./example-app-suspense'))
  }
];
