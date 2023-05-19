import './styles.css'
import ArrowLeft from '../icons/arrow-left'
import { useNavigate } from 'react-router-dom'
import Risc from '../assets/risc.png'
import Cisc from '../assets/cisc.png'
import Pross from '../assets/procesador.png'
import ProssInt from '../assets/procesador-integral.png'

export default function Structure() {
  const navigate = useNavigate()
    
  const handleBack = () => {
    navigate('/')
  }

  return (
    <div className='container-structure'>
      <div onClick={handleBack} className='container-icon'>
        <ArrowLeft />
        <p>Volver</p>
      </div>
      <p className='container-structure-title'>Estructura y arquitectura de los computadores</p>
      <div className='structure-content-intro'>
        <p>
          La estructura y arquitectura de computadores es una disciplina esencial para la creación de sistemas informáticos que sean eficientes, escalables y fáciles de mantener. 
          <br/>
          <br/>
          Un diseño bien pensado puede mejorar significativamente el rendimiento de una computadora y permitir el desarrollo de nuevas aplicaciones y tecnologías informáticas.
          <br />
          <br />
          Se refiere al diseño y organización de los componentes de una computadora, incluyendo la CPU, la memoria, los dispositivos de entrada y salida y los dispositivos de almacenamiento. 
        </p>
        <figure>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2jxG3PGn0yDtHMdGI_Z5KxGE09So5vyWueQ&usqp=CAU' alt='structure'/>
        </figure>
      </div>
      <div className='structure-content-data'>
        <div className='structure-data-processors'>
          <div className='structure-data-risc'>
            <div>
              <p className='risc-title'>Risc</p>
              <p>
                Se enfocan en ejecutar instrucciones simples, pero lo hacen en ciclos de reloj más cortos. Esto significa que un programa puede ejecutar más instrucciones en el mismo tiempo que uno en un procesador CISC.
              <br/>
              <br/>
                Los procesadores RISC también utilizan una arquitectura de registros en lugar de la memoria como fuente principal de almacenamiento temporal. Ejemplos de procesadores RISC incluyen el ARM y el MIPS.
              </p>
            </div>
            <div className='risc-image'>
              <figure>
                <img src={Risc} alt='image'/>
              </figure>
            </div>
          </div>
          <div className='structure-data-cisc'>
            <div>
              <p className='cisc-title'>Cisc</p>
              <p>
                están diseñados para ejecutar instrucciones complejas en una sola operación de procesamiento, lo que permite que un programa realice múltiples tareas en menos tiempo.
              <br/>  
              <br/>  
                Esto se logra mediante la inclusión de un conjunto amplio y diverso de instrucciones en el procesador, lo que hace que los programas sean más cortos y fáciles de escribir. Ejemplos de procesadores CISC son el Intel x86 y el AMD Athlon.
              </p>
            </div>
            <div className='cisc-image'>
              <figure>
                <img src={Cisc} alt='image'/>
              </figure>
            </div>
          </div>  
        </div>
      </div>
      <div className='processors-data'>
        <p className='processors-title'>Procesadores integrales</p>
        <div className='processors-content-data'>
          <div className='processors-image'>
            <figure>
              <img src={ProssInt} alt='image'/>
            </figure>
          </div>
          <div className='processors-text'>
            <p>
              También conocidos como microcontroladores, son dispositivos electrónicos que combinan en un solo chip un procesador central (CPU), memoria, entradas y salidas digitales y analógicas, y otros componentes necesarios para controlar un sistema. Estos dispositivos están diseñados para realizar tareas específicas, como controlar el funcionamiento de un electrodoméstico, un sistema de iluminación, un motor, una maquinaria industrial, un sistema de seguridad, entre otros.
              <br />
              <br />
              Los procesadores integrados son utilizados en una amplia variedad de aplicaciones debido a su bajo costo, tamaño compacto, y su facilidad de uso y programación. Algunos ejemplos de dispositivos que usan procesadores integrados incluyen teléfonos móviles, cámaras digitales, dispositivos de almacenamiento de datos, sistemas de seguridad y alarmas, sistemas de control de clima y temperatura, y dispositivos médicos.
            </p>
          </div>
          <div className='processors-image'>
            <figure>
              <img src={Pross} alt='image'/>
            </figure>
          </div>
        </div>
      </div>
      <div className='buses-content-data'>
        <p className='buses-title'>Buses</p>
          <div className='buses-data-context'>
            <p>
              Está compuesto por conductos, o vías, que permiten la interconexión de los diferentes componentes, principalmente, con la CPU y la memoria. Los buses se dividen, fundamentalmente, en dos subcategorías principales. El bus es el elemento de comunicación entre los diferentes componentes de un ordenador, y está compuesto por conductos o vías que permiten la interconexión entre la CPU, la memoria y los periféricos.
              <br/>
              <br/>
              Existen dos subcategorías principales: el bus de datos y el bus de direcciones, los cuales se relacionan entre sí en la transmisión de información. El tipo de bus que un ordenador tiene afecta directamente a su velocidad, y esto se debe a su capacidad de transmisión de bits y la velocidad con la que estos bits circulan. En resumen, el bus es un componente crucial en la estructura de un ordenador, que permite la interconexión y transmisión de información entre sus componentes principales.
            </p>
          </div>
        <div className='buses-data-types'>
          <div className='buses-db'>
            <p className='buses-db-title'>Bus de datos</p>
            <p>
              Es un componente fundamental de la arquitectura de un sistema informático, ya que permite la transferencia de datos entre los componentes del sistema. Su ancho tiene un impacto directo en el rendimiento del sistema y es un factor importante a considerar en el diseño de sistemas informáticos.
            </p>
          </div>
          <div className='buses-directions'>
            <p className='buses-directions-title'>Bus de direcciones</p>
            <p>
              es una parte importante de la arquitectura de un sistema informático, ya que permite que el procesador acceda a la memoria y a los dispositivos de entrada/salida del sistema.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
