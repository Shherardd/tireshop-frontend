import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import PropTypes from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { MoreVert } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'nombre',
    headerName: 'Nombre completo',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 300,
    valueGetter: (params) =>
      `${params.row.nombre || ''} ${params.row.apellido || ''}`,
  },
  {
    field: 'rfc',
    headerName: 'RFC',
    type: 'string',
    width: 130,
  },
  {
    field: 'telefono_1',
    headerName: 'Teléfono',
    type: 'string',
    width: 130,
  },
  {
    field: 'email',
    headerName: 'Correo electrónico',
    sortable: false,
    width: 280,
  },
  {
    field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 120,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            key={id}
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            color="inherit"
            component={Link}
            to={`/clientes/${id}/editar`}
          />,
          <GridActionsCellItem
            key={`${id}-delete`}
            icon={<DeleteIcon />}
            label="Delete"
            color="inherit"
          />,
          <GridActionsCellItem
            key={`${id}-details`}
            icon={<MoreVert />}
            label="Details"
            color="inherit"
            component={Link}
            to={`/clientes/${id}`}
          />,
        ];
      }

  }
];

export const DataTableClientes = ({ rows }) => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
      autoPageSize
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}

DataTableClientes.propTypes = {
  rows: PropTypes.array.isRequired,
};
