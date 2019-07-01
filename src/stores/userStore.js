import { observable, action, computed } from "mobx";
// import { persist } from "mobx-persist";
class User {
  @observable users = [];

  @action addUser = user => {
    this.users.push(user);
  };

  @computed get userCount() {
    return this.users.length;
  }
}

export default User;
