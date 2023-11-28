const http = require('http')
const url = require('url')
const projects = require('./data-store')

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true)
  const pathname = parsedUrl.pathname

  if (req.method === 'GET' && pathname === '/projects') {
    // Return all projects for GET /projects
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(projects))
  } else if (req.method === 'POST' && pathname === '/projects') {
    // Add a new project for POST /projects
    let body = ''
    req.on('data', chunk => {
      body += chunk
    })

    req.on('end', () => {
      try {
        const newProject = JSON.parse(body)

        // Check if the ID already exists
        if (projects.some(project => project.id === newProject.id)) {
          res.writeHead(400, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify({ message: 'BAD REQUEST' }))
        } else {
          // Add the new project
          projects.push(newProject)
          res.writeHead(201, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify(projects))
        }
      } catch (error) {
        // Invalid JSON in the request body
        res.writeHead(400, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: 'BAD REQUEST' }))
      }
    })
  } else {
    // Return 404 for other routes
    res.writeHead(404, { 'Content-Type': 'application/json' })
    res.end()
  }
})

const PORT = 8000
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
