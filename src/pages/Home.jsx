import { TimelineCompo } from "../components/TimelineCompo"

const persons = [
  {
    name: 'John Doe',
    age: 25,
    profession: 'Web Developer'
  },
  {
    name: 'Jane Doe',
    age: 22,
    profession: 'Web Designer'
  },
  {
    name: 'Jack Doe',
    age: 30,
    profession: 'Software Engineer'
  }
]

const Home = () => {



  return (
    <div className="p-5">


      <TimelineCompo persons={persons} />





    </div>
  )
}
export default Home