DROP TABLE IF EXISTS "public"."course";
CREATE TABLE "public"."course" (
  "id" SERIAL,
  "name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "fk_id_teacher" int4 NOT NULL
)
;
COMMENT ON COLUMN "public"."course"."id" IS 'PK Course';
COMMENT ON COLUMN "public"."course"."name" IS 'Course Name';
COMMENT ON COLUMN "public"."course"."fk_id_teacher" IS 'FK Id Teacher';


DROP TABLE IF EXISTS "public"."courseSubject";
CREATE TABLE "public"."courseSubject" (
  "id" SERIAL,
  "fk_id_course" int4 NOT NULL,
  "fk_id_subject" int4 NOT NULL
)
;
COMMENT ON COLUMN "public"."courseSubject"."id" IS 'PK Course - Subject';
COMMENT ON COLUMN "public"."courseSubject"."fk_id_course" IS 'FK Course';
COMMENT ON COLUMN "public"."courseSubject"."fk_id_subject" IS 'FK Subject';


DROP TABLE IF EXISTS "public"."courseSubjectStudent";
CREATE TABLE "public"."courseSubjectStudent" (
  "id" SERIAL,
  "fk_id_course_subject" int4 NOT NULL,
  "fk_id_student" int4 NOT NULL
)
;
COMMENT ON COLUMN "public"."courseSubjectStudent"."id" IS 'PK Student - Subject - Course';
COMMENT ON COLUMN "public"."courseSubjectStudent"."fk_id_course_subject" IS 'FK Course - Subject';
COMMENT ON COLUMN "public"."courseSubjectStudent"."fk_id_student" IS 'FK Student';

DROP TABLE IF EXISTS "public"."courseSubjectStudentTest";
CREATE TABLE "public"."courseSubjectStudentTest" (
  "id" SERIAL,
  "fk_id_course_subject_student" int4 NOT NULL,
  "fk_id_test" int4 NOT NULL
)
;
COMMENT ON COLUMN "public"."courseSubjectStudentTest"."id" IS 'PK Qualification';
COMMENT ON COLUMN "public"."courseSubjectStudentTest"."fk_id_course_subject_student" IS 'FK Course - Subject - Student';
COMMENT ON COLUMN "public"."courseSubjectStudentTest"."fk_id_test" IS 'FK Test';

DROP TABLE IF EXISTS "public"."qualification";
CREATE TABLE "public"."qualification" (
  "id" SERIAL,
  "fk_id_course_subject_student_test" int4 NOT NULL,
  "qualification" int4 NOT NULL
)
;
COMMENT ON COLUMN "public"."qualification"."id" IS 'PK Qualification';
COMMENT ON COLUMN "public"."qualification"."fk_id_course_subject_student_test" IS 'FK Course - Subject - Student - Test';
COMMENT ON COLUMN "public"."qualification"."qualification" IS 'Qualification';

DROP TABLE IF EXISTS "public"."student";
CREATE TABLE "public"."student" (
  "id" SERIAL,
  "name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "lastname" varchar(255) COLLATE "pg_catalog"."default" NOT NULL
)
;
COMMENT ON COLUMN "public"."student"."id" IS 'PK Student';
COMMENT ON COLUMN "public"."student"."name" IS 'Name Student';
COMMENT ON COLUMN "public"."student"."lastname" IS 'Lastname Student';

DROP TABLE IF EXISTS "public"."subject";
CREATE TABLE "public"."subject" (
  "id" SERIAL,
  "name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL
)
;
COMMENT ON COLUMN "public"."subject"."id" IS 'PK Subjects';
COMMENT ON COLUMN "public"."subject"."name" IS 'Name Subject';

DROP TABLE IF EXISTS "public"."teacher";
CREATE TABLE "public"."teacher" (
  "id" SERIAL,
  "name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "lastname" varchar(255) COLLATE "pg_catalog"."default" NOT NULL
)
;
COMMENT ON COLUMN "public"."teacher"."id" IS 'PK Teacher';
COMMENT ON COLUMN "public"."teacher"."name" IS 'Teacher Name';
COMMENT ON COLUMN "public"."teacher"."lastname" IS 'Teacher Lastname';

DROP TABLE IF EXISTS "public"."test";
CREATE TABLE "public"."test" (
  "id" SERIAL,
  "name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL
)
;
COMMENT ON COLUMN "public"."test"."id" IS 'PK Id Tests';
COMMENT ON COLUMN "public"."test"."name" IS 'Name Test';

