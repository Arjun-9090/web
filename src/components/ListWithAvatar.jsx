import {
  List,
  ListItem,
  Avatar,
  Card,
  Typography,
} from "@material-tailwind/react";

export function ListWithAvatar({ categories }) {
  return (
    <Card className="max-w-[500px] mt-5">
      <List className="space-y-4">


        {categories?.map((cata) => {
          return <ListItem key={cata.idCategory} className="flex gap-5" >

            <Avatar
              size="xl"
              variant="circular" alt="candice" src={cata.strCategoryThumb} />

            <div>
              <Typography variant="h6" color="blue-gray">
                {cata.strCategory}
              </Typography>
              <p className="line-clamp-3">
                {cata.strCategoryDescription}
              </p>
            </div>
          </ListItem>;
        })}






      </List>
    </Card>
  );
}