#language: pt

Funcionalidade: Busca de Produtos

Contexto:
    Dado que eu esteja na pagina incial da Loja

@Store
Cenário: Buscar por nome completo
    Quando pesquiso por "Star Wars V: O Retorno de Jedi"
    Então devo o produto "Star Wars V: O Retorno de Jedi" pesquisado com sucesso

@Store
Cenário: Buscar por parte do nome
    Quando pesquiso por "Star"
    Então devo ver o resultado contendo "Star" como parte do nome

@Store
Cenário: Buscar por produto sem estoque
    Quando pesquiso por "Lagoa Azul"
    Então devo o produto pesquisado com insdisponível

@Store
Cenário: Buscar por produto inexistente
    Quando pesquiso por "Senhor dos Aneis"
    Então devo uma mensagem de produto não cadastrado