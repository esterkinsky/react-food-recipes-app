import { Link } from 'react-router-dom';

function CategoryItem(props) {
	const {
		strCategory,
		strCategoryThumb,
		strCategoryDescription,
	} = props;

	return <div class="card">
		<div class="card-image">
			<img src={strCategoryThumb} alt={strCategory} />
			
		</div>
		<div class="card-content">
			<span class="card-title">{strCategory}</span>
			<p>{strCategoryDescription.slice(0, 120)}...</p>
		</div>
		<div className='card-action'>
			<Link to={`/category/${strCategory}`}>
				Watch category
			</Link>
		</div>
	</div>
}

export { CategoryItem };