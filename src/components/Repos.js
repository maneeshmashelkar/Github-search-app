import Axios from "axios";
import { useEffect, useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const Repos = ({ repos_url }) => {
  const [repos, setRepos] = useState([]);

  const fetchRepos = async () => {
    const { data } = await Axios.get(repos_url);
    setRepos(data);
  };

  useEffect(() => {
    fetchRepos();
  }, [repos_url]);

  return (
    <ListGroup className="mb-4">
      {repos.map((repo) => (
        <ListGroupItem key={repo.id}>
          <div className="text-primary">{repo.name}</div>
          <div className="badge bg-warning text-dark">{repo.language}</div>
          <div className="text-primary">{repo.description}</div>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default Repos;
