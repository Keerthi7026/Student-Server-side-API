// Load Student Details API with server-side filtering
app.get('/api/students', (req, res) => {
    const page = parseInt(req.query.page) || 1; // Default to page 1 if not provided
    const pageSize = parseInt(req.query.pageSize) || 10; // Default to 10 items per page if not provided
  
    const filterCriteria = req.query.filter || ''; // Get the filter criteria from the query parameters
  
    // Apply filtering based on filter criteria
    const filteredData = studentsData.filter((student) => {
      // Implement your filtering logic here based on your specific requirements
      // For example, if you want to filter by student name, you can use the following condition:
      return student.name.toLowerCase().includes(filterCriteria.toLowerCase());
    });
  
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedData = filteredData.slice(startIndex, endIndex);
  
    res.json({
      page,
      pageSize,
      totalStudents: filteredData.length,
      students: paginatedData,
    });
  });
  