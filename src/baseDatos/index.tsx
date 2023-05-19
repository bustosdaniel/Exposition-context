import './styles.css'
import Nosql from '../assets/nosql.jpg'
import Sql from '../assets/sql.jpg'
import ArrowLeft from '../icons/arrow-left'
import { useNavigate } from 'react-router-dom'

export default function DataBase() {
  const navigate = useNavigate()
   
  const handleBack = () => {
    navigate('/')
  }
  return (
    <div className='container-db'>
      <div onClick={handleBack} className='container-icon'>
        <ArrowLeft />
        <p>Volver</p>
      </div>
      <p className='container-db-title'>Base de Datos</p>
      <div className='db-content-intro'>
        <p>
          Una base de datos es una colección de datos que se organizan de una manera específica para permitir una recuperación y manipulación eficientes. Se puede considerar como un sistema de archivo electrónico donde se almacena, administra y se accede a la información.
          <br />
          Existen varios tipos de bases de datos, incluidas las relacionales, jerárquicas, de red, orientadas a objetos y NoSQL. Cada tipo tiene su propia estructura y sistema de gestión únicos.
        </p>
        <figure>
          <img src='https://idital.com/wp-content/uploads/2021/03/Base-de-datos.png' alt='db-image'/>
        </figure>
      </div>
      <div className='container-db-data'>
        <div className='db-rela-content'>
          <p className='db-rela-title'>Base de datos <br/> relacionales</p>
          <p>
            las bases de datos relaciones son el tipo base de datos más utilizado. Organizan los datos en tabla, que constan de filas y columnas. Cada fila presenta un solo registro, mientras que cada columna representa una información específica sobre ese registro. 
            <br />
            <br/>
            Las bases de datos relacionales usan lenguaje de consulta estructurado (SQL) para administrar y manipular datos. SQL permite a los usuarios crear, modificar yeliminar datos de la base de datos.
          </p>
        </div>
        <div className='db-object-content'>
          <p className='db-object-title'>Base de datos orientada a objetos</p>
          <p>
            Las bases de datos orientadas a objetos almacenan datos en objetos, que contienen tanto datos como los métodos utilizados ara manipular esos datos. Este tipo de base de datos es particularmente útil para almacenar relaciones y estructuras de datos complejas.
            <br />
            <br />
            Se utilizan a menudo en el desarrollo de software, donde los objetos se pueden integrar facilmente en el codigo. Sin embargo, requieren sistemas de gestión especializados y no se utilizan tanto como en la base de datos relacionales.
          </p>
        </div>
        <div className='db-sql-content'>
          <p className='db-sql-title'>Base de datos <br/> NoSQL</p>
          <p>
            las bases de datos NoSQL son un tipo base de datos más reciente ue no utiliza la estructura tabular tradicional de la base de datos relacionales. En su lugar, utilizan una variedad de diferentes modelos de datos, como documento, valor-clave y gráfico.
            <br />
            <br />
            Las bases de datos NoSQL a menudo se usan para aplicaciones de big data, donde las bases de datos relacionales tradicionales ueden tener dificultades para manejar el volumen y la complejidad de los datos. También son altamente escalables y pueden manejar grandes cantidades de datos en múltiples servidores.
          </p>
        </div>
      </div>
      <div className='db-gestion-data'>
        <div className='db-gestion-content'>
          <p className='db-gestion-title'>Sistema de gestión de bases de datos</p>
            <p>
              Un sistema de administración de bases de datos (DBMS) es una aplicación de software que se utiliza para administrar y manipular base de datos. 
              <br />
              Proporciona a los usuarios herramientas para crear, modificar y eliminar datos de la base de datos, así como herramientas para consultar y analizar datos.
              <br />
              <br />
              Algunos DBMS populares incluyen Oracle, MySQL, Microsoft SQL Server y MongoDB. Cada DBMS tiene sus propias fotalezas y debilidades y se adapta a diferentes tipos de aplicaciones.
            </p>
        </div>
        <div className='db-gestion-image'>
          <figure>
            <img src={Sql} alt=''/>
          </figure>
          <figure>
            <img src={Nosql} alt='logo'/>
          </figure>
        </div>
      </div>
    </div>
  )
}

