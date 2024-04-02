import { Routes, Route } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';
import { MoviesPage } from 'pages/Movies/MoviesPage';
import { MovieDetailsPage } from 'pages/Movie/MovieDetailsPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { Header } from './Header/Header';

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
