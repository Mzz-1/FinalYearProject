export const Table=({heading,data})=> {
    return (
      <table>
        <thead>
          <tr>
            <th>{Name}</th>
            <th>{Age}</th>
            <th>{Email}</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>{row.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
  