const UserServices = require("../services/comment");
module.exports = {

    addComment: async (req, res, next) => {
        try {
            const user = await UserServices.addComment(req.body.employee_id, req.body.question_id, req.body.comment_text, req.body.is_anonymous);
            res.json("Comentario agregado.");
        } catch (err) {
            res.json({message: `Error al agregar comentario. Err: ${err}`});
        }
    }
}