import './styles.css'
import ArrowLeft from '../icons/arrow-left'
import { useNavigate } from 'react-router-dom'
import Candado from '../assets/candado.png'
import AtackCiber from '../assets/ataque-ciber.jpeg'
import Ciberseguridad from '../assets/ciberseguridad.png'
import Codigo from '../assets/codigo.png'
import Space from '../assets/space-ciber.png'

export default function CiberSeguridad() {
  const navigate = useNavigate()
   
  const handleBack = () => {
    navigate('/')
  }
  return (
    <div className='container-ciber'>
      <div onClick={handleBack} className='container-icon'>
        <ArrowLeft />
        <p>Volver</p>
      </div>
      <div className='container-ciber-intro'>
        <p className='ciber-intro-text'>Ciberseguridad</p>
        <div className='ciber-content'>
          <div>
            <p>
              La Ciberseguridad, también conocida como seguridad digital o seguridad informática, viene siendo una practica que tiene como fin la protección de la información digital, protección de dispositivos y activos del usuario.
              <br/>
              <br/>
              Se encarga de prevenir los ataques informáticos, detectar vulnerabilidades e identificar posibles brechas de seguridad para solucionar las fisuras que ponen en riesgo las redes y dispositivos. También tiene la misión de detectar cualquier tipo de actividad maliciosa contra los sistemas informáticos para detenerla a tiempo y, si no es posible, aplicará las acciones correctivas necesarias para aislar y expulsar esa amenaza en aras de recuperar la información y restablecer la funcionalidad del sistema afectado.
            </p>
          </div>
          <div className='ciber-content-image'>
            <figure>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa_TP_Zt_OxUBGVHH0n6SZ-cC7g9CF5nrXCw&usqp=CAU' alt='ciber'/>
            </figure>
          </div>
        </div>
      </div>
      <div className='ciber-content-data'>
        <div className='ciber-data-rp-content'>
          <p className='data-rp-title'>Diferencia entre retos y desafíos de la Ciberseguridad</p>
          <div className='ciber-data-ryd'>
            <div>
              <p>
                Un reto es un problema muy genérico, algo muy abierto, mientras que en un desafío el foco está más cerrado, es decir, el problema planteado está más definido.
              </p>
            </div>
            <div className='data-ryd-image'>
              <figure>
                <img src={Candado} alt='Candado'/>
              </figure>
            </div>
          </div>
        </div>
        <div className='ciber-data-pa-content'>
          <p className='data-pa-title'>Los principales <br/>ataques</p>
          <div className='ciber-data-pa'>
            <div className='data-pa-image'>
              <figure>
                <img src={AtackCiber} alt='pa'/>
              </figure>
            </div>
            <div>
              <p>
                - Aumento de la ciberdelincuencia
                <br/>
                <br/>
                - Nuevos métodos de ciberestafas
                <br/>
                <br/>
                - Falta de profesionales.
                <br/>
                <br/>
                - Teletrabajo.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='ciber-content-tanc'>
        <div className='ciber-data-ta-content'>
          <p className='data-ta-title'>Tecnologías asociadas</p>
          <div className='ciber-data-ta'>
            <div className='data-ta-image'>
              <figure>
                <img src={Ciberseguridad} alt='ciber'/>
              </figure>
            </div>
            <div>
              <p>
                - Ciberdelincuentes mas preparados.
                <br/>
                <br/>
                - Estafas ciberneticas como el Phishing - Ransomware - Spoofing.
                <br/>
                <br/>
                - Herramientas de IA.
                <br/>
                <br/>
                - La Dark Web.
                <br/>
                <br/>
                - Las criptomonedas.
              </p>
            </div>
          </div>
        </div>
        <div className='ciber-data-nc-content'>
          <p className='data-nc-title'>Normas de la Ciberseguridad</p>
          <div className='ciber-data-nc'>
            <div>
              <p>
                - Phishing
                <br/>
                <br/>
                - Spear Phishing
                <br/>
                <br/>
                - Whaling
                <br/>
                <br/>
                - Malware
              </p>
            </div>
            <div className='data-nc-image'>
              <figure>
                <img src={Codigo} alt='nc'/>
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div className='ciber-content-space'>
        <p className='space-title'>Ciberespacio</p>
        <div className='space-text-content'>
          <div>
            <p>
              El ciberespacio es un espacio virtual creado por la interconexión de redes de computadoras y dispositivos conectados a Internet. Es un espacio digital en el que la información fluye constantemente, permitiendo la comunicación y el intercambio de datos en todo el mundo. Incluye sitios web, redes sociales, correo electrónico, mensajería instantánea y otras formas de comunicación digital, pero también presenta desafíos en cuanto a la privacidad y la seguridad de los datos.
              <br />
              <br />
              Es protagonista de muchos de los momentos clásicos del cine y los videojuegos de los años 80 y 90, cuando todavía no se había masificado el acceso a las redes. Si bien al día de hoy el ser humano promedio no se desconecta en todo el día de Internet, hace tan sólo un par de décadas la mayoría de la gente no sabía qué significaba este término.
            </p>
          </div>
          <div className='space-image'>
            <div>
              <figure>
                <img src={Space} alt=''/>
              </figure>
            </div>
            <div className='space-image-info'>
              <figure>
                <img src='https://i0.wp.com/informacionytic.com/wp-content/uploads/2019/03/ciberespacio.png?resize=670%2C415&ssl=1' alt=''/>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
