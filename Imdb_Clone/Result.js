import React from 'react'
import ResultFinal from './ResultFinal'

function Result({results,openPopup}) {
    return (
        <section className="result">
            {results.map(result =>(
                <ResultFinal key={result.imdbID} result={result} openPopup={openPopup}></ResultFinal>
            ))}
        </section>
    )
}

export default Result
