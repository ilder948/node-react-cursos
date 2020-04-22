import Teacher from "../models/teacher";

export async function getTeacher(req, res) {
  try {
    const teachers = await Teacher.findAll();
    return res.json({
      msg: "List of Teacher",
      data: teachers,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Something goes wrong",
      data: {},
    });
  }
}

export async function createdTeacher(req, res) {
  try {
    const { name, lastname } = req.body;
    let newTeacher = await Teacher.create(
      {
        name,
        lastname
      },
      {
        fields: ["name","lastname"],
      }
    );
    if (newTeacher) {
      return res.json({
        msg: "Teacher Created Successfully",
        data: newTeacher,
      });
    }
  } catch (error) {
    return res.status(500).json({
      msg: "Something goes wrong",
      data: {},
    });
  }
}

export async function getOneTeacher(req, res){
  try {
    const { id } = req.params;
    const teacher = await Teacher.findOne({
      where:{
        id
      }
    });
    if (teacher) {
      return res.json({
        data: teacher,
      });
    }
  } catch (error) {
    return res.status(500).json({
      msg: "Something goes wrong",
      data: {},
    });
  }
}

export async function updateTeacher(req, res) {
  try {
    const { id } = req.params;
    const { name, lastname } = req.body;
    const resp = await Teacher.findAll({
      attributes: ['id','name','lastname'],
      where:{
        id
      }
    });
    if(resp.length > 0){
      resp.forEach(async Teacher => {
        await Teacher.update({
          name,
          lastname
        });
      });
    }
    return res.json({
      msg: 'Teacher Updated Successfully',
      data: resp
    })
  } catch (error) {
    return res.status(500).json({
      msg: "Something goes wrong",
      data: {},
    });
  }
}

export async function deleteTeacher(req, res) {
  try {
    const { id } = req.params;
    const deleteRowCount = await Teacher.destroy({
      where:{
        id
      }
    });
    if (deleteRowCount) {
      return res.json({
        msg: 'Teacher Delete Successfully',
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
