// models/chatModel.js
import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    role: { type: String, enum: ["user", "assistant", "system"], required: true },
    content: { type: String, required: true },
    messageType: { 
      type: String, 
      enum: ["text", "question", "recommendation", "recommendations", "progress", "error", "completed"], // ✅ Added "recommendations"
      default: "text"
    },
    // Question-specific fields
    questionData: {
      questionId: String,
      questionType: { type: String, enum: ["mcq", "text", "rating", "multiselect"] },
      options: [String],
      correctAnswer: String,
      category: String,
      maxSelections: Number
    },
    // User response fields
    userResponse: {
      answer: String,
      answerIndex: Number,
      confidence: Number,
      timeSpent: Number // in seconds
    },
    // Progress data
    progressData: {
      current: Number,
      total: Number,
      percentage: Number,
      stage: String
    },
    // Recommendations data
    recommendationsData: [{
      career: String,
      score: Number,
      details: {
        name: String,
        description: String,
        courses: [String],
        colleges: [String],
        salary: String,
        prospects: String,
        nextSteps: [String]
      }
    }]
  },
  { timestamps: true }
);

const conversationSchema = new mongoose.Schema(
  {
    user: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "User", 
      required: true, 
      index: true 
    },
    title: { type: String, default: "Career Guidance Session" },
    context: {
      educationLevel: String,
      currentStage: String,
      questionIndex: { type: Number, default: 0 },
      totalQuestions: Number,
      answeredQuestions: { type: Number, default: 0 },
      progressPercentage: { type: Number, default: 0 },
      userAnswers: [String],
      careerScores: { type: Object, default: {} }
    },
    messages: [messageSchema],
    status: {
      type: String,
      enum: ["active", "paused", "completed", "abandoned"],
      default: "active"
    },
    archivedAt: Date,
  },
  { timestamps: true }
);

const conversationModel = mongoose.models.Conversation || mongoose.model("Conversation", conversationSchema);
export default conversationModel;