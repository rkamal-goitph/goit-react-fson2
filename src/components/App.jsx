import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from 'pages/Shared/SharedLayout';

// pass the pages as callback function to the lazy load function
const HomePage = lazy(() => import('pages/Home/HomePage'));
const MoviesPage = lazy(() => import('pages/Movies/MoviesPage'));
const MovieDetailsPage = lazy(() => import('pages/Movie/MovieDetailsPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

const CastList = lazy(() => import('./Cast/CastList'));
const ReviewsList = lazy(() => import('./Reviews/ReviewsList'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />}>
            <Route path=":movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<CastList />} />
              <Route path="reviews" element={<ReviewsList />} />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
