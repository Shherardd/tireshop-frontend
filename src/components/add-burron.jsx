import { Button, Stack } from '@mui/material';
import PropTypes from 'prop-types';

export const AddButtonHeaderComponent = ({Icon}) => {
    return (
        <Stack
        padding={2}
          direction="row"
          justifyContent="space-between"
          alignItems="stretch"
          spacing={1}
        >
         <h1></h1> 
          <Button variant="contained" color="primary">
            <Icon />
          </Button>
        </Stack>
    )
}

AddButtonHeaderComponent.propTypes = {
    Icon: PropTypes.element.isRequired
}
