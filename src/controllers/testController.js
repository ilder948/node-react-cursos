import Test from "../models/Test";

export async function getTest(req, res) {
  try {
    const tests = await Test.findAll();
    return res.json({
      msg: "List of test",
      data: tests,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Something goes wrong",
      data: {},
    });
  }
}

export async function createdTest(req, res) {
  try {
    const { name } = req.body;
    let newtest = await Test.create(
      {
        name,
      },
      {
        fields: ["name"],
      }
    );
    if (newtest) {
      return res.json({
        msg: "Test Created Successfully",
        data: newtest,
      });
    }
  } catch (error) {
    return res.status(500).json({
      msg: "Something goes wrong",
      data: {},
    });
  }
}

export async function getOneTest(req, res){
  try {
    const { id } = req.params;
    const test = await Test.findOne({
      where:{
        id
      }
    });
    if (test) {
      return res.json({
        data: test,
      });
    }
  } catch (error) {
    return res.status(500).json({
      msg: "Something goes wrong",
      data: {},
    });
  }
}

export async function updateTest(req, res) {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const resp = await test.findAll({
      attributes: ['id','name'],
      where:{
        id
      }
    });
    if(resp.length > 0){
      resp.forEach(async test => {
        await test.update({
          name
        });
      });
    }
    return res.json({
      msg: 'test Updated Successfully',
      data: resp
    })
  } catch (error) {
    return res.status(500).json({
      msg: "Something goes wrong",
      data: {},
    });
  }
}

export async function deleteTest(req, res) {
  try {
    const { id } = req.params;
    const deleteRowCount = await Test.destroy({
      where:{
        id
      }
    });
    if (deleteRowCount) {
      return res.json({
        msg: 'Test Delete Successfully',
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
