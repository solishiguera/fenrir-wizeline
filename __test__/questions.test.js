const  questionsData = require('../controller/questions.controller');

jest.mock('../services/questions.service.js', () => {
    return {
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
          /*
          updateQuestion : async (questionId, questionText) => {
            try {
              await Model.Question.update({ 
                question_text: questionText,  date_last_modified: timestamp 
              }, 
              {
                where: {
                  question_id: questionId
                }
              });
            } catch (error) { 
              console.log(`Error al actualizar pregunta: Error: ${error}`)
            }
            
          }, 
        
          deleteQuestion : async (questionId) => {
            try {
              await Model.Question.destroy({
                where: {
                  question_id: questionId
                }
              });
            } catch (error) {
              console.log(`Error al eliminar pregunta: error: ${error}`)
            }
        
          },
          */
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
          /*
          updateIndexOfQuestions: async () => {
            try {
              await Model.Question.update({ 
                full_text_search: sequelize.fn('to_tsvector', sequelize.col('question_text'))
              }, 
              { 
                where: {
                  full_text_search: null
                }
              });
            } catch (error) { 
              console.log(`Error al agregar índices pregunta: Error: ${error}`)
            }
          },
          */
    }
});

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
  console.log(data);

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
  console.log(data);

  expect(data.questions.questions.length).toBe(2);
});
