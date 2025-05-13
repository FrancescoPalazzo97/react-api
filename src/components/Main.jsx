import React from 'react'

const Main = ({ actresses }) => {
    return (
        <main className="row gy-4">
            {actresses.map((actress) => (
                <div className="col-lg-3 col-m-4 col-sm-6 d-flex align-items-stretch" key={actress.id}>
                    <div className="card">
                        <img src={actress.image} className="card-img-top" alt={actress.name} />
                        <div className="card-body">
                            <h5 className="card-title">{actress.name}</h5>
                            <p className="card-text">{actress.biography}</p>
                            <p className="card-text">{actress.birth_year}</p>
                            <p className="card-text">{actress.nationality}</p>
                            <p className="card-text">{actress.awards}</p>
                        </div>
                    </div>
                </div>
            ))}
        </main>
    )
}

export default Main
