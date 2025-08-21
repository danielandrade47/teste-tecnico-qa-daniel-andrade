class UserManagementPage {
  users = [];

  createUser(user) {
    this.users.push(user);
  }

  editUser(email, newData) {
    const user = this.users.find(u => u.email === email);
    if (user) {
      Object.assign(user, newData);
    }
  }

  deleteUser(email) {
    this.users = this.users.filter(u => u.email !== email);
  }

  getUser(email) {
    return this.users.find(u => u.email === email);
  }
}

module.exports = new UserManagementPage();
