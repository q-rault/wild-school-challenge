import {Column1,Column2, Column3} from './Column';

function ListBox() {
    return (
    <div>
    	<h2>Membres de l'équipage</h2>
	    <div className='flex flex-row'>
	    	<Column1 />
	    	<Column2 />
	    	<Column3 />
    	</div>
    </div>
    );
}

export default ListBox;