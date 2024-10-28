'use client'

import { useState } from 'react'
import { Search, Filter, Sun, Moon, Star, GitBranch, Eye, Clock } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ModeToggle } from '@/components/theme/mode-toggle'
import Footer from '@/components/footer'

// Mock data for projects
const projects = [
  { id: 1, name: 'Project A', description: 'A cool project for managing state in React applications', stars: 1200, forks: 300, watchers: 150, language: 'JavaScript', technologies: ['React', 'Redux'], lastUpdated: '2023-10-15', url: 'https://github.com/example/project-a' },
  { id: 2, name: 'Project B', description: 'An awesome library for data visualization in Python', stars: 800, forks: 200, watchers: 100, language: 'Python', technologies: ['Matplotlib', 'NumPy'], lastUpdated: '2023-09-28', url: 'https://github.com/example/project-b' },
  { id: 3, name: 'Project C', description: 'Useful utility for working with WebAssembly in Rust', stars: 500, forks: 80, watchers: 50, language: 'Rust', technologies: ['WebAssembly'], lastUpdated: '2023-10-05', url: 'https://github.com/example/project-c' },
  { id: 4, name: 'Project D', description: 'Innovative tool for building GraphQL APIs with TypeScript', stars: 2000, forks: 400, watchers: 250, language: 'TypeScript', technologies: ['GraphQL', 'Node.js'], lastUpdated: '2023-10-20', url: 'https://github.com/example/project-d' },
  { id: 5, name: 'Project E', description: 'Powerful framework for building microservices in Go', stars: 1500, forks: 350, watchers: 200, language: 'Go', technologies: ['Docker', 'Kubernetes'], lastUpdated: '2023-10-10', url: 'https://github.com/example/project-e' },
  { id: 6, name: 'Project F', description: 'Efficient database ORM for Ruby applications', stars: 1800, forks: 280, watchers: 180, language: 'Ruby', technologies: ['ActiveRecord', 'PostgreSQL'], lastUpdated: '2023-10-18', url: 'https://github.com/example/project-f' },
  { id: 7, name: 'Project G', description: 'Comprehensive testing framework for Java applications', stars: 1300, forks: 220, watchers: 130, language: 'Java', technologies: ['JUnit', 'Mockito'], lastUpdated: '2023-09-30', url: 'https://github.com/example/project-g' },
  { id: 8, name: 'Project H', description: 'Modern CSS framework with utility-first approach', stars: 2500, forks: 450, watchers: 300, language: 'CSS', technologies: ['PostCSS', 'JavaScript'], lastUpdated: '2023-10-22', url: 'https://github.com/example/project-h' },
]


export default function ProjectFeed() {
  const [searchTerm, setSearchTerm] = useState('')
  const [languageFilter, setLanguageFilter] = useState('')
  const [technologyFilter, setTechnologyFilter] = useState('')
  const [sortBy, setSortBy] = useState('stars')

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Open Source Finder</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
          <ModeToggle />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <Input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
          <Select value={languageFilter} onValueChange={setLanguageFilter}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="y">All Languages</SelectItem>
              {projects.map(project => (
                <SelectItem key={project.id} value={project.language}>{project.language}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={technologyFilter} onValueChange={setTechnologyFilter}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Technology" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="z">All Technologies</SelectItem>
              {projects.map(project => (
                <SelectItem key={project.id} value={project.technologies.join(',')}>{project.technologies.join(', ')}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="stars">Stars</SelectItem>
              <SelectItem value="forks">Forks</SelectItem>
              <SelectItem value="watchers">Watchers</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {projects.map(project => (
            <Card key={project.id}>
              <CardHeader>
                <CardTitle>{project.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  <Badge variant="secondary">{project.language}</Badge>
                  {project.technologies.map(tech => (
                    <Badge key={tech} variant="outline">{tech}</Badge>
                  ))}
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span className="flex items-center"><Star className="w-4 h-4 mr-1" /> {project.stars}</span>
                  <span className="flex items-center"><GitBranch className="w-4 h-4 mr-1" /> {project.forks}</span>
                  <span className="flex items-center"><Eye className="w-4 h-4 mr-1" /> {project.watchers}</span>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <span className="text-sm text-muted-foreground flex items-center">
                  <Clock className="w-4 h-4 mr-1" /> {project.lastUpdated}
                </span>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm">View Details</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{project.name}</DialogTitle>
                      <DialogDescription>{project.description}</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">{project.language}</Badge>
                        {project.technologies.map(tech => (
                          <Badge key={tech} variant="outline">{tech}</Badge>
                        ))}
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="flex items-center"><Star className="w-4 h-4 mr-1" /> {project.stars} stars</span>
                        <span className="flex items-center"><GitBranch className="w-4 h-4 mr-1" /> {project.forks} forks</span>
                        <span className="flex items-center"><Eye className="w-4 h-4 mr-1" /> {project.watchers} watchers</span>
                      </div>
                      <p className="text-sm">Last updated: {project.lastUpdated}</p>
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        View on GitHub
                      </a>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
