import { Request, Response } from "express";
import NodeCache from "node-cache";
import { getTeacherBySchool } from "../../services/teacher/getTeacherBySchool";

export async function GET_teachersBySchool(req: Request, res: Response){
  res.send(await getTeacherBySchool())
}