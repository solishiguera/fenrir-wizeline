const  departmentData = require('../controller/department.controller');

jest.mock('../services/department.service.js', () => {
    return {
        getDepartments : jest.fn(async () => {
            return {
                "departments": [
                    {
                        "department_id": 1,
                        "department_name": "Product Development",
                        "is_active": true
                    },
                    {
                        "department_id": 2,
                        "department_name": "Human Resources",
                        "is_active": true
                    }
                ]
              }
          }),
          getDepartment : jest.fn( async (departmentId) => {
            return {
                "department_id": 2,
                "department_name": "Human Resources",
                "is_active": true
            }
          }),
        
          addDepartment : jest.fn( async () => {
            return {
                "department_id": 3,
                "department_name": "UX/UI designer",
                "is_active": true
            }
          })
    }
});

test('Test de getDepartments', async () => {
    const res = {};
    const req = {};
    const next = {};

    res.json = (obj) => {
        return obj;
    }
    const data = await departmentData.getDepartments(req, res, next);
    //console.log(data);

    expect(data.departments.departments.length).toBe(2);
});

test('Test de getDepartment', async () => {
  const res = {};
  const next = {};
  let req = {
    "params" : {
      "id" : 2
    }
  };

  res.status = (obj) => res;
  res.json = (obj) => {
    return obj;
  };

  const data = await departmentData.getDepartment(req, res, next);
  //console.log(data);

  expect(data.department.department_id).toBe(2);
});

test('Test de post question', async () => {
  const res = {};
  const next = {};
  let req = {
    "body" : {
        "department_name" : "UX/UI designer"
    }
  };

  res.status = (obj) => res;
  res.json = (obj) => {
    return obj;
  };

  const data = await departmentData.addDepartment(req, res, next);
  //console.log(data);

  expect(data).toBe("Agregado correctamente.");
});