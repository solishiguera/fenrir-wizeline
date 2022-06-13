const  employeesData = require('../controller/employee.controller');

jest.mock('../services/employee.service.js', () => {
    return {
      getEmployeesByQuery : jest.fn( async (text) => {
        return {
          "employees": [
            {
              "employee_id": 1,
              "employee_name": "Diego",
              "employee_last_name": "Solis",
              "department_id": 1,
              "is_admin": true,
              "username": "diego",
              "full_text_search": null
          },
          {
              "employee_id": 19,
              "employee_name": "Diego",
              "employee_last_name": "Solis",
              "department_id": 1,
              "is_admin": true,
              "username": "diegosolissss",
              "full_text_search": null
          },
          ]
        }
      }),

      
      deleteEmployee : jest.fn( async (text) => {
        return {
          "employees": [
            {
              "employee_id": 1,
              "employee_name": "Diego",
              "employee_last_name": "Solis",
              "department_id": 1,
              "is_admin": true,
              "username": "diego",
              "full_text_search": null
          },
          {
              "employee_id": 19,
              "employee_name": "Diego",
              "employee_last_name": "Solis",
              "department_id": 1,
              "is_admin": true,
              "username": "diegosolissss",
              "full_text_search": null
          },
          ]
        }
      }),
      
      /*
        getAllQuestions : jest.fn(async () => {
            return {
                "question_id": 4,
                "employee_id": 25,
                "department_id": 1,
                "question_text": "Department",
                "is_anonymous": false,
                "date_created": "2022-05-30T14:53:22.284Z",
                "date_last_modified": "2022-05-30T14:53:22.284Z",
                "like_count": 1,
                "comment_count": 0,
                "is_answered": false,
                "ask_employee_id": null,
                "full_text_search": "'department':1"
              }
          }),
          getQuestion : jest.fn( async (questionId) => {
            return {
                "question_id": 3,
                "employee_id": 25,
                "department_id": 1,
                "question_text": "Hello?",
                "is_anonymous": false,
                "date_created": "2022-05-30T14:53:22.284Z",
                "date_last_modified": "2022-05-30T14:53:22.284Z",
                "like_count": 1,
                "comment_count": 1,
                "is_answered": false,
                "ask_employee_id": null,
                "full_text_search": "'hello':1"
            }
          }),
        
          addQuestion : jest.fn( async () => {
            return {
                "question_id": 1000,
                "employee_id": 404,
                "department_id": 1,
                "question_text": "This is a unit test",
                "is_anonymous": false,
                "date_created": "2022-05-30T14:53:22.284Z",
                "date_last_modified": "2022-05-30T14:53:22.284Z",
                "like_count": 1,
                "comment_count": 1,
                "is_answered": false,
                "ask_employee_id": null,
                "full_text_search": ""
            }
          }),            
          
          getQuestionsByQuery : jest.fn( async (text) => {
            return {
              "questions": [
                {
                    "question_id": 4,
                    "employee_id": 25,
                    "department_id": 1,
                    "question_text": "Department",
                    "is_anonymous": false,
                    "date_created": "2022-05-30T14:53:22.284Z",
                    "date_last_modified": "2022-05-30T14:53:22.284Z",
                    "like_count": 1,
                    "comment_count": 0,
                    "is_answered": false,
                    "ask_employee_id": null,
                    "full_text_search": "'department':1"
                },
                {
                    "question_id": 3,
                    "employee_id": 25,
                    "department_id": 1,
                    "question_text": "Hello?",
                    "is_anonymous": false,
                    "date_created": "2022-05-30T14:53:22.284Z",
                    "date_last_modified": "2022-05-30T14:53:22.284Z",
                    "like_count": 1,
                    "comment_count": 1,
                    "is_answered": false,
                    "ask_employee_id": null,
                    "full_text_search": "'hello':1"
                },
              ]
            }
          }),
          */
    }
});
/*
test('Test de getEmployeesByQuery', async() => {
  const res = {};
  const req = {
    "params" : {
      "text" : "Diego"
    },
  };
  const next = {};

  res.json = (obj) => {
    return obj;
  }
  const data = await employeesData.getEmployeesByQuery(req, res, next);
  console.log(data);

  expect(typeof(data.employees)).toBe(Object);
});

test('Test de deleteEmployee Happy Path', async() => {
  const res = {};
  const req = {
    "params" : {
      "id" : 36
    },
  };
  const next = {};

  res.json = (obj) => {
    return obj;
  }
  const data = await employeesData.deleteEmployee(req, res, next);
  console.log(data);

  expect(data).toBe("Eliminado correctamente!");
});

test('Test de deleteEmployee Sad Path', async() => {
  const res = {};
  const req = {
    "params" : {
      "id" : 1000000
    },
  };
  const next = {};

  res.json = (obj) => {
    return obj;
  }
  const data = await employeesData.deleteEmployee(req, res, next);
  console.log(data);

  expect(data).toBe("Error al eliminar empleado.");
});
*/
/*
test('Test de getAllQuestions', async () => {
    const res = {};
    const req = {};
    const next = {};

    res.json = (obj) => {
        return obj;
    }
    const data = await questionsData.getAllQuestions(req, res, next);
    // console.log(data);

    expect(data.questions.question_id).toBe(4);
});

test('Test de getQuestion', async () => {
  const res = {};
  const next = {};
  let req = {
    "params" : {
      "id" : 3
    }
  };

  res.status = (obj) => res;
  res.json = (obj) => {
    return obj;
  };

  const data = await questionsData.getQuestion(req, res, next);
  // console.log(data);

  expect(data.question.question_id).toBe(3);
});

test('Test de post question', async () => {
  const res = {};
  const next = {};
  let req = {
    "body" : {
      "question_id": 1000,
      "employee_id": 404,
      "department_id": 1,
      "question_text": "This is a unit test",
      "is_anonymous": false,
      "date_created": "2022-05-30T14:53:22.284Z",
      "date_last_modified": "2022-05-30T14:53:22.284Z",
      "like_count": 1,
      "comment_count": 1,
      "is_answered": false,
      "ask_employee_id": null,
      "full_text_search": ""
    }
  };

  res.status = (obj) => res;
  res.json = (obj) => {
    return obj;
  };

  const data = await questionsData.addQuestion(req, res, next);
  //console.log(data);

  expect(data).toBe("Pregunta agregada.");
});

test('Test de getQuestionsQuery', async () => {
  const res = {};
  const req = {
    "params" : {
      "question_text" : "test"
    }
  };
  const next = {};

  res.json = (obj) => {
      return obj;
  }
  const data = await questionsData.getQuestionsByQuery(req, res, next);
  //console.log(data);

  expect(data.questions.questions.length).toBe(2);
});
*/