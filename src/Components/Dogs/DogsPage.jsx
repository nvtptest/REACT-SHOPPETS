import DogsCard from "./DogsCard";

const DogsPage = (props) => {
    const {allDogs} = props;

    return ( 
        <>
        <section className="dogs-container">
            {allDogs.map((dog, index) => {
                return(
                    <>
                    <div key={dog.id}>
                        <DogsCard dog={dog}/>
                    </div>
                    </>
                )
            })}
        </section>
        </>
     );
}
 
export default DogsPage;