import React from "react";
import API from "../utils/API";
import UserTable from "../components/UserTable"
import SearchForm from "../components/SearchForm"


class Directory extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    manager: "",
    users: [],
  };

  componentDidMount(){
      API.getUsers()
      .then( res => this.setState( { users: res.data.results } ) );
  }

  render() {
    return (
    <div>
    <SearchForm />
    <UserTable users={this.state.users}/>
    </div>
    );
  }
}

export default Directory;
