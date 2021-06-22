/* eslint-disable jsx-a11y/alt-text */
import { Card, CardBody } from "reactstrap";

const UserCard = ({ user }) => {
  return (
    <Card className="text-center mt-3 mb-4">
      <img
        src={user.avatar_url} 
        className="img-thumbnail"
      />
      <CardBody>
        <div classname="text-primary">Name: {user.name}</div>
        <div classname="text-primary">Loaction: {user.location}</div>
        <div classname="text-primary">
          Available for Hire: {user.hireable ? "Yes" : "No"}
        </div>
        <div classname="text-primary">Followers: {user.followers}</div>
      </CardBody>
    </Card>
  );
};

export default UserCard;
