import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import './update.css'


let lastTelId = 1
let lastRgId = 1
let lastProdId = 1
let lastServId = 1

export default class UpdateCliente extends Component{

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

  enableEdit(id: string){
    const input = document.getElementById(id) as HTMLElement
    if (input) {
      input.removeAttribute('disabled');
      input.focus()
    }
  }

  enableEditRg(id: string, dateId: string){
    const input = document.getElementById(id) as HTMLElement
    const dateInput = document.getElementById(dateId) as HTMLElement
    if (input && dateInput) {
      input.removeAttribute('disabled');
      input.focus()
      dateInput.removeAttribute('disabled')
    }
  }

  newTelefone(id: string){
    const newIndex = lastTelId + 1;
    lastTelId++
    const div = document.createElement('div')
    div.className = 'cli-newInfos';
    const secondDiv = document.createElement('div');
    secondDiv.className = 'input-infos';
    const label = document.createElement('label');
    label.setAttribute('for', `telefone${newIndex}`);
    label.textContent = 'Telefone:'
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.className = 'validate';
    input.setAttribute('id', `${id}Telefone${newIndex}`);
    secondDiv.append(label, input)
    const spanDelete = document.createElement('span');
    spanDelete.textContent =  '✖';
    spanDelete.className = 'editInfo'
    spanDelete.addEventListener('click', () => {
        div.remove();
    });
    div.append(secondDiv, spanDelete)
    document.getElementById(`${id}TelAdd`)?.appendChild(div)
  }

  newRg(id: string){
    const newIndex = lastRgId + 1
    lastRgId++
    const div = document.createElement('div')
    div.className = 'cli-newInfos RgInfos';
    const secondDiv = document.createElement('div');
    secondDiv.className = 'input-infos';
    const label = document.createElement('label');
    label.setAttribute('for', `rg${newIndex}`);
    label.textContent = 'RG:'
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.className = 'validate';
    input.setAttribute('id', `${id}Rg${newIndex}`);
    secondDiv.append(label, input)
    const thirdDiv = document.createElement('div')
    thirdDiv.className = 'input-infos';
    const labelDate = document.createElement('label');
    labelDate.setAttribute('for', `rgDate${newIndex}`);
    labelDate.textContent = 'Data de emissão:'
    const inputDate = document.createElement('input');
    inputDate.setAttribute('type', 'date');
    inputDate.className = 'validate';
    inputDate.setAttribute('id', `${id}RgDate${newIndex}`);
    thirdDiv.append(labelDate, inputDate)
    const spanDelete = document.createElement('span');
    spanDelete.textContent =  '✖';
    spanDelete.className = 'editInfo'
    spanDelete.addEventListener('click', () => {
      div.remove()
    })
    div.append(secondDiv, thirdDiv, spanDelete)
    document.getElementById(`${id}RgAdd`)?.appendChild(div)
  }

  deleteProdServ(id: string){
    document.getElementById(id)?.remove();
  }

  adicionarProdServ(id: string, tipo: string){
    const mainDiv = document.createElement('div')
    mainDiv.className = 'individal-prodServ';
    mainDiv.id = tipo === 'produto' ? `${id}Prod${lastProdId}` : `${id}Serv${lastServId}`;
    const fisrtDiv = document.createElement('div')
    fisrtDiv.className = 'input-infos';
    const label = document.createElement('label');
    label.setAttribute('for', tipo === 'produto' ? `prod${lastProdId}` : `serv${lastServId}`);
    label.textContent = tipo === 'produto' ? 'Produto:' : 'Serviço:';
    const input = document.createElement('input')
    input.setAttribute('type', 'text');
    input.className = 'validate'
    input.setAttribute('id', tipo === 'produto' ? `${id}Prod${lastProdId}` : `${id}Serv${lastServId}`);
    if (tipo === 'produto') {
      lastProdId++;
    } else {
      lastServId++;
    }
    fisrtDiv.append(label, input);
    const secondDiv = document.createElement('div')
    secondDiv.className = 'input-infos';
    const labelValue = document.createElement('label');
    labelValue.setAttribute('for', tipo === 'produto' ? `pValue${lastProdId}` : `sValue${lastServId}`);
    labelValue.textContent = 'Valor: '
    const inputValue = document.createElement('input');
    inputValue.setAttribute('type', 'text');
    inputValue.className = 'validate';
    inputValue.setAttribute('id', tipo === 'produto' ? `${id}ProdValue${lastProdId}` : `${id}ServValue${lastServId}`);
    secondDiv.append(labelValue, inputValue);
    const span = document.createElement('span');
    span.textContent = '✖';
    span.className = 'editInfo';
    span.addEventListener('click', () => {
      mainDiv.remove();
    });
    mainDiv.append(fisrtDiv, secondDiv, span);
    const idAdd = tipo === 'produto' ? `${id}ProdAdd` : `${id}ServAdd`;
    document.getElementById(idAdd)?.appendChild(mainDiv);
  }

