const DisPlaySec = () => {
  return (
    <div className='grid grid-cols-2 items-center'>

      <div className='h-[450px]'>
        <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_kkflmtur.json" background="transparent" speed="1" loop="" autoplay="true"></lottie-player>
      </div>


      <div className='space-y-3'>
        <h1 className='text-3xl font-bold'>Hi I'm John</h1>
        <div>
          <em className="hover:scale-110 hover:text-pink-700 cursor-pointer transition-all duration-75 ">Some Dev, Freelancer, Rounder</em>
        </div>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ab in nihil nesciunt vel laboriosam, itaque impedit accusamus consequuntur rem ipsa veniam cum ipsam reprehenderit. Inventore provident similique at voluptatibus!</p>
      </div>




    </div>
  )
}
export default DisPlaySec