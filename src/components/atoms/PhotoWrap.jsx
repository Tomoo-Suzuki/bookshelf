import React from "react";
import "_scss/atoms/_photoWrap";

const PhotoWrap = (props) => {
  const photo = props.data;
  const ranking = Number(props.rank) + 1;
  let icon_rank;
  let special;
  if (props.pageType === 1) {
    if (props.rank === 0) {
      special = "icon_gold";
    } else if (props.rank === 1) {
      special = "icon_silver";
    } else if (props.rank === 2) {
      special = "icon_bronze";
    }
    icon_rank = (
      <span className={`icon_rank ` + special}>
        <span>{ranking}</span>
      </span>
    );
  }
  return (
    <a href={`/detail/` + photo.id_book} className="photoWrap">
      {icon_rank}
      <span className="imgBox">
        <img src={photo.url_img} alt={photo.name_book} />
      </span>
    </a>
  );
};
export default PhotoWrap;