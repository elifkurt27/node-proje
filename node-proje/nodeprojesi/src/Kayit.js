import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './styles.css';

import axios from 'axios';


function Kayit() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passRepeat, setPassRepeat] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password != passRepeat) {
            setError("Şifreler eşleşmiyor");
            return;
        }

        try {
            const response = await axios.post('http://localhost:3001/kayit',
                { email, password }
            );

            if (response.status === 200) {
                setSuccess('Kayıt Başarılı. Giriş yapabilirsiniz.');
                setEmail('');
                setPassword('');
                setPassRepeat('');
                setError('');
                setTimeout(() => {
                    navigate('/');
                }, 2000);
            }
            else {
                setError('Kayıt oluştururken hata oluştu.')
            }

        } catch (err) {
            setError('Kayıt oluştururken beklenmedik bir hata oluştu.')

        }


    }

    return (
        <>
            <div className="register-container">
                <div class="register-form-container input">
                    <div class="container">

                        <form onSubmit={handleSubmit}>
                            <i className="register-form-container"></i>
                            <h1 className="container">Kayıt Ol</h1>

                            <div className="form-floating py-2">
                                <input type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="name@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <label for="floatingInput">Email adresi</label>
                            </div>
                            <div className="form-floating py-2">
                                <input type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Şifrenizi Giriniz"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <label for="floatingPassword">Şifrenizi Giriniz</label>
                            </div>
                            <div className="form-floating py-2">
                                <input type="password"
                                    className="form-control"
                                    id="passRepeat"
                                    placeholder="Tekrar Şifrenizi Giriniz"
                                    value={passRepeat}
                                    onChange={(e) => setPassRepeat(e.target.value)}
                                    required
                                />
                                <label for="floatingPassword">Tekrar Şifrenizi Giriniz</label>
                            </div>
                            <button type="submit" className="w-100 btn btn-lg btn-primary">Kayıt Ol</button>
                        </form>
                        {success && <p style={{ color: 'green' }}>{success}</p>}
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <p>
                            Hesabınız var mı? <Link to="/">Giriş Yap</Link>
                        </p>
                    </div>
                </div>
            </div>


        </>
    );
}
export default Kayit;