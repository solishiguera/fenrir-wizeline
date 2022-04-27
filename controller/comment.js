const UserServices = require("../services/comment");
const pool = require("../config/db");
module.exports = {

    addComment: async (req, res, next) => {
        try {
            const user = await UserServices.addComment(req.body.employee_id, req.body.question_id, req.body.comment_text, req.body.is_anonymous);
            res.json("Comentario agregado.");
        } catch (err) {
            res.json({message: `Error al agregar comentario. Err: ${err}`});
        }
    },

    getCommentsQuestion : async (req, res, next) => {
        try{
            const comments = await UserServices.getCommentsQuestion(req.params.id);
            res.json({comments});
        }catch(err){
            res.json({message: `Error al obtener los comentarios. Err:${err}`})
        }
    },

    getCommentWithId : async (req, res, next) => {
        try{
            const comments = await UserServices.getCommentWithId(req.params.id);
            res.json({comments});
        }catch(err){
            res.json({message:`Error al obtener los comentarios. Err${err}`})
        }
    }


}