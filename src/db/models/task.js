import { model, Schema } from 'mongoose';

const taskSchema = new Schema(
  {
    task: {
      type: String,
    },
    description: {
      type: String,
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
