import Test from "../models/Test";
import CourseSubjectStudent from "../models/CourseSubjectStudent";

export async function createdQualification (req, res){
try {
    return res.status(200).json({
        msg: "OK",
        data: {},
      });
} catch (error) {
    return res.status(500).json({
        msg: "Something goes wrong",
        data: {},
      });
}
}