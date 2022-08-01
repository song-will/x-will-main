const createEntry = (port = 33901, ip = '124.221.44.7') => {
  return process.env.NODE_ENV === 'development' ? `http://localhost:${port}` : `http://${ip}:${port}`
}
export default [
  {
    name: 'comp1',
    entry: createEntry(33901),
    activeRule: '/comp1',
    container: '#sub-container',
    props: {
      // superRouter: router
    }
  },
  {
    name: 'comp2',
    entry: createEntry(33902),
    activeRule: '/comp2',
    container: '#sub-container',
    props: {
      // superRouter: router
    }
  }
]
