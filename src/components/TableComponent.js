const Table = ({ locationItem }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Id</th>
        <th>Plats</th>
        <th>Beskrivning</th>
      </tr>
    </thead>
    <tbody>
      {locationItem.length >
        0(
          locationItem.slice(0, 10).map((locitem, index) => {
            return (
              <tr key={index}>
                <td>{locitem.locationId}</td>
                <td>{locitem.locationName}</td>
                <td>{locitem.description}</td>
              </tr>
            );
          })
        )}
    </tbody>
  </table>
);

export default Table;
