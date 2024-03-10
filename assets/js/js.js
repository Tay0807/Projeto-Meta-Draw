var bnt = document.getElementById('bnt')

if (bnt) {
    var motivacao = document.getElementById('frases')
    const frases = [
        "A persistência é o caminho do êxito.",
        "Desafios nos tornam mais fortes e resilientes, não desista!",
        "É em meio à dificuldade que se encontra a oportunidade.",
        "As pessoas costumam dizer que a motivação não dura sempre. Bem, nem o efeito do banho, por isso recomenda-se diariamente.",
        "Nada acontece a menos que sonhemos antes.",
        "O insucesso é apenas uma oportunidade para recomeçar com mais inteligência.",
        "O êxito é ir de frustração a frustração sem perder a animação.",
        "Você precisa fazer aquilo que pensa que não é capaz de fazer.",
        "Mesmo que algo pareça difícil, nunca desista antes de tentar."
    ];
    

    motivacao.addEventListener('click', function sortearFrase(){
        const indiceSorteado = Math.floor(Math.random() * frases.length)
        Swal.fire({
            title: `${frases[indiceSorteado]}`,
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    })

    bnt.addEventListener('click', function(){
        var nome_meta = document.getElementById('nome')
        var categoria = document.getElementById('categoria')
        var data = document.getElementById('data').value
        var anotacoes = document.getElementById('Anotações')
        var bnt = document.getElementById('bnt')
        var pedidos = []
    
        var info = {
            "nome": nome_meta.value,
            "categoria": categoria.value,
            "data": data,
            "anotacoes": anotacoes.value,
            "concluido": false,
            "lixeira":false
        }
    
        var itens = JSON.parse(localStorage.getItem("lista")) || []
    
        itens.push(info)
    
        localStorage.setItem("lista", JSON.stringify(itens))
    
        var itens_fora = JSON.parse(localStorage.getItem("nova_lista")) || []
    
        localStorage.setItem("nova_lista", JSON.stringify(itens_fora))
        
        $.notify("Meta adicionada", "success");

        nome_meta.value = ''
        categoria.value = ''
        data.value = ''
        anotacoes.value = ''
        atualiza()
    })
    
    function atualiza() {
        var itens = JSON.parse(localStorage.getItem("lista")) || []
        var div = document.getElementById('conteudo')
        
    
        div.innerHTML = ""
        var html = ""
    
        for (var x of itens) {
            html += ``; 
            
            if("lixeira" in x && x.lixeira == true){
                html += ` <div id="clientes" style="display:none;">`
            }else{
                html += `<div id="clientes">`
            }
            html +=` <details>
                    <summary id="summary">`
    
                        if("concluido" in x && x.concluido == true) {
                            html += `<strike>${x.nome}</strike>`
                        } else {
                            html += x.nome
                        }
                        
            html +=   
                `</summary>
                    <p><span>Categoria:   </span>${x.categoria}</p>
                    <p><span>Data:   </span>${x.data}</p>
                    <p><span>Anotaçoes:   </span>${x.anotacoes}</p> 
                </details>
                <div id="img">
                    <img id="lixeira" onclick="removerElemento(${itens.indexOf(x)})" src="./assets/img/lixeira.png" alt=""> `;
    
                    if("concluido" in x && x.concluido == true) {
                        html += `<img id="check" onclick="concluido(${itens.indexOf(x)})" src="./assets/img/check.png" alt="">`
                    } else {
                        html += `<img id="check" onclick="concluido(${itens.indexOf(x)})" src="./assets/img/checkver.png" alt="">`
                    }
    
                    html += `
                </div>
                </div> `
        }
    
        div.innerHTML += html
    }
    
    function concluido(indice) {
        var itens = JSON.parse(localStorage.getItem("lista"))
        itens[indice].concluido = true 
    
        localStorage.setItem("lista", JSON.stringify(itens))
        
        $.notify("Meta concluida", "success");

        atualiza()
    }
    
    function removerElemento(indice){
        
        var itens = JSON.parse(localStorage.getItem("lista"))
        itens[indice].lixeira = true
        localStorage.setItem("lista", JSON.stringify(itens))
        $.notify("Meta excluida", "success");

        atualiza()
    
        var itens_fora = JSON.parse(localStorage.getItem("nova_lista")) 
        itens_fora.push(itens[indice])
        localStorage.setItem("nova_lista", JSON.stringify(itens_fora))
        atualiza()
    
    }
    
    
    
    atualiza()
} else {

    var motivacao = document.getElementById('frases')
    const frases = [
        "A persistência é o caminho do êxito.",
        "Desafios nos tornam mais fortes e resilientes, não desista!",
        "É em meio à dificuldade que se encontra a oportunidade.",
        "As pessoas costumam dizer que a motivação não dura sempre. Bem, nem o efeito do banho, por isso recomenda-se diariamente.",
        "Nada acontece a menos que sonhemos antes.",
        "O insucesso é apenas uma oportunidade para recomeçar com mais inteligência.",
        "O êxito é ir de frustração a frustração sem perder a animação.",
        "Você precisa fazer aquilo que pensa que não é capaz de fazer.",
        "Mesmo que algo pareça difícil, nunca desista antes de tentar."
    ];
    

    motivacao.addEventListener('click', function sortearFrase(){
        const indiceSorteado = Math.floor(Math.random() * frases.length)
        Swal.fire({
            title: `${frases[indiceSorteado]}`,
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    })

    function atualiza() {
        var itens = JSON.parse(localStorage.getItem("nova_lista")) || []
        var div = document.getElementById('lista_excluido')
        var div_dois = document.getElementById('lista_concluido')
    
        div.innerHTML = ""
        div_dois.innerHTML = ""
        var html = ""
    
        for (var x of itens) {
            
            if (x.concluido == false){
                html += `<details> <summary><span class="span">Meta:</span>${x.nome} </summary> <p id="p_hist"><span class="span">Categoria:</span>${x.categoria} <span class="span">Data:</span> ${x.data}<span class="span"> Anotaçoes:</span> ${x.anotacoes}</p></details>`
            }else{
                div_dois.innerHTML += `<details> <summary><span class="span">Meta:</span>${x.nome} </summary> <p id="p_hist"><span class="span">Categoria:</span>${x.categoria} <span class="span">Data:</span> ${x.data}<span class="span"> Anotaçoes:</span> ${x.anotacoes}</p></details>`
            }
        }
    
        div.innerHTML += html
}

    var bnt_historico = document.getElementById('bnt_historico')

    bnt_historico.addEventListener('click', function(){
        localStorage.removeItem("nova_lista")
        localStorage.removeItem("metas")
        $.notify("Histórico excluido com sucesso", "success");
        atualiza()
    })

    atualiza()
}