import {Column1,Column2, Column3} from './Column';
const ListBox=({argonauts}) => {
	const argonautsListElements = argonauts.map((argonaut, i) => {
		return (
			<li
				key={argonaut.id}
			>{argonaut.name}
			</li>
		);
	})


	return (
	    <div>
	    	<h2>Membres de l'équipage</h2>
		    <div className='flex flex-row'>
		    	<ul className='w-third mt0'>
		    		{argonautsListElements}
		    	</ul>
		    	<Column2 />
		    	<Column3 />
	    	</div>
	    </div>
	);
}

export default ListBox;