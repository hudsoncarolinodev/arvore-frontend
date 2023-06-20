import { api } from "../../services/axios";
test('getBookshelves returns the expected response', () => {
  expect.assertions(1); 

  return api.getBookshelves("1001")
    .then((response) => {
      expect(response.data).toBeDefined(); 
    });
});