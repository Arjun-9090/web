import { Avatar, Card, IconButton, Typography } from "@material-tailwind/react";
import { TrashIcon } from '@heroicons/react/24/solid'

const TABLE_HEAD = ["Avatar", "Username", "Bio", "Remove"];



export function TableCompo({ persons }) {
  return (
    <Card className=" overflow-scroll max-w-[700px]">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {persons.map(({ name, bio, avatar }, index) => {
            const isLast = index === persons.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
              <tr key={name}>

                <td className={classes}>
                  <Avatar src={avatar} />
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {bio}
                  </Typography>
                </td>
                <td className={classes}>
                  <button>
                    <TrashIcon className="h-[25px] text-pink-700" />
                  </button>



                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}