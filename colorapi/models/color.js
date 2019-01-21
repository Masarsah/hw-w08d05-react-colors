const db = require('../db/config')

const color = {};

color.getAll = (req, res, next) => {
    db.manyOrNone('SELECT * FROM color;')
        .then(result => {
            res.locals.colors = result;
            next();
        })
        .catch(error => {
            console.log(error);
            next();
        })
}

color.create = (req, res, next) => {
    db.one('INSERT INTO color (name, rgb,hex) VALUES($1, $2, $3) RETURNING *;',
      [req.body.name, req.body.rgb, req.body.hex])
      .then((result) => {
        res.locals.color = result;
        next();
      })
      .catch((error) => {
        console.log(error)
        next();
      })
  }

  color.update = (req, res, next) => {
    db.one('UPDATE color SET name=$1, rgb=$2, hex=$3 WHERE id=$4 RETURNING *;',
    [req.body.name, req.body.rgb, req.body.hex, req.params.id])
      .then((result) => {
        res.locals.color = result;
        next();
      })
      .catch((error) => {
        console.log(error)
        next();
      })
  }

  color.delete = (req, res, next) => {
    db.none('DELETE FROM color WHERE id=$1', [req.params.id])
      .then((result) => {
        next();
      })
      .catch((error) => {
        console.log(error)
        next();
      })
  }

module.exports = color ;