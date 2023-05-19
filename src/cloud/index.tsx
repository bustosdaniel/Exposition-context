import './styles.css'
import ArrowLeft from '../icons/arrow-left'
import { useNavigate } from 'react-router-dom'
import Ventaja from '../assets/ventajas.png'
import Iaas from '../assets/iaas.png'
import IaasImage from '../assets/iaas-image.png'
import Paas from '../assets/paas.png'
import Saas from '../assets/saas.png'
import SaasImage from '../assets/saas-image.png'
import Stadistics from '../assets/stadistics.png'

export default function Cloud() {
  const navigate = useNavigate()
   
  const handleBack = () => {
    navigate('/')
  }
  return (
    <div className='container-cloud'>
      <div onClick={handleBack} className='container-icon'>
        <ArrowLeft />
        <p>Volver</p>
      </div>
      <p className='container-cloud-title'>Cloud</p>
      <div className='cloud-intro-image'>
        <p>
          La computación en la nube, conocida también como servicios en la nube, informática en la nube, nube de cómputo o simplemente "la nube", es el uso de una red de servidores remotos conectados a internet para almacenar, administrar y procesar datos, servidores, bases de datos, redes y software. 
          <br />
          <br />
          Es simplemente un medio de almacenamiento y uso compartido de datos.
          Cloud computing:tecnología formada por una red mundial de servidores remotos que permite el acceso, almacenamiento y procesamiento de datos a través de Internet.
        </p>
        <figure>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEkeMdEwnG2DG6Tpy2hILep9VIpTmeXm479Q&usqp=CAU' alt='cloud'/>
        </figure>
      </div>
      <div className='cloud-types-content'>
        <div className='cloud-types-image'>
          <p>Tipos de nube</p>
          <figure>
            <img src='https://www.netelip.com/blog/wp-content/uploads/2014/01/netelip-cloud-computing-nube.jpg' alt=''/>
          </figure>
        </div>
        <div className='cloud-types-context'>
          <div className='cloud-types-public'>
            <p className='cloud-public-title'>Pública</p>
            <p>
              Toda la infraestructura informática está ubicada en las instalaciones del proveedor de servicios en la nube, que presta estos servicios al cliente a través de Internet.
            </p>
          </div>
          <div className='cloud-types-private'>
            <p className='cloud-private-title'>Privada</p>
            <p>
              Es de uso exclusivo de una organización, esta se puede alojar en la ubicación de la organización o en el centro de datos del proveedor de la nube.
            </p>
          </div>
          <div className='cloud-types-hybrid'>
            <p className='cloud-hybrid-title'>Híbrida</p>
            <p>
              Entorno informático mixto donde las aplicaciones se ejecutan mediante una combinación de servicios de computación, almacenamiento y servicios en distintos entornos.
            </p>
          </div>
        </div>
      </div>
      <div className='cloud-service-content'>
        <p className='cloud-service-title'>Ventajas y desventajas del cloud</p>
        <div className='cloud-ventajas'>
          <figure>
            <img src={Ventaja} alt='logo'/>
          </figure>
          <div className='cloud-text-ventajas'>
            <p className='cloud-ventajas-title'>Ventajas:</p>
            <p>
              -No es necesaria una infraestructura costosa.
              <br/>
              -Accesibilidad.
              <br/>
              -Recuperación de datos.
            </p>
            <br/>
            <p className='cloud-desventajas-title'>Desventajas:</p>
            <p>
              -Conexión a Internet. 
              <br/>
              -Costes adicionales.
              <br/>
              -Vulnerabilidad a ciberataques.
              <br/>
              -Privacidad
            </p>
          </div>
        </div>
        <div className='cloud-service'>
          <p className='service-title'>Tipos de servicios de cloud</p>
          <div className='service-content'>
            <p>
              Los servicios de nube son infraestructuras, plataformas o sistemas de software que alojan los proveedores externos y que se ponen a disposición de los usuarios a través de Internet.
              <br/>
              <br/>
              La infraestructura como servicio (Iaas).
              <br/>
              <br/>
              La plataforma como servicio (Paas).
              <br/>
              <br/>
              El software como servicio (Saas)
            </p>
            <figure>
              <img src={Iaas} alt='logo'/>
            </figure>
          </div>
        </div>
      </div>
      <div className='cloud-iaas-content'>
        <div className='cloud-iaas'>
          <div>
            <p className='cloud-iaas-title'>Iaas</p>
            <p>
              Es la base del servicio y contiene los bloques fundamentales para la TI en la nube, pues proporciona los servicios y estructuras necesarios sobre los cuales se construyen los otros servicios.
            </p>
          </div>
          <div>
            <figure>
              <img src={IaasImage} alt='Iaas'/>
            </figure>
          </div>
        </div>
        <div className='cloud-paas'>
          <div>
            <p className='cloud-paas-title'>Paas</p>
            <p>
              Es un entorno en la nube integral que incluye todo lo que los desarrolladores necesitan para crear, ejecutar y gestionar aplicaciones, desde servidores y sistemas operativos hasta redes, almacenamiento, middleware, herramientas y más.
            </p>
          </div>
          <div>
            <figure>
              <img src={Paas} alt='Paas'/>
            </figure>
          </div>
        </div>
        <div className='cloud-saas'>
          <div>
            <p className='cloud-saas-title'>Saas</p>
            <p>
              (Software as a Service). Tipo de cloud que ofrece a los usuarios finales una aplicación de nube junto con toda su infraestructura de TI y plataformas subyacentes a través de un explorador de Internet.
            </p>
          </div>
          <div>
            <figure>
              <img src={Saas} alt='Saas'/>
            </figure>
          </div>
        </div>
      </div>
      <div className='cloud-sys'>
        <div className='cloud-stadistics'>
          <div>
            <p className='stadistics-title'>Estadísticas del sector Saas</p>
            <p>
              <b>Crece el gasto en SaaS en todo el mundo: </b>Datos recientes sugieren que en 2023, la industria tendrá un valor estimado de<b> 208 mil millones de dólares.</b> Se espera que esta cifra aumente en los próximos años.
              <br/>
              <br/>
              <b>El mercado de SaaS puede crecer un 11% cada año:</b> Se espera que el SaaS tenga una tasa de crecimiento anual compuesta <b>del 11% entre 2022 y 2028.</b> 
            </p>
          </div>
          <div>
            <figure>
              <img src={SaasImage} alt=''/>
            </figure>
          </div>
        </div>
        <div className='cloud-structure'>
          <div>
            <p className='structure-title'>Estructura del Cloud</p>
            <p>
              - En la parte superior de la nube encontramos a los clientes. 
              <br/>
              - Como primera capa SaaS, tenemos el Software que será usado por los Clientes y soportado por la segunda capa.
              <br/>
              - En esta segunda capa PaaS, tenemos el conjunto de instrucciones, herramientas… que darán soporte a la capa SaaS.
              <br/>
              - La última capa IaaS, de nivel más bajo, da soporte a toda la estructura PaaS.
            </p>
          </div>
          <div>
            <figure>
              <img src={Stadistics} alt=''/>
            </figure>
          </div>
        </div>
      </div>
    </div>
  )
}

