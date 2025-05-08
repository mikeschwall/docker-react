const mockAxios = {
    post: jest.fn(() =>
      Promise.resolve({
        data: {
          choices: [
            {
              message: {
                content: "Mocked movie list: ['Mad Max', 'Extraction', 'The Gray Man']"
              },
            },
          ],
        },
      })
    ),
  };
  
  export default mockAxios;
  