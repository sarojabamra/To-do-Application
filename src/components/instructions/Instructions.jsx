import React from "react";
import "../todo/Todo.css";
import { Link } from "react-router-dom";

const Instructions = () => {
  return (
    <>
      <div className="container">
        <div className="box">
          <div className="title">
            <Link to="/">
              <h2>To-do Application</h2>
            </Link>
            <Link to="/instructions">
              <h2 className="active">Instructions</h2>
            </Link>
          </div>
          <div className="instructions">
            <p className="intro">Add a Search feature:</p>

            <ul>
              <li>
                When a user enters text into the search input field, the task
                list should dynamically filter to display only tasks that match
                the search keyword.
              </li>
            </ul>
            <p className="intro">
              Add an Edit functionality to edit the tasks.
            </p>
            <p className="intro">Add a Priority feature [OPTIONAL]:</p>
            <ul>
              <li>
                The priority levels should include "High Priority," "Medium
                Priority," and "Low Priority."
              </li>

              <li>
                Tasks should be displayed in the task list sorted based on their
                priority level, with high priority tasks displayed first,
                followed by medium and low priority tasks.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Instructions;
