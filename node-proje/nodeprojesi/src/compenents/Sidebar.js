
import {  Link, useNavigate } from 'react-router-dom';
import logo1 from "../logo1.jpg";

import SignOut from '../functions/SignOut'
function Sidebar(props) {
    const navigate = useNavigate();
    

    return (
        <>

            <div class="d-flex flex-column flex-shrink-0 p-3 bg-dark text-white" style={{ width: "280px", height:"45rem"}}>
                <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white link-body-emphasis text-decoration-none">
                    <img className='mx-3' src={logo1} width={100} style={{borderRadius:100}} />
                   

                    
                    </a><span class="fs-4">KHAS PORTAL</span>
                
                <hr />
                <ul class="nav nav-pills flex-column mb-auto text-white">
                    <li class="nav-item">
                        <Link className={`nav-link ${props.form_active} ${props.form_disable}`}
                            aria-current="page"
                            to={`${props.form_to}`}
                        >
                            Başvuru Formu
                        </Link>
                    </li>
                    <li>
                        <Link className={`nav-link ${props.gor_active} ${props.gor_disable}`}
                            aria-current="page"
                            to={`${props.gor_to}`}
                        >
                            Başvuru Görüntüle</Link>
                    </li>
                    
                    <li>
                    <a className="dropdown-item">
                    <Link className={`nav-link ${props.gun_active} ${props.gun_disable}`}
                            aria-current="page"
                            to='/portal/BasvuruGuncelleme'
                        >
                            Başvuru Güncelleme
                        </Link>
                    </a>
                    </li>

                </ul>
                <hr />
                <div class="dropdown">
                    <a href="#" class="d-flex align-items-center link-body-emphasis text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2" />
                        {/* <strong>{props.username}</strong> */}
                    </a>
                    <ul class="dropdown-menu text-small shadow" >
                        <li><Link className='dropdown-item'
                            aria-current="page"
                            to='/sifreDegistir'
                        >
                            Şifre Değiştir</Link></li>
                        <li><a className="dropdown-item" href="#" onClick={() => SignOut(navigate)}>Çıkış Yap</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}
export default Sidebar;