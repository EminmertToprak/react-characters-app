import { Link } from 'react-router-dom';
import CharacterDetails from './CharacterDetails';

function CharacterList({ charactersArr }) {
	return (
		<div>
			{charactersArr === null ? (
				<p> loading... </p>
			) : (
				charactersArr.map((charObj, i) => {
					return (
						<section className="card" key={i}>
							<h2>Name: {charObj.name}</h2>
							<p>Occupation: {charObj.occupation}</p>
							<p>Weapon: {charObj.weapon}</p>
							<Link to={`/characters/${charObj.id}`}>More Details</Link>
							<hr />
						</section>
					);
				})
			)}
		</div>
	);
}

export default CharacterList;
