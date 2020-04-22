import Subject from "../models/Subject";
import CourseSubjectStudent from "../models/CourseSubjectStudent";

export async function getSubject(req, res) {
  try {
    const subjects = await Subject.findAll();
    return res.json({
      msg: "List of Subject",
      data: subjects,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Something goes wrong",
      data: {},
    });
  }
}

export async function createdSubject(req, res) {
  try {
    const { name } = req.body;
    let newSubject = await Subject.create(
      {
        name,
      },
      {
        fields: ["name"],
      }
    );
    if (newSubject) {
      return res.json({
        msg: "Subject Created Successfully",
        data: newSubject,
      });
    }
  } catch (error) {
    return res.status(500).json({
      msg: "Something goes wrong",
      data: {},
    });
  }
}

export async function getOneSubject(req, res){
  try {
    const { id } = req.params;
    const Subject = await Subject.findOne({
      where:{
        id
      }
    });
    if (Subject) {
      return res.json({
        data: Subject,
      });
    }
  } catch (error) {
    return res.status(500).json({
      msg: "Something goes wrong",
      data: {},
    });
  }
}

export async function updateSubject(req, res) {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const resp = await Subject.findAll({
      attributes: ['id','name'],
      where:{
        id
      }
    });
    if(resp.length > 0){
      resp.forEach(async subject => {
        await subject.update({
          name
        });
      });
    }
    return res.json({
      msg: 'Subject Updated Successfully',
      data: resp
    })
  } catch (error) {
    return res.status(500).json({
      msg: "Something goes wrong",
      data: {},
    });
  }
}

export async function deleteSubject(req, res) {
  try {
    const { id } = req.params;
    const deleteRowCount = await Subject.destroy({
      where:{
        id
      }
    });
    if (deleteRowCount) {
      return res.json({
        msg: 'Subject Delete Successfully',
        count: deleteRowCount
      });
    }
  } catch (error) {
    return res.status(500).json({
      msg: "Something goes wrong",
      data: {},
    });
  }
}

export async function addStudentToSubject(req, res) {
  try {
    const { courseSubject, student } = req.body;
    let newStudentCourseSubject = await CourseSubjectStudent.create(
      {
        fk_id_course_subject: courseSubject,
        fk_id_student: student,
      },
      {
        fields: ["fk_id_course_subject", "fk_id_student"],
      }
    );
    if (newStudentCourseSubject) {
      return res.json({
        msg: "Student to Course - Subject as Created Successfully",
        data: newStudentCourseSubject,
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
