import Paciente from "./Paciente";

function ListadoPacientes(props) {
    
    return ( 
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            <h2 className="font-black text-center text-3xl">Listado pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">Administra tus {''}<span className="text-indigo-600 font-bold">pacientes y turnos</span></p>

           
            {props.pacientes.length !== 0 ? 
            props.pacientes.map( paciente => (
                <Paciente key={paciente.id} paciente={paciente}/>
            )) :
            (
                <p className="text-center">No hay pacientes aún</p>
             )
            }


        </div>
        
    
    );
}

export default ListadoPacientes;