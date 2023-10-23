
const RankingGrid = ({ items, imgArr }) => {
    const rankingGrid = [];
    const cellCollectionTop = [];
    const cellCollectionMiddle1 = [];
    const cellCollectionMiddle2 = [];
    const cellCollectionBottom = [];

    function createCellForRow(rowNum) {
        var rankNum = 0;
        var currCollection = [];
        var label = "";
        const numCells = 5;

        for (var a = 1; a <= numCells; a++) {
            rankNum = (a === 1) ? 0 : (numCells * (rowNum - 1)) + a - rowNum;
        }


    }

    function createCellsforRows() {
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