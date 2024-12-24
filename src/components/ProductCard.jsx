const ProductCard = ({ label, detail }) => {



  return (
    <div className="max-w-[200px] border-2 border-black ">

      <div>
        <img src="https://images.unsplash.com/photo-1732565277341-ebb37d748a87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8" alt="" />
      </div>

      <div className="px-2 pb-3 space-y-2">
        <h1 className="text-2xl">{label}</h1>
        <p>{detail}</p>
      </div>
    </div>
  )
}
export default ProductCard