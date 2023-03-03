import './paragrafo.css'

const divStyle = {
    color: 'blue',
    textTransform: 'uppercase',
}

const Paragrafo = (props) => {
    return (
        <div className='texto' style={divStyle}>
            <p>{props.title}</p>
        </div>

    )
}





export default Paragrafo