import React from 'react'

function ResultFinal({result,openPopup}) {
    return (
        <div className="result-final">
            <img src={result.Poster} alt="" onClick={() =>openPopup(result.imdbID)}/>
            <h4>{result.Title}</h4>
            
        </div>
    )
}

export default ResultFinal
