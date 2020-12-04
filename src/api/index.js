export const getUsers = () => {
  return fetch('/user/list').then(response => {
    return response.json();
  })
}
