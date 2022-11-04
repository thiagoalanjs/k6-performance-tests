# k6-performance-tests

![image](https://user-images.githubusercontent.com/32438113/200046907-7d3d01d0-e2aa-4bb1-be1e-4ab37246d2d7.png)


Esse repositório tem como objetivo exemplificar um teste de carga com k6

#Instalação do K6

Seguir a documentação https://k6.io/docs/get-started/installation/

#Instalação do Grafana

Seguir a documentação https://grafana.com/docs/grafana/v9.0/setup-grafana/installation/

#Instalação do HAR

´$ npm install -g har-to-k6´

#Executando os testes gerando gráfico no grafana:

$ k6 run -o influxdb=http://localhost:8086/agile_kronos nome_script.js 

![image](https://user-images.githubusercontent.com/32438113/200046605-474a5be4-3bd4-462e-9814-cad22efa1675.png)

#Resultado

![image](https://user-images.githubusercontent.com/32438113/200046717-3b2e6a14-5afa-4297-aa07-ea2f1649d34e.png)

#Executando os testes gerando gráfico no grafana:

$ k6 run nome_script.js 

![image](https://user-images.githubusercontent.com/32438113/200047295-94ba400b-f291-4c74-a72e-40227c653953.png)

