const  authData = require('../controller/auth.controller');

jest.mock('../services/auth.service.js', () => {
    return {
      login : jest.fn(async () => {
        return {
          "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtcGxveWVlX2lkIjoxLCJlbXBsb3llZV9uYW1lIjoiRGllZ28iLCJlbXBsb3llZV9sYXN0X25hbWUiOiJTb2xpcyIsImRlcGFydG1lbnRfaWQiOjEsImlzX2FkbWluIjp0cnVlLCJqb2JfdGl0bGUiOiJTb2Z0d2FyZSBFbmdpbmVlciBJbnRlcm4iLCJ1c2VybmFtZSI6ImRpZWdvIiwiZnVsbF90ZXh0X3NlYXJjaCI6bnVsbH0sImlhdCI6MTY1NTA4MTI3MCwiZXhwIjoxNjU1MDgxNTcwfQ.ffvAnWCsy0Cm8_rhQSh_sukGjqLN2HCnfYNXCTXhU8Q",
          "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtcGxveWVlX2lkIjoxLCJlbXBsb3llZV9uYW1lIjoiRGllZ28iLCJlbXBsb3llZV9sYXN0X25hbWUiOiJTb2xpcyIsImRlcGFydG1lbnRfaWQiOjEsImlzX2FkbWluIjp0cnVlLCJqb2JfdGl0bGUiOiJTb2Z0d2FyZSBFbmdpbmVlciBJbnRlcm4iLCJ1c2VybmFtZSI6ImRpZWdvIiwiZnVsbF90ZXh0X3NlYXJjaCI6bnVsbH0sImlhdCI6MTY1NTA4MTI3MH0.1QGBZmHadEpYo-WqwQcq3eW1sn1SwNqASo5VvteCuaM"
      }
      }),

      safePayload : jest.fn(async () => {
        return {
          "employee_id": 1,
              "employee_name": "Diego",
              "employee_last_name": "Solis",
              "department_id": 1,
              "is_admin": true,
              "username": "diego",
              "full_text_search": null
          }
    }),

    signup : jest.fn(async () => {
      return {
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtcGxveWVlX2lkIjoxLCJlbXBsb3llZV9uYW1lIjoiRGllZ28iLCJlbXBsb3llZV9sYXN0X25hbWUiOiJTb2xpcyIsImRlcGFydG1lbnRfaWQiOjEsImlzX2FkbWluIjp0cnVlLCJqb2JfdGl0bGUiOiJTb2Z0d2FyZSBFbmdpbmVlciBJbnRlcm4iLCJ1c2VybmFtZSI6ImRpZWdvIiwiZnVsbF90ZXh0X3NlYXJjaCI6bnVsbH0sImlhdCI6MTY1NTA4MTI3MCwiZXhwIjoxNjU1MDgxNTcwfQ.ffvAnWCsy0Cm8_rhQSh_sukGjqLN2HCnfYNXCTXhU8Q",
        "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtcGxveWVlX2lkIjoxLCJlbXBsb3llZV9uYW1lIjoiRGllZ28iLCJlbXBsb3llZV9sYXN0X25hbWUiOiJTb2xpcyIsImRlcGFydG1lbnRfaWQiOjEsImlzX2FkbWluIjp0cnVlLCJqb2JfdGl0bGUiOiJTb2Z0d2FyZSBFbmdpbmVlciBJbnRlcm4iLCJ1c2VybmFtZSI6ImRpZWdvIiwiZnVsbF90ZXh0X3NlYXJjaCI6bnVsbH0sImlhdCI6MTY1NTA4MTI3MH0.1QGBZmHadEpYo-WqwQcq3eW1sn1SwNqASo5VvteCuaM"
    }
    }),
      /*
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
      */
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

test('Test de login happy path', async () => {
  const res = {};
  const req = { 
    "body" : {
      "username": "Diego",
      "employee_password": "1234s"
    }
  };
  const next = {};

  res.json = (obj) => {
      return obj;
  }
  const data = await authData.login(req, res, next);
  // console.log(data);

  expect(data.message).toBe('Error al inciar sesión. Err: Contraseña incorrecta');
});

test('Test de login sad path', async () => {
  const res = {};
  const req = { 
    "body" : {
      "username": "Diego",
      "employee_password": "3lCompar3Di3goAsi3s."
    }
  };
  const next = {};

  res.json = (obj) => {
      return obj;
  }
  const data = await authData.login(req, res, next);
  // console.log(data);

  expect(data.message).toBe('Error al inciar sesión. Err: Contraseña incorrecta');
});

test('Test de register', async () => {
  const res = {};
  const req = { 
    "body" : {
      "employee_name": "Humberto",
      "employee_last_name": "Ramirez",
      "department_id": 1,
      "job_title": "Software Developer",
      "username": "TheHumbert",
      "employee_password": "I'm Humbertou.",
    }
  };
  const next = {};

  res.json = (obj) => {
      return obj;
  }
  const data = await authData.login(req, res, next);
  console.log(data);

  expect(data.length).toBe(2);
});

/*

req.body.employee_name, req.body.employee_last_name, req.body.department_id, req.body.job_title, req.body.username, securePsw


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