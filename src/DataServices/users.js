const GET_USERS_URL = 'https://reqres.in/api/users'

export const fetchUsers = () => fetch(GET_USERS_URL)
  .then(response => response.json())
  .then(({data}) => data);