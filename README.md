# Desafio XP - Marina Barros :rocket:

Este projeto foi desenvolvido para a etapa de desafio técnico no processo seletivo da turma XP Inc. para a vaga de Software Engineer. 

Trata-se de um aplicativo de investimento de ações, no qual a pessoa usuária pode realizar tanto transações em sua carteira (como comprar e vender ações), quanto gerenciar sua conta digital (depositando ou sacando valores).

---


#### Disclaimer!

O código contido neste reposítório contempla apenas o front-end do aplicativo desenvolvido.

---


### Para executar o aplicativo localmente

1. Clone este repositório;
2. Navegue até a pasta onde ele se encontra no seu dispositivo;
3. Dentro da pasta, abra um terminal e rode o comando npm install para instalar as dependências localmente;
4. Depois de baixadas as dependencias, rode o comando npm start;
Pronto! O programa abrirá em seu navegador.

#### Algumas infomações para usar o aplicativo:
- Na tela de login, o input de email espera uma string no formato mínimo 'xxxx@xxxx.com' (com mais de três caracteres antes e depois do @ e com o .com) e o input de senha espera mais de seis caracteres;
- Para comprar ações ou sacar valores, é preciso ter a quantia necessária na conta. Do contrário, os botões do input de valor não será habilitado;
- Esse botão também fica desabilitado em outras situações, como tentar vender mais ações do que se tem ou tentar comprar ações em quantias que extrapolem o saldo;
---


## Sobre o desenvolvimento

Partindo da escolha pelas áreas de especialização para o processo seletivo, front-end e mobile, esse projeto teve seu desenvolvimento focado na interface do aplicativo. Busquei desenvolver telas funcionais e bonitas, que cumprissem alguns fluxos de navegação que me pareceram fazer sentido pensando em uma pessoa usuária interagindo com elas.

Comecei pensando nos requisitos para o funcionamento das telas, e como elas se estruturariam e se ligariam. Sendo assim, decidi fazer as telas: login, carteira (de ações), mercado (de ações), saque, depósito, compra (de ações), venda (de ações) e not found. Desenhando seus wireframes, percebi que as telas podiam compartilhar elementos de sua estrutura, e transformei-os em componentes. Nesse processo, imaginei outras telas que complementariam o aplicativo, mas precisei ser objetiva por causa do tempo (no final do readme retomo sobre elas).

A etapa seguinte foi codar, e escolhi desenvolver o projeto com React em JavaScript. Para gerenciamento de estado, escolhi o Redux Toolkit, e, para estilização, usei o Styled Components. Optei por não usar nem o CSS vanilla por acreditar que seria mais interessante construir o aplicativo como me parecia mais próximo de uma situação profissional. No final, usei ainda o eslint (com as regras do Airbnb) para formatar e padronizar o código. O versionamento do código foi feito com git.

Para a estilização, me inspirei no aplicativo de celular da XP, o XP Investimentos, mas tentei manter tudo em dark mode. Também tentei deixar tudo o mais responsivo que consegui, estilizando as telas seguindo a convenção mobile first (projetei na resolução 320x480);


### Considerações finais

Gostei muito do resultado do projeto, e acredito que tem muitos ponto de melhoria e features adicionais. Algumas coisas que pretendo acrescentar no aplicativo são reparos na exibição das informações sobre as ações, telas e componentes que entraram no wireframe mas não foram desenvolvidas (menu, tela com informações sobre a pessoa usuária, avisos sobre o funcionamento dos componentes - como toats ou modais explicativos e histórico de transações). 

Também pretendo desenvolver os testes, que fiquei devendo aqui no desafio, bem como o back-end e banco de dados para completar a aplicação.

 Sobre pontos de melhoria pessoais, como pessoa desenvolvedora, notei principalmente que preciso entender mais sobre estrutura e arquitetura de projetos, e tentar aplicar tudo isso no planejamento dos próximos. Também percebi que vale a pena definir um padrão de commits e branchs para versionar melhor o código, e espero aplicar isso já mais refinado nas próximas vezes.
 
 O nome desafio não foi à toa, desenvolver o app se mostrou realmente desafiador para mim. Mas foi a maior experiência de aprendizado na prática que tive nessa jornada de me tornar pessoa desenvolvedora (e me confirmou o quanto gosto de desenvolvimento front-end!).
