const dados = [];
  dados.push({
    name: 'Culto Matutino',
    dataHora: new Date(2023, 2, 12, 9, 30),
    local: 'Igreja',
    preletor: 'Rev. Jair',
    banda: 'MAP',
    SantaCeia: false,
    Logo: '../ump.png',
    sociedadeInterna: 'Cultos' //{sigla: 'Cultos', cor: 'blue'}
  })
  dados.push({
    name: 'Culto Vespertino',
    dataHora: new Date(2023, 2, 12, 9, 30),
    local: 'Igreja',
    preletor: 'Rev. Jair',
    banda: 'Second',
    SantaCeia: true,
    Logo: '../ump.png',
    sociedadeInterna: 'Cultos' //{sigla: 'Cultos', cor: 'blue'}
  })
  dados.push({
    name: 'Estudo UMP - Livro cap 8',
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

  export {dados as default,  Lista};
