import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function ListUsers() {
  return (
    <div className="container-fluid py-4">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Lista de Usuarios</h1>
      </div>
      <div className="row m-0 p-0">
        <div className="col-xl-12 col-md-12 mb-4 p-0">
          <div className="card shadow">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Lista de Usuarios</h6>
            </div>
            <div className="card-body px-0">
              {/* BUSQUEDA Y FILTRO, ORDENAMIENTO, ETC. */}
              <div className="container p-0 mb-4">
                <div className="row justify-content-between">
                  <div className="col-4 p-0">
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                      <div className="textfield">
                        <input type="search" className="input-search" placeholder="Search field"/>
                        <label className="input-label">
                            <span>Search field</span>
                        </label>
                      </div>
                      <input type="button" className="btn btn-success" value="Buscar" />
                    </div>
                  </div>
                  {/* <div className="col-4"></div> */}
                  <div className="col-4">
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                      <input type="search" className="form-control form-control-sm" name="" id="" />
                      <input type="button" className="btn btn-success" value="Buscar" />
                    </div>
                  </div>

                </div>
              </div>
              {/* Listado */}
              <div className="container-table table-responsive table-hover">
                <table className="table" id="dataTable">
                  <thead>
                    <tr>
                      <th className="text-left">ID</th>
                      <th className="text-left">Nombres</th>
                      <th className="text-left">Apellidos</th>
                      <th className="text-left">Estado</th>
                      <th className="text-left">Opciones</th>
                    </tr>
                  </thead>
                  <tbody>
        
                  </tbody>
                </table>
              </div>
              {/* Contenedor de la paginacion */}
              <div className="d-flex flex-column justify-content-center align-items-end px-2 pb-2">
                <div className="mb-2">
                    <span className="typography-body1 font-weight-normal">Mostrando 1-5 de 10</span>
                </div>
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <button className="btn btn-light btn-sqr btn-sm mr-1">
                        <IoIosArrowBack/>
                    </button>
                    <div>
                        <button className="btn btn-primary btn-sqr btn-sm mr-1">1</button>
                        <button className="btn btn-light btn-sqr btn-sm mr-1">2</button>
                        <button className="btn btn-light btn-sqr btn-sm mr-1">3</button>
                        <button className="btn btn-light btn-sqr btn-sm mr-1 disabled" disabled>...</button>
                        <button className="btn btn-light btn-sqr btn-sm mr-1">4</button>
                    </div>
                    <button className="btn btn-light btn-sqr btn-sm">
                        <IoIosArrowForward/>
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
