/* 
* * * * * * * * * * 
* CONSTRUIR QUERY *
* * * * * * * * * * 
*/
const getTableData = (req, res, db) => {
    db.select('*').from('vw_cineroullet') //query
    .then(items => { //retorno
        if(items.length){
            res.json(items) //retorno em json
            console.log("Dados mostrados com sucesso!");
        }
        else
        //tratativa caso não tenha nenhum dado no retorno da consulta
        res.json({dataExists: 'false'})
    })
    // tratativa caso a conexão tiver errada
    .catch(function (err) {
        res.status(500).send({ status: 500, message: 'Db Error', type: 'Falha' });
        console.log(err.message); 
        console.log("Get não relizado")
    
      });
}

const getAventura = (req, res, db) => {
    db.select('*').from('vw_aventura')
    .then(items => {
        if(items.length){
            res.json(items)
            console.log("Dados mostrados com sucesso!");
        }
        else
        res.json({dataExists: 'false'})
    })
    .catch(function (err) {
        res.status(500).send({ status: 500, message: 'Db Error', type: 'Falha' });
        console.log(err.message); // caso a conexão tiver errada, esse cara aqui traz o erro
        console.log("Get não relizado")
    
      });
}

const getAcao = (req, res, db) => {
    db.select('*').from('vw_acao')
    .then(items => {
        if(items.length){
            res.json(items)
            console.log("Dados mostrados com sucesso!");
        }
        else
        res.json({dataExists: 'false'})
    })
    .catch(function (err) {
        res.status(500).send({ status: 500, message: 'Db Error', type: 'Falha' });
        console.log(err.message); // caso a conexão tiver errada, esse cara aqui traz o erro
        console.log("Get não relizado")
    
      });
}


const getComedia = (req, res, db) => {
    db.select('*').from('vw_comedia')
    .then(items => {
        if(items.length){
            res.json(items)
            console.log("Dados mostrados com sucesso!");
        }
        else
        res.json({dataExists: 'false'})
    })
    .catch(function (err) {
        res.status(500).send({ status: 500, message: 'Db Error', type: 'Falha' });
        console.log(err.message); // caso a conexão tiver errada, esse cara aqui traz o erro
        console.log("Get não relizado")
    
      });
}


const getDrama = (req, res, db) => {
    db.select('*').from('vw_drama')
    .then(items => {
        if(items.length){
            res.json(items)
            console.log("Dados mostrados com sucesso!");
        }
        else
        res.json({dataExists: 'false'})
    })
    .catch(function (err) {
        res.status(500).send({ status: 500, message: 'Db Error', type: 'Falha' });
        console.log(err.message); // caso a conexão tiver errada, esse cara aqui traz o erro
        console.log("Get não relizado")
    
      });
}


const getFantasia = (req, res, db) => {
    db.select('*').from('vw_fantasia')
    .then(items => {
        if(items.length){
            res.json(items)
            console.log("Dados mostrados com sucesso!");
        }
        else
        res.json({dataExists: 'false'})
    })
    .catch(function (err) {
        res.status(500).send({ status: 500, message: 'Db Error', type: 'Falha' });
        console.log(err.message); // caso a conexão tiver errada, esse cara aqui traz o erro
        console.log("Get não relizado")
    
      });
}


const getGuerra = (req, res, db) => {
    db.select('*').from('vw_faroeste')
    .then(items => {
        if(items.length){
            res.json(items)
            console.log("Dados mostrados com sucesso!");
        }
        else
        res.json({dataExists: 'false'})
    })
    .catch(function (err) {
        res.status(500).send({ status: 500, message: 'Db Error', type: 'Falha' });
        console.log(err.message); // caso a conexão tiver errada, esse cara aqui traz o erro
        console.log("Get não relizado")
    
      });
}


const getSuspense = (req, res, db) => {
    db.select('*').from('vw_suspense')
    .then(items => {
        if(items.length){
            res.json(items)
            console.log("Dados mostrados com sucesso!");
        }
        else
        res.json({dataExists: 'false'})
    })
    .catch(function (err) {
        res.status(500).send({ status: 500, message: 'Db Error', type: 'Falha' });
        console.log(err.message); // caso a conexão tiver errada, esse cara aqui traz o erro
        console.log("Get não relizado")
    
      });
}

//exportar 
module.exports = { 
    getTableData,
    getAventura,
    getAcao,
    getComedia,
    getDrama,
    getFantasia,
    getGuerra,
    getSuspense,

}
