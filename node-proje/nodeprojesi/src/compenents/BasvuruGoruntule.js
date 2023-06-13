import React,{useState,useEffect} from 'react';
import Sidebar from "./Sidebar";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function BasvuruGoruntule(){
    const navigate = useNavigate();
    // var basvuruinfo=sessionStorage.getItem('basvuruinfo');
    // if(basvuruinfo==null){
    //     alert("Başvurunuz bulunmamaktadır.");
    //     setTimeout(()=>{
    //         navigate('/portal/BasvuruFormu');

    //     },1000)
       
    //     return;
    // }
    // else {
        
    //     basvuruinfo=basvuruinfo.split(',');
    // }
    
  const [basvuru,setBasvuru] =useState('');
  const [error,setError]=useState('');

  const basvuruGetir=async ()=>{
    const id=sessionStorage.getItem("id");

    try {
        const response =await axios.post("http://localhost:3001/formGoster",{id});
        if (response.status===200) {
            setBasvuru(response.data);
            
            
        }
        
    } catch (err) {
        setError("Başvuru görüntülenemedi.")
        
    }
  }
  basvuruGetir();

    return (
        <>
        <div className="row">
            <div className="col-3">
            <Sidebar 
                    gor_active="active" 
                    gor_disable="disabled" 
                    form_to="/portal/BasvuruFormu"/>
            
            </div>
            <div className="col-8">
            
            <div className=" text-dark py-1 ">
                <div class="row d-flex justify-content-center">
                    <div class="bg-light col-12 rounded border border-warnin p-5" style={{ borderRadius: "5px", backgroundColor: "none",  height: "44rem", overflowX: "hidden", overflowY: "scroll", msOverflowStyle:"none", scrollbarWidth:"unset"}}>

                        
                        <h2 class="" style={{ textAlign: "center" }}>Başvuru Formu</h2>
                                    <div class="row d-flex justify-content-center my-3">
                                        <div class="col-sm-3">
                                            <label for="FirstName" class="form-label text-sm-start">Ad: </label>
                                            <br/>
                                            <label className='px-2' style={{backgroundColor:'lightgrey' ,borderRadius:10}}>{basvuru.isim}</label>

                                        </div>
                                        
                                        <div class="col-sm-3">
                                            <label for="LastName" class="form-label text-sm-start">Soyad: </label>
                                            <br/>
                                            
                                            <label className='px-2' style={{backgroundColor:'lightgrey' ,borderRadius:10}}>{basvuru.soyisim}</label>
                                        </div>
                                        

                                    </div>
                                    <div class="row d-flex justify-content-center my-3">
                                        <div class="col-sm-3">
                                            <label for="Gender" class="form-label ">Cinsiyet: </label>
                                            <br/>
                                            
                                            <label className='px-2' style={{backgroundColor:'lightgrey' ,borderRadius:10}}>{basvuru.cinsiyet}</label>
                                        </div>
                                        
                                        <div class="col-sm-3">
                                            <label for="BirthDate" class="form-label">DoğumTarihi: </label>
                                            <br/>
                                            
                                            <label className='px-2' style={{backgroundColor:'lightgrey' ,borderRadius:10}}>{basvuru.dTarihi}</label>
                                        </div>
                                        
                                    </div>

                                    <div class="row d-flex justify-content-center my-3">

                                        <div class="col-sm-6">
                                            <label for="Email">Email: </label>
                                            <br/>
                                            
                                            <label className='px-2' style={{backgroundColor:'lightgrey' ,borderRadius:10}}>{basvuru.email}</label>
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
                                                <label for="PhoneCode" class="form-label ">Telefon Kodu: </label>
                                                <br/>
                                            
                                                <label className='px-2' style={{backgroundColor:'lightgrey' ,borderRadius:10}}>{basvuru.telefonKodu}</label>
                                            </div>
                                            <div class="col-sm-3">
                                                <label for="Phone" class="form-label">Telefon: </label>
                                                <br/>
                                            
                                                <label className='px-2' style={{backgroundColor:'lightgrey' ,borderRadius:10}}>{basvuru.telefon}</label>
                                            </div>

                                        </div>
                                        <div class="row d-flex justify-content-center my-3">
                                            <div class="col-sm-6">
                                                <label for="UserAddress" class="form-label">Adres: </label>
                                               
                                            <br/>
                                                <label className='px-2' style={{backgroundColor:'lightgrey' ,borderRadius:10}}>{basvuru.adres}</label>
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
                                            <label for="NationalityName" class="form-label">Uyruk: </label>
                                            <br/>
                                            
                                            <label className='px-2' style={{backgroundColor:'lightgrey' ,borderRadius:10}}>{basvuru.uyruk}</label>
                                        </div>
                                        <div class="col-sm-3">
                                            <label for="Identification" class="form-label">Kimlik Numarası: </label>
                                            <br/>
                                            
                                            <label className='px-2' style={{backgroundColor:'lightgrey' ,borderRadius:10}}>{basvuru.kimlikno}</label>
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
                                            <label for="Universty" class="form-label">Üniversite: </label>
                                            <br/>
                                            
                                            <label className='px-2' style={{backgroundColor:'lightgrey' ,borderRadius:10}}>{basvuru.universite}</label>
                                        </div>

                                    </div>
                                    <div class="row d-flex justify-content-center my-3">

                                        <div class="col-sm-3">
                                            <label for="Department" class="form-label">Bölüm: </label>
                                            <br/>
                                            
                                            <label className='px-2' style={{backgroundColor:'lightgrey' ,borderRadius:10}}>{basvuru.bolum}</label>
                                        </div>
                                        <div class="col-sm-3">
                                            <label for="GradStatus" class="form-label">Mezuniyet Durumu: </label>
                                            <br/>
                                            
                                            <label className='px-2' style={{backgroundColor:'lightgrey' ,borderRadius:10}}>{basvuru.mezuniyetDurumu}</label>
                                        </div>
                                    </div>
                                    <div class="row d-flex justify-content-center my-3">

                                        <div class="col-sm-3">
                                            <label for="GradDate" class="form-label">Mezuniyet Tarihi: </label>
                                            <br/>
                                            
                                            <label className='px-2' style={{backgroundColor:'lightgrey' ,borderRadius:10}}>{basvuru.mTarihi}</label>
                                        </div>
                                        <div class="col-sm-3">
                                            <label for="GPA" class="form-label">Ortalama: </label>
                                            <br/>
                                            
                                            <label className='px-2' style={{backgroundColor:'lightgrey' ,borderRadius:10}}>{basvuru.ortalama}</label>
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
                                            <label>Engel Durumu: </label>
                                            
                                            <br/>
                                        <label className='px-2' style={{backgroundColor:'lightgrey' ,borderRadius:10}}>{basvuru.engelDurumu}</label>



                                        </div>
                                        <div class="col-sm-3 ">
                                        <label>Engel Açıklama: </label>
                                        <br/>
                                        
                                        <label className='px-2' style={{backgroundColor:'lightgrey' ,borderRadius:10}}>{basvuru.engelAcikla}</label>


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
                                            <br/>
                                            
                                            <label className='px-2' style={{backgroundColor:'lightgrey' ,borderRadius:10}}>{basvuru.cv}</label>

                                        </div>
                                        <div class="col-sm-3">
                                            <label for="DocumentNiyetMektubu" class="form-label">NiyetMektubu </label>
                                            <br/>
                                            <label className='px-2' style={{backgroundColor:'lightgrey' ,borderRadius:10}}>{basvuru.niyetmektubu}</label>
                                        </div>

                                    </div>
                                    <div class="row d-flex justify-content-center my-4">

                                        <div class="col-sm-3">
                                            <label for="DocumentPasaport" class="form-label">Pasaport </label>
                                            <br/>
                                            <label className='px-2' style={{backgroundColor:'lightgrey' ,borderRadius:10}}>{basvuru.pasaport}</label>

                                        </div>
                                        <div class="col-sm-3">
                                            <label for="DocumentIkametgah" class="form-label">İkametgah </label>
                                            <br/>
                                            <label className='px-2' style={{backgroundColor:'lightgrey' ,borderRadius:10}}>{basvuru.ikametgah}</label>

                                        </div>

                                    </div>
                                    <div class="row d-flex justify-content-center my-4">

                                        <div class="col-sm-3">
                                            <label for="DocumentDiploma" class="form-label">Diploma</label>
                                            <br/>
                                            <label className='px-2' style={{backgroundColor:'lightgrey' ,borderRadius:10}}>{basvuru.diploma}</label>

                                        </div>
                                        <div class="col-sm-3">
                                            <label for="DocumentIngYetBelgesi" class="form-label">İngilizce Yet Belgesi </label>

                                            <label className='px-2' style={{backgroundColor:'lightgrey' ,borderRadius:10}}>{basvuru.ingyetbelgesi}</label>

                                        </div>
                                        

                                    </div>
                                    {error && <p style={{color: 'red'}}> {error} </p>}

                    </div>
                    
                </div>

            </div>
            </div>

        </div>


        </>
    );
}
export default BasvuruGoruntule;