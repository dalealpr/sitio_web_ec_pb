const navbar = [
  {
    nombre: 'Productos',
    ruta: '/',
    subrutas: [
      { nombre: 'Subproducto 1', ruta: '/productos/subproducto1' },
      { nombre: 'Subproducto 2', ruta: '/productos/subproducto2' },
    ],
  },
  {
    nombre: 'Aromas',
    ruta: '/servicios',
    subrutas: [
      { nombre: 'Subaroma 1', ruta: '/servicios/subaroma1' },
      { nombre: 'Subaroma 2', ruta: '/servicios/subaroma2' },
    ],
  },
  {
    nombre: 'Marcas',
    ruta: '/cotizaciones',
    subrutas: [
      { nombre: 'Submarca 1', ruta: '/cotizaciones/submarca1' },
      { nombre: 'Submarca 2', ruta: '/cotizaciones/submarca2' },
    ],
  },
  {
    nombre: 'Nosotros',
    ruta: '/contacto',
    subrutas: [
      { nombre: 'Nuestra Historia', ruta: '/contacto/nuestra-historia' },
      { nombre: 'Equipo', ruta: '/contacto/equipo' },
    ],
  },
  {
    nombre: 'Ofertas',
    ruta: '/ofertas',
    subrutas: [],
  },
]

export default navbar
