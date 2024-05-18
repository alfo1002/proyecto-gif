
export const PokemonCard = ({ id, name, sprites = [] }) => {
    return (
        <section style={{ height: 200 }}>
            <h2 className="text-capitalize"> #{id} - {name} </h2>

            //images
            <div className="d-flex justify-content-center">
                {
                    sprites.map(sprite => (
                        <img key={sprite} src={sprite} alt={name}
                            className="img-thumbnail"
                            style={{ width: 100, height: 100 }}
                        />
                    ))
                }
            </div>
        </section>
    )
}
