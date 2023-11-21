function Display(props) {
    return (
        <div >
            <h1> {props.title}</h1>
            <img src={props.objectImage} alt={props.title} style={{ 'height': '75vh' }} />
            <p>{props.artist}</p>
        </div>
    )
}

export default Display