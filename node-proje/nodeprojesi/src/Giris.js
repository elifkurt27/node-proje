import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';



import './styles.css';

import axios from 'axios';
function Giris(){

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');
    const [success,setSuccess]=useState('');
    const navigate = useNavigate();
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{

            const response = await axios.post('http://localhost:3001/',
                {
                    email,
                    password
                }
            );

            if(response.status === 200){
                if(response.data.message === "1"){
                    sessionStorage.setItem("id", response.data.id);
                    var isLogin = "1";
                    
                    setSuccess('Giriş Başarili. Yonlendiriliyorsunuz...')
                    setTimeout( () => {
                    navigate('/portal');
                }, 1500);  
                }else{
                setError('Kullanici adi veya sifre hatali.');
                }
            }
        }catch(err){
            setError('Kullanici adi ve sifre kontrolünde hata olustu.');
        }


    }


    return(
        <>
        <div className="login-page">
            <div class="login-form">
            <div class="">

            <form onSubmit={handleSubmit}>
            <i className="fa-solid fa-pen-nib fa-4x"></i>
            <h1 className="h1 mb-3 fw-normal">Giriş Yap</h1>
            <hr/>
            <div className="form-floating py-2">
                <label for="email">Email adresi</label>
                <input type="email" 
                        className="form-control" 
                        id="email" 
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        />
                
            </div>
            <div className="form-floating py-2">
                <input type="password" 
                        className="form-control" 
                        id="sifre" 
                        placeholder="Şifre"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        />
                <label for="">Şifrenizi Giriniz</label>
            </div>

            <button type="submit" className="w-100 btn btn-lg btn-primary" >Giriş</button>
            

            </form>
            {success && <p style={{color:'green'}}> {success} </p> }
            {error && <p style={{color:'red'}}> {error} </p> }
        
            <p>
                Hesabınız yok mu? <Link to="/kayit">Kayıt Ol!</Link>
            </p>
            </div>
        </div>
        </div>
        </>
    );
}
export default Giris;


