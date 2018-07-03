const API = 'http://localhost:4000';
const USER_ID = 1;

class Adapter {
  static getSongs() {
    return fetch(`${API}/users/${USER_ID}/songs`);
  }

  static getSong(id) {
    return fetch(`${API}/users/${USER_ID}/songs/${id}`);
  }

  static patchPlaySong(id) {
    return fetch(`${API}/users/${USER_ID}/songs/${id}/play`,
      {
        method: 'PATCH'
      }
    );
  }

  static patchLikeSong(id) {
    return fetch(`${API}/users/${USER_ID}/songs/${id}/like`,
      {
        method: 'PATCH'
      }
    );
  }

  static patchDislikeSong(id) {
    return fetch(`${API}/users/${USER_ID}/songs/${id}/dislike`,
      {
        method: 'PATCH'
      }
    );
  }
}

export default Adapter;
