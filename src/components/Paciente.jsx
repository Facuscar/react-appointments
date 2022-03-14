function Paciente(props) {
    return ( 

        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
                <p className="font-bold mb-3 text-gray-700 uppercase">Nombre:
                    <span className="font-normal normal-case"> {props.paciente.nombre} </span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">Propietario:
                <span className="font-normal normal-case"> {props.paciente.propietario} </span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">Email:
                <span className="font-normal normal-case">  {props.paciente.email} </span>
                </p>
                
                <p className="font-bold mb-3 text-gray-700 uppercase">Fecha alta:
                <span className="font-normal normal-case"> {props.paciente.fecha} </span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas:
                    <span className="font-normal normal-case"> {props.paciente.sintomas} </span>
                </p>     
            </div>

     );
}

export default Paciente;