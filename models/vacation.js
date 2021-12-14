"use strict";

const mongoose = require("mongoose"),
  { Schema } = require("mongoose");

var vacationSchema = new Schema(

    
  {
    title: {
      type: String,
      required: true,
      unique: true,
      minLength: 3,
      trim : true
    },
    description: {
      type: String,
      required: true
    },
    heroImage: {
        type: String,
        required: true,
        default:"HeroImage.jpg"
      },
    cuisine: {
        type: String,
        enum : ["", "Continental", "Traditional", "Haute-cuisine", "Nouvelle-cuisine", "Fusion", "Vegan", "Vegetarian", "Asian", "Indian", "Middle-Eastern", "African", "Central American", "South American"],
        required: true
      },
      cost: {
      type: Number,
      default: 0,
      min: [0, "Vacation packages cannot have a negative cost"],
      
    },
    maxTravelers: {
      type: Number,
      default: 0,
      min: [0,"Vacation packages cannot have a negative cost"],
      max: [25,"Vacation packages cannot have more than 25 travelers"]    },

      destination: {
        type: String,
        default: "None specified",
        required: true        
      },  
      departureLocation: {
        type: String,
        enum: ["", "New York (JFK)", "Boston (BOS)", "Chicago (ORD)", "Miami (MIA)", "St. Louis (STL)", "Dallas (DFW)", "Seattle (SEA)", "San Francisco (SFO)"],
        required: true        
      },  
      departureDate: {
        type: String,
        required: true,
        default: Date.now,
        
      },  
      returnDate: {
        type: String,
        required: true,
        default: Date.now,
        
      },  
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Vacation", vacationSchema);
