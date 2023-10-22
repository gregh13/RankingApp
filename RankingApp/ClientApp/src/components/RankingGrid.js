
const RankingGrid = ({ items, imgArr }) => {
    const rankingGrid = [];
    const cellCollectionTop = [];
    const cellCollectionMiddle1 = [];
    const cellCollectionMiddle2 = [];
    const cellCollectionBottom = [];



    return (

        <div className="rankings">
            {createRankingGrid()}
        </div>
    )

}
export default RankingGrid;