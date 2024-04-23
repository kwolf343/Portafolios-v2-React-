import './CartillaTrabajo.css';
function CartillaTrabajo(props) {
    return (
        <>
            <div className='trabajos'>
                <img src={require(`../../../Imagenes/${props.imagen}`)} alt={props.descripcion} />
                <div>
                    <h3 className='color-principal'>{props.titulo}</h3>
                    <p className='color-secundario'>{props.descripcionCorta}</p>
                </div>
            </div>
            <button className="btn custom-btn me-2 btn-dimensiones" onClick={() => props.verTrabajo(props.index)}>Ver proyecto</button>
        </>
    );
}
export default CartillaTrabajo;