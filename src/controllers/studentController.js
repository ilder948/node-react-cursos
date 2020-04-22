import Student from "../models/Student";

export async function getStudent(req, res) {
  try {
    const students = await Student.findAll();
    return res.json({
      msg: "List of Student",
      data: students,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Something goes wrong",
      data: {},
    });
  }
}

export async function createdStudent(req, res) {
  try {
    const { name, lastname } = req.body;
    let newStudent = await Student.create(
      {
        name,
        lastname,
      },
      {
        fields: ["name", "lastname"],
      }
    );
    if (newStudent) {
      return res.json({
        msg: "Student Created Successfully",
        data: newStudent,
      });
    }
  } catch (error) {
    return res.status(500).json({
      msg: "Something goes wrong",
      data: {},
    });
  }
}

export async function getOneStudent(req, res){
  try {
    const { id } = req.params;
    const student = await Student.findOne({
      where:{
        id
      }
    });
    if (student) {
      return res.json({
        data: student,
      });
    }
  } catch (error) {
    return res.status(500).json({
      msg: "Something goes wrong",
      data: {},
    });
  }
}

export async function updateStudent(req, res) {
  try {
    const { id } = req.params;
    const { name, lastname } = req.body;
    const resp = await Student.findAll({
      attributes: ['id','name','lastname'],
      where:{
        id
      }
    });
    if(resp.length > 0){
      resp.forEach(async student => {
        await student.update({
          name,
          lastname
        });
      });
    }
    return res.json({
      msg: 'Student Updated Successfully',
      data: resp
    })
  } catch (error) {
    return res.status(500).json({
      msg: "Something goes wrong",
      data: {},
    });
  }
}

export async function deleteStudent(req, res) {
  try {
    const { id } = req.params;
    const deleteRowCount = await Student.destroy({
      where:{
        id
      }
    });
    if (deleteRowCount) {
      return res.json({
        msg: 'Student Delete Successfully',
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
