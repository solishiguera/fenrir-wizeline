const UserServices = require("../services/comment.service");
module.exports = {

    addComment: async (req, res, next) => {
        try {
            const user = await UserServices.addComment(req.body.employee_id, req.body.question_id, req.body.comment_text, req.body.is_anonymous);
            return res.json("Comentario agregado.");
        } catch (err) {
            res.json({message: `Error al agregar comentario. Err: ${err}`});
        }
    },

    getCommentsQuestion : async (req, res, next) => {
        try{
            const comments = await UserServices.getCommentsQuestion(req.params.id);
            return res.json({comments});
        }catch(err){
            res.json({message: `Error al obtener los comentarios de pregunta. Err:${err}`})
        }
    },

    getCommentWithId : async (req, res, next) => {
        try{
            const comment = await UserServices.getCommentWithId(req.params.id);
            return res.json({comment});
        }catch(err){
            res.json({message:`Error al obtener comentario con ID. Err: ${err}`})
        }
    }


}