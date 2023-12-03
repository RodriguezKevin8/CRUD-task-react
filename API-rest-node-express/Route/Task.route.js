import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.post("/addTask", async (req, res) => {
  try {
    const newTask = await prisma.task.create({
      data: req.body,
    });
    res.json(newTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/updateTask/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updateTask = await prisma.task.update({
      where: { id: parseInt(id) },
      data: req.body,
    });
    res.json(updateTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/getTask", async (req, res) => {
  try {
    const getTask = await prisma.task.findMany();
    res.json(getTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/deleteTask/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updateTask = await prisma.task.delete({
      where: { id: parseInt(id) },
    });
    res.status(200).json({
      updateTask,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
