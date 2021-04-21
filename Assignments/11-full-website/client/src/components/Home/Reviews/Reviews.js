import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState(['emni']);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    // console.log(reviews[0]);

    return <section className="mt-5" id="review">
        <h3 className="text-center">Reviews</h3>
        <div id="carouselExampleIndicators" className="carousel slide mt-4" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner text-center">
                <div className="carousel-item active">
                    <div className="card mt-3" style={{ height: '200px' }}>
                        <div className="card-body d-flex flex-column justify-content-center">
                            <h5 className="card-title">{reviews[0].name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{reviews[0].designation}, {reviews[0].company}</h6>
                            <p className="card-text">{reviews[0].reviews}</p>
                        </div>
                    </div>
                </div>

                {
                    reviews.map(review =>
                        <div className="carousel-item">
                            <Review review={review}></Review>
                        </div>
                    )
                }

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </section>;
};

export default Reviews;