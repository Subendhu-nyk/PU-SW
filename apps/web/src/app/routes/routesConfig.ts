import { lazy, ComponentType } from 'react';

// ---------------------------------------------------------------------------
// TYPES (TypeScript Concept)
// ---------------------------------------------------------------------------
// Define the shape of a route configuration object.
// - path: The URL path for the route.
// - component: The React component to render (lazy loaded).
// - requiredRole: (Optional) Role required to access this route (for future auth).
// - requiredPermission: (Optional) Permission required (for future auth).
export interface RouteConfig {
    path: string;
    component: ComponentType<any>;
    requiredRole?: string;
    requiredPermission?: string;
}

// ---------------------------------------------------------------------------
// LAZY LOADED COMPONENTS
// ---------------------------------------------------------------------------
// Using React.lazy for code splitting - components load only when needed.
// TODO: Create these dashboard components when ready.

// Example dashboard components (commented out until created):
// const AdminDashboard = lazy(() => import('../../pages/Dashboard/Admin/AdminDashboard'));

// ---------------------------------------------------------------------------
// ROUTES CONFIGURATION
// ---------------------------------------------------------------------------
// Array of route objects that will be dynamically rendered in the router.
// Each route specifies a path, component, and optional role/permission requirements.
const routesConfig: RouteConfig[] = [
    // Example routes (uncomment when components are created):
    // {
    //   path: '/admin-dashboard',
    //   component: AdminDashboard,
    //   requiredRole: 'admin',
    // },
    // {
    //   path: '/student-dashboard',
    //   component: StudentDashboard,
    //   requiredRole: 'student',
    // },
    // {
    //   path: '/teacher-dashboard',
    //   component: TeacherDashboard,
    //   requiredRole: 'teacher',
    // },
    // {
    //   path: '/staff-dashboard',
    //   component: StaffDashboard,
    //   requiredRole: 'staff',
    // },
];

export default routesConfig;
