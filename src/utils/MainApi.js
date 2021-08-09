class MainApi {
  constructor(options) {
    this._url = options.baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  getUser() {
    return fetch(`${this._url}/users/me`, {
      credentials: 'include',
    }).then(this._checkResponse);
  }

  replaceUser(name, email) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    }).then(this._checkResponse);
  }

  getMovies() {
    return fetch(`${this._url}/movies`, {
      credentials: 'include',
    }).then(this._checkResponse);
  }

  createMovie(
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    thumbnail,
    movieId,
    nameRU,
    nameEN
  ) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        country: country,
        director: director,
        duration: duration,
        year: year,
        description: description,
        image: image,
        trailer: trailer,
        thumbnail: thumbnail,
        movieId: movieId,
        nameRU: nameRU,
        nameEN: nameEN,
      }),
    }).then(this._checkResponse);
  }

  deleteMovie(movieId) {
    return fetch(`${this._url}/movies/${movieId}`, {
      method: 'DELETE',
      credentials: 'include',
    }).then(this._checkResponse);
  }

  register(name, email, password) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    })
      .then((response) => {
        try {
          if (response.status === 201) {
            return response.json();
          }
        } catch (x) {
          return x;
        }
      })

      .then((res) => {
        return res;
      });
  }

  authorize(email, password) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(this._checkResponse)

      .then((data) => {
        if (data.token) {
          localStorage.setItem('jwt', data.token);
          return data;
        } else {
          return;
        }
      });
  }

  logout() {
    return fetch(`${this._url}/signout`, {
      method: 'POST',
      credentials: 'include',
    }).then((data) => {
      localStorage.removeItem('jwt');
      return data;
    });
  }
}

export const api = new MainApi({
  baseUrl: 'https://api.movies-explorer.271.nomoredomains.monster',
  // baseUrl: 'http://localhost:3003',
});
