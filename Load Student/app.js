const express = require('express');
const app = express();
const studentsData = require('./studentsData.json'); // Assuming student data is stored in a JSON file

// Load Student Details API
app.get('/api/students', (req, res) => {
  const page = parseInt(req.query.page) || 1; // Default to page 1 if not provided
  const pageSize = parseInt(req.query.pageSize) || 10; // Default to 10 items per page if not provided

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = studentsData.slice(startIndex, endIndex);

  res.json({
    page,
    pageSize,
    totalStudents: studentsData.length,
    students: paginatedData,
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
