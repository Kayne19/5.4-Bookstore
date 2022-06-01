const {Book} = require('../models')

//view all
module.exports.viewAll = async function(req,res){
    const books = Book.findAll();
    res.render('book/view_all', {books});
}
