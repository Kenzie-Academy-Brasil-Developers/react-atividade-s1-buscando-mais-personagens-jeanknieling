import CharCard from '../CharCard';
import './style.css';

function Characters({ characterList, nextPage, previousPage }) {

    return (

        <>

            <h1>Meus personagens</h1>

            <button onClick={previousPage}>Página anterior</button>
            <button onClick={nextPage}>Próxima página</button>

            <ul>

                {
                    characterList.map((character) => <CharCard character={character} key={character.id}/>)
                }
                
            </ul>

        </>

    );

}

export default Characters;