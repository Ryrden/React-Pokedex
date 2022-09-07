import React from "react";

const Card = ({pokemon, loading, infoPokemon}) => {
	return (
		<>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				pokemon.map((poke) => {
					return (
						<div className="card" key={poke.id} onClick={() => infoPokemon(poke)}>
							<h2>{poke.id}</h2>
							<img src={poke.sprites.front_default} alt="which is pokemon?" />
							<h2>{poke.name}</h2>
						</div>
					);
				})
			)}
		</>
	);
};

export default Card;
