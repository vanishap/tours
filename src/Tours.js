import Tour from './Tour';

const Tours = ({tours, deleteTour})=>{
    return (
        <section>
            <div className='title'>
            <h2>My Tours</h2>
            </div>
            <div>
                {tours.map(tour=>{
                    return <Tour key = {tour.id} {...tour} deleteTour={deleteTour}/>
                })}
            </div>
            
        </section>
    )
}
export default Tours;