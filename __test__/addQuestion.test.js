const {addQuestion} = require('../services/questions')


test('Añadir pregunta sin employeeId', () => {
    const result = addQuestion(null,2,"Dummy Text",false,1)

    expect(result).toBe('Error')


    )
})