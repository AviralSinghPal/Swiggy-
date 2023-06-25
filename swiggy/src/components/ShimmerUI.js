
const EmptyCard = () =>{
    return (
        <>
    
        <div className="card">
          <div >
              <img alt="product pic" className="card-img" src="" />
          </div>
          <div className="card-info">
            <p className="text-title"></p>
            <p className="text-body"></p>
            <p className="text-body"></p>
            <p className="text-body"></p>
      
          </div>
          <div className="card-footer">
            <span className="text-title"></span>
          </div>
        </div>
      </>
        )
}

const Shimmer = () =>{

        <>
        <h1>Loadinnggg//////////////..........</h1>
        <EmptyCard/>
        <EmptyCard/>
        <EmptyCard/>
        <EmptyCard/>
        <EmptyCard/>
        <EmptyCard/>
        <EmptyCard/>
        <EmptyCard/>
        <EmptyCard/>
        <EmptyCard/>
        <EmptyCard/>
        <EmptyCard/>
        <EmptyCard/>
        </>
}

export default Shimmer;