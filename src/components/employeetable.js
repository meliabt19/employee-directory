import React from "react";
import "../css/searchform.css";
function employeetable(props) {
  return (
    <table classname="tableEmployee">
      <tr>
        <th>Profile Image</th>
        <th className="name" onClick={props.sortByName}>
          Name
        </th>
        <th className="col-5">Phone</th>
        <th className="col-6">E-Mail</th>
      </tr>

      <tbody className="">
        {props.results.map((result) => (
          <tr className="table" key={result.login.uuid}>
            <td>
              <img className="" src={result.picture.medium} alt="" />
            </td>

            <td>{`${result.name.first} ${result.name.last}`} </td>

            <td>{result.cell}</td>
            <td className="email">
              <a href={result.email}>{result.email}</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default employeetable;