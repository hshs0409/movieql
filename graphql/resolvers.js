import { getMovies, getDetailMovie, getSuggestionMovie } from "./db";

const resolvers = {
  Query: {
    movies: (_, { limit, rating }) => getMovies(limit, rating),
    movie: (_, { id }) => getDetailMovie(id),
    suggestionMovie: (_, { id }) => getSuggestionMovie(id),
  },
};

export default resolvers;
