import './Perfil.css';
function Perfil() {
    return (
        <>
            <div className="col-md-9 col-sm-12">
                <h1 className="fuente color-principal autor">Kevin Antonio Magaña Monroy</h1>
                <p className="fuente color-secundario">Desarrollador java y web</p>
                <p className="color-secundario">
                    Soy un apasionado desarrollador web con amplios conocimientos y experiencia en desarrollo web manejando HTML, CSS, Javascript,
                    typescript trabajando con SPA con frameworks y librerias javascript como angular y react, además de eso manejo los lenguajes de
                    programación Java y C# (centrado principalmente en Java) entorno, SpringBoot con bases de datos SQL Server y MySql.
                    <br />
                    Como agregado, puedo trabajar con GitHub y Docker
                </p>
            </div>
            <div className="container-img col-md-3 col-sm-12">
                <div className='col-md-10 col-sm-12'>
                <img src={require('../../../Imagenes/perfil.png')} />
                </div>
            </div>
        </>
    );
}
export default Perfil;