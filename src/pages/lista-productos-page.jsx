import {useParams} from 'react-router-dom';
import { PageHeaderComponent } from '../components/page-header';
import { useCategoriaStore } from '../store/categoria';
import { useProductosStore } from '../store/producto';
import { useEffect } from 'react';

export const ListaProductosPage = () => {

    const getCategoriaName = useCategoriaStore((state) => state.getCategoriaName);
    const {categoria} = useParams();
    const categoriaName = getCategoriaName(categoria);

    const getProductosByCategoria = useProductosStore((state) => state.getProductosByCategoria);
    const productosByCategoria = useProductosStore((state) => state.productosByCategoria);

    useEffect(() => {
        getProductosByCategoria(categoria);
    }, [getProductosByCategoria, categoria])

    return (
        <>
        <div>
            <PageHeaderComponent titulo={`Lista de producto ${categoriaName}`} />
            productos categoria {categoria}
        </div>
        {
            productosByCategoria == 0 
            ? <p>No hay productos</p>
            : productosByCategoria.map(p => <p key={p.id}>{p.descripcion}</p>)
        }
        </>
    )
}