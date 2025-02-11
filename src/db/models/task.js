import { model, Schema } from 'mongoose';

const taskSchema = new Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    columnName: {
      type: String,
      enum: ['ToDo', 'In Progress', 'Done'],
      default: 'ToDo',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

taskSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

export const TaskCollection = model('tasks', taskSchema);
