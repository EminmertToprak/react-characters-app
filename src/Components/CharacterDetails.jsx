import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function CharacterDetails() {
	const { characterId } = useParams();
	const [singleCharacter, setSingleCharacter] = useState({});

	useEffect(() => {
		axios
			.get(`https://ih-crud-api.herokuapp.com/characters/${characterId}`)
			.then((response) => {
				setSingleCharacter(response.data);
			})
			.catch((error) => {
				console.log('Error getting character details from the API...');
				console.log(error);
			});
	}, []);

	return (
		<div className="CharacterDetails">
			<h2>Name: {singleCharacter.name}</h2>
			<p>Occupation: {singleCharacter.occupation}</p>
			<p>Weapon: {singleCharacter.weapon}</p>
			<Link to="/">Back</Link>
		</div>
	);
}

export default CharacterDetails;
