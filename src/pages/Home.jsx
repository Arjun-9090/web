import { faker } from "@faker-js/faker";
import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { TableCompo } from "../components/TableCompo";

const Home = () => {

  const [users, setUser] = useState([]);

  // const nis = [9, 9];
  // console.log([...nis, 90]);

  const addUser = () => {
    const newUser = {
      userId: faker.string.uuid(),
      name: faker.internet.displayName(),
      avatar: faker.image.avatarGitHub(),
      bio: faker.person.bio()
    };

    setUser((prev) => [...prev, newUser]);

  }


  return (
    <div className="p-5 space-y-5">

      <Button
        onClick={addUser}
        size="sm" color="green" ripple>Add Post</Button>

      {/* {users.map(({ userId, name }) => {
        return <h1>{name}</h1>
      })} */}
      {users.length > 0 && <TableCompo persons={users} />}



    </div>
  )
}
export default Home