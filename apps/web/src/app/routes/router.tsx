import { Suspense, lazy } from 'react';
// ---------------------------------------------------------------------------
// IMPORTS
// ---------------------------------------------------------------------------
// Routes, Route, Navigate: Components from 'react-router-dom' to handle routing logic.
// Routes: Wrapper for all your Route definitions.
// Route: Defines a mapping between a URL path and a Component.
// Navigate: Used to redirect the user programmatically.
import { Routes, Route, Navigate } from 'react-router-dom';

// useSelector: Hook to access the Redux store state (for future auth).
// import { useSelector } from 'react-redux';

// Importing configuration and components
import routesConfig from './routesConfig';

// ---------------------------------------------------------------------------
// LAZY LOADING (Performance Optimization)
// ---------------------------------------------------------------------------
// React.lazy allows us to import components dynamically only when they are needed.
// This reduces the initial bundle size (Code Splitting).
// The component is loaded over the network when the user navigates to its route.

// TODO: Uncomment when AuthForm is created
// const AuthForm = lazy(() => import('../../pages/Auth/AuthForm'));

// Main layout wrapper with Header, Sidebar, etc.
// TODO: Create MainLayout component
// const MainLayout = lazy(() => import('../../layouts/MainLayout'));

// HomePage component
const HomePage = lazy(() => import('../../pages/Home/HomePage'));

// ---------------------------------------------------------------------------
// LOADING COMPONENT
// ---------------------------------------------------------------------------
// Simple loading fallback component shown while lazy components are being fetched.
const LoadingComponent = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-indigo-600 mx-auto mb-4"></div>
      <p className="text-gray-600 text-lg font-medium">Loading...</p>
    </div>
  </div>
);

// ---------------------------------------------------------------------------
// ROUTER COMPONENT
// ---------------------------------------------------------------------------
// React.FC: Explicitly types this as a React Functional Component.
const Router: React.FC = () => {
  // -------------------------------------------------------------------------
  // REDUX STATE (for future authentication)
  // -------------------------------------------------------------------------
  // TODO: Uncomment when authentication is implemented
  // const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);

  return (
    // -----------------------------------------------------------------------
    // SUSPENSE
    // -----------------------------------------------------------------------
    // Suspense is required when using React.lazy.
    // 'fallback': What to show while the lazy-loaded component is being fetched.
    // Here, we show a <LoadingComponent /> (spinner) until the page is ready.
    <Suspense fallback={<LoadingComponent />}>
      <Routes>
        
       {/* ------------------------------------------------------------------
            DEFAULT ROUTE
            ------------------------------------------------------------------ */}
   
        <Route path='/' element={<HomePage />} />

        {/* ------------------------------------------------------------------
            DYNAMIC ROUTES FROM CONFIG (without protection for now)
            ------------------------------------------------------------------ */}
        {/* Map over routesConfig to render routes dynamically */}
        {routesConfig.map(({ path, component: Component }) => (
          <Route
            key={path}
            path={path}
            element={<Component />}
          />
        ))}

        {/* ------------------------------------------------------------------
            CATCH-ALL ROUTE (404)
            ------------------------------------------------------------------ */}
        {/* path='*' matches any URL not matched by previous routes. */}
        {/* Currently redirects unknown URLs back to home ('/'). */}
        <Route path='*' element={<Navigate to='/' />} />

      </Routes>
    </Suspense>
  );
};

export default Router;
