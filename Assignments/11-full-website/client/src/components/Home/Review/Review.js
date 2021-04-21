import React from 'react';

const Review = ({ review }) => {
    console.log(review);
    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="card mt-3" style={{height: '200px'}}>
                <div className="card-body d-flex flex-column justify-content-center">
                    <h5 className="card-title">{review.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{review.designation}, {review.company}</h6>
                    <p className="card-text">{review.reviews}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;