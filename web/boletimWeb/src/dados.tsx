const dados = [];
  dados.push({
    Name: 'Culto Matutino',
    DataHora: new Date(2023, 2, 12, 9, 30),
    Local: 'Igreja',
    Preletor: 'Rev. Jair',
    Banda: 'MAP',
    SantaCeia: false,
    Logo: '../ump.png',
    SociedadeInterna: {sigla: 'Cultos', cor: 'blue'}
  })
  dados.push({
    Name: 'Culto Vespertino',
    DataHora: new Date(2023, 2, 12, 9, 30),
    Local: 'Igreja',
    Preletor: 'Rev. Jair',
    Banda: 'Second',
    SantaCeia: true,
    Logo: '../ump.png',
    SociedadeInterna: {sigla: 'Cultos', cor: 'blue'}
  })
  dados.push({
    Name: 'Estudo UMP - Livro cap 8',
    DataHora: new Date(2023, 2, 11, 9, 30),
    Local: 'Nice e Edevaldo',
    Preletor: 'Presb. Douglas',
    Banda: 'Pedro',
    SantaCeia: false,
    Logo: '../ump.png',
    SociedadeInterna: {sigla: 'UMP', cor: 'purple'}
  }) 

  export default dados;