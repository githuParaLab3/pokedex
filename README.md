Pokédex - Aplicação em Angular

Este é um projeto de Pokédex desenvolvido com Angular, utilizando standalone components para criar uma interface dinâmica, limpa e responsiva. A aplicação permite buscar e visualizar detalhes de diferentes Pokémon, com uma interface atrativa e fácil de usar.
Funcionalidades

    Lista de Pokémon: Exibe uma lista de Pokémon com nome e imagem.
    Busca: Permite pesquisar por nome ou ID de Pokémon.
    Detalhes do Pokémon: Exibe informações detalhadas de cada Pokémon, como tipo, habilidades e estatísticas.
    Design Responsivo: Totalmente responsivo para dispositivos móveis e desktop, com um layout moderno.

Tecnologias

    Angular 19: Framework para desenvolvimento de Single Page Applications (SPA).
    Typescript: Linguagem utilizada para o desenvolvimento da aplicação.
    CSS: Estilização dos componentes, com foco em um design limpo e responsivo.
    PokedexService: Serviço criado para interagir com a API e obter informações sobre os Pokémon.

Estrutura do Projeto

A aplicação é composta por três componentes principais, todos utilizando standalone components do Angular:

    pokemon-list: Exibe a lista de Pokémon com um filtro de busca.
    pokemon-search: Componente de busca para filtrar Pokémon pela sua ID ou nome.
    pokemon-detail: Exibe as informações detalhadas de um Pokémon selecionado.

Serviço

    PokedexService: Serviço responsável por buscar os dados dos Pokémon da API externa e fornecê-los aos componentes.
