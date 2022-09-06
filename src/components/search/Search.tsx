import React from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';

interface SearchProps {
    loadOptions: any;
    onSearchChange: any;
}

export const Search: React.FC<SearchProps> = ({ loadOptions, onSearchChange }) => {

    const [search, setSearch] = React.useState<string>('');

    const onHandleChange = (searchData: any) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }

    return (
        <AsyncPaginate
            loadOptions={loadOptions}
            placeholder='Search for the city'
            debounceTimeout={600}
            value={search}
            onChange={onHandleChange}
        />
    )
}