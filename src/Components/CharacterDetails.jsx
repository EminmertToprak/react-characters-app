import { useParams, Link } from 'react-router-dom';

function CharacterDetails() {
	const { characterId } = useParams();

	return (
		<div className="CharacterDetails">
			<p>Display Details For Character... {characterId}</p>
			<br />
			<Link to="/">Back</Link>
		</div>
	);
}

export default CharacterDetails;
