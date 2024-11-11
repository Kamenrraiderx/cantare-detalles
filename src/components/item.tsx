import Image from 'next/image'
import Link from 'next/link'

interface ItemCardProps {
  imageUrl: string
  title: string
  price: number
  name: string
}

export default function ItemCard({ imageUrl, title, price, name }: ItemCardProps) {

  return (
    <Link
      className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out group transform hover:shadow-xl"
      href={`/special-details/${name}`}
    >
      <div className="relative overflow-hidden aspect-square">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className={`transition-transform duration-300 group-hover:scale-110 scale-100 ease-in-out`}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-xl font-bold text-blue-600">${price.toFixed(2)}</p>
      </div>
    </Link>
  )
}