import { Button, Typography } from "@material-tailwind/react";
import { useState } from "react";


const Home = () => {



  const [count, setCount] = useState(0);

  const handleIncre = () => {
    setCount((prev) => prev + 1);
    console.log(count);
  }
  const om = () => {
    setCount((prev) => prev - 1);

  }

  return (
    <div className="p-4">
      <div className=" max-w-[200px] flex flex-col items-center space-y-3">

        <div className="flex items-center gap-3">
          <Typography className="text-center" variant="h3">{count}</Typography>
          <Typography>
            {count !== 0 && `${count % 2 == 0 ? `Even Number` : 'Odd Number'}`}</Typography>
        </div>
        <Button
          onClick={handleIncre}
          size="sm" color="green">Increment</Button>

        <Button
          disabled={count === 0}
          onClick={om}
          size="sm" color="pink">Decrement</Button>

      </div>
    </div>
  )
}
export default Home