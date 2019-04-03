export class ApiService {
  static fetch(...args) {
    return fetch(...args).then(handleErrors)
  }

  static login(data) {
    return ApiService.fetch('/token-auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }

  static getMe(token) {
    return ApiService.fetch('/accounts/current_user/', {
      headers: {
        Authorization: `JWT ${token}`
      }
    })
  }

  static signUp(data) {
    return ApiService.fetch('/accounts/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }
}

function handleErrors(response) {
  if (!response.ok) {
    throw response
  }
  return response
}
