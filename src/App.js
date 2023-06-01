import React from "react";
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";


function App() {
  return (
    <div>
      <Header/>
      <Home/> 
    </div>
  );
}

export default App;





// export const component1 = () =>(
//   <div>
//     <h1 className="green">Hello React Js</h1>
//     <h1 className="green">Hello React Js</h1>
//     <Component2></Component2>
//   </div>
// )

// class Component2 extends Component{
//    name = "vivek"
//    age = 30
//    render(){
//     return (
//     <div>
//     <h1>Class Component {this.name}</h1>
//     <h2>Age {this.age}</h2>
//     </div>)
//    }
// }