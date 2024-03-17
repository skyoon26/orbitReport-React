import styling from "./styling.css";

const Table = ({ sat }) => {

  const tableBody = sat.map((data, id) => {
    let status = data.operational === true ? <td>Active</td> : <td>Inactive</td>

    return (
      <tr key={id}>
        <td>{data.name}</td>
        <td>{data.type}</td>
        <td>{data.launchDate}</td>
        {status}
      </tr>
    )
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {tableBody}
      </tbody>
    </table>
  );
};

export default Table;