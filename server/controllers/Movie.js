const Movie = require("../models/Movie")

const addMovie = async (req,res) => {
    const newMovie = new Movie({
        movieName: req.body.movieName,
        movieDesc: req.body.movieDesc,
        movieYear : req.body.movieYear,
        movieCategory : req.body.movieCategory
    })
    try {
        const movie = await newMovie.save()
        res.status(200).json(movie)
    } catch (err) {
        res.status(500).json(err)
    }
}

const deleteMovie = async (req,res) => {
  const movie = await Movie.findById(req.params.id)
  if(movie){
      try {
          await movie.delete()
          res.status(200).json("Movie has been deleted ...")
      } catch (err) {
          res.status(500).json(err)
      }
  }
}

const getMovie = async (req,res) => {
    try {
        const movie = await Movie.findById(req.params.id)
        res.status(200).json(movie)
    } catch (err) {
        res.status(500).json(err)
    }
}

const getAllMovie = async (req,res) => {
  const query = req.query.movie
  let movies

  try {
      movies = await Movie.find()
      if(movies){
          res.status(200).json(movies)
      }
  } catch (err) {
      res.status(500).json(err)
  }
}

module.exports = {
    addMovie,
    deleteMovie,
    getMovie,
    getAllMovie
}