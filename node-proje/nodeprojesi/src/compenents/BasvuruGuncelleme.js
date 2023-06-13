import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import axios from 'axios';

function BasvuruGuncelleme() {

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

                const response = await axios.post("http://localhost:3001/formGuncelleme", {
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
                        gun_active="active"
                        form_to="/portal/BasvuruFormu"
                        gor_to="/portal/BasvuruGoruntule" />

                </div>
                <div className="col-8">

                    <div className=" text-dark py-1 ">
                        <div class="row d-flex justify-content-center">
                            <div class="bg-light col-12 rounded border border-warnin p-5" style={{ borderRadius: "5px", backgroundColor: "none",  height: "44rem", overflowX: "hidden", overflowY: "scroll", msOverflowStyle:"none", scrollbarWidth:"unset"}}>

                                <form onSubmit={handleSubmit} >
                                    <h2 class="" style={{ textAlign: "center" }}>Başvuru Güncelleme Formu</h2>
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
                                                    <option value="213">Algeria (+213)</option>

                                                    <option value="61">Australia (+61)</option>
                                                    <option value="43">Austria (+43)</option>
                                                    <option value="994">Azerbaijan (+994)</option>

                                                    <option value="1246">Barbados (+1246)</option>
                                                    <option value="375">Belarus (+375)</option>
                                                    <option value="32">Belgium (+32)</option>

                                                    <option value="387">Bosnia Herzegovina (+387)</option>

                                                    <option value="55">Brazil (+55)</option>

                                                    <option value="359">Bulgaria (+359)</option>

                                                    <option value="90392">Cyprus North (+90392)</option>
                                                    <option value="357">Cyprus South (+357)</option>
                                                    <option value="42">Czech Republic (+42)</option>

                                                    <option value="358">Finland (+358)</option>
                                                    <option value="33">France (+33)</option>

                                                    <option value="49">Germany (+49)</option>

                                                    <option value="30">Greece (+30)</option>

                                                    <option value="91">India (+91)</option>

                                                    <option value="353">Ireland (+353)</option>

                                                    <option value="39">Italy (+39)</option>

                                                    <option value="81">Japan (+81)</option>

                                                    <option value="850">Korea North (+850)</option>
                                                    <option value="82">Korea South (+82)</option>

                                                    <option value="370">Lithuania (+370)</option>
                                                    <option value="352">Luxembourg (+352)</option>

                                                    <option value="389">Macedonia (+389)</option>

                                                    <option value="356">Malta (+356)</option>

                                                    <option value="52">Mexico (+52)</option>

                                                    <option value="212">Morocco (+212)</option>

                                                    <option value="31">Netherlands (+31)</option>

                                                    <option value="64">New Zealand (+64)</option>

                                                    <option value="47">Norway (+47)</option>

                                                    <option value="51">Peru (+51)</option>
                                                    <option value="63">Philippines (+63)</option>
                                                    <option value="48">Poland (+48)</option>
                                                    <option value="351">Portugal (+351)</option>
                                                    <option value="1787">Puerto Rico (+1787)</option>
                                                    <option value="974">Qatar (+974)</option>
                                                    <option value="262">Reunion (+262)</option>
                                                    <option value="40">Romania (+40)</option>
                                                    <option value="7">Russia (+7)</option>
                                                    <option value="250">Rwanda (+250)</option>
                                                    <option value="378">San Marino (+378)</option>
                                                    <option value="239">Sao Tome &amp; Principe (+239)</option>
                                                    <option value="966">Saudi Arabia (+966)</option>
                                                    <option value="221">Senegal (+221)</option>
                                                    <option value="381">Serbia (+381)</option>
                                                    <option value="248">Seychelles (+248)</option>
                                                    <option value="232">Sierra Leone (+232)</option>
                                                    <option value="65">Singapore (+65)</option>
                                                    <option value="421">Slovak Republic (+421)</option>
                                                    <option value="386">Slovenia (+386)</option>
                                                    <option value="677">Solomon Islands (+677)</option>
                                                    <option value="252">Somalia (+252)</option>
                                                    <option value="27">South Africa (+27)</option>
                                                    <option value="34">Spain (+34)</option>
                                                    <option value="94">Sri Lanka (+94)</option>
                                                    <option value="290">St. Helena (+290)</option>
                                                    <option value="1869">St. Kitts (+1869)</option>
                                                    <option value="1758">St. Lucia (+1758)</option>
                                                    <option value="249">Sudan (+249)</option>
                                                    <option value="597">Suriname (+597)</option>
                                                    <option value="268">Swaziland (+268)</option>
                                                    <option value="46">Sweden (+46)</option>
                                                    <option value="41">Switzerland (+41)</option>
                                                    <option value="963">Syria (+963)</option>
                                                    <option value="886">Taiwan (+886)</option>
                                                    <option value="7">Tajikstan (+7)</option>
                                                    <option value="66">Thailand (+66)</option>
                                                    <option value="228">Togo (+228)</option>
                                                    <option value="676">Tonga (+676)</option>
                                                    <option value="1868">Trinidad &amp; Tobago (+1868)</option>
                                                    <option value="216">Tunisia (+216)</option>
                                                    <option value="90" >Turkey (+90)</option>
                                                    <option value="7">Turkmenistan (+7)</option>
                                                    <option value="993">Turkmenistan (+993)</option>
                                                    <option value="1649">Turks &amp; Caicos Islands (+1649)</option>
                                                    <option value="688">Tuvalu (+688)</option>
                                                    <option value="256">Uganda (+256)</option>
                                                    <option value="44">UK (+44)</option>
                                                    <option value="380">Ukraine (+380)</option>
                                                    <option value="971">United Arab Emirates (+971)</option>
                                                    <option value="598">Uruguay (+598)</option>
                                                    <option value="1">USA (+1)</option>
                                                    <option value="7">Uzbekistan (+7)</option>
                                                    <option value="678">Vanuatu (+678)</option>
                                                    <option value="379">Vatican City (+379)</option>
                                                    <option value="58">Venezuela (+58)</option>
                                                    <option value="84">Vietnam (+84)</option>
                                                    <option value="84">Virgin Islands - British (+1284)</option>
                                                    <option value="84">Virgin Islands - US (+1340)</option>
                                                    <option value="681">Wallis &amp; Futuna (+681)</option>
                                                    <option value="969">Yemen (North)(+969)</option>
                                                    <option value="967">Yemen (South)(+967)</option>
                                                    <option value="260">Zambia (+260)</option>
                                                    <option value="263">Zimbabwe (+263)</option>

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

                                    <button type="submit" className="w-100 btn btn-lg btn-primary" >Güncelle</button>
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
export default BasvuruGuncelleme;