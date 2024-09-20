import Task from "../models/task.model.js";

export const getTasks = async (req, res) => {
  const tasks = await Task.find({
    user: req.decoded.id, //Only gets the taks of the user who is logged in.
  }).populate("user");

  res.json(tasks);
};

export const getOneTask = async (req, res) => {
  const task = await Task.findById(req.params.id).populate("user");

  if (!task) return res.status(404).json({ message: "Task not found" });

  res.json(task);
};

export const createTask = async (req, res) => {
  const { title, description, date } = req.body;

  const newTask = new Task({
    title,
    description,
    date,
    user: req.decoded.id,
  });

  const savedTask = await newTask.save();

  res.json(savedTask);
};

export const updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true, //mongoose for default return the before value, so with this option return the value updated
  });

  if (!task) return res.status(404).json({ message: "Task not found" });

  res.json(task);
};

export const deleteTask = async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id);

  if (!task) return res.status(404).json({ message: "Task not found" });

  res.sendStatus(204);
};
