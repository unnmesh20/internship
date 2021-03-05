import React from 'react'

function Popup( {selected,closePopup} ) {
    return (
        <section className="popup">
            <div className="content">
            <h3>{selected.Title} <span>{selected.Year}</span></h3>
            <p className="rating">{selected.imdbRating}</p>
            <div className="plot">
                <img src={selected.Poster} alt=""/>
                <p>{selected.Plot}</p>
            </div>
    <button className="close" onClick={closePopup}>{closePopup}</button>
            </div>
        </section>
    )
}

export default Popup
