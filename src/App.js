import { useState, useEffect } from 'react';
import Characters from './components/Characters';
import './App.css';

function App() {

    const [characterList, setCharacterList] = useState([]);
    const [next, setNext] = useState(1);
    
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/?page=${next}`)
            .then((response) => response.json())
            .then((response) => setCharacterList(response.results))
            .catch(error => console.log(error));
    }, [next]);

    console.log(next)

    function nextPage() {
        if(characterList.length === 20) {
            console.log(characterList.length)
            setNext(next + 1);
        }
    }

    function previousPage() {
        if(next > 1) {
            setNext(next - 1);
        }
    }
 
    return (
        
        <div className="App">
            <Characters characterList={characterList} nextPage={nextPage} previousPage={previousPage}/>
        </div>

    );
}

export default App;