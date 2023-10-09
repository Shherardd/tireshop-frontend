import {useParams} from 'react-router-dom';

export const ClientesDetalle = () => {
    const {id} = useParams();
    return (
        <>
        <h3>Clientes detalle {`${id}`}page here</h3>
        </>
    );
}