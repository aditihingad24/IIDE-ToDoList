import React from 'react';
function ListItems(props) {
    return(
        <div>
            <ul className="list-item">
                {props.list.map((item ,index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    )
}
export default ListItems;