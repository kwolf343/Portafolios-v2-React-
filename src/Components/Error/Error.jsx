import './Error.css'
function Error() {
    return (
        <div className="d-flex error-container">
            <div className="">
                <h1 className="color-principal text-center">Esta pagina no está disponible</h1>
                <p className="color-principal codigo-status">404</p>
                <div className='d-flex justify-content-center'>
                    <a className="btn custom-btn me-2" href='/'>Pagina principal</a>
                </div>

            </div>
        </div>
    );
}
export default Error;