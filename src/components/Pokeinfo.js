import React from "react";

const Pokeinfo = ({pokemon}) => {
	return (
		<>
			{!pokemon ? (
				"Select a pokemon"
			) : (
				<>
					<h1>{pokemon.name}</h1>
					<img
						src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
						alt="Pokemon sprite"
					/>
					<div className="abilities">
						{pokemon.abilities.map((poke) => {
							return (
								<>
									<div className="ability">
										<h2>{poke.ability.name}</h2>
									</div>
								</>
							);
						})}
					</div>
					<div className="base-stat">
						{pokemon.stats.map((poke) => {
							return (
								<>
									<div className="stat">
										<h3>
											{poke.stat.name}: {poke.base_stat}
										</h3>
									</div>
								</>
							);
						})}
					</div>
				</>
			)}
		</>
	);
};

export default Pokeinfo;
