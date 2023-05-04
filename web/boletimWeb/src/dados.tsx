import { string } from "prop-types";
import { useEffect } from "react";

let dados: {
  descricao: string;
  dataHora: Date;
  local: string;
  preletor: string;
  banda: string;
  SantaCeia: boolean;
  Logo: string;
  sociedadeInterna: string //{ sigla: string; cor: string };
}[];
dados = [];

  dados.push({
    descricao: 'Culto Matutino',
    dataHora: new Date(2023, 2, 12, 9, 30),
    local: 'Igreja',
    preletor: 'Rev. Jair',
    banda: 'MAP',
    SantaCeia: false,
    Logo: '../ump.png',
    sociedadeInterna: 'Cultos' //{sigla: 'Cultos', cor: 'blue'}
  })
  dados.push({
    descricao: 'Culto Vespertino',
    dataHora: new Date(2023, 2, 12, 9, 30),
    local: 'Igreja',
    preletor: 'Rev. Jair',
    banda: 'Second',
    SantaCeia: true,
    Logo: '../ump.png',
    sociedadeInterna: 'Cultos' //{sigla: 'Cultos', cor: 'blue'}
  })
  dados.push({
    descricao: 'Estudo UMP - Livro cap 8',
    dataHora: new Date(2023, 2, 11, 9, 30),
    local: 'Nice e Edevaldo',
    preletor: 'Presb. Douglas',
    banda: 'Pedro',
    SantaCeia: false,
    Logo: '../ump.png',
    sociedadeInterna: 'UMP' //{sigla: 'UMP', cor: 'purple'}
  }) 

  const Lista = [
    { sigla: 'Cultos', cor: 'blue' },
    { sigla: 'SAF', cor: 'pink' },
    { sigla: 'UMP', cor: 'purple' },
    { sigla: 'UPA', cor: 'green' },
    { sigla: 'UCP', cor: 'orange' },
    { sigla: 'Estudos', cor: 'teal' },   
];

// function GetDadosRepo(){
//   useEffect(()=> {
//     async function carregaDados() {
//       const resposta = await fetch('http://localhost:5183/api/Atividade/');
//       const dados = await resposta.json();
//       console.log(dados);
//       return dados;
//     }
//     carregaDados();
//   }, []);
// }

  export {dados as default,  Lista};
