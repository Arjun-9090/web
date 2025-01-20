import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { RemoveDialog } from "./RemoveDilog";
import { useNavigate } from "react-router";

export function BlogCard({ blog: { title, detail, id }, index }) {
  const nav = useNavigate();
  return (
    <Card className="">
      <CardBody>

        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography>
          {detail}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 flex justify-end gap-4">
        <IconButton
          onClick={() => nav(`/edit-form/${id}`)}
          size="sm" color="purple">
          <i className="fas fa-edit" />

        </IconButton>
        <RemoveDialog index={index} />


      </CardFooter>
    </Card>
  );
}