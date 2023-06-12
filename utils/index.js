import axios from 'axios';

const tmdbApiKey = import.meta.env.VITE_API_KEY;
const baseUrl = import.meta.env.VITE_BASE_URL;

export const moviesApi = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: tmdbApiKey,
  },
});

const options = {
  method: 'GET',
  url: `${baseUrl}/authentication/token/new`,
  params: {
    api_key: tmdbApiKey,
  },
};

export const fetchToken = async () => {
  try {
    const { data } = await axios(options);

    const REQUEST_TOKEN = data.request_token;

    if (data.success) {
      localStorage.setItem('request_token', REQUEST_TOKEN);
      window.location.href = `https://www.themoviedb.org/authenticate/${REQUEST_TOKEN}?redirect_to=${window.location.origin}/approved`;
    }
    console.log(data);
  } catch (error) {
    console.error('Unable to fetch new token', error);
    throw new Error(error);
  }
};

export const createSessionId = async () => {
  console.log('Do we get here?');
  try {
    const requestToken = localStorage.getItem('request_token');
    if (!requestToken) {
      throw new Error('Request token not found');
    }

    const sessionOptions = {
      method: 'GET',
      url: `${baseUrl}/authentication/session/new`,
      params: {
        api_key: tmdbApiKey,
        request_token: requestToken,
      },
    };

    const { data } = await axios(sessionOptions);

    if (data.success) {
      const session_id = data.session_id;
      localStorage.setItem('session_id', session_id);
      console.log('Here is session_id', session_id);
      console.log(session_id);
      return session_id;
    } else {
      throw new Error('Failed to fetch session');
    }
  } catch (error) {
    console.error('Unable to fetch session', error);
    throw new Error(error);
  }
};
