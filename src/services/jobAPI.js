
// jobAPI.js

// POST JOB

const JOB_URL  = "https://640fe591864814e5b6420012.mockapi.io/api/todo"

export function postJob(jobData) {
    return fetch(JOB_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jobData)
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

// PUT JOB

export function putJob(jobId, jobData) {
    return fetch(JOB_URL + jobId, {  
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jobData)
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

// DELETE JOB 

export function deleteJob(jobId) {
    return fetch(JOB_URL+jobId, {
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
  
  
