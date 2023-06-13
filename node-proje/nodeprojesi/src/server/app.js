const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

var conn = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'erasmusdb'
    }
);
conn.connect((err) => {
    if (err) {

        conn = mysql.createConnection(
            {
                host: 'localhost',
                user: 'root',
                password: ''
            }
        );

        conn.connect(function (err) {
            if (err) throw err;
            console.log("Baglandi!");

            conn.query("CREATE DATABASE erasmusdb", function (err, result) {
                if (err) throw err;
                console.log("DB Olusturuldu.");
                     conn = mysql.createConnection(
                    {
                        host: 'localhost',
                        user: 'root',
                        password: '',
                        database: 'erasmusdb'
                    }
                );
                var usersql = "CREATE TABLE user (user_id INT NOT NULL AUTO_INCREMENT, username VARCHAR(255) NOT NULL, password VARCHAR(50) NOT NULL,isLogin INT NOT NULL, PRIMARY KEY (user_id))";

                conn.query(usersql, function (err, result) {
                    if (err) throw err;
                    console.log("User Tablosu Olusturuldu.");
                });

                var basvurusql = "CREATE TABLE basvuru (basvuru_id INT NOT NULL AUTO_INCREMENT ,basvuran_id INT NOT NULL, isim VARCHAR(150) NOT NULL, soyisim VARCHAR(150) NOT NULL, cinsiyet VARCHAR(50) NOT NULL, dTarihi DATE NOT NULL, email VARCHAR(150) NOT NULL,telefonKodu VARCHAR(150) NOT NULL,telefon VARCHAR(150) NOT NULL,adres VARCHAR(255) NOT NULL,uyruk VARCHAR(150) NOT NULL,kimlikno VARCHAR(50) NOT NULL, universite VARCHAR(150) NOT NULL,bolum VARCHAR(150) NOT NULL,ortalama TINYINT NOT NULL,mezuniyetDurumu VARCHAR(50) NOT NULL,mTarihi DATE NOT NULL,engelDurumu VARCHAR(50) NOT NULL, engelAcikla VARCHAR(255),cv VARCHAR(255) NOT NULL,niyetmektubu VARCHAR(255) NOT NULL,pasaport VARCHAR(255) NOT NULL,ikametgah VARCHAR(255) NOT NULL,diploma VARCHAR(255) NOT NULL,ingyetbelgesi VARCHAR(255) NOT NULL,PRIMARY KEY (basvuru_id))";

                conn.query(basvurusql, function (err, result) {
                    if (err) throw err;
                    console.log("Basvuru Tablosu Olusturuldu.");
                });
            });
        });
    }
    console.log('Veritabanina baglanildi.');
});
app.post('/kayit', (req, res) => {

    const { email, password } = req.body;

    const query = "INSERT INTO user (username,password) VALUE (?,?)";

    conn.query(query, [email, password], (err, result) => {

        if (err) {
            console.error("Kullanıcı oluştururken bir hata oluştu: ", err);
            res.status(500).send({ error: "Kullanıcı kayıdı alırken bir hata oluştu" });
            return;
        }
        res.status(200).send({ message: "Kayıt yapıldı" });

    })

});
app.post('/', (req, res) => {

    const { email, password } = req.body;

    const query = "SELECT * FROM user WHERE username=? AND password=?";

    conn.query(query, [email, password], (err, result) => {
        if (err) {
            console.error("Giriş yaparken bir hata oluştu: ", err);
            res.status(500).send({ error: 'Giriş yaparken bir hata oluştu.' });
            return;
        }
        if (result.length > 0) {
            const user_id = result[0].user_id;

            const isLoginQuery = "UPDATE user SET isLogin = 1 WHERE user_id=?";

            conn.query(isLoginQuery, user_id, (err, result) => {
                if (err) {
                    console.error("isLogin guncellenirken hata olustu. ", err);
                    res.status(500).send({ error: 'isLogin guncellenemedi.' });
                }
            });

            res.status(200).send({ message: '1', id: user_id });
        } else {
            res.status(200).send({ message: '0' });
        }
    })

});
app.post('/formGonder', (req, res) => {

    const { id, isim, soyisim, cinsiyet, dTarihi, email, telefonKodu, telefon, adres, uyruk, kimlikno, universite, bolum, ortalama, mezuniyetDurumu, mTarihi, engelDurumu, engelAcikla, cv, niyetmektubu, pasaport, ikametgah, diploma, ingyetbelgesi } = req.body;
    

    const kontrolQuery = "SELECT * FROM basvuru WHERE basvuran_id = ?";

    conn.query(kontrolQuery, [id], (err, result) => {

        if (result.length > 0) {
            res.status(201).send({ error: "Bir hesaptan sadece bir basvuru yapılabilir." });
            return;
        } else {
            const query = "INSERT INTO basvuru (basvuran_id, isim, soyisim, cinsiyet, dTarihi, email, telefonKodu, telefon, adres, uyruk, kimlikno, universite, bolum, ortalama, mezuniyetDurumu, mTarihi, engelDurumu, engelAcikla, cv, niyetmektubu, pasaport, ikametgah, diploma, ingyetbelgesi) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

            conn.query(query, [ id, isim, soyisim, cinsiyet, dTarihi, email, telefonKodu, telefon, adres, uyruk, kimlikno, universite, bolum, ortalama, mezuniyetDurumu, mTarihi, engelDurumu, engelAcikla, cv, niyetmektubu, pasaport, ikametgah, diploma, ingyetbelgesi], (err, result) => {
                if (err) {
                    console.error("Veritabanina başvuru bilgilerini eklerken hata olustu. ", err);
                    res.status(500).send({ error: "Veritabanina başvuru bilgilerini eklerken hata olustu." });
                    return;
                }

                res.status(200).send({ message: "Basvurunuz alınmıştır" });
            });
        }

    });

});
app.post("/formGoster", (req,res) => {

    const user_id = req.body.id;

    const query = "SELECT * FROM basvuru WHERE basvuran_id=?";

    conn.query(query, [user_id], (err,result) => {
        if(err){
            console.error("Veritabanindan başvuru bilgileri alinirken hata olustu.", err);
            res.status(500).send({error: "Veritabanindan başvuru bilgileri alinirken hata olustu."});
            return;
        }
        if(result.length===0){
            res.status(404).send({message: "Bu kullanıcıya ait basvuru bulunamadi."});
        }else{
            res.status(200).send({
                
                isim: result[0].isim, 
                soyisim: result[0].soyisim, 
                cinsiyet:result[0].cinsiyet, 
                dTarihi:result[0].dTarihi, 
                email:result[0].email, 
                telefonKodu:result[0].telefonKodu, 
                telefon:result[0].telefon, 
                adres:result[0].adres, 
                uyruk:result[0].uyruk, 
                kimlikno:result[0].kimlikno, 
                universite:result[0].universite, 
                bolum:result[0].bolum, 
                ortalama:result[0].ortalama, 
                mezuniyetDurumu:result[0].mezuniyetDurumu, 
                mTarihi:(result[0].mTarihi), 
                engelDurumu:result[0].engelDurumu, 
                engelAcikla:result[0].engelAcikla, 
                cv:result[0].cv, 
                niyetmektubu:result[0].niyetmektubu, 
                pasaport:result[0].pasaport, 
                ikametgah:result[0].ikametgah, 
                diploma:result[0].diploma, 
                ingyetbelgesi:result[0].ingyetbelgesi
            });
        }
    });

});
app.post('/formGuncelleme', (req, res) => {

    const { id, isim, soyisim, cinsiyet, dTarihi, email, telefonKodu, telefon, adres, uyruk, kimlikno, universite, bolum, ortalama, mezuniyetDurumu, mTarihi, engelDurumu, engelAcikla, cv, niyetmektubu, pasaport, ikametgah, diploma, ingyetbelgesi } = req.body;
    

    const kontrolQuery = "SELECT * FROM basvuru WHERE basvuran_id = ?";

    conn.query(kontrolQuery, [ id, isim, soyisim, cinsiyet, dTarihi, email, telefonKodu, telefon, adres, uyruk, kimlikno, universite, bolum, ortalama, mezuniyetDurumu, mTarihi, engelDurumu, engelAcikla, cv, niyetmektubu, pasaport, ikametgah, diploma, ingyetbelgesi ], (err, result) => {

         
            const query = "UPDATE basvuru SET basvuran_id=?, isim=?, soyisim=?, cinsiyet=?, dTarihi=?, email=?, telefonKodu=?, telefon=?, adres=?, uyruk=?, kimlikno=?, universite=?, bolum=?, ortalama=?, mezuniyetDurumu=?, mTarihi=?, engelDurumu=?, engelAcikla=?, cv=?, niyetmektubu=?, pasaport=?, ikametgah=?, diploma=?, ingyetbelgesi=?";

            conn.query(query, [ id, isim, soyisim, cinsiyet, dTarihi, email, telefonKodu, telefon, adres, uyruk, kimlikno, universite, bolum, ortalama, mezuniyetDurumu, mTarihi, engelDurumu, engelAcikla, cv, niyetmektubu, pasaport, ikametgah, diploma, ingyetbelgesi], (err, result) => {
                if (err) {
                    console.error("Veritabanina başvuru bilgilerini eklerken hata olustu. ", err);
                    res.status(500).send({ error: "Veritabanina başvuru bilgilerini eklerken hata olustu." });
                    return;
                }

                res.status(200).send({ message: "Basvurunuz güncellenmiştir" });
            });
        

    });

});
app.post('/signout', (req,res) => {

    const {id} = req.body;

    const query = "UPDATE user SET isLogin = 0 WHERE user_id=?";

    conn.query(query, [id], (err,result) => {
        if(err){
            console.log(id);
            console.error("isLogin guncellemesinde hata olustu. ", err);
            res.status(500).send({error: 'isLogin guncellemesinde hata olustu.'});
            return;
        }
        
        res.status(200).send({message: 'Çıkış yapıldı'});
    });

});

app.post('/sifreDegistir', (req,res) => {

    const {password,id} = req.body;

    const query = "UPDATE user SET password=? WHERE user_id=?";

    conn.query(query, [password,id], (err,result) => {
        if(err){
            console.log(id);
            console.error("Şifre değiştirilirken hata olustu. ", err);
            res.status(500).send({error: 'Şifre değiştirilirken hata olustu.'});
            return;
        }
        
        res.status(200).send({message: 'Şifre guncellendi.'});
    });

});


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server ${PORT} üzerinde dinleniyor.`);
});
