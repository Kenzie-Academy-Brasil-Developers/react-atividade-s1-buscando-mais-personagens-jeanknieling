import './style.css';

function CharCard({ character }) {

    const wordSizeLimiter = () => {

        return character.name.split('').splice(0,15).join('');

    };

    return (
        <>
            <li  className={character.status === "Dead" ? "dead" : ""}>
                <h2>{wordSizeLimiter()}</h2>
                <h3>( {character.species} )</h3>
                <figure>
                    <img src={character.image} alt={`Imagem do(a) ${character.name}`}/>
                </figure>
            </li>
        </>
    );

}

export default CharCard;