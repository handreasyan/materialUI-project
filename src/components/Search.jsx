import {TextField} from "@material-ui/core";

const Search = (props) => {
    const { onChange, value } = props;

    return <TextField sx={{mb:'1rem'}} type='search' label='Search' value={value} onChange={onChange} variant='standard' fullWidth />;
};

export default Search;