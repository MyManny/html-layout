export default function ButtonBar(props) {
    return (
        <div>
            <button onClick={() => props.setPokemonId(props.pokemonId - 1)}>Back</button>
            <button onClick={() => props.setPokemonId(props.pokemonId + 1)}>Next</button>
        </div>
    )
}