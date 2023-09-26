import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import userLogo from '../../images/avatarUser.jpg'

const Sidebar = () => {
  return (
        <div className='min-vh-100 d-flex justify-content-between flex-column' style={{backgroundColor:"#6600CC"}}>
          <div>
            <a>
              <div style={{display:'flex', justifyContent:'center', paddingTop:'30px'}}>
                <img src={userLogo} style={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%'
                  }} alt="User Avatar" 
                  />
              </div>
              <div>
              <span className='ms-1 fs-4' style={{color:'white',display:'flex',justifyContent:'center'}}> User name</span>
              </div>
                
            </a>
            <hr className='text-secondary d-none d-sm-block' />
            <ul class="nav nav-pills flex-column mt-3 mt-sm-0">
              <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                <a href="#" class="nav-link text-white fs-5" aria-current="page">
                  <i className='bi bi-speedometer2'></i>
                  <span className='ms-3 d-none d-sm-inline'>Dashboard</span>
                </a>
              </li>
              <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                <a href="#" class="nav-link text-white fs-5" aria-current="page">
                  <i className='bi bi-person-circle'></i>
                  <span className='ms-3 d-none d-sm-inline'>User</span>
                </a>
              </li>
              <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                <a href="#" class="nav-link text-white fs-5" aria-current="page">
                  <i className='bi bi-laptop'></i>
                  <span className='ms-3 d-none d-sm-inline'>Devices</span>
                </a>
              </li>
              <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                <a href="#" class="nav-link text-white fs-5" aria-current="page">
                  <i className='bi bi-box-arrow-right'></i>
                  <span className='ms-3 d-none d-sm-inline'>Log out</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
  )
}

export default Sidebar;