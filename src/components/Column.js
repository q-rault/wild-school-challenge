function ColumnItem() {
	return <li>Argonaute test</li>
}

function Column1() {
	return (
	    <ul className='w-33 mt0'>
			<ColumnItem />
			<ColumnItem />
			<ColumnItem />
			<ColumnItem />
	    </ul>
	);
}


function Column2() {
	return (
	    <ul className='w-third mt0'>
			<ColumnItem />
			<ColumnItem />
			<ColumnItem />
	    </ul>
	);
}

function Column3() {
	return (
	    <ul className='w-third mt0'>
			<ColumnItem />
			<ColumnItem />
	    </ul>
	);
}


export {Column1,  Column2, Column3};