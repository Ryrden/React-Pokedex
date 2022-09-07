import React, {useState, useEffect} from "react";
import Card from "./Card";
import Pokeinfo from "./Pokeinfo";
import axios from "axios";
const Main = () => {
	const [pokeData, setPokeData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
	const [nextUrl, setNextUrl] = useState("");
	const [prevUrl, setPrevUrl] = useState("");
	const [pokeDex, setPokeDex] = useState();

	useEffect(() => {
		const pokeFun = async () => {
			setLoading(true);
			const res = await axios.get(url);

			setNextUrl(res.data.next);
			setPrevUrl(res.data.previous);
			getPokemon(res.data.results);
			setLoading(false);
		};

		const getPokemon = async (data) => {
			data.map(async (pokemon) => {
				let pokemonRecord = await axios.get(pokemon.url);

				setPokeData((state) => {
					state = [...state, pokemonRecord.data];
					state.sort((a, b) => (a.id > b.id ? 1 : -1));
					return state;
				});
			});
		};

		pokeFun();
	}, [url]);

	return (
		<>
			<div className="container">
				<div className="left-content">
					<Card pokemon={pokeData} loading={loading} infoPokemon={(poke) => setPokeDex(poke)} />

					<div className="btn-group">
						<button
							className="button"
							onClick={() => {
								setUrl(prevUrl);
								setPokeData([]);
							}}
						>
							Previous
						</button>
						<button
							className="button"
							onClick={() => {
								setUrl(nextUrl);
								setPokeData([]);
							}}
						>
							Next
						</button>
					</div>
				</div>
				<div className="right-content">
					<div className="poke-stat">
						<Pokeinfo pokemon={pokeDex} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Main;
