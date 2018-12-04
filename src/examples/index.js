import { lazy } from 'react';

// import UseState from './use-state';
// import UseEffect from './use-effect';
// import UseContext from './use-context';
// import UseReducer from './use-reducer';
// import UseCallback from './use-callback';
// import UseMemo from './use-memo';
// import UseRef from './use-ref';
// import UseImperativeMethods from './use-imperative-methods';
// import UseMutationEffect from './use-mutation-effect';
// import UseLayoutEffect from './use-layout-effect';

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
    name: 'useMutationEffect',
    path: '/use-mutation-effect',
    component: lazy(() => import('./use-mutation-effect'))
  },
  {
    name: 'useLayoutEffect',
    path: '/use-layout-effect',
    component: lazy(() => import('./use-layout-effect'))
  }
];
