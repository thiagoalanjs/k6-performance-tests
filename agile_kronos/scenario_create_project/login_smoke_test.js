
import http from 'k6/http';
import { check, sleep } from 'k6';


/*
     [*] Smoke Test - Se trata de um teste feito com a carga mínima, 
         geralmente é feito para validação se o script não contém erros e como 
         a sua aplicação se comporta com o mínimo de usuários
*/

export const options = {
      vus: 1,
      duration: '10s',
};


export default function () {
  let res = http.get('https://agilekronos.jelastic.saveincloud.net');

  res = res.submitForm({
   formSelector: '#new_user',
   fields: { "user[email]": 'admin@email.com',
             "user[password]": 'admin' },
   submitSelector: '[type="submit"]' });

   check(res, {
      'Retorno Status 200': (r) => r.status === 200,
      'Mensagem HomePage': (r) => r.html("h1").text() === "Projetos"
   });


   sleep(1);

}