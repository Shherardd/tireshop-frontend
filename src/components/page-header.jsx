import { Box, Typography } from "@mui/material";
import PropTypes from 'prop-types';

export const PageHeaderComponent = ({titulo}) => {
        return (
                <Box
                sx={{
                    backgroundColor: "primary.main",
                    padding: 2,
                    marginBottom: 2,
                    height: "70px",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Typography variant="h5" color="primary.contrastText" >
                    {`${titulo}`}
                </Typography>
            </Box>
        );
}

PageHeaderComponent.propTypes = {
    titulo: PropTypes.string.isRequired,
};
