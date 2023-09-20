export default function Gallery(props) {
    return (
        <div>
            <img src={props.image} alt={props.name} width="300"/>
            <h2>{props.name}</h2>
            <p>weight: {props.weight}</p>
        </div>
    )
}