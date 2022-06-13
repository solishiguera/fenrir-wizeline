const  likeData = require('../controller/like.controller');

jest.mock('../services/like.service.js', () => {
    return {
        addLike : jest.fn( async () => {
            return {
                "like_id": 1,
                "employee_id": 33,
                "question_id": 4,
                "username": "diego"
            }
          }), 
          getQuestionLikes : jest.fn( async (question_id) => {
            return {
                "likes": [
                    {
                        "question_id": 4,
                        "employee_id": 25
                    }
                ]
            }
          }),
          getEmployeeLikes : jest.fn( async (employee_id) => {
            return {
                "likes": [
                    {
                        "like_id": 167,
                        "employee_id": 33,
                        "question_id": 18,
                        "username": "test4",
                        "question": {
                            "question_text": "let's go get some burgers !"
                        }
                    },
                    {
                        "like_id": 170,
                        "employee_id": 33,
                        "question_id": 17,
                        "username": "test4",
                        "question": {
                            "question_text": "Do you know the way?"
                        }
                    },
                    {
                        "like_id": 163,
                        "employee_id": 33,
                        "question_id": 19,
                        "username": "test4",
                        "question": {
                            "question_text": "helooooooo"
                        }
                    }
                ]
            }
          }),
          removeLike : jest.fn( async () => {
            return {
                "like_id": 1,
                "employee_id": 33,
                "question_id": 4,
                "username": "diego"
            }
          })
    }
});
test('Test de post like', async () => {
  const res = {};
  const next = {};
  let req = {
    "body" : {
        "employee_id": 33,
        "question_id": 3,
        "username" : "diego" 
    }
  };

  res.status = (obj) => res;
  res.json = (obj) => {
    return obj;
  };

  const data = await likeData.addLike(req, res, next);
  //console.log(data);

  expect(data).toBe("Like registrado exitosamente.");
});

test('Test de getQuestionLikes', async () => {
    const res = {};
    const req = {
        "params" : {
        "question_id" : 4
        }
    };
    const next = {};

    res.json = (obj) => {
        return obj;
    }
    const data = await likeData.getQuestionLikes(req, res, next);
    //console.log(data.likes.likes);

    expect(data.likes.likes[0].question_id).toBe(4);
});

test('Test de getEmployeeLikes', async () => {
    const res = {};
    const req = {
        "params" : {
            "employee_id" : 33
        }
    };
    const next = {};

    res.json = (obj) => {
        return obj;
    }
    const data = await likeData.getEmployeeLikes(req, res, next);
    //console.log(data.likes.likes.length);

    expect(data.likes.likes.length).toBe(3);
});

test('Test de removeLike', async () => {
    const res = {};
    const req = {
        "body" : {
            "question_id" : 4,
            "employee_id" : 33
        }
    };
    const next = {};

    res.json = (obj) => {
        return obj;
    }
    const data = await likeData.removeLike(req, res, next);
    console.log(data);

    expect(data).toBe("Like eliminado exitosamente.");
});