
const RankingGrid = ({ items, imgArr, drag, allowDrop, drop }) => {
    const rankingGrid = [];
    const cellCollectionTop = [];
    const cellCollectionMiddle1 = [];
    const cellCollectionMiddle2 = [];
    const cellCollectionBottom = [];

    function pushCellMarkupToArr(cellCollection, rankNum, rowLabel) {
        if (rankNum > 0) {
            var item = items.find(o => o.ranking === rankNum);
            cellCollection.push(<div id={`rank-${rankNum}`} onDrop={drop} onDragOver={allowDrop} className="rank-cell">
                {(item != null) ? <img id={`item-${item.id}`} src={imgArr.find(o => o.id === item.imageId)?.image} draggable="true" onDragStart={drag} /> 
                                : null}
            </div>);
        }
        else {
            cellCollection.push(<div className="row-label">
                <h4>{rowLabel}</h4>
            </div>);
        }
    }

    function createCellsForRow(rowNum) {
        var rankNum = 0;
        var currCollection = [];
        var label = "";
        const numCells = 5;

        for (var a = 1; a <= numCells; a++) {
            // To handle first column of Tier labels
            rankNum = (a === 1) ? 0 : (numCells * (rowNum - 1)) + a - rowNum;

            if (rowNum === 1) {
                currCollection = cellCollectionTop;
                label = "Best";
            }
            else if (rowNum === 2) {
                currCollection = cellCollectionMiddle1;
                label = "Good";
            }
            else if (rowNum === 3) {
                currCollection = cellCollectionMiddle2;
                label = "Mediocre";
            }
            else if (rowNum === 4) {
                currCollection = cellCollectionBottom;
                label = "Worst";
            }

            pushCellMarkupToArr(currCollection, rankNum, label);
        }


    }

    function createCellsForRows() {
        const maxRows = 4;
        for (var row = 1; row <= maxRows; row++) {
            createCellsForRow(row);
        }
    }

    function createRowsForGrid() {
        rankingGrid.push(<div className="rank-row top-tier">{cellCollectionTop}</div>)
        rankingGrid.push(<div className="rank-row middle1-tier">{cellCollectionMiddle1}</div>)
        rankingGrid.push(<div className="rank-row middle2-tier">{cellCollectionMiddle2}</div>)
        rankingGrid.push(<div className="rank-row bottom-tier">{cellCollectionBottom}</div>)

        return rankingGrid;
    }

    function createRankingGrid() {
        createCellsForRows();
        return createRowsForGrid();
    }

    return (

        <div className="rankings">
            {createRankingGrid()}
        </div>
    )

}
export default RankingGrid;