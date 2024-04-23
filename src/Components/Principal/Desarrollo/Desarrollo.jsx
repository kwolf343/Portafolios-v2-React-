function Desarrollo(props) {
    return (
        <div className='row'>
            <div className="col-md-9 col-sm-12">
                <h4 className="color-principal">{props.titulo}</h4>
                <p className="color-secundario">
                    {props.descripcion}
                </p>
                <button className="btn custom-btn me-2" type="button" onClick={props.redireccionar}>{props.nameBtn}</button>
            </div>
            {props.imagen.startsWith('http') ? (
                <img className="col-md-3 col-sm-12" src={props.imagen} alt={props.titulo} />
            ) : (
                <img className="col-md-3 col-sm-12" src={require(`../../../Imagenes/${props.imagen}`)} />
            )}
        </div>
    );
}
export default Desarrollo;