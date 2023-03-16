

describe('Cadastro', ()=> {
    it('Usuário deve se tornar um entregador', ()=>{
        cy.viewport(1920, 1080)
        cy.visit('https://buger-eats.vercel.app')
        cy.get('a[href="/deliver"]').click()
        cy.get('div#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

        var entregador = {
            nome: 'Daniel Otaviano',
            cpf: '00000014141',
            email: 'daniel@hotmail.com',
            whatsapp: '11999999999',
            endereco: {
                cep: '04534011',
                rua: 'Rua Joaquim Floriano',
                numero: '1000',
                complemento: 'Ap 142',
                bairro: 'Itaim Bibi',
                cidade_uf: 'São Paulo/SP'
            },
            cnh: 'cnhdigital.jpg'
        }

        cy.get('input[name="name"]').type(entregador.nome)
        cy.get('input[name="cpf"]').type(entregador.cpf)
        cy.get('input[name="email"]').type(entregador.email)
        cy.get('input[name="whatsapp"]').type(entregador.whatsapp)
        cy.get('input[name="postalcode"]').type(entregador.endereco.cep)
        //cy.get('div.field-group  input[type="button"]').click() -> opção usando div. como buscador de classes e navegando no seletor CSS seguindo a árvore (seletores sem id ou classe)
        cy.get('input[type="button"][value="Buscar CEP"]').click() // -> opção usando "dois critérios", um input e um type (seletores sem id ou classe)
        cy.get('input[name="address-number"]').type(entregador.endereco.numero)
        cy.get('input[name="address-details"]').type(entregador.endereco.complemento)

        
        
        cy.get('input[name="address"][placeholder="Rua"]').should('have.value', entregador.endereco.rua) // ->  validação de texto em inputs desabilitados
        cy.get('input[name="district"][placeholder="Bairro"]').should('have.value', entregador.endereco.bairro) // ->  validação de texto em inputs desabilitados
        cy.get('input[name="city-uf"][placeholder="Cidade/UF"]').should('have.value', entregador.endereco.cidade_uf) // ->  validação de texto em inputs desabilitados
        

        cy.get('input[accept^="image"]').attachFile('images/' + entregador.cnh)
        //cy.get('input[accept^="image"]') ->  exemplo de seletor com ^ (busca o elemento que começa com "image")
        //cy.get('input[accept^="image"]') -> exemplo de seletor com * (busca o elemento que contem "image")
        //cy.get('input[accept^="image"]') -> exemplo de seletor com $ (busca o elemento que termina com "image")

        //cy.get('input[accept^="image"]').attachFile('images/' + entregador.cnh) -> concatenação para fazer o cypress buscar um arquivo dentro de uma subpasta em fixtures
        // PS: por padrão o cypress busca a imagem dentro da pasta fixtures diramente, sem precisar apontar o diretório.
    })
}
)