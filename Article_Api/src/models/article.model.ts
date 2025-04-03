import { Schema, model } from "mongoose";

const articleSchema = new Schema({
    title: {
        type: String,
        required: true, // NOT NULL
        unique: true, // Must be unique
        minLength: [4, 'Title must be at least 4 characters'], // Minimum length
        maxLength: 100, // Maximum length
    },
    keyword: {
        type: String,
        required: true, // NOT NULL
        maxLength: 50,
        trim: true, // Remove whitespace from start and end
    },
    description: {
        type: String,
        required: true, // NOT NULL
        maxLength: 200,
        trim: true,
    },
    content: {
        type: String,
        required: true, // NOT NULL
        minLength: [10, 'Content must be at least 10 characters'],
        trim: true,
    },
    date: {
        type: Date,
        required: true, // NOT NULL
        default: Date.now, // Default to current date
    }
}, {
    timestamps: true, // Automatically add createdAt and updatedAt
    versionKey: false, // Remove __v field
    collection: "articles" // Custom collection name
});

export default model("Article", articleSchema);