ALTER SEQUENCE "public"."courseSubjectStudent_id_seq"
OWNED BY "public"."courseSubjectStudent"."id";
SELECT setval('"public"."courseSubjectStudent_id_seq"', 4, true);
ALTER SEQUENCE "public"."courseSubject_id_seq"
OWNED BY "public"."courseSubject"."id";
SELECT setval('"public"."courseSubject_id_seq"', 5, true);
SELECT setval('"public"."course_id_seq"', 3, false);
ALTER SEQUENCE "public"."course_id_seq1"
OWNED BY "public"."course"."id";
SELECT setval('"public"."course_id_seq1"', 21, true);
ALTER SEQUENCE "public"."qualification_id_seq"
OWNED BY "public"."courseSubjectStudentTest"."id";
SELECT setval('"public"."qualification_id_seq"', 2, false);
ALTER SEQUENCE "public"."student_id_seq"
OWNED BY "public"."student"."id";
SELECT setval('"public"."student_id_seq"', 3, true);
ALTER SEQUENCE "public"."subject_id_seq"
OWNED BY "public"."subject"."id";
SELECT setval('"public"."subject_id_seq"', 2, false);
ALTER SEQUENCE "public"."teacher_id_seq"
OWNED BY "public"."teacher"."id";
SELECT setval('"public"."teacher_id_seq"', 2, true);
ALTER SEQUENCE "public"."test_id_seq"
OWNED BY "public"."test"."id";
SELECT setval('"public"."test_id_seq"', 2, false);

ALTER TABLE "public"."course" ADD CONSTRAINT "course_pkey" PRIMARY KEY ("id");

ALTER TABLE "public"."courseSubject" ADD CONSTRAINT "courseSubject_pkey" PRIMARY KEY ("id");

ALTER TABLE "public"."courseSubjectStudent" ADD CONSTRAINT "courseSubjectStudent_pkey" PRIMARY KEY ("id");

ALTER TABLE "public"."courseSubjectStudentTest" ADD CONSTRAINT "qualification_pkey" PRIMARY KEY ("id");

ALTER TABLE "public"."qualification" ADD CONSTRAINT "qualification_pkey1" PRIMARY KEY ("id");

ALTER TABLE "public"."student" ADD CONSTRAINT "student_pkey" PRIMARY KEY ("id");

ALTER TABLE "public"."subject" ADD CONSTRAINT "subject_pkey" PRIMARY KEY ("id");

ALTER TABLE "public"."teacher" ADD CONSTRAINT "teachers_pkey" PRIMARY KEY ("id");

ALTER TABLE "public"."test" ADD CONSTRAINT "test_pkey" PRIMARY KEY ("id");

ALTER TABLE "public"."course" ADD CONSTRAINT "fk_id_teacher" FOREIGN KEY ("fk_id_teacher") REFERENCES "public"."teacher" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
COMMENT ON CONSTRAINT "fk_id_teacher" ON "public"."course" IS 'FK Id Teacher';

ALTER TABLE "public"."courseSubject" ADD CONSTRAINT "fk_id_course" FOREIGN KEY ("fk_id_course") REFERENCES "public"."course" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."courseSubject" ADD CONSTRAINT "fk_id_subject" FOREIGN KEY ("fk_id_subject") REFERENCES "public"."subject" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
COMMENT ON CONSTRAINT "fk_id_course" ON "public"."courseSubject" IS 'FK Id Course';
COMMENT ON CONSTRAINT "fk_id_subject" ON "public"."courseSubject" IS 'FK Id Subject';

ALTER TABLE "public"."courseSubjectStudent" ADD CONSTRAINT "fk_id_course_subject" FOREIGN KEY ("fk_id_course_subject") REFERENCES "public"."courseSubject" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."courseSubjectStudent" ADD CONSTRAINT "fk_id_student" FOREIGN KEY ("fk_id_student") REFERENCES "public"."student" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
COMMENT ON CONSTRAINT "fk_id_course_subject" ON "public"."courseSubjectStudent" IS 'FK Course - Subject';
COMMENT ON CONSTRAINT "fk_id_student" ON "public"."courseSubjectStudent" IS 'FK Student';

ALTER TABLE "public"."courseSubjectStudentTest" ADD CONSTRAINT "fk_id_course_subject_student" FOREIGN KEY ("fk_id_course_subject_student") REFERENCES "public"."courseSubjectStudent" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."courseSubjectStudentTest" ADD CONSTRAINT "fk_id_test" FOREIGN KEY ("fk_id_test") REFERENCES "public"."test" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
COMMENT ON CONSTRAINT "fk_id_course_subject_student" ON "public"."courseSubjectStudentTest" IS 'FK Course - Subject - Student';
COMMENT ON CONSTRAINT "fk_id_test" ON "public"."courseSubjectStudentTest" IS 'FK Test';

ALTER TABLE "public"."qualification" ADD CONSTRAINT "fk_id_course_subject_student_test" FOREIGN KEY ("fk_id_course_subject_student_test") REFERENCES "public"."courseSubjectStudentTest" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
COMMENT ON CONSTRAINT "fk_id_course_subject_student_test" ON "public"."qualification" IS 'FK Course Subject Student Test';
