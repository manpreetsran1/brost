import React from 'react'
import AppImages from '../Themes/AppImages'
import appImages from '../Themes/AppImages'

const CarouselArrow = ({ direction, onClick }) => {
    let leftArrowClassName = "leftArrow"
    let rightArrowClassName = "rightArrow"
    let classes = `c-arrow  ${direction == "left" ? leftArrowClassName : rightArrowClassName}`;
    return (
        <span className={classes} onClick={onClick} style={{ position: "absolute",marginRight:"-13%",marginLeft:"-115px" }}>
            {direction == "right" ?
                <img alt="arrowLeft" src={AppImages.rArrow} className="arrowImage" width="80%" /> :
                <img alt="arrowRight" src={AppImages.lArrow} className="arrowImage" width="80%"/>
            }
        </span>
    )
}

export default CarouselArrow