const  commentData = require('../controller/comment.controller');

jest.mock('../services/comment.service.js', () => {
    return {
        addComment : jest.fn( async () => {
            return {
                "employee_id" : 1,
                "question_id" : 3,
                "comment_text" : "Great question",
                "is_anonymous" : true
            }
          }),     
          getCommentsQuestion : jest.fn (async (question_id) => {
            return {
                "comments": [
                    {
                        "comment_id": 2,
                        "employee_id": 25,
                        "question_id": 2,
                        "comment_text": "Hi?",
                        "date_created": "2022-05-30T17:00:57.928Z",
                        "is_answer": false,
                        "is_anonymous": false
                    },
                    {
                        "comment_id": 3,
                        "employee_id": 25,
                        "question_id": 2,
                        "comment_text": "hello too?",
                        "date_created": "2022-05-30T17:00:57.928Z",
                        "is_answer": false,
                        "is_anonymous": false
                    },
                    {
                        "comment_id": 5,
                        "employee_id": 25,
                        "question_id": 2,
                        "comment_text": "Hello",
                        "date_created": "2022-06-01T14:50:54.513Z",
                        "is_answer": false,
                        "is_anonymous": false
                    },
                    {
                        "comment_id": 1,
                        "employee_id": 25,
                        "question_id": 2,
                        "comment_text": "Hello?",
                        "date_created": "2022-05-30T17:00:57.928Z",
                        "is_answer": false,
                        "is_anonymous": false
                    },
                    {
                        "comment_id": 8,
                        "employee_id": 404,
                        "question_id": 2,
                        "comment_text": "Hello",
                        "date_created": "2022-06-01T18:01:10.421Z",
                        "is_answer": false,
                        "is_anonymous": true
                    }
                ]
            }
          }),
        getCommentWithId : jest.fn ( async (comment_id) => {
            return {
                "comment_id": 8,
                "employee_id": 404,
                "question_id": 2,
                "comment_text": "Hello",
                "date_created": "2022-06-01T18:01:10.421Z",
                "is_answer": false,
                "is_anonymous": true
            }
        })
    }
});

test('Test de post comment', async () => {
    const res = {};
    const next = {};
    let req = {
        "body" : {
            "employee_id" : 1,
            "question_id" : 3,
            "comment_text" : "Great question",
            "is_anonymous" : true
        }
    };

    res.status = (obj) => res;
    res.json = (obj) => {
        return obj;
    };

    const data = await commentData.addComment(req, res, next);
    //console.log(data);

    expect(data).toBe("Comentario agregado.");
});  

test('Test de getCommentsQuestion', async () => {
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

    const data = await commentData.getCommentsQuestion(req, res, next);
    //console.log(data);

    expect(data.comments.comments.length).toBe(5);
});

test('Test de getCommentWithId', async () => {
    const res = {};
    const next = {};
    let req = {
        "params" : {
        "id" : 8
        }
    };

    res.status = (obj) => res;
    res.json = (obj) => {
        return obj;
    };

    const data = await commentData.getCommentWithId(req, res, next);
    //console.log(data);

    expect(data.comment.comment_id).toBe(8);
});