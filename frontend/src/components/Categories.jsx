import { categories } from "../assets/data"

const Categories = ({ category, setCategory }) => {
  return (
    <section className="max-padd-container py-1 xl:py-10" id="shop">
        <div className="flex items-start gap-6 flex-wrap">
            {categories.map(item => (
                <div
                    onClick={() => setCategory( prev => prev === item.name ? "All": item.name)}
                    id={item.name}
                    key={item.name}
                    className={`${category === item.name ? "bg-[#73bbff]": "bg-primary"} py-3 px-2 flex items-center gap-0 rounded-3xl text-center cursor-pointer`}
                >
                    <img src={item.image} alt="Category Image" height={111} width={111} />
                    <h4 className=" medium-18 ">{item.name}</h4>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Categories
