
const RankingGrid = ({ items, imgArr }) => {
    const rankingGrid = [];
    const cellCollectionTop = [];
    const cellCollectionMiddle1 = [];
    const cellCollectionMiddle2 = [];
    const cellCollectionBottom = [];

    function pushCellMarkupToArr(cellCollection, rankNum, rowLabel) {
        if (rankNum > 0) {
            var item = items.find(o => o.ranking === rankNum);
            cellCollection.push(<div id={`rank-${rankNum}`} className="rank-cell"></div>);
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
            rankNum = (a === 1) ? 0 : (numCells * (rowNum - 1)) + a - rowNum;

            if (rowNum === 1) {
                currCollection = cellCollectionTop;
                label = "Top Tier";
            }
            else if (rowNum === 2) {
                currCollection = cellCollectionMiddle1;
                label = "Middle 1 Tier";
            }
            else if (rowNum === 3) {
                currCollection = cellCollectionMiddle2;
                label = "Middle 2 Tier";
            }
            else if (rowNum === 4) {
                currCollection = cellCollectionBottom;
                label = "Bottom Tier";
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