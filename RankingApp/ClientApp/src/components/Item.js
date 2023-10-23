﻿const Item = ({ item, drag, itemImgObj }) => {
    return (
        <div className="unranked-cell">
            <img id={`item-${item.id}`} src={itemImgObj}
                style={{ cursor: "pointer" }} draggable="true" onDragStart={drag}
            />
        </div>

    )
}
export default Item;