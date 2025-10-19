import { createRoot } from 'react-dom/client';
import Page from '@/app/dashboard/page';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import HomePage from './routes/HomePage';
import PostListPage from './routes/PostListpage';
import SinglePostPage from './routes/SinglePostPage';
import Write from './routes/Write';
import LoginPage from './routes/LoginPage';
import RegisterPage from './routes/RegisterPage';

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/posts", element: <PostListPage /> },
  { path: "/dashboard", element: <Page /> },
  { path: "/:slug", element: <SinglePostPage /> },
  { path: "/write", element: <Write /> },  // Changed path to lowercase for consistency
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
]);

const container = document.getElementById("root");
if (!container) {
  throw new Error('Root container missing in HTML');
}

const root = createRoot(container);
root.render(<RouterProvider router={router} />);