  render(){
      return(
        <div className="clienteList">
          <div className="clienteUpdate">
              <div className="clienteInfo">
                <p>Cliente 1</p>
                <p>CPF: 123.123.123-11</p>
              </div>
              <button className='btnUpdt' onClick={()=> this.openModal('cliente1')}>Atualizar informações</button>
          </div>
          <div id="cliente1" className='modal'>
            <div className='modal-content'>
              <div className='modal-header'>
                <span className="close" onClick={()=> this.closeModal('cliente1')}>&times;</span>
                <h4>Atualizar informações do cliente 1</h4>
              </div>
              <div className='modal-body'>
                <form className='formUpdtCliente'>
                  <div className='cli-newInfos'>
                    <div className='input-infos'>
                      <label htmlFor="nome">Nome:</label>
                      <input id="cli1Nome" type="text" className="validate" defaultValue={"Cliente 1"} disabled/>
                    </div>
                    <span className="editInfo" onClick={()=> this.enableEdit('cli1Nome')}>&#9998;</span>
                  </div>
                  <div className='cli-newInfos'>
                    <div className='input-infos'>
                      <label htmlFor="nomeSocial">Nome Social:</label>
                      <input id="cli1NomeSocial" type="text" className="validate" defaultValue={"Cliente 1"} disabled/>
                    </div>
                    <span className="editInfo" onClick={()=> this.enableEdit('cli1NomeSocial')}>&#9998;</span>
                  </div>
                  <div className='cli-newInfos'>
                    <div className='input-infos'>
                      <label htmlFor="Cpf">CPF:</label>
                      <input id="cli1Cpf" type="text" className="validate cli-cpf" defaultValue={"123.123.123-11"} disabled/>
                    </div>
                    <span className="editInfo edtCpf">&#9998;</span>
                  </div>
                  <div className='moreInfos'>
                    <div className="cli-addInfos">
                      <div className='individualInfo'>
                        <div className="cli-currentInfos" id="cli1Tels">
                          <div className='cli-newInfos'>
                            <div className='input-infos'>
                              <label htmlFor="telefone">Telefone:</label>
                              <input id="cli1Telefone1" type="text" className="validate" defaultValue={"12 19281233"} disabled/>
                            </div>
                          <span className="editInfo" onClick={()=> this.enableEdit('cli1Telefone1')}>&#9998;</span>
                          </div>
                        </div>
                        <div className="cli-addNewInfos" id="cli1TelAdd">

                        </div>
                        <button className='addNewBtn' type='button' onClick={()=> this.newTelefone('cli1')}>Adicionar telefone</button>
                      </div>
                      <div className='individualInfo'>
                        <div className="cli-currentInfos" id="cli1RGs">
                          <div className='cli-newInfos RgInfos'>
                            <div className='input-infos'>
                              <label htmlFor="rg">RG:</label>
                              <input id="cli1Rg1" type="text" className="validate" defaultValue={"111.111.111.11"} disabled/>
                            </div>
                            <div className="input-infos">
                              <label htmlFor="rgDate">Data de emissão:</label>
                              <input id="cli1RgDate1" type="date" className="validate" defaultValue={"2001-09-11"} disabled/>
                            </div>
                          <span className="editInfo" onClick={()=> this.enableEditRg('cli1Rg1', 'cli1RgDate1')}>&#9998;</span>
                          </div>
                        </div>
                        <div className="cli-addNewInfos" id="cli1RgAdd">

                        </div>
                        <button className='addNewBtn' type="button" onClick={()=> this.newRg('cli1')}>Adicionar RG</button>
                      </div>
                    </div>
                    <div className="cli-addInfos">
                      <div className='individualInfo'>
                        <div className="cli-currentProdServ">
                          <h5>Produtos consumidos</h5>
                          <div className='individal-prodServ'id="cli1Prod1">
                            <div className='input-infos'>
                              <label htmlFor="produto">Produto:</label>
                              <input id="cli1Prod1" type="text" className="validate" defaultValue={"Produto 1"} disabled/>
                            </div>
                            <div className="input-infos">
                              <label htmlFor="pValue">Valor:</label>
                              <input id="cli1ProdValue1" type="text" className="validate" defaultValue={"R$ 100,00"} disabled/>
                            </div>
                            <span className="editInfo" onClick={()=> this.deleteProdServ('cli1Prod1')}>✖</span>
                          </div>
                        </div>
                        <div className="cli-addNewInfos" id="cli1ProdAdd">
                        </div>
                        <button type='button' className='addNewBtn' onClick={()=> this.adicionarProdServ('cli1', 'produto')}>Adicionar produto</button>
                      </div>
                      <div className='individualInfo'>
                        <div className="cli-currentProdServ">
                          <h5>Serviços consumidos</h5>
                          <div className='individal-prodServ' id="cli1Serv1">
                            <div className='input-infos'>
                              <label htmlFor="servico">Serviço:</label>
                              <input id="cli1Serv" type="text" className="validate" defaultValue={"Serviço 1"} disabled/>
                            </div>
                            <div className="input-infos">
                              <label htmlFor="sValue">Valor:</label>
                              <input id="cli1ServValue1" type="text" className="validate" defaultValue={"R$ 100,00"} disabled/>
                            </div>
                            <span className="editInfo" onClick={()=> this.deleteProdServ('cli1Serv1')}>✖</span>
                          </div>
                        </div>
                        <div className="cli-addNewInfos" id='cli1ServAdd'>

                        </div>
                        <button type='button' className="addNewBtn" onClick={()=> this.adicionarProdServ('cli1', 'servico')}>Adicionar serviço</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )
  }
} 