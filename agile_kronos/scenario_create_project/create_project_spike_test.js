import http, { get } from 'k6/http';
import { sleep } from 'k6';
import { thresholds } from 'k6';
import { check } from 'k6';
import getLogin from './login_test.js';

/*
  [+] Depois do teste de fumaça podemos estruturar uma teste de carga
  [+] O teste de carga aumenta constatemente e controladamente a carga de usuários, respeitando o limite da aplicação
  [+] Permite a comparação dos tempos de resposta entre os diferentes estágios de carga
  [+] Permitindo identificar o comportamento e gargalos da aplicação sem causar downtime

  ****** OBSERVAÇÕES IMPORTANTE ******

  1) Ao avaliar os gráficos do grafana devemos nos atentar aos possíveis desvios nos tempos de respostas picos de requisições
  2) Verificar se existe alguma degradação no tempo de resposta, se existir indica falta de cache e reprocessamento
  
*/

export const options = {
      stages:[
         { duration:'30s', target:2 }, //Abaixo do normal
         { duration:'2m', target:6 }, //Carga normal
         { duration:'2m', target:14 }, //Ponto de stress
         { duration:'2m', target:24 }, //Ponto de saturação
         { duration:'120s', target:0 }, //Estágio de recuperação
      ],
      thresholds:{
         http_req_duration: ['p(95) < 1000'],
         checks: ['rate>0.9']
      }
};



export default function () {

   //realiza chamada da função de login
   getLogin();

   let create = http.get('https://agilekronos.jelastic.saveincloud.net/projects/new'); 

   //criar projeto
   create = create.submitForm({
      formSelector: '#new_project',
      fields: {   
                  "project[name]": 'Teste via k6',
                  "project[initial]": 'TESTK',
                  "project[priority_id]": 'Alta',
                  "project[difficulty]": 'Alta',
                  "project[start_date]": '01/11/2023',
                  "project[end_date]": '01/11/2023',
                  "project[description]": 'Um teste de performance no k6' },
          submitSelector: 'a.save.blue_button'
   })

   //validação do status 200 e da mensagem de sucesso após realização do cadastro de projetos
   check(create, {
      'Retorno Status 200': (r) => r.status === 200,
      'Mensagem de sucesso no popup': (r) => r.html('p').text() === "Projeto Teste via k6 criado com sucesso!"
   });
   
}