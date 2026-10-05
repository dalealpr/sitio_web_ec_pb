import Carrusel from '../components/common/Carrusel'

const HomePage = () => {
  return (
    <div className="flex-1 border-4 border-red-500">
      <Carrusel />
      <h3>HOMEPAGE</h3>
      <section className="flex-1 p-18 border-3 border-cyan-500">
        <p>Seccion 1</p>
      </section>
      <section className="flex-1 p-18 border-3 border-cyan-500">
        <p>Seccion 2</p>
      </section>
      <section className="flex-1 p-18 border-3 border-cyan-500">
        <p>Seccion 3</p>
      </section>
      <section className="flex-1 p-18 border-3 border-cyan-500">
        <p>Seccion 4</p>
      </section>
      <section className="flex-1 p-18 border-3 border-cyan-500">
        <p>Seccion 5</p>
      </section>
      <section className="flex-1 p-18 border-3 border-cyan-500">
        <p>Seccion 6</p>
      </section>
      <section className="flex-1 p-18 border-3 border-cyan-500">
        <p>Seccion 7</p>
      </section>
    </div>
  )
}

export default HomePage
