import {useParams} from 'react-router-dom';
import { PageHeaderComponent } from '../components/page-header';

export const ClientesDetalleEditar = () => {
    const {id} = useParams();
    return (
        <>
        <PageHeaderComponent titulo={`editar cliente: ${id}`} />
        <h3>Editar cliente:{`${id}`} </h3>
        </>
    );
}