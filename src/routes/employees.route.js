import { Router } from 'express';
import {
  getEmployees,
  createEmployees,
  updateEmployees,
  deleteEmployees,
  getEmployee
} from '../controllers/employees.controller.js';
export const routereEmployees = Router();

routereEmployees.get('/', getEmployees);
routereEmployees.get('/:id', getEmployee);
routereEmployees.post('/', createEmployees);
routereEmployees.put('/:id', updateEmployees);
routereEmployees.delete('/:id', deleteEmployees);
