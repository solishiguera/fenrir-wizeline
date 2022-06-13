const  adminData = require('../controller/admin.controller');

jest.mock('../services/admin.service.js', () => {
    return {
        getAllEmployees : jest.fn(async () => {
            return {
                "employees": [
                    {
                        "employee_id": 404,
                        "employee_name": "Anonymous",
                        "employee_last_name": "Anonymous",
                        "department_id": 404,
                        "is_admin": false,
                        "username": "Anonymous",
                        "full_text_search": null
                    },
                    {
                        "employee_id": 36,
                        "employee_name": "arturo",
                        "employee_last_name": "beltran",
                        "department_id": 1,
                        "is_admin": false,
                        "username": "arturo",
                        "full_text_search": null
                    },
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
                    {
                        "employee_id": 40,
                        "employee_name": "Elmer",
                        "employee_last_name": "Avila",
                        "department_id": 1,
                        "is_admin": false,
                        "username": "elmer",
                        "full_text_search": null
                    },
                    {
                        "employee_id": 46,
                        "employee_name": "Elemer",
                        "employee_last_name": "Avila",
                        "department_id": 1,
                        "is_admin": false,
                        "username": "elmer1",
                        "full_text_search": null
                    },
                    {
                        "employee_id": 29,
                        "employee_name": "Gabo",
                        "employee_last_name": "de la Garza",
                        "department_id": 1,
                        "is_admin": true,
                        "username": "gabo1",
                        "full_text_search": null
                    },
                    {
                        "employee_id": 27,
                        "employee_name": "Javier",
                        "employee_last_name": "de la Garza",
                        "department_id": 1,
                        "is_admin": false,
                        "username": "javier1",
                        "full_text_search": null
                    },
                    {
                        "employee_id": 38,
                        "employee_name": "joaquin",
                        "employee_last_name": "beltran",
                        "department_id": 1,
                        "is_admin": false,
                        "username": "joaquin",
                        "full_text_search": null
                    },
                    {
                        "employee_id": 28,
                        "employee_name": "Juan",
                        "employee_last_name": "Gabriel Martinez",
                        "department_id": 1,
                        "is_admin": false,
                        "username": "juan1",
                        "full_text_search": null
                    },
                    {
                        "employee_id": 54,
                        "employee_name": "carlos",
                        "employee_last_name": "Lucio",
                        "department_id": 1,
                        "is_admin": false,
                        "username": "lucio",
                        "full_text_search": null
                    },
                    {
                        "employee_id": 35,
                        "employee_name": "New",
                        "employee_last_name": "New One",
                        "department_id": 1,
                        "is_admin": false,
                        "username": "new1",
                        "full_text_search": null
                    },
                    {
                        "employee_id": 37,
                        "employee_name": "rafael",
                        "employee_last_name": "beltran",
                        "department_id": 1,
                        "is_admin": false,
                        "username": "rafael",
                        "full_text_search": null
                    },
                    {
                        "employee_id": 26,
                        "employee_name": "Samuel",
                        "employee_last_name": "Uzumaki",
                        "department_id": 1,
                        "is_admin": false,
                        "username": "samu1",
                        "full_text_search": null
                    },
                    {
                        "employee_id": 25,
                        "employee_name": "Sebastian",
                        "employee_last_name": "Rodriguez Salinas",
                        "department_id": 1,
                        "is_admin": true,
                        "username": "sebastian1",
                        "full_text_search": null
                    },
                    {
                        "employee_id": 30,
                        "employee_name": "Refactor",
                        "employee_last_name": "Test One",
                        "department_id": 1,
                        "is_admin": true,
                        "username": "test1",
                        "full_text_search": null
                    },
                    {
                        "employee_id": 31,
                        "employee_name": "Refactor",
                        "employee_last_name": "Test Two",
                        "department_id": 1,
                        "is_admin": true,
                        "username": "test2",
                        "full_text_search": null
                    },
                    {
                        "employee_id": 32,
                        "employee_name": "Refactor",
                        "employee_last_name": "Test Three",
                        "department_id": 1,
                        "is_admin": false,
                        "username": "test3",
                        "full_text_search": null
                    },
                    {
                        "employee_id": 33,
                        "employee_name": "Refactor",
                        "employee_last_name": "Test Four",
                        "department_id": 1,
                        "is_admin": true,
                        "username": "test4",
                        "full_text_search": null
                    },
                    {
                        "employee_id": 34,
                        "employee_name": "Refactor",
                        "employee_last_name": "Test Five",
                        "department_id": 1,
                        "is_admin": false,
                        "username": "test5",
                        "full_text_search": null
                    },
                    {
                        "employee_id": 43,
                        "employee_name": "Elmer",
                        "employee_last_name": "Avila",
                        "department_id": 1,
                        "is_admin": false,
                        "username": null,
                        "full_text_search": null
                    }
                ]
              }
          }),
          markAsAnswer : jest.fn( async (id, is_answer) => {
            return {
                "comment_id": 4,
                "employee_id": 25,
                "question_id": 3,
                "comment_text": "Hi how are you?",
                "date_created": "2022-05-30T17:24:16.310Z",
                "is_answer": false,
                "is_anonymous": false
            }
          }),
          markAsAdmin : jest.fn( async (id, is_admin) => {
            return {
                "employee_id": 33,
                "employee_name": "Refactor",
                "employee_last_name": "Test Four",
                "department_id": 1,
                "is_admin": true,
                "username": "test4",
                "full_text_search": null
            }
          })
    }
});

test('Test de getAllEmployees', async () => {
    const res = {};
    const req = {};
    const next = {};

    res.json = (obj) => {
        return obj;
    }
    const data = await adminData.getAllEmployees(req, res, next);
    //console.log(data);

    expect(data.employees.employees.length).toBe(21);
});

test('Test de markAsAnswer', async () => {
  const res = {};
  const next = {};
  let req = {
    "params" : {
      "id" : 4
    },
    "body" : {
        "is_answer" : true
    }
  };

  res.status = (obj) => res;
  res.json = (obj) => {
    return obj;
  };

  const data = await adminData.markAsAnswer(req, res, next);
  //console.log(data);

  expect(data).toBe("Comentario registrado como respuesta.");
});

test('Test de markAsAdmin', async () => {
    const res = {};
    const next = {};
    let req = {
      "params" : {
        "id" : 33
      },
      "body" : {
          "is_admin" : false
      }
    };
  
    res.status = (obj) => res;
    res.json = (obj) => {
      return obj;
    };
  
    const data = await adminData.markAsAdmin(req, res, next);
    //console.log(data);
  
    expect(data).toBe("Se registró empleado como administrador.");
  });