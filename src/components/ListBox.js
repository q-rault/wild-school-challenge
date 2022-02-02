const ListBox=({argonautsByColumn}) => {
	const listsByColumn=[];
	for (let column = 0; column < 3; column++) {
		listsByColumn[column] = argonautsByColumn[column].map((argonaut, i) => {
			return (
				<li
					key={argonaut.id}
				>{argonaut.name}
				</li>
			);
		})
	}

	return (
	    <div className="ListBox">
	    	<h2>Membres de l'équipage</h2>
		    <div className='columnContainer'>
		    	<ul className='w-third mt0'>
		    		{listsByColumn[0]}
		    	</ul>
		    	<ul className='w-third mt0'>
		    		{listsByColumn[1]}
		    	</ul>
		    	<ul className='w-third mt0'>
		    		{listsByColumn[2]}
		    	</ul>
	    	</div>
	    </div>
	);
}

export default ListBox;