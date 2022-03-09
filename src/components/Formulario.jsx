function Formulario() {
    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>
            <p className="text-lg mt-5">Añade pacientes y <span className="text-indigo-600 font-bold"> Administralos</span></p>

            <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-3">
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase" htmlFor="mascota">Nombre mascota</label>
                    <input id="mascota" type="text" placeholder="Nombre de la mascota"  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded"/>
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase" htmlFor="propietario">Nombre propietario</label>
                    <input id="propietario" type="text" placeholder="Nombre de el propietario"  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded"/>
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase" htmlFor="email">Email</label>
                    <input id="email" type="email" placeholder="Email de contacto"  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded"/>
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase" htmlFor="alta">Alta</label>
                    <input id="alta" type="date" className="border-2 w-full p-2 mt-2 rounded"/>
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase" htmlFor="sintomas">Email</label>
                    <textarea placeholder="Describe los sintomas" id="sintomas" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded"></textarea>
                </div>

                <input type="submit" className=" bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors" value="Agregar paciente" />
            </form>
         </div>

        
         );
}

export default Formulario;