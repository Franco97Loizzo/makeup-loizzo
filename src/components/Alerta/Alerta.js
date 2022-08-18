import "./Alerta.css"

function Alerta(props){
    const {parrafo,titulo} = props;
    return(
        <div className="alertaContainer">
            <p>{parrafo}</p>
            <img src="" alt=""/>
            <h1>{titulo}</h1>
        </div>
    )
}

export default Alerta;