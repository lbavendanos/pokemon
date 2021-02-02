export interface Props {
  name: string
  image: Image
  description: string
}

interface Image {
  src: string
  alt: string
}

function Card(props: Props) {
  return (
    <div className="rounded overflow-hidden shadow">
      <div className="h-24 bg-green-300"></div>
      <div className="flex justify-center items-center bg-white w-24 h-24 rounded-full border-solid p-3 mx-auto -mt-12">
        <img
          src={props.image.src}
          alt={props.image.alt}
          className="w-full h-full object-fill"
        />
      </div>
      <div className="text-center px-3 pb-6 pt-2">
        <h3 className="text-black text-xl bold font-sans uppercase">
          {props.name}
        </h3>
        <p className="mt-2 text-md font-sans font-light text-gray-500">
          {props.description}
        </p>
      </div>
    </div>
  )
}

export default Card
