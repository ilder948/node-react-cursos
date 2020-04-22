import Course from "../models/Course";
import CourseSubject from "../models/CourseSubject";

export async function getCourse(req, res) {
  try {
    const courses = await Course.findAll();
    return res.json({
      msg: "List of Course",
      data: courses,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Something goes wrong",
      data: {},
    });
  }
}

export async function createdCourse(req, res) {
  try {
    const { name, teacher } = req.body;
    let newCourse = await Course.create(
      {
        name: name,
        fk_id_teacher: teacher,
      },
      {
        fields: ["name", "fk_id_teacher"],
      }
    );
    if (newCourse) {
      return res.json({
        msg: "Course Created Successfully",
        data: newCourse,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Something goes wrong",
      data: {},
    });
  }
}

export async function getOneCourse(req, res) {
  try {
    const { id } = req.params;
    const course = await Course.findOne({
      where: {
        id,
      },
    });
    if (course) {
      return res.json({
        data: course,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Something goes wrong",
      data: {},
    });
  }
}

export async function updateCourse(req, res) {
  try {
    const { id } = req.params;
    const { name, teacher } = req.body;
    const resp = await Course.findAll({
      attributes: ["id", "name", "fk_id_teacher"],
      where: {
        id,
      },
    });
    if (resp.length > 0) {
      resp.forEach(async (course) => {
        await course.update({
          name,
          fk_id_teacher: teacher,
        });
      });
    }
    return res.json({
      msg: "Course Updated Successfully",
      data: resp,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Something goes wrong",
      data: {},
    });
  }
}

export async function deleteCourse(req, res) {
  try {
    const { id } = req.params;
    const deleteRowCount = await Course.destroy({
      where: {
        id,
      },
    });
    if (deleteRowCount) {
      return res.json({
        msg: "Course Delete Successfully",
        count: deleteRowCount,
      });
    }
  } catch (error) {
    return res.status(500).json({
      msg: "Something goes wrong",
      data: {},
    });
  }
}

export async function addSubjectToCourse(req, res) {
  try {
    const { subject, course } = req.body;
    let newCourseSubject = await CourseSubject.create(
      {
        fk_id_course: course,
        fk_id_subject: subject,
      },
      {
        fields: ["fk_id_course", "fk_id_subject"],
      }
    );
    if (newCourseSubject) {
      return res.json({
        msg: "Subject to Course as Created Successfully",
        data: newCourseSubject,
      });
    }
  } catch (error) {
    return res.status(500).json({
      msg: "Something goes wrong",
      data: {},
    });
  }
}
