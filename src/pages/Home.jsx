import { fa, faker } from "@faker-js/faker";
import { Button, IconButton } from "@material-tailwind/react";
import { useState } from "react";
import AppDialog from "../components/AppDialog";

const Home = () => {

  const [users, setUser] = useState([]);


  const addUser = () => {
    const newUser = {
      userId: faker.string.uuid(),
      name: faker.internet.displayName(),
      avatar: faker.image.avatarGitHub(),
      bio: faker.person.bio()
    };
    setUser((prev) => [...prev, newUser]);
  }
  const removeUser = (index) => {
    users.splice(index, 1);
    setUser((prev) => [...prev]);
  }


  return (
    <div className="p-5 space-y-4">

      <Button
        onClick={addUser}
        size="sm" color="green" ripple>Add Post</Button>


      {users.map((user, i) => {
        return <div className="flex gap-4 items-center" key={user.userId}>
          <h1 className="text-xl">{user.bio}</h1>
          <AppDialog removeUser={removeUser} index={i} />


        </div>
      })}

    </div>
  )
}
export default Home