export class UserService {

  constructor() { }

  users = [
    { name: 'John', status: 'active' },
    { name: 'Mark', status: 'inactive' },
    { name: 'Steve', status: 'active' }
  ]

  addNewUser(pname: string, pstatus: string) {
    this.users.push({ name: pname, status: pstatus });
  }
}
