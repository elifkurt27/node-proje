import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

import axios from 'axios';
import Sidebar from './Sidebar';
function SifreDegistir() {
    const [oldpass, setOlpass] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRePassword] = useState('');

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const id = sessionStorage.getItem('id');


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password != repassword) {
            setError("Şifreler eşleşmiyor");
            return;
        }

        try {

            const response = await axios.post('http://localhost:3001/sifreDegistir',
                {
                    password,
                    id
                    
                }
            );

            if (response.status === 200) {
                
                    setSuccess("Şifreniz güncellendi")
                    
               
            }
        } catch (err) {
            setError('Şifreniz güncellenirken bir hata olustu.');
        }


    }

    return (
        <>
            <div className="row">
                <div className="col-4">
                    <Sidebar
                        form_to="/portal/BasvuruFormu"
                        gor_to="/portal/BasvuruGoruntule" />
                </div>
                <div className="col-8">

                    <div class="row text-dark my-5 p-5">
                        <div class="bg-light col-8 rounded border border p-5 ">

                            <form onSubmit={handleSubmit}>
                                <i className="fa-solid fa-pen-nib fa-4x"></i>
                                <h1 className="h1 mb-3 fw-normal">Şifre Güncelle</h1>
                                <hr />
                                <div className="form-floating py-2">
                                    <label >Eski şifre</label>
                                    <input type="password"
                                        className="form-control"
                                        id="password"
                                        
                                        value={oldpass}
                                        onChange={(e) => setOlpass(e.target.value)}
                                        required
                                    />

                                </div>
                                <div className="form-floating py-2">
                                    <input type="password"
                                        className="form-control"
                                        id="sifre"
                                        
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <label for="">Şifrenizi Giriniz</label>
                                </div>
                                <div className="form-floating py-2">
                                    <input type="password"
                                        className="form-control"
                                        id="sifre"
                                        
                                        value={repassword}
                                        onChange={(e) => setRePassword(e.target.value)}
                                        required
                                    />
                                    <label for="">Tekrar Şifrenizi Giriniz</label>
                                </div>

                                <button type="submit" className="w-100 btn btn-lg btn-primary" >Güncelle</button>


                            </form>
                           
                            {success && <p style={{ color: 'green' }}>{success}</p>}
                            {error && <p style={{ color: 'red' }}>{error}</p>}

                        </div>
                    </div>


                </div>
            </div>

        </>
    )
}
export default SifreDegistir;