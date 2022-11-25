import { Request, Response } from "express";
import { deleteAllSchool } from "../../services/school/deleteAll";
import { getFilteredSchools } from "../../services/school/getAll";
import { saveAllSchool } from "../../services/school/saveAll";
import { updateAllSchool } from "../../services/school/updateAll";

export async function getSchool(req: Request, res: Response) {
  res.send(await getFilteredSchools())
}

export async function saveSchool(req: Request, res: Response) {
  res.send(await saveAllSchool(Number(req.query.count)))
}

export async function deleteSchool(req: Request, res: Response) {
  await deleteAllSchool()
  res.send(true)
}

export async function updateSchool(req: Request, res: Response) {
  await updateAllSchool()
  res.send(true)
}