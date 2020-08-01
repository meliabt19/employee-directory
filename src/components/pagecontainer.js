import API from "../util/api";
import React, { Component } from "react";
import Searchform from "./searchform";
import EmployeeTable from "./employeetable";
import Header from "./header";
class pagecontainer extends Component {
  state = {
    search: "",
    employees: [],
    filteredEmployees: [],
    order: "",
  };

  componentDidMount() {
    API.getUsers()
      .then((res) =>
        this.setState({
          employees: res.data.results,
          filteredEmployees: res.data.results,
        })
      )
      .catch((err) => console.log(err));
  }

  handleInputChange = (event) => {
    const employees = this.state.employees;
    const UserInput = event.target.value;
    const filteredEmployees = employees.filter(
      (employee) =>
        employee.name.first.toLowerCase().indexOf(UserInput.toLowerCase()) > -1
    );
    this.setState({
      filteredEmployees,
    });
  };

  sortByName = () => {
    const employeesFiltered = this.state.filteredEmployees;
    if (this.state.order === "asc") {
      const sortedEmployees = employeesFiltered.sort((a, b) =>
        a.name.first > b.name.first ? 1 : -1
      );
      console.log(sortedEmployees);
      this.setState({
        filteredEmployees: sortedEmployees,
        order: "desc",
      });
    } else {
      const sortedEmployees = employeesFiltered.sort((a, b) =>
        a.name.first > b.name.first ? -1 : 1
      );
      console.log(sortedEmployees);
      this.setState({
        filteredEmployees: sortedEmployees,
        order: "asc",
      });
    }
  };

  //Calls API on Load
  employeeSearch = () => {
    API.getUsers()
      .then((res) =>
        this.setState({
          employees: res.data.results,
          filteredEmployees: res.data.results,
        })
      )
      .catch((err) => console.log(err));
  };

  handleSearch = (event) => {
    event.preventDefault();
    if (!this.state.search) {
      alert("Please Enter a Name to Search");
    }
    const { employees, search } = this.state;
    const filteredEmployees = employees.filter((employee) =>
      employee.name.first.toLowerCase().includes(search.toLocaleLowerCase())
    );
    this.setState({
      filteredEmployees,
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <Header />
          <Searchform
            employee={this.state.employees}
            handleSearch={this.handleSearch}
            handleInputChange={this.handleInputChange}
          />
          <EmployeeTable
            results={this.state.filteredEmployees}
            sortByName={this.sortByName}
          />
        </div>
      </div>
    );
  }
}

export default pagecontainer;