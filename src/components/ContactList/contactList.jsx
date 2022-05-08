import style from './contactList.module.css';
import PropTypes from "prop-types";

export const ContactList = ({ filterContacts, clickDelete}) => { 
    return <ul className={ style.list}>
        {filterContacts.map(({ id, name, number }) => (
            <li key={id} className={ style.item}>
                {name}: {number}
                <button type='button' className={style.button} onClick={()=>clickDelete(id)}>Delete</button>
            </li>
        ))}
    </ul>
}

ContactList.propTypes = {
    filterContacts: PropTypes.arrayOf(PropTypes.object),
    clickDelete: PropTypes.func.isRequired
};