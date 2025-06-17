/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'


type props = {
    tema: string
}

export default class ListaCliente extends Component<props> {
    openModal(id: string) {
        const modal = document.getElementById(id) as HTMLElement;
        if (modal) { 
        modal.style.display = 'block';
        }
    }

    closeModal(id:string) {
        const modal = document.getElementById(id) as HTMLElement;
        if (modal) {
        modal.style.display = 'none';
        }
    }


    deleteCliente(id: string){
        const clienteDelete = document.getElementById(id) as HTMLElement
        clienteDelete.remove()
    }
  
    render() {
        return (
            <div className="clienteList">
                <div className="cliente" id="cli1">
                    <p>Cliente 1</p>
                    <div className="buttons-cliente">
                        <button className='btnMore' onClick={() => this.openModal('cliente1')}>Ver mais</button>
                        <button className='deleteCliente' onClick={() => this.deleteCliente('cli1')}>Deletar</button>
                    </div>
                </div>
                <div id="cliente1" className="modal">
                    <div className="modal-content">
                        <div className="modal-header">
                            <span className="close" onClick={()=> this.closeModal('cliente1')}>&times;</span>
                            <h4>Informações do cliente: Cliente 1</h4>
                        </div>
                        <div className="modal-body">
                            <div className="personalInfos">
                                <div className="individualPInfos">
                                    <label htmlFor="nome">Nome: </label>
                                    <p>Cliente 1</p>
                                </div>
                                <div className="individualPInfos">
                                    <label htmlFor="nomeSoCial">Nome Social: </label>
                                    <p>Cliente 1</p>
                                </div>
                                <div className="documents">
                                    <div className='documentGroup'>
                                        <div className="individualDocument">
                                            <div className="documentType">
                                                <label htmlFor="cpf">CPF:</label>
                                                <p>111.111.111-11</p>
                                            </div>
                                            <div className="documentDate">
                                                <label htmlFor="dataEmissaoCpf">Data de Emissão:</label>
                                                <p>01/01/2020</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='documentGroup'>
                                        <div className="individualDocument">
                                            <div className="documentType">
                                                <label htmlFor="rg">RG:</label>
                                                <p>111.111.111-11</p>
                                            </div>
                                            <div className="documentDate">
                                                <label htmlFor="dataEmissaoRg">Data de Emissão:</label>
                                                <p>01/01/2020</p>
                                            </div>
                                        </div>
                                        <div className="individualDocument">
                                            <div className="documentType">
                                                <label htmlFor="rg">RG:</label>
                                                <p>111.111.111-11</p>
                                            </div>
                                            <div className="documentDate">
                                                <label htmlFor="dataEmissaoRg">Data de Emissão:</label>
                                                <p>01/01/2020</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='phonesGroup'>
                                    <div className='individualPhone'>
                                        <label htmlFor="telefone">1° Telefone:</label>
                                        <p>(12) 111929382</p>
                                    </div>
                                    <div className='individualPhone'>
                                        <label htmlFor="telefone">2° Telefone:</label>
                                        <p>(11) 310931091</p>
                                    </div>
                                </div>
                                <div className="personal-consume">
                                    <div className="consumed-products">
                                        <h5>Produtos consumidos:</h5>
                                        <ol className='consumed-list'>
                                            <li>
                                                <p>Produto 1 - R$ 50,00</p>
                                            </li>
                                            <li>
                                                <p>Produto 2 - R$ 30,00</p>
                                            </li>
                                        </ol>
                                    </div>
                                    <div className="consumed-services">
                                        <h5>Serviços consumidos:</h5>
                                        <ol className='consumed-list'>
                                            <li>
                                                <p>Serviço 1 - R$ 100,00</p>
                                            </li>
                                            <li>
                                                <p>Serviço 2 - R$ 80,00</p>
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}