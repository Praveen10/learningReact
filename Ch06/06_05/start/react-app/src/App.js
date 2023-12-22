import "./App.css";

const peaks = [
  {name: "Praj", elevation: 1565},
  {name: "Tej", elevation: 1855},
  {name: "Gopa", elevation: 2589},
  {name: "Raj", elevation: 1458}
];


function List({ data, renderItem, renderEmpty }) {
  console.log(data)
  return !data.length ? ( 
    renderEmpty
   ) : (
      <ul>
        {data.map((item) => (
          <li key={item.name}>
            {renderItem(item)}
          </li>
        ))}
      </ul>
    );
}

function App() {
  return (
    <List 
      data={peaks}
      renderEmpty={<p>This list is Empty</p>}
      renderItem={item => <>{item.name} - {item.elevation} ft.</>}
    />
  );
}

export default App;
