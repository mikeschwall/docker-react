const mockAxios = {
    post: jest.fn(() =>
      Promise.resolve({
        data: {
          choices: [
            {
              message: {
                content: "['Mad Max', 'Extraction', 'The Gray Man']",
              },
            },
          ],
        },
      })
    ),
  };
  
  export default mockAxios;
  