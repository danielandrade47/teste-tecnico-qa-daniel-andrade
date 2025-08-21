Este projeto contém uma **Collection do Postman** para automação de testes da API [FakeStore API](https://fakestoreapi.com).  
O objetivo é validar o fluxo de criação de produtos, criação de carrinho, consulta e deleção.

Instruções:
1. Importar Collection e Environment
1. Abra o **Postman**  
2. Clique em **Import > File**  
3. Selecione os arquivos:
   - `fakestore-api-crud-test.json`
   - `fakestore-api-postman-environment.json`  
4. Ative o environment `FakeStoreEnv` no canto superior direito.

2. Rodar a Collection Manualmente
- Expanda a collection **FakeStore API - Cart Flow**  
- Execute os requests na seguinte ordem:
  1. Criar Produto 1  
  2. Criar Produto 2  
  3. Criar Carrinho  
  4. Consultar Carrinho  
  5. Remover Carrinho
  
3. Rodar via Collection Runner
1. Vá em **Runner** no Postman  
2. Selecione a collection **FakeStore API - Cart Flow**  
3. Escolha o environment `FakeStoreEnv`  
4. Clique em **Run** para executar toda a sequência automaticamente.