const mongoose = require("mongoose");

const todolistSchema = mongoose.Schema(
  {
    content: { type: String, required: true },
    time: { type: Number, default: Date.now },
    // __v: { type: Number, select: false },
    // name: { type: String, required: true },  // 用户名
    // password: { type: String, required: true, select: false },  // 密码
    // avatar_url: { type: String },  // 头像
    // gender: {  //   性别
    //   type: String,
    //   enum: ["male", "female"],
    //   default: "male",
    //   required: true
    // },
    // headline: { type: String },  // 座右铭
    // locations: {  // 居住地
    //   type: [{ type: Schema.Types.ObjectId, ref: "Topic" }],
    //   select: false
    // },
    // business: { type: Schema.Types.ObjectId, ref: "Topic", select: false },  // 职业
  },
  { timestamps: true }
);

module.exports = mongoose.model("todolist", todolistSchema);

