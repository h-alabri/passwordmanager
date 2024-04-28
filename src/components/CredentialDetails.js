import { useCredentialsContext } from '../hooks/useCredentialsContext';
import { useAuthContext } from '../hooks/useAuthContext';
import icon from '../assets/icon.png';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const CredentialDetails = ({ credential }) => {
  const { dispatch } = useCredentialsContext();
  const { user } = useAuthContext();

  const handleClick = async () => {
    if (!user) {
      return;
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/credentials/${credential._id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: 'DELETE_CREDENTIAL', payload: json });
      }
    } catch (error) {
      console.error('Error deleting credential:', error);
    }
  };

  const handleDomainClick = () => {
    window.open(`http://${credential.domain}`, '_blank');
  };

  return (
    <div className="credential">
      <div className="credential-details">
        <img src={icon} alt="Icon" className="box-image" />
        <div className="box-text">
          <h4 id="goto" onClick={handleDomainClick}>{credential.domain}</h4>
          <p id="flexit"><strong>Username: &nbsp;</strong><span id="copytoclipboard" onClick={() => navigator.clipboard.writeText(credential.username)}>{credential.username}</span></p>
          <p id="flexit"><strong>Password: &nbsp;</strong><span id="copytoclipboard" onClick={() => navigator.clipboard.writeText(credential.pwd)}>{credential.pwd}</span></p>
          <p>{formatDistanceToNow(new Date(credential.createdAt), { addSuffix: true })}</p>
        </div>
        <span className="material-symbols-outlined" id="deleteButton" onClick={handleClick}>delete</span>
      </div>
    </div>
  );
};

export default CredentialDetails;
