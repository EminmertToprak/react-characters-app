import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import CharacterList from './Components/CharacterList';
import CharacterDetails from './Components/CharacterDetails';

function App() {
	const [characters, setCharacters] = useState(null);

	useEffect(() => {
		axios
			.get('https://ih-crud-api.herokuapp.com/characters')
			.then((response) => {
				setCharacters(response.data);
			})
			.catch((error) => {
				console.log('Error getting characters from the API');
				console.log(error);
			});
	}, []);

	return (
		<>
			<h1>React Characters App</h1>
			{characters && <h2>Number of characters: {characters.length}</h2>}
			<hr />

			<Routes>
				<Route
					path="/"
					element={<CharacterList charactersArr={characters} />}
				/>
				<Route path="/characters/:characterId" element={<CharacterDetails />} />
				<Route path="/about" element={<p>ABOUT PAGE</p>} />
			</Routes>
		</>
	);
}

export default App;
