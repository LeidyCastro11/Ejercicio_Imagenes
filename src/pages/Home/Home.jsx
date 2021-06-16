import React from 'react'
import { Title, Cuerpo, Footer, Todo} from '../../Components'
import Galeria from '../../Components/Galeria'

const Home = () => {
    return(
    <>
      <Title />
      <Todo />
      <Cuerpo />
      <Footer />
      <Galeria />
    </>
    )
} 

export default Home;