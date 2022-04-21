
import { useState } from "react";
import { findRenderedDOMComponentWithTag } from "react-dom/test-utils";
import './App.css';
import { tableData } from './data';


function App() {

  const [instalment, setInstalment] = useState(false);
  const [sortBy, setSortBy] = useState('id');
  const [count, setCount] = useState(false);


  const renderData = tableData
  .filter((row)=> {
    if (instalment){
      return row.instalment;
    }else{
      return true;
    }
  })

.filter((row) =>{
  if(count > 0){
    return row.count;
  }else{
    return true;
  }
})











  .sort((a,b) =>{
    if(sortBy === 'name'){
      return a.name.localeCompare(b.name);
    }
    if(sortBy){
      return a[sortBy] - b[sortBy]; 
    }
    return 0;
  });

  

 const color = 6




  return (
    <div className="App">
      {sortBy}
      <label htmlFor="instalment">
        <input
          type="checkbox"
          id="instalment"
          checked={instalment}
          onChange={(e) => {
            console.log("changed", e.target.checked);
            setInstalment(e.target.checked);
          }}
        />
        В рассрочку
      </label>
      {count}
      <label htmlFor="count">
        <input
        type="checkbox"
          id="count"
          checked={count}
          onChange={(e) => {
            console.log("changed", e.target.checked);
            setCount(e.target.checked);
          }}
        />
        Наличие
        
      </label>
      <table border = "1">
        <thead>
          <tr>
            <th onClick={() => setSortBy("id")}>#</th>
            <th onClick={() => setSortBy("name")}>Название</th>
            <th onClick={() => setSortBy("price")}>Цена</th>
            <th onClick={() => setSortBy("count")}>Кол-во</th>
            <th>Рассрочка</th>
          </tr>
        </thead>
        <tbody>
          {renderData.map((row)=>(
          <tr style ={{backgroundColor: color>row.count ? "orange": true}} key = {row.id}>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.price}</td>
            
            
            <td> {row.count == 0? <text>Нет в наличии</text>: <text>{row.count}</text> } </td>

            <td>{row.instalment && <text>✅</text> }</td>
          </tr>
          ))}
        </tbody>





      </table>
    </div>
  );
}

export default App;
