function Error(props) {
    return ( 
    <div>
        <p className='bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md'>{props.mensaje}</p>
    </div>  );
}

export default Error;