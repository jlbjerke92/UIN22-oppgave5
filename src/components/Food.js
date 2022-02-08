/* oppgave 7 */

function Food({ food }) {
  return (
    <>
      <h1>Food</h1>
      <ul>
        {/*    {values.map(value => (
          <li key= {values.id}>{values.name}</li>
      ))}; */}
        {food}
      </ul>
    </>
  );
}

export default Food;
