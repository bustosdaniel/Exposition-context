import './styles.css'
import ArrowLeft from '../icons/arrow-left'
import { useNavigate } from 'react-router-dom'
import Osi from '../assets/osi.png'
import Redes from '../assets/redes-image.png'
import Cable from '../assets/cable.png'
import Modem from '../assets/modem.png'
import Wan from '../assets/wan.png'
import Utils from '../assets/utils.png'
import Coffe from '../assets/coffe.png'
import Games from '../assets/games.png'
import Info from '../assets/informatica.png'
import Web from '../assets/web-image.png'

export default function Computing() {
  const navigate = useNavigate()
   
  const handleBack = () => {
    navigate('/')
  }
  return (
    <div className='container-computing'>
     <div onClick={handleBack} className='container-icon'>
        <ArrowLeft />
        <p>Volver</p>
      </div>  
      <div className='computing-context-content'>
        <div>
          <p className='computing-title'>Redes y computacion</p>
          <p>
            Una red de computadoras, también llamada red de ordenadores o red informática, es un conjunto de equipos conectados por medio de cables, señales, ondas o cualquier otro método de transporte de datos, que comparten información (archivos), recursos (CD-ROM, impresoras, etc.)
            <br/>
            <br/>
            La red de ordenadores o red informarica, es aquel conjunto de computadoras conectadas entre ellas, de tal forma que el transporte de informacion sea veloz, segura y precisa.
          </p>
        </div>
        <div>
          <figure>
            <img src='https://cdn-icons-png.flaticon.com/512/1554/1554361.png' alt=''/>
          </figure>
        </div>
      </div>
      <div className='osi-text-content'>
        <p className='computing-osi-title'>Modelo Osi</p>
        <p>Open systems interconnections</p>
      </div>
      <div className='computing-osi'>
        <p className='computing-osi-text'>
          Es un modelo de conexion de sistemas mediante la red, que su objetivo es ordenar por "capas" los diferentes procesos que intervienen en este proceso de intercambio o envio de datos, para su buen funcionamiento y la ausencia de errores.
          <br />
          <br />
          <b>Capa fisica: </b>Agrupa lo fisico en cuanto a lo que incliye la intercoexion de red (cables)
          <br />
          <br />
          <b>Enlace de datos: </b>Se compone de las herramientas que ayudan a la transferencia de datos, esta capa se divide en 2, LLC "Control de enlace logico" la cual se encarga de convertir la señal en "1 y 0" y MAC "Contol de acceso medio" que se encarga de mover los datos de sistema a sistema.
        </p>
        <div className='computing-osi-image'>
          <figure>
            <img src={Osi} alt=''/>
          </figure>
        </div>
        <div className='computing-osi-capas'>
          <p>
            <b>Red: </b>Esta se encarga de buscar la forma en que los datos fluyan de manera rapida y segura (ip,ipsec,nat(routers))
            <br/>
            <br/>
            <b>Transporte: </b>Se asegura de que los datos lleguen por el camino que se establecio en la capara de red, mediente distintos protocolos.
            <br/>
            <br/>
            <b>Sesion:</b> Se encarga de controlar el dialogo entre sistemas para el buen proceso de envio de datos.
            <br/>
            <br/>
            <b>Presentacion: </b>Presenta los datos que se transpotaron en la red, mediante diversos formatos para ser visibles en la siguiente capa.
            <br/>
            <br/>
            <b>Aplicacion: </b>Comunicacion entre la app y la red (navegadores)
          </p>
        </div>
      </div>
      <div className='computing-redes'>
        <p className='redes-title'>Redes</p>
        <div className='redes-content'>
          <div className='redes-content-image'>
            <figure>
              <img src={Redes} alt=''/>
            </figure>
          </div>
          <div className='redes-content-context'>
            <p className='redes-content-title'>Area local y ampliada</p>
            <p>
              Una red informatica es una conexion de equipos conectados por distintos medios que normalmente su objetivo es el transporte de datos entre ellos, nos enfocaremos en 2, las redes de area local y las redes ampliadas.
              <br />
              <br />Básicamente, la comunicación dentro de una red informática es un proceso en el que existen dos roles bien definidos para los dispositivos conectados, emisor y receptor, que se van asumiendo y alternando en distintos instantes de tiempo. También hay mensajes, que es lo que estos roles intercambian. La estructura y el modo de funcionamiento de las redes informáticas actuales están definidos en varios estándares, siendo el más extendido de todos el modelo TCP/IP, basado en el modelo de referencia o teórico OSI.
            </p>
          </div>
        </div>
      </div>
      <div className='computing-redes-content'>
        <div className='computing-content-rl'>
          <div>
            <p className="computing-rl-title">Redes Locales</p>
            <p>
              <b>(LAN)</b> redes de area local, se trata de un tipo de conexion de dispositivos en una misma extancia para compartir informacion o recursos, setrata de una red local que hace posible que dispositivos en un mismo espacio de puedan conectar entre eellos para un fin en especifico.
              <br />
              <br />
              <b>(WLAN) </b>Redes de area local inalambrica, esta funciona algo parecido a la "LAN" solo que con un sistema   llamado wi-fi el cual hace posible la transferencia de datos pero de una forma que no sea necesario el uso de artefactos fisicos para lograr el envio de datos.
            </p>
          </div>
          <div className='computing-rl-image'>
            <figure>
              <img src={Cable} alt=''/>
            </figure>
            <figure>
              <img src={Modem} alt=''/>
            </figure>
          </div>
        </div>
        <div className='computing-content-ra'>
          <div>
            <p className="computing-ra-title">Redes ampliadas</p>
            <p>
              <b>(WAN)</b> Las redes ampliadas es la red que conecta ehre si a las oficinas, los centros de datos, las aplicaciones y en general el almacenamiento en la nube, su objetivo es conectar "sucursales" que no pueden estar conectadas a una LAN o WLAN, un ejemplo son las grandes empresas que tiene sucursales en todo el mundo y se usa una WAN para conectar sus oficinas y lograr compartir o enviar datos.
            </p>
          </div>
          <div className='computing-ra-image'>
            <figure>
              <img src={Wan} alt=''/>
            </figure>
          </div>
        </div>
      </div>
      <div className='computing-protocols'>
        <div className='protocol-content'>
          <div>
            <p className='protocol-title'>¿Qué es un protocolo de Internet y para qué se utilizan en la informática?</p>
            <p>
              Es un tipo de protocolo de red que se utiliza en las conexiones online que conectan a los ordenadores a nivel mundial. Entre ellos el más conocido es el Internet protocol (IP) el cual se encarga de enviar y recibir datos, otorgando una dirección IP a cada dispositivo de la red para identificar fácilmente su origen.
            </p>
          </div>
          <div className='protocol-image-content'>
            <figure>
              <img src={Info} alt='photo'/>
            </figure>
          </div>
        </div>
        <div className='web-content'>
          <div>
            <p className='web-title'>La web y sus protocolos</p>
            <p>
              Los protocolos para la transmisión de datos en internet más importantes son TCP (Protocolo de Control de Transmisión) e IP (Protocolo de Internet). De manera conjunta (TCP/IP) podemos enlazar los dispositivos que acceden a la red, algunos otros protocolos de comunicación asociados a internet son POP, SMTP y HTTP.
            </p>
          </div>
          <div className='web-content-image'>
            <figure>
              <img src={Web} alt='image'/>
            </figure>
          </div>
        </div>
      </div>
      <div className='computing-protocols-cts'>
        <p className='protocols-title'>Características de un protocolo de internet</p>
        <div className='computing-cts-content'>
          <div className='cts-dya-content'>
            <div className='cts-dya-direct'>
              <p className='dya-direct-title'>Directo/Indirecto</p>
              <p>
                Un protocolo si funciona dentro de una misma red y une un punto con otro se considera directo, mientras que si une dos puntos dentro de dos redes diferentes será indirecto, ya que en dicho proceso intervendrán otros protocolos.
              </p>
            </div>
            <div className='cts-dya-asim'>
              <p className='cts-asim-title'>Simétrico/asimétrico</p>
              <p>
                Simétrico es aquel que se utiliza para comunicar dos usuarios o equipos con los mismos permisos y funciones dentro de la red. Uno asimétrico será aquel que comunica equipos con funciones y pesos diferentes dentro de toda la red. Este último es el más utilizado en Internet.
              </p>
            </div>
          </div>
          <div className='cts-myn-content'>
            <div className='cts-myn-mon'>
              <p className='myn-mon-title'>Monolitico/Estructurado</p>
              <p>
                Nos referimos a un protocolo de una sola capa, siendo esta en la que ocurren todas sus funciones, mientras que en uno estructurado tendrá incidencia en varias capas del modelo de comunicación.
              </p>
            </div>
            <div className='cts-myn-nor'>
              <p className='myn-nor-title'>Normalizado/no normalizado</p>
              <p>
                Normalizado es aquel desarrollado únicamente para realizar una función específica que no varía y no necesita ser conectado a un agente externo. Esto es fundamental en la comunicaciones digitales actualmente.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='protocols-utils-content'>
        <div>
          <p className='utils-title'>Protocolos mas utilizuados</p>
          <p>
            - TCP (Transmission-Control-Protocol)
            <br/>
            <br/>
            - IP (Internet Protocol)
            <br/>
            <br/>
            - HTTP (HyperText Transfer Protocol)
            <br/>
            <br/>
            - ARP (Address Resolution Protocol)
            <br/>
            <br/>
            - FTP (File Transfer Protocol)
            <br/>
            <br/>
            - SMTP (Simple Mail Transfer Protocol)
            <br/>
            <br/>
            - POP (Post Office Protocol)
          </p>
        </div>
        <div className='utils-image'>
          <figure>
            <img src={Utils} alt=''/>
          </figure>
        </div>
      </div>
      <div className='computing-types-web'>
        <div className='types-web-static'>
          <div>
            <p className='web-static-title'>Páginas Web estáticas</p>
            <p>
              Operan mediante la descarga de un fichero programado en código HTML, en el que están todas las instrucciones para que el navegador reconstruya la página Web, accediendo a las ubicaciones de sus elementos y siguiendo un orden preconcebido, rígido, que no permite la interacción con el usuario.
            </p>
          </div>
          <div className='web-static-image'>
            <figure>
              <img src={Coffe} alt='logo'/>
            </figure>
          </div>
        </div>
        <div className='types-web-dinamic'>
          <div>
            <p className='web-dinamic-title'>Páginas Web estáticas</p>
            <p>
              Operan mediante la descarga de un fichero programado en código HTML, en el que están todas las instrucciones para que el navegador reconstruya la página Web, accediendo a las ubicaciones de sus elementos y siguiendo un orden preconcebido, rígido, que no permite la interacción con el usuario.
            </p>
          </div>
          <div className='web-dinamic-image'>
            <figure>
              <img src={Games} alt='logo'/>
            </figure>
          </div>
        </div>
      </div>
    </div>
  )
}
