// FUNTIONAL COMPONENT

// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <img src={logo} className="App-logo" alt="logo" />
//                 <p>Hello I am Abdul Rahim, a ReactJS Develeoper.</p>
//                 <a  className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
//                     Learn React
//                 </a>
//             </header>
//         </div>
//     );
// }

// export default App;
// ----------------------------------------------------------------------------------------------------------------------

// CLASS COMPONENT 

import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters : [],
            searchField: '',
        };
        console.log('CONSTRUCTOR');
    }

    componentDidMount() {
        console.log('COMPONENTDIDMOUNT');
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.json();
        })
        .then(users => {
            this.setState(() => {
                return {
                    monsters: users
                }
            },
            () => {
                console.log('');
            });
        });
    }

    onSearchChange = (event) => {
        const searchField = event.target.value.toLocaleLowerCase();
        this.setState(() => {
            return {
                searchField: searchField
            };
        });
    }

    render() {
        console.log('RENDER / RE-RENDER');
        const { monsters, searchField } = this.state;
        const { onSearchChange } = this;

        const filteredMonsters = monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchField);
        });

        return (
            <div className="App">
                <h1 className="app-title">Monsters</h1>
                <SearchBox className='search-box' onChangeHandler={onSearchChange} placeholder='Search Monsters here...' />
                    {/* monsters = {filteredMonsters} is the props with value*/}
                <CardList monsters={filteredMonsters} />   
            </div>
        );
    }
}

export default App;
