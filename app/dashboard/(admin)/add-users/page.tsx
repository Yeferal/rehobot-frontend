import Textfield from '@/components/textfield/Textfield'
import React from 'react'
import FormAddUser from './form-add-user'
import SimpleDialog from '@/components/modal/SimpleDialog'

export default function AddUser() {
  return (
    <main className="container-fluid mt-4">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Agregar Usuario</h1>
        </div>
        <div className='row align-items-center justify-content-center' >
            <div className='col-xl-9 col-md-9 mb-4'>
                <div className="card mb-4">
                    <div className="card-header d-flex align-items-center justify-content-center py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Datos del Usuario</h6>
                    </div>

                    <div className='card-body'>
                        <div className='row'>
                            <FormAddUser/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <SimpleDialog type='modal-relative' closeClick={true}>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque vitae vel 
                consequatur nihil ist e, dolore atque necessitatibus vero rem temporibus 
                eum deleniti esse veritatis inventore quos eaque ipsum veniam amet.</p>
        </SimpleDialog> */}
    </main>
  )
}
