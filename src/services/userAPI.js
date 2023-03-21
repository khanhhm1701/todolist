
// jobAPI.js

// POST USER
const USER_URL = "https://640fe591864814e5b6420012.mockapi.io/api/user"

export function addNewUser(userData) {
  return fetch(USER_URL, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
  })
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
      });
}

// PUT USER

export function putUser(userId, userData) {
  return fetch(USER_URL + userId, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

// DELETE USER

export function deleteUser(userId) {
  return fetch(USER_URL + userId, {
    method: 'DELETE',
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}


