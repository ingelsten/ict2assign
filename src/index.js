import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import MovieUpcomingPage from "./pages/movieUpcomingPage";
import TvPage from "./pages/tvDetailsPage";
import MovieTopratedPage from './pages/movieTopratedPage';
import TvSeriesPage from "./pages/TvseriesPage";
import PersonListPage from "./pages/personlistPage";
import PersonDetailsPage from "./pages/personDetailspage";




const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});


const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
          <Routes>
      <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
      <Route path="/reviews/:id" element={<MovieReviewPage/>} />
      <Route path="/movies/upcoming" element={<MovieUpcomingPage/>} />
        <Route path="/movies/favourites" element={<FavouriteMoviesPage/>}/>
        <Route path="/movies/toprated" element={<MovieTopratedPage/>}/>
        <Route path="/movies/tvseries" element={<TvSeriesPage/>}/>
        <Route path="/movies/persons" element={<PersonListPage/>}/>
        <Route path="/movies/:id" element={<MoviePage/>} />
        <Route path="/tvs/:id" element={<TvPage/>} />
        <Route path="/persons/:id" element={<PersonDetailsPage/>} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));