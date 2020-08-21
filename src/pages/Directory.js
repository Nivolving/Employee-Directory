import React from "react";
import API from "../utils/API";
import UserTable from "../components/UserTable";
import SearchForm from "../components/SearchForm";
import TopNavbar from "../components/TopNavbar";
import { Container, Card } from "react-bootstrap";

class Directory extends React.Component {
  state = {
    users: [],
    search: "",
    sort: "",
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  updateSort = (sort) => {
    this.setState({ sort });
  };

  componentDidMount() {
    API.getUsers().then((res) => this.setState({ users: res.data.results }));
  }

  render() {
    return (
      <Container>
        <TopNavbar />
        <Card body className="my-4">
          <SearchForm updateSearch={this.updateSearch} />
        </Card>
        <UserTable
          users={this.state.users}
          search={this.state.search}
          sort={this.state.sort}
          updateSort={this.updateSort}
        />
      </Container>
    );
  }
}

export default Directory;
