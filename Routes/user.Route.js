import express from "express";
import { createForm, deleteForm, readForm, updateForm, viewForm } from "../Controller/user.controller.js";
const router =express.Router();


router.route("/createForm").post(createForm);
router.route("/viewForm/:id").get(viewForm);
router.route("/readForm").get(readForm);
router.route("/updateForm/:id").put(updateForm)
router.route("/deleteForm/:id").delete(deleteForm);

export default router;