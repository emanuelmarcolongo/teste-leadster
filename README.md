# Esse é um projeto [Next.js](https://nextjs.org/) criado com [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Deploy:  https://teste-leadster-lilac.vercel.app/

# Configs: 

## TypeScript
Motivo: O uso do TypeScript em um projeto Next.js traz vantagens como verificação de tipo estática, autocompletar avançado, refatoração segura, escalabilidade aprimorada e suporte a um ecossistema maduro. Além de ser consierado um diferencial para a vaga.

## Estilização feita com TailwindCSS

Motivo: pois é bem integrada ao Next (inclusive sugerido pela CLI do create-next-app) além de ser considerado um diferencial para a vaga.

## Arquitetura:

Como se trata de uma landing page (página única), a arquitetura adotada foi utilizar uma pasta de componentes (home-components) no mesmo nível da página inicial e dentro dessa pasta
colocar os componentes usados na mesma para ficar fácil de encontrar e facilitar a manutenção do código. <br/>
Como a parte do conteúdo de vídeo exige muita lógica e dinamismo por parte do cliente (utiliza client side), eu resolvi criar uma pasta (video-content) apenas para os componentes utilizados no conteúdo de vídeo, para manter o código limpo e organizado e para você se encontrar facilmente em caso de manutenção.

## SEO (Search Engine Optimization) e SSC (Server Side Components):

Todos os componentes no NextJs são SSC por default, execeto aqueles que utilizam "use client" e permitem maior dinamismo e interação com o cliente, no caso do projeto acima, apenas o componente video-content.tsx e seus subcomoponentes utilizam "use client" resultando em um SEO otimizado para a página. <br>
Server Side Components (SSCs) no Next.js podem ter um impacto positivo no SEO de um site. Ao pré-renderizar componentes no servidor, o conteúdo é entregue aos motores de busca, permitindo que eles rastreiem e indexem facilmente o conteúdo, melhorando a visibilidade e classificação do site nos resultados de pesquisa. Além disso, o pré-renderização no servidor garante que as meta tags e informações relevantes sejam fornecidas corretamente, auxiliando na otimização para mecanismos de busca.

## Responsividade:

Todos os componentes possuem design responsivo, resultado em uma boa experiência para o usuário independente do tamanho da tela utilizado.

## Animações CSS:

As prinicpais animações CSS na página é ao passar o mouse :hover sobre conteúdo clicável, utilizado cursor pointer e mudança de cor para indicar a interatividade do componente ao usuário;
Além disso, tanto nos filtros quanto na paginação do conteúdo de vídeo, há sempre a indicação de qual (filtro/página) está selecionada.




## Para rodar localmente:

Instale as dependencias usando o comando: 

```bash
npm i 
```  

Rode o servidor de Desenvolvimento

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado
