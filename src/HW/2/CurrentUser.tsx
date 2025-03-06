import {UserType} from './HW2';

export const CurrentUser = ({id, name, age, address}: UserType) => {
    return (
        <li key={id} id={`hw02-user-${id}`}>
            <strong>{name}</strong> (Age: {age})<strong> Address: </strong>
            {address.street}, {address.city}
        </li>
    );
};
