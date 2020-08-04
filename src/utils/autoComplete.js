import {includes} from './common'

export const filterUsers = (users = [], search) => 
  users.filter(
    ({
      first_name,
      last_name,
    }) => includes(first_name, search) || includes(last_name, search))