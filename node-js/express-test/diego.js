var express = require('express');
var router = express.Router();

router.get('*', function (req, res, next) {


	res.locals.pepe = res.locals.pepe + ' lachota'
next()
  
})


router.get('/diego', function (req, res) {
  res.send('diegooooo: '+ res.locals.pepe);
})


const buscarData = (req, res, next) => {

	res.locals.data = {
		lachota_id: req.params.lachota_id,
		algo: true,
		pablo: 'se la come'
	}

	next()
}

const mostrarVista = (req, res, next) => {

const data = res.locals.data


res.json(data);
}


router.get('/diego/:lachota_id', buscarData, mostrarVista)


module.exports = router;