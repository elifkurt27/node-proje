import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import axios from 'axios';

function BasvuruFormu() {

    const [isim, setIsim] = useState('');
    const [soyisim, setSoyisim] = useState('');
    const [cinsiyet, setCinsiyet] = useState('');
    const [dTarihi, setDTarihi] = useState('');
    const [email, setEmail] = useState('');
    const [telefonKodu, setTelefonKodu] = useState('');
    const [telefon, setTelefon] = useState('');
    const [adres, setAdres] = useState('');
    const [uyruk, setUyruk] = useState('');
    const [kimlikno, setKimlikno] = useState('');
    const [universite, setUniversite] = useState('');
    const [bolum, setBolum] = useState('');
    const [ortalama, setOrtalama] = useState('');
    const [mezuniyetDurumu, setMezuniyetDurumu] = useState('');
    const [engelDurumu, setEngelDurumu] = useState('');

    const [mTarihi, setMTarihi] = useState('');

    const [cv, setCv] = useState('');
    const [engelAcikla, setEngelAcikla] = useState('');
    const [niyetmektubu, setNiyetMektubu] = useState('');
    const [pasaport, setPasaport] = useState('');
    const [ikametgah, setIkametgah] = useState('');
    const [diploma, setDiploma] = useState('');
    const [ingyetbelgesi, setIngYetBelgesi] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate('');

    const id = sessionStorage.getItem('id');
   

    const handleSubmit = async (e) => {

        if (id, isim, soyisim, cinsiyet, dTarihi, email, telefonKodu, telefon, adres, uyruk, kimlikno, universite, bolum, ortalama, mezuniyetDurumu, mTarihi, engelDurumu, engelAcikla, cv, niyetmektubu, pasaport, ikametgah, diploma, ingyetbelgesi != '') {

            e.preventDefault();
            try {

                const response = await axios.post("http://localhost:3001/formGonder", {
                    id, isim, soyisim, cinsiyet, dTarihi, email, telefonKodu, telefon, adres, uyruk, kimlikno, universite, bolum, ortalama, mezuniyetDurumu, mTarihi, engelDurumu, engelAcikla, cv, niyetmektubu, pasaport, ikametgah, diploma, ingyetbelgesi
                }
                );
                console.log(response);
                if (response.status === 200) {
                    setSuccess('Başvurunuz oluşturuldu. Başvuru önizleme sayfasına yönlendiriliyorsunuz...');
                    setIsim('');
                    setSoyisim('');
                    setCinsiyet('');
                    setEmail('');
                    setTelefonKodu('');
                    setTelefon('');
                    setAdres('');
                    setUyruk('');
                    setKimlikno('');
                    setUniversite('');
                    setBolum('');
                    setOrtalama('');
                    setDTarihi('');
                    setMTarihi('');
                    setEngelDurumu('');
                    setMezuniyetDurumu('');
                    setEngelAcikla('');
                    setCv('');
                    setNiyetMektubu('');
                    setPasaport('');
                    setIkametgah('');
                    setDiploma('');
                    setIngYetBelgesi('');
                    setError('');
                    setTimeout(() => {
                        navigate('/portal/BasvuruGoruntule');
                    }, 1500);

                } else {
                    setError(response.data.error);
                }


            } catch (err) {
                console.log(err);

            }

        } else {
            setError('Lütfen tüm alanları doldurunuz...');
            return;

        }


    }

    return (
        <>
            <div className="row">
                <div className="col-3">
                    <Sidebar
                        form_active="active"
                        form_disable="disabled"
                        gor_to="/portal/BasvuruGoruntule" />

                </div>
                <div className="col-8">

                    <div className=" text-dark py-1 ">
                        <div class="row d-flex justify-content-center">
                            <div class="bg-light col-12 rounded border border-warnin p-5" style={{ borderRadius: "5px", backgroundColor: "none",  height: "44rem", overflowX: "hidden", overflowY: "scroll", msOverflowStyle:"none", scrollbarWidth:"unset"}}>

                                <form onSubmit={handleSubmit} >
                                    <h2 class="" style={{ textAlign: "center" }}>Başvuru Formu</h2>
                                    <div class="row d-flex justify-content-center my-3">
                                        <div class="col-sm-3">
                                            <label for="FirstName" class="form-label text-sm-start">Ad</label>
                                            <input type="text"
                                                className="form-control form-control-sm"
                                                id="FirstName"
                                                placeholder="Adınız"
                                                value={isim}
                                                onChange={(e) => setIsim(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div class="col-sm-3">
                                            <label for="LastName" class="form-label text-sm-start">Soyad</label>
                                            <input type="text"
                                                className="form-control form-control-sm"
                                                id="LastName"
                                                placeholder="Soyadınız"
                                                value={soyisim}
                                                onChange={(e) => setSoyisim(e.target.value)}
                                                required
                                            />
                                        </div>

                                    </div>
                                    <div class="row d-flex justify-content-center my-3">
                                        <div class="col-sm-3">
                                            <label for="Gender" class="form-label ">Cinsiyet</label>

                                            <select class="form-control form-control-sm"
                                                value={cinsiyet}
                                                id="Gender"
                                                placeholder="Seçiniz"
                                                onChange={(e) => setCinsiyet(e.target.value)}
                                                required>
                                                <option  selected>Seçiniz</option>
                                                <option value="Kadın">Kadın</option>
                                                <option value="Erkek">Erkek</option>
                                                <option value="Diğer">Diğer</option>


                                            </select>
                                        </div>
                                        <div class="col-sm-3">
                                            <label for="BirthDate" class="form-label">DoğumTarihi </label>
                                            <input type="date"
                                                className="form-control form-control-sm"
                                                id="BirthDate"
                                                placeholder="Doğum Tarihi"
                                                value={dTarihi}
                                                onChange={(e) => setDTarihi(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div class="row d-flex justify-content-center my-3">

                                        <div class="col-sm-6">
                                            <label for="Email">Email </label>
                                            <input type="email"
                                                className="form-control"
                                                id="Email"
                                                placeholder="name@example.com"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />

                                        </div>
                                    </div>
                                    <div id="panel1">

                                        <div class="row d-flex justify-content-center my-3">
                                            <div class="col-sm-6 my-3">
                                                <hr />
                                                <h5 style={{ textAlign: "center" }}>İletişim</h5>
                                            </div>
                                        </div>
                                        <div class="row d-flex justify-content-center my-3">
                                            <div class="col-sm-3">
                                                <label for="PhoneCode" class="form-label ">Telefon Kodu</label>


                                                <select class="form-control form-control-sm"
                                                    value={telefonKodu}
                                                    id="PhoneCode"
                                                    placeholder="Seçiniz"
                                                    onChange={(e) => setTelefonKodu(e.target.value)}
                                                    required>

                                                    <option  selected>Seçiniz</option>
                                                   
                                                    <option value="61">Australia (+61)</option>
                                                    <option value="43">Austria (+43)</option>
                                                    <option value="32">Belgium (+32)</option>
                                                    <option value="55">Brazil (+55)</option>
                                                    <option value="359">Bulgaria (+359)</option>
                                                    <option value="33">France (+33)</option>
                                                    <option value="49">Germany (+49)</option>
                                                    <option value="39">Italy (+39)</option>
                                                    <option value="81">Japan (+81)</option>
                                                    <option value="352">Luxembourg (+352)</option>
                                                    <option value="48">Poland (+48)</option>
                                                    <option value="40">Romania (+40)</option>
                                                    <option value="7">Russia (+7)</option>
                                                    <option value="90" >Turkey (+90)</option>
                                                    <option value="1">USA (+1)</option>
                                                    
                                                </select>
                                            </div>
                                            <div class="col-sm-3">
                                                <label for="Phone" class="form-label">Telefon </label>
                                                <input type="phone"
                                                    className="form-control form-control-sm"
                                                    id="Phone"

                                                    value={telefon}
                                                    onChange={(e) => setTelefon(e.target.value)}
                                                    required
                                                />
                                            </div>

                                        </div>
                                        <div class="row d-flex justify-content-center my-3">
                                            <div class="col-sm-6">
                                                <label for="UserAddress" class="form-label">Adres </label>
                                                <input type="text"
                                                    className="form-control form-control-sm"
                                                    id="UserAddress"
                                                    placeholder="Adres"
                                                    value={adres}
                                                    onChange={(e) => setAdres(e.target.value)}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row d-flex justify-content-center my-3">
                                        <div class="col-sm-6 my-3">
                                            <hr />
                                            <h5 style={{ textAlign: 'center' }}>Uyruk</h5>
                                        </div>
                                    </div>

                                    <div class="row d-flex justify-content-center my-3">
                                        <div class="col-sm-3">
                                            <label for="NationalityName" class="form-label">Uyruk </label>
                                            <input type="text"
                                                className="form-control form-control-sm"
                                                id="NationalityName"
                                                placeholder="Uyruk"
                                                value={uyruk}
                                                onChange={(e) => setUyruk(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div class="col-sm-3">
                                            <label for="Identification" class="form-label">Kimlik Numarası </label>
                                            <input type="text"
                                                className="form-control form-control-sm"
                                                id="Identification"
                                                placeholder="Kimlik Numarası"
                                                value={kimlikno}
                                                onChange={(e) => setKimlikno(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div class="row d-flex justify-content-center my-3">
                                        <div class="col-sm-6 my-3">
                                            <hr />
                                            <h5 style={{ textAlign: "center" }}>Okul</h5>
                                        </div>
                                    </div>
                                    <div class="row d-flex justify-content-center my-3">
                                        <div class="col-sm-6">
                                            <label for="Universty" class="form-label">Üniversite </label>
                                            <input type="text"
                                                className="form-control form-control-sm"
                                                id="Universty"
                                                placeholder="Üniversite"
                                                value={universite}
                                                onChange={(e) => setUniversite(e.target.value)}
                                                required
                                            />
                                        </div>

                                    </div>
                                    <div class="row d-flex justify-content-center my-3">

                                        <div class="col-sm-3">
                                            <label for="Department" class="form-label">Bölüm </label>
                                            <input type="text"
                                                className="form-control form-control-sm"
                                                id="Department"
                                                placeholder="Bölüm"
                                                value={bolum}
                                                onChange={(e) => setBolum(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div class="col-sm-3">
                                            <label for="GradStatus" class="form-label">Mezuniyet Durumu </label>

                                            <select class="form-control form-control-sm"
                                                value={mezuniyetDurumu}
                                                id="GradStatus"
                                                placeholder="Seçiniz"
                                                onChange={(e) => setMezuniyetDurumu(e.target.value)}
                                                required>
                                                <option  selected>Seçiniz</option>
                                                <option value="Ögrenci" >Öğrenci</option>
                                                <option value="Mezun">Mezun</option>
                                            </select>

                                        </div>
                                    </div>
                                    <div class="row d-flex justify-content-center my-3">

                                        <div class="col-sm-3">
                                            <label for="GradDate" class="form-label">Mezuniyet Tarihi </label>
                                            <input type="date"
                                                className="form-control form-control-sm"
                                                id="GradDate"
                                                placeholder="Mezuniyet tarihi"
                                                value={mTarihi}
                                                onChange={(e) => setMTarihi(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div class="col-sm-3">
                                            <label for="GPA" class="form-label">Ortalama </label>
                                            <input type="number"
                                                className="form-control form-control-sm"
                                                id="GPA"
                                                placeholder="Ortalama"
                                                value={ortalama}
                                                onChange={(e) => setOrtalama(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div class="row d-flex justify-content-center my-3">
                                        <div class="col-sm-6 my-3">
                                            <hr />
                                            <h5 style={{ textAlign: "center" }}>Engellilik Durumu</h5>
                                        </div>
                                    </div>
                                    <div class="row d-flex justify-content-center my-3">

                                        <div class="col-sm-3 ">



                                            <select class="form-control form-control-sm"
                                                value={engelDurumu}
                                                id="engellilikDurumu"
                                                placeholder="Seçiniz"

                                                onChange={(e) => setEngelDurumu(e.target.value)}
                                                required>
                                                <option  selected>Seçiniz</option>
                                                <option value="Engeli Yok">Yok</option>
                                                <option value="Engelli" >Var</option>


                                            </select>



                                        </div>
                                        <div class="col-sm-3 ">



                                            <input id="engelaciklama" style={{ display: engelDurumu == "Engeli Yok" && 'none' || engelDurumu == "Engelli" && 'block' }}
                                                className="form-control form-control-sm"
                                                placeholder="Engel Durumu Açıklama"
                                                value={engelAcikla}
                                                onChange={(e) => setEngelAcikla(e.target.value)}
                                            />


                                        </div>

                                    </div>
                                    <div class="row d-flex justify-content-center my-3">
                                        <div class="col-sm-6 my-3">
                                            <hr />
                                            <h5 style={{ textAlign: "center" }}>Belgeler</h5>
                                        </div>
                                    </div>
                                    <div class="row d-flex justify-content-center my-4">

                                        <div class="col-sm-3">
                                            <label for="DocumentCV" class="form-label">CV </label>

                                            <input type="file"
                                                className="btn btn-secondary"
                                                id="DocumentCV"

                                                value={cv}
                                                onChange={(e) => setCv(e.target.value)}
                                                required
                                            />

                                        </div>
                                        <div class="col-sm-3">
                                            <label for="DocumentNiyetMektubu" class="form-label">NiyetMektubu </label>

                                            <input type="file"
                                                className="btn btn-secondary"
                                                id="DocumentNiyetMektubu"

                                                value={niyetmektubu}
                                                onChange={(e) => setNiyetMektubu(e.target.value)}
                                                required
                                            />

                                        </div>

                                    </div>
                                    <div class="row d-flex justify-content-center my-4">

                                        <div class="col-sm-3">
                                            <label for="DocumentPasaport" class="form-label">Pasaport </label>

                                            <input type="file"
                                                className="btn btn-secondary"
                                                id="DocumentPasaport"

                                                value={pasaport}
                                                onChange={(e) => setPasaport(e.target.value)}
                                                required
                                            />

                                        </div>
                                        <div class="col-sm-3">
                                            <label for="DocumentIkametgah" class="form-label">İkametgah </label>
                                            <input type="file"
                                                className="btn btn-secondary"
                                                id="DocumentIkametgah"

                                                value={ikametgah}
                                                onChange={(e) => setIkametgah(e.target.value)}
                                                required
                                            />

                                        </div>

                                    </div>
                                    <div class="row d-flex justify-content-center my-4">

                                        <div class="col-sm-3">
                                            <label for="DocumentDiploma" class="form-label">Diploma</label>

                                            <input type="file"
                                                className="btn btn-secondary"
                                                id="DocumentDiploma"

                                                value={diploma}
                                                onChange={(e) => setDiploma(e.target.value)}
                                                required
                                            />

                                        </div>
                                        <div class="col-sm-3">
                                            <label for="DocumentIngYetBelgesi" class="form-label">İngilizce Yeterlilik Belgesi </label>

                                            <input type="file"
                                                className="btn btn-secondary"
                                                id="DocumentIngYetBelgesi"

                                                value={ingyetbelgesi}
                                                onChange={(e) => setIngYetBelgesi(e.target.value)}
                                                required
                                            />

                                        </div>

                                    </div>

                                    <button type="submit" className="w-100 btn btn-lg btn-primary" >Gönder</button>
                                </form>
                                {success && <p style={{ color: 'green' }}>{success}</p>}
                                {error && <p style={{ color: 'red' }}>{error}</p>}



                            </div>
                        </div>

                    </div>
                </div>

            </div>


        </>
    );
}
export default BasvuruFormu;