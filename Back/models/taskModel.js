import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  task_id: mongoose.Schema.Types.ObjectId,
  title: String,
  description: String,
  isImportant: Boolean,
  dueDate: Date,
  isCompleted: Boolean,
}, { timestamps: true });

const Task = mongoose.model('Task', taskSchema);

export default Task;

// import mongoose from 'mongoose';

// const taskSchema = new mongoose.Schema({
//     title: String,
//     description: String,
//     isImportant: Boolean,
//     dueDate: Date,
//     isCompleted: Boolean,
// });

// const TaskModel = mongoose.model('Task', taskSchema);

// export class Task {
//     constructor(task) {
//         this.id = task._id; // MongoDB sử dụng _id thay vì id
//         this.title = task.title;
//         this.description = task.description;
//         this.isImportant = task.isImportant;
//         this.dueDate = task.dueDate;
//         this.isCompleted = task.isCompleted;
//     }

//     static async getAllTasks() {
//         try {
//             const tasks = await TaskModel.find({});
//             return tasks;
//         } catch (error) {
//             console.error('Error fetching tasks:', error);
//             throw error;
//         }
//     }

//     static async createTask(newTask) {
//         try {
//             const createdTask = await TaskModel.create(newTask);
//             return { success: true, id: createdTask._id };
//         } catch (error) {
//             console.error('Error creating task:', error);
//             throw error;
//         }
//     }

//     static async updateTask(taskId, taskUpdate) {
//         try {
//             const updatedTask = await TaskModel.findByIdAndUpdate(taskId, taskUpdate, { new: true });
//             return { success: true, updatedTask };
//         } catch (error) {
//             console.error('Error updating task:', error);
//             throw error;
//         }
//     }

//     static async deleteTask(taskId) {
//         try {
//             const result = await TaskModel.findByIdAndDelete(taskId);
//             return { success: result !== null };
//         } catch (error) {
//             console.error('Error deleting task:', error);
//             throw error;
//         }
//     }

//     static async getImportantTasks() {
//         try {
//             const tasks = await TaskModel.find({ isImportant: true });
//             return tasks;
//         } catch (error) {
//             console.error('Error fetching important tasks:', error);
//             throw error;
//         }
//     }

//     static async getCompletedTasks() {
//         try {
//             const tasks = await TaskModel.find({ isCompleted: true });
//             return tasks;
//         } catch (error) {
//             console.error('Error fetching completed tasks:', error);
//             throw error;
//         }
//     }

//     static async completeTask(taskId) {
//         try {
//             const updatedTask = await TaskModel.findByIdAndUpdate(taskId, { isCompleted: true }, { new: true });
//             return { success: true, updatedTask };
//         } catch (error) {
//             console.error('Error completing task:', error);
//             throw error;
//         }
//     }
// }
