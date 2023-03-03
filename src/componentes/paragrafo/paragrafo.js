import './paragrafo.css'

const Paragrafo = ( props ) => {
    return (
        <div className='texto'>
            <h3>Texto Modificado</h3>
            <p>{props.title}</p>
            {console.log(props)}
        </div>
        
    )
}



Paragrafo.defultProps = {
    color: 'red'
}

export default Paragrafo