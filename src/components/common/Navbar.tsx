import { FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi'
import navbar from '../../data/navbar'

const acciones = [
  { label: 'Buscar', Icon: FiSearch },
  { label: 'Mi cuenta', Icon: FiUser },
  { label: 'Carrito', Icon: FiShoppingCart },
]

const Navbar = () => {
  return (
    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 py-3 px-4 border-2 border-fuchsia-600">
      <div className="justify-self-start border-2 border-amber-500 p-2">Logo Ecommerce</div>

      <nav>
        <ul className="flex gap-8">
          {navbar.map((item) => (
            <li key={item.ruta}>
              <a
                href={item.ruta}
                className="font-medium text-lg hover:text-fuchsia-600 transition-colors"
              >
                {item.nombre}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="justify-self-end flex items-center gap-2 border-2 border-amber-500 p-2">
        {acciones.map(({ label, Icon }) => (
          <button
            key={label}
            type="button"
            aria-label={label}
            className="p-2 rounded-full hover:bg-gray-300 transition-colors cursor-pointer"
          >
            <Icon className="size-5" />
          </button>
        ))}
      </div>
    </div>
  )
}

export default Navbar
