import './App.css'
import { useNavigate } from 'react-router-dom'
import ArrowRight from './icons/arrow-right'

function App() {
  const navigate = useNavigate()

  const handleRedirect = (route: string) => {
    navigate(route)
  }

  return (
    <>
      <div className='container-expo'>
        <div className='expo-header'>
            <p>Ing. Sistemas</p>
            <div className='expo-image-content'>
              <div className='expo-image-ing_system'>
                <figure>
                  <img src='https://media-public.canva.com/MADpjjh27sA/1/thumbnail.png' alt=''/>
                </figure>
              </div>
              <div className='expo-header-video'>
                <video src='https://drive.google.com/file/d/1P04uF7JRRWF6z0hwj8npUhUnevIK8bs3/view?usp=drivesdk' autoPlay controls>
                  Video introductivo 
                </video>
              </div>
              <div className='expo-image-software'>
                <figure>
                  <img src='https://media-public.canva.com/jEF5c/MAE2OxjEF5c/1/t.png' alt=''/>
                </figure>
              </div>
            </div>
        </div>
        <div className='expo-contain-up'>
          <div className='expo-bd'>
            <div>
              <p className='expo-bd-title'>Base de Datos</p>
              <p>
                Una base de datos es una colección de datos que se organizan de una manera específica para permitir una recuperación y manipulación eficientes. Se puede considerar como un sistema de archivo electrónico donde se almacena, administra y se accede a la información.
                <br />
                Existen varios tipos de bases de datos, incluidas las relacionales, jerárquicas, de red, orientadas a objetos y NoSQL. Cada tipo tiene su propia estructura y sistema de gestión únicos.
              </p>
            </div>
            <div>
              <figure>
                <img src='https://idital.com/wp-content/uploads/2021/03/Base-de-datos.png' alt='bd-image'/>
              </figure>
              <div className='button-arrow' onClick={() => handleRedirect('/detail/db')}>
                <p>Ver mas</p>
                <ArrowRight />
              </div>
            </div>
          </div>
          <div className='expo-structure'>
            <div>
              <p className='expo-structure-title'>Estructura y arquitectura de los computadores</p>
              <p>
              La estructura y arquitectura de computadores es una disciplina esencial para la creación de sistemas informáticos que sean eficientes, escalables y fáciles de mantener. Un diseño bien pensado puede mejorar significativamente el rendimiento de una computadora y permitir el desarrollo de nuevas aplicaciones y tecnologías informáticas.
              </p>
            </div>
            <div>
              <figure>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2jxG3PGn0yDtHMdGI_Z5KxGE09So5vyWueQ&usqp=CAU' alt='structure'/>
              </figure>
              <div className='button-arrow' onClick={() => handleRedirect('/detail/structure')}>
                <p>Ver mas</p>
                <ArrowRight />
              </div>
            </div>
          </div>
          <div className='expo-cloud'>
            <div>
              <p className='expo-cloud-title'>Cloud</p>
              <p>
                Cloud (nube): Es simplemente un medio de almacenamiento y uso compartido de datos.
                <br/>
                Cloud computing: tecnología formada por una red mundial de servidores remotos que permite el acceso, almacenamiento y procesamiento de datos a través de Internet.
              </p>
            </div>
            <div>
              <figure>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEkeMdEwnG2DG6Tpy2hILep9VIpTmeXm479Q&usqp=CAU' alt='cloud'/>
              </figure>
              <div className='button-arrow' onClick={() => handleRedirect('/detail/cloud')}>
                <p>Ver mas</p>
                <ArrowRight />
              </div>
            </div>
          </div>
        </div>
        <div className='expo-contain-down'>
          <div className='expo-redes'>
            <div>
              <p className='expo-redes-title'>Redes y computación </p>
              <p>
                La red de ordenadores o red informarica, es aquel conjunto de computadoras conectadas entre ellas, de tal forma que el transporte de informacion sea veloz, segura y precisa.
              </p>
            </div>
            <div>
              <figure>
                <img src='https://cdn-icons-png.flaticon.com/512/1554/1554361.png' alt='redes-image'/>
              </figure>
              <div onClick={() => handleRedirect('/detail/redes&computing')} className='button-arrow'>
                <p>Ver mas</p>
                <ArrowRight />
              </div>
            </div>
          </div>
          <div className='expo-ciber'>
            <div>
              <p className='expo-ciber-title'>Ciberseguridad</p>
              <p>
              La Ciberseguridad, también conocida como seguridad digital o seguridad informática, viene siendo una practica que tiene como fin la protección de la información digital, protección de dispositivos y activos del usuario.
              </p>
            </div>
            <div>
              <figure>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa_TP_Zt_OxUBGVHH0n6SZ-cC7g9CF5nrXCw&usqp=CAU' alt='ciber-image'/>
              </figure>
              <div>
                <div onClick={() => handleRedirect('/detail/ciberseguridad')} className='button-arrow'>
                <p>Ver mas</p>
                <ArrowRight />
              </div>
              </div>
            </div>
          </div>
          <div className='expo-bgd'>
            <div>
              <p className='expo-bgd-title'>Big Data</p>
              <p>
                La Big Data se refieren a la colección de técnicas, tecnologías y herramientas utilizadas para analizar, procesar y extraer información valiosa de grandes colecciones de datos que son demasiado complejos y grandes para gestionarlos con métodos tradicionales. Big data abarca datos con una mayor variedad y que aparecen en volúmenes crecientes y a un ritmo más rápido. también se le conoce como "las tres V"
              </p>
            </div>
            <div>
              <figure>
                <img src='https://farolbi.com.br/wp-content/uploads/2017/06/voce-conhece-os-5-vs-do-big-data.jpeg' alt='bgd-image'/>
              </figure>
              <div onClick={() => handleRedirect('/detail/big-data')} className='button-arrow'>
                <p>Ver mas</p>
                <ArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
