import Sidebar from "./compenents/Sidebar";


function Portal(){
    return(
        <>
        <div className="row">
            <div className="col-4">
            <Sidebar 
                    gor_to="BasvuruGoruntule"
                    form_to="BasvuruFormu"/>
            
            </div>
            <div className="col-7 bg-white h-100 w-50" ><h3 className="m-5">Başvuru Portal'ina hoşgeldiniz!</h3></div>

        </div>
            
        </>
    );
}
export default Portal;