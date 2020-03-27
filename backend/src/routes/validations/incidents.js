const { celebrate, Segments, Joi } = require('celebrate')

module.exports = {
    get() {
        return celebrate({
            [Segments.QUERY]: Joi.object({
                page: Joi.number()
            })
        })
    },

    post() {
        return celebrate({
            [Segments.HEADERS]: Joi.object({
                authorization: Joi.string().required()
            }).unknown(),
            [Segments.BODY]: Joi.object().keys({
                title: Joi.string().required(),
                description: Joi.string().required(),
                value: Joi.number().required()
            })
        })
    }
}