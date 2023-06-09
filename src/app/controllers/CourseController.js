const Course = require("../models/Course");

const { mongooseToObject } = require("../../util/mongoose");
class CourseController {
  //get //courses/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("show", { course: mongooseToObject(course) });
      })
      .catch(next);
  }
  // GET
  create(req, res, next) {
    res.render("courses/create");
  }
  //POST
  store(req, res, next) {
    const course = new Course(req.body);
    course
      .save()
      .then(() => {
        res.redirect("/admin");
      })
      .catch((error) => {});
  }
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) =>
        res.render("courses/edit", { course: mongooseToObject(course) })
      )
      .catch(next);
    // res.render("courses/edit");
  }
  // PUT /courses/:id
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => {
        res.redirect("/admin");
      })
      .catch(next);
  }
  //[DELETE] /courses/:id
  delete(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => {
        res.redirect("/admin");
      })
      .catch(next);
  }
}

module.exports = new CourseController();
