import { useEffect, useContext } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import { useDispatch } from 'react-redux';
import { selectGenreOrCategory } from './features/currentGenreOrCategory';
import { searchMovie } from './features/currentGenreOrCategory';
import { ColorModeContext } from '../utils/ToggleColorMode';
import { fetchToken } from '../utils';

const alanKey = import.meta.env.VITE_ALAN_KEY;

const useAlan = () => {
  const { setMode } = useContext(ColorModeContext);
  const dispatch = useDispatch();

  useEffect(() => {
    alanBtn({
      key: alanKey,

      onCommand: ({ command, mode, genres, genreOrCategory, query }) => {
        if (command === 'chooseGenre') {
          const foundGenre = genres.find(
            (g) => g.name.toLowerCase() === genreOrCategory.toLowerCase()
          );
          if (foundGenre) {
            window.location.href = '/';
            dispatch(selectGenreOrCategory(foundGenre.id));
          } else {
            const category = genreOrCategory.startsWith('top')
              ? 'top_rated'
              : genreOrCategory;
            window.location.href = '/';
            dispatch(selectGenreOrCategory(category));
          }
        } else if (command === 'changeMode') {
          console.log('We are here!');
          if (mode === 'light') {
            setMode('light');
          } else {
            setMode('dark');
          }
        } else if (command === 'login') {
          fetchToken();
        } else if (command === 'logout') {
          localStorage.clear();
          window.location.href = '/';
        } else if (command === 'search') {
          dispatch(searchMovie(query));
        }
      },
    });
  }, []);
};

export default useAlan;
