import faker from "faker";
import Teacher from "../models/Teacher";
import Course from "../models/Course";
import Subject from "../models/Subject";
import CourseSubject from "../models/CourseSubject";
import Student from "../models/Student";
import CourseSubjectStudent from "../models/CourseSubjectStudent";
import Test from "../models/Test";
import CourseSubjectStudentTest from "../models/CourseSubjectStudentTest";
import Qualification from "../models/Qualification";

// Sets locale to ES
faker.locale = "es";

export async function addTeacher(req, res) {
  try {
    for (let i = 0; i < 30; i++) {
      await Teacher.create({
        name: faker.name.firstName(),
        lastname: faker.name.lastName(),
      });
    }
    return res.json({
      msg: "Teachers Created Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Something goes wrong",
      data: {},
    });
  }
}

export async function addCourse(req, res) {
  try {
    let teacher = await Teacher.findAll();
    for (let i = 0; i < 30; i++) {
      for (let j = 0; j < 5; j++) {
        await Course.create({
          name: faker.company.companyName(),
          teacherId: teacher[i].id,
        });
      }
    }
    return res.json({
      msg: "Courses Created Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Something goes wrong",
      data: {},
    });
  }
}

export async function addSubject(req, res) {
  try {
    for (let i = 0; i < 30; i++) {
      await Subject.create({
        name: faker.commerce.department(),
      });
    }
    return res.json({
      msg: "Subjects Created Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Something goes wrong",
      data: {},
    });
  }
}

export async function addCourseSubject(req, res) {
  try {
    let courses = await Course.findAll();
    let subjects = await Subject.findAll();
    for (let i = 0; i < 30; i++) {
      for (let j = 0; j < 5; j++) {
        await CourseSubject.create({
          courseId: courses[i].id,
          subjectId: subjects[j].id,
        });
      }
    }
    return res.json({
      msg: "Courses - Subjects Created Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Something goes wrong",
      data: {},
    });
  }
}

export async function addStudent(req, res) {
  try {
    for (let i = 0; i < 30; i++) {
      await Student.create({
        name: faker.name.firstName(),
        lastname: faker.name.lastName(),
      });
    }
    return res.json({
      msg: "Students Created Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Something goes wrong",
      data: {},
    });
  }
}

export async function addCourseSubjectStudent(req, res) {
  try {
    let courseSubject = await CourseSubject.findAll();
    let student = await Student.findAll();
    for (let i = 0; i < 30; i++) {
      for (let j = 0; j < 5; j++) {
        await CourseSubjectStudent.create({
          courseSubjectId: courseSubject[i].id,
          studentId: student[j].id,
        });
      }
    }
    return res.json({
      msg: "Courses - Subjects - Student Created Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Something goes wrong",
      data: {},
    });
  }
}

export async function addTest(req, res) {
  try {
    for (let i = 0; i < 30; i++) {
      await Test.create({
        name: faker.commerce.product(),
      });
    }
    return res.json({
      msg: "Tests Created Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Something goes wrong",
      data: {},
    });
  }
}

export async function addCourseSubjectStudentTest(req, res) {
  try {
    let courseSubjectStudent = await CourseSubjectStudent.findAll();
    let test = await Test.findAll();
    for (let i = 0; i < 30; i++) {
      for (let j = 0; j < 5; j++) {
        await CourseSubjectStudentTest.create({
          courseSubjectStudentId: courseSubjectStudent[i].id,
          testId: test[j].id,
        });
      }
    }
    return res.json({
      msg: "Courses - Subjects - Student - Test Created Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Something goes wrong",
      data: {},
    });
  }
}

export async function qualification(req, res) {
  try {
    let courseSubjectStudentTest = await CourseSubjectStudentTest.findAll();
    for (let i = 0; i < 30; i++) {
      await Qualification.create({
        courseSubjectStudentTestId: courseSubjectStudentTest[i].id,
        qualification: faker.random.number(),
      });
    }
    return res.json({
      msg: "Qualifications Created Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Something goes wrong",
      data: {},
    });
  }
}
