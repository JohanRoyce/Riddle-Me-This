let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect with riddle model
let Riddle = require('../models/riddle');
/*CRUD Operation*/

module.exports.displayRiddleList = (req,res,next)=>{
    Riddle.find((err, riddlelist)=>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(booklist)
            res.render('riddle/list', {
                title:'Riddles',  
                Riddlelist: riddlelist
            })
        }
    });
}


module.exports.displayAddPage = (req,res,next)=>{
    res.render('riddle/add',{title:'Add Riddle'})
}

module.exports.processAddPage = (req,res,next)=>{
    let newRiddle = Riddle({
        "poster":req.body.poster,
        "date":req.body.date,
        "question":req.body.question,
        "answer":req.body.answer
    });
    Riddle.create(newRiddle,(err,Riddle)=> {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/riddle-list');
        }
    });
}

module.exports.displayEditPage = (req,res,next)=>{
    let id = req.params.id;
    Riddle.findById(id,(err,riddleToEdit)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('riddle/edit',{title:'Edit Riddle', riddle:riddleToEdit});
        }
    });
}

module.exports.processEditPage = (req,res,next)=>{
    let id=req.params.id;
    let updateRiddle = Riddle({
        "_id":id,
        "poster":req.body.poster,
        "date":req.body.date,
        "question":req.body.question,
        "answer":req.body.answer
    });
    Riddle.updateOne({_id:id},updateRiddle,(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/riddle-list');
        }
    });
}


module.exports.performDelete = (req,res,next)=>{
    let id=req.params.id;
    Riddle.deleteOne({_id:id},(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/riddle-list');
        }
    });
}