import { Request, Response } from "express";
import { getstudentBySchool, getstudentBySchoolFromDatabase } from "../../services/student/getStudentBySchool";

export async function GET_studentsBySchool(req: Request, res: Response){
  res.send(await getstudentBySchool())
}

export async function GET_studentsBySchoolFromDatabase(req: Request, res: Response){
  res.send(await getstudentBySchoolFromDatabase())
}