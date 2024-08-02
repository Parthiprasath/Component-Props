
import './PlayerProfile.css';
import PropTypes from 'prop-types';

function UserProfile({ name, age, Role }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Role: {Role}</p>
    </div>
  );
}

UserProfile.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    Role: PropTypes.string,
  };

export default UserProfile;
