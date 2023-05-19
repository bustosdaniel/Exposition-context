import './styles.css'
import ArrowLeft from '../icons/arrow-left'
import { useNavigate } from 'react-router-dom'
import Bigdata from '../assets/big-data.png'
import SevenBd from '../assets/seven-image-bd.png'
import Models from '../assets/modelo-bd.png'

export default function BigData() {
  const navigate = useNavigate()
   
  const handleBack = () => {
    navigate('/')
  }
  return (
    <div className='container-bd'>
      <div onClick={handleBack} className='container-icon'>
        <ArrowLeft />
        <p>Volver</p>
      </div>
      <div className='container-bd-data'>
        <p className='bd-data-title'>Big Data</p>
        <div className='bd-data-content'>
          <div>
            <p>
              La Big Data se refieren a la colección de técnicas, tecnologías y herramientas utilizadas para analizar, procesar y extraer información valiosa de grandes colecciones de datos que son demasiado complejos y grandes para gestionarlos con métodos tradicionales. Big data abarca datos con una mayor variedad y que aparecen en volúmenes crecientes y a un ritmo más rápido. también se le conoce como "las tres V".
              <br />
              <br/>
              El término "big data" se refiere a la gran cantidad, velocidad y variedad de datos generados en diversos campos , como redes sociales , sensores, dispositivos móviles , transacciones financieras y registros médicos, entre otros. La capacidad de analizar y comprender estos datos puede proporcionar información crucial que se puede utilizar para tomar decisiones  comerciales ,información decisiones de mercadotecnia ,que se puede utilizar para tomar decisiones comerciales , decisiones de marketing y decisiones de investigación científica, entre otras cosas. Los datos respaldan el análisis estadístico , el aprendizaje automático , la extracción de datos y las técnicas de visualización de datos para obtener información útil y relevante de grandes conjuntos de datos .
            </p>
          </div>
          <div className='bd-data-image'>
            <figure>
              <img src='https://farolbi.com.br/wp-content/uploads/2017/06/voce-conhece-os-5-vs-do-big-data.jpeg' alt=''/>
            </figure>
          </div>
        </div>
      </div>
      <div className='bd-data-tv'>
        <p className='bd-tv-title'>Las tres V el big data</p>
        <div className='tv-content'>
          <div className='tv-image'>
            <figure>
              <img src={Bigdata} alt=''/>
            </figure>
          </div>
          <div>
            <p>
              La Big Data se compone de tres elementos fundamentales, conocidos como las "3 V":
              <br/>
              <br />
              <b>Volumen</b>
              <br/>
              <b>Velocidad</b>
              <br/>
              <b>Variedad</b>
            </p>
            <br/>
            <p>
              <b>El volumen</b> se refiere a la enorme cantidad de datos generados a partir de muchas fuentes.  El volumen de datos ha crecido exponencialmente con el tiempo debido al creciente uso de dispositivos conectados a Internet , redes sociales y sistemas de seguridad , entre otras cosas .
            </p>
            <br />
            <p>
              <b>Velocidad:</b> se refiere a la rapidez con la que se generan los datos y la necesidad de procesarlos en tiempo real. La velocidad se ha vuelto crítica en muchos ámbitos como el comercio electrónico, la atención médica, las finanzas y la seguridad.
            </p>
            <br />
            <p>
              <b>Variedad:</b> Se refiere a la variedad de formatos de datos y tipos de datos generados.  Los datos pueden ser estructurados (por ejemplo, números en una base de datos), semiestructurados (por ejemplo, datos XML ) o no estructurados (por ejemplo, texto, imágenes y videos).
            </p>
          </div>
        </div>
      </div>
      <div className='bd-data-sv'>
        <div className='sv-content'>
          <div className='sv-image'>
            <figure>
              <img src={SevenBd} alt='logo'/>
            </figure>
          </div>
          <div>
            <p>
              También, varias organizaciones quisieron expandir “las 3 V” originales, las cuales agregaron llamándolo “las 7 V”.
              <br />
              <br />
              <b>Veracidad</b>
              <br />
              <b>Variabilidad</b>
              <br />
              <b>Valor</b>
              <br />
              <b>Visualización</b>
            </p>
          </div>
        </div>
      </div>
      <div className='bd-data-text'>
        <div className='bd-data-verac'>
          <p className='bd-verac-title'>Veracidad</p>
          <br/>
          <div>
            <p style={{fontSize: 18, fontWeight: 400}}>
              La variedad de las fuentes y la complejidad de procesamiento puede llevar a desafíos en la evaluación de la calidad de los datos
            </p>
          </div>
        </div>
        <div className='bd-data-variab'>
          <p className='bd-variab-title'>Variabilidad</p>
          <br/>
          <div>
            <p style={{fontSize: 18, fontWeight: 400}}>
              La variación en los datos produce una amplia variación en su calidad. Se pueden requerir recursos adicionales para identificar, procesar o filtrar los datos de baja calidad para hacerlos más útiles
            </p>
          </div>
        </div>
        <div className='bd-data-val'>
          <p className='bd-val-title'>Valor</p>
          <br/>
          <div>
            <p style={{fontSize: 18, fontWeight: 400}}>
              A veces, los sistemas y procesos que se encuentran son suficientemente complejos que utilizar los datos para y extraer algo de valor puede volverse muy difícil.
            </p>
          </div>
        </div>
        <div className='bd-data-vis'>
          <p className='bd-vis-title'>Visualización</p>
          <br/>
          <div>
            <p style={{fontSize: 18, fontWeight: 400}}>
              necesitamos representarlos visualmente de manera que sean legibles y accesibles, para encontrar patrones y claves ocultas en el tema a investigar.
            </p>
          </div>
        </div>
      </div>
      <div className='bd-data-models'>
        <p className='bd-models-title'>Modelos de datos de big data</p>
        <div className='bd-models'>
          <div>
            <p>
              El modelo de datos en Big Data responde a una infraestructura bien definida, la cual es comúnmente llamada “arquitectura Big Data”. Es esta arquitectura o modelo de datos entre capas la que responde al correcto análisis y procesamiento de datos a gran escala. El modelo de datos se refiere a la estructura y organización de los datos utilizados en el análisis de grandes conjuntos.  Los datos se distinguen por su gran volumen , velocidad y variedad , lo que implica que se generan y recopilan a un ritmo  elevado , en grandes cantidades, y en varios formatos y tipos.
            </p>
          </div>
          <div className='models-text-content'>
            <div className='models-image'>
              <figure>
                <img src={Models} alt='photo'/>
              </figure>
            </div>
            <div className='models-text'>
              <p>
                Los modelos de pases en la Big Data se componen de varias etapas o componentes. En términos generales, se pueden dividir en las siguientes partes:
                <br/>
                <br />
                <b>Recopilación de datos</b>
                <br/>
                <b>Pre procesamiento de datos</b>
                <br/>
                <b>Análisis exploratorio de datos</b>
                <br/>
                <b>Selección de variables</b>
                <br/>
                <b>Construcción del modelo</b>
                <br/>
                <b>Evaluación del modelo</b>
                <br/>
                <b>Interpretación y aplicación de resultados</b>
              </p> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
