import React from 'react';
function Search({ handleInput,search }) {
    return (
        <section className="searchbox-wrap1">
            <input type="text" placeholder="Search" className="searchbox " onChange={handleInput} onKeyPress={search} />


        </section>
    )


}

export default Search;