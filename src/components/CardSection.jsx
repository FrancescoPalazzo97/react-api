import React from 'react'

const CardSection = ({ show }) => {

    return (
        <section className="row gy-4">
            {show.map((item) => (
                <div className="col-lg-3 col-m-4 col-sm-6 d-flex align-items-stretch" key={item.id}>
                    <div className="card">
                        <img src={item.image} className="card-img-top" alt={item.name} />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.biography}</p>
                            <p className="card-text">{item.birth_year}</p>
                            <p className="card-text">{item.nationality}</p>
                            <p className="card-text">{item.awards}</p>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default CardSection
