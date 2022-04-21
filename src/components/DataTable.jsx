export function DataTable({ user }) {
  return (
    <>
      <tbody>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.age}</td>
        <td>{user.address}</td>
        <td>{user.department}</td>
        <td>{user.salary}</td>
        <td>{user.maritalState ? "true" : "false"}</td>
      </tbody>
    </>
  );
}
