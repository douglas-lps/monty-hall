import styles from "./styles.module.css"
import PortaModel from "@/model/porta"
import Presente from '~/components/presente'
interface PortaProps {
  value: PortaModel
  onChange: (novaPorta: PortaModel) => void
}

export default function index(props: PortaProps) {
  const porta = props.value
  const selecionada = porta.selecionada && !porta.aberta ? styles.selecionada : ''

  const alterarSelecao = e => props.onChange(porta.alternarSelecao())
  const abrir = e => {
    e.stopPropagation()
    props.onChange(porta.abrir())
  }

  function renderizarPorta() {
    return (
      
        <div className={styles.porta}>
          <div className={styles.numero}> {porta.numero} </div>
          <div className={styles.macaneta} onClick={abrir} ></div>
        </div>
      
    )
  }

  return (
    <div className={styles.area} onClick={alterarSelecao}>
      <div className={`${styles.estrutura} ${selecionada}`}>
        {
          porta.fechada ? 
          renderizarPorta() : 
          porta.temPresente ? <Presente></Presente> : false
        }
      </div>
      <div className={styles.chao}></div>
    </div>
  )
}