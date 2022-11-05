import { Request, Response } from "express";
import { getAllSchools } from "../../services/school/getAll";

export async function getSchool(req: Request, res: Response){
  res.send(await getAllSchools())
}