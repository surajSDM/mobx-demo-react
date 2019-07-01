import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("stores")
@observer
class Users extends Component {
  addUser = event => {
    let {
      stores: { UserStore },
    } = this.props;
    event.preventDefault();
    UserStore.addUser(this.name.value);
  };

  render() {
    let {
      stores: { UserStore },
    } = this.props;
    console.log("UserStore", UserStore);
    return (
      <div className="Users">
        <div>
          <form onSubmit={e => this.addUser(e)}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              ref={ref => (this.name = ref)}
            />
            <button type="submit">Add User</button>
          </form>
        </div>
        <div>
          <h2>{UserStore.userCount} Users in Store</h2>
          {UserStore.users.map((item, index) => (
            <div key={index}>
              <h6>{item}</h6>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Users;
