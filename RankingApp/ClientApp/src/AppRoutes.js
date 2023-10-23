import RankItems from "./components/RankItems";

const AppRoutes = [
  {
    index: true,
    element: <RankItems />
  },
  {
      path: '/scary-movies',
      element: <a href="https://www.imdb.com/search/title/?title_type=feature&genres=horror&sort=num_votes,desc"> IMDB Scary Movies</a> 
  }
];

export default AppRoutes;
