import React from "react";
import StarIcon from "../../assets/images/star.svg";
import HalfStarIcon from "../../assets/images/half-star.svg";

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 !== 0 ? 1 : 0;

  const renderStars = () => {
    const stars = [];
    // Render full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<img key={i} src={StarIcon} alt="star-icon" />);
    }
    // Render half star
    if (halfStars === 1) {
      stars.push(
        <img key={fullStars} src={HalfStarIcon} alt="half-star-icon" />
      );
    }
    return stars;
  };

  return (
    <div style={{ display: "flex" }}>
      <span>{rating}</span> {renderStars()}
    </div>
  );
};

export default StarRating;
