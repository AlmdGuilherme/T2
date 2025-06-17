import { Component } from "react";

type props = {
    tema: string
}

export default class FormularioCadastroCliente extends Component<props> {
    
    render() {
        return (
            <div className='formCliente'>
                <form className="formInfos">
                    <div className='cliInfos'>
                        <div>
                            <label className='infoLbl' htmlFor="first_name">Nome:</label>
                            <input id="first_name" type="text" className="validate" />
                        </div>
                        <div>
                            <label className='infoLbl' htmlFor="telefone">Nome Social:</label>
                            <input id="telefone" type="text" className="validate" />
                        </div>
                        <div>
                            <label className='infoLbl' htmlFor="telefone">Telefone:</label>
                            <input id="telefone" type="text" className="validate" />
                        </div>
                        <div className="cli-newInfos datesDiv">
                            <div>
                                <label className="infoLbl" htmlFor="cpf">CPF:</label>
                                <input id="cpf" type="text" className="validate" />
                            </div>
                            <div>
                                <label className='infoLbl' htmlFor="dataEmissaoCpf">Data de emissão:</label>
                                <input id="dataEmissaoCpf" type="date" className="validate" />
                            </div>
                        </div>
                        <div className="cli-newInfos datesDiv">
                            <div>
                                <label className='infoLbl' htmlFor="rg">RG:</label>
                                <input id="rg" type="text" className="validate" />
                            </div>
                            <div>
                                <label className='infoLbl' htmlFor="dataEmissaoRg">Data de Emissão:</label>
                                <input id="dataEmissaoRg" type="date" className="validate" />
                            </div>
                        </div>
                    </div>
                    <button className='btnForm' type="submit" name="action">Submit
                        <i className="material-icons right">send</i>
                    </button>
                </form>
            </div>
        )
    }
}