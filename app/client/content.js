const content = {}

function createContent (contentName, fields) {
  return function () {
    if (!content[contentName]) {
      content[contentName] = []
    }

    const value = {}

    for (let i = 0; i < arguments.length; i++) {
      value[fields[i]] = arguments[i]
    }

    content[contentName].push(value)
  }
}

const createProject = createContent('projects', [
  'title',
  'description',
  'url',
  'imageUrl'
])

createProject(
  'Jeopardizer',
  'Jeopardizer is a lightweight and easy to use web application that creates Jeopardy style games. No more Powerpoint! While there are other web applications that do this, they all require signing up which I think deters users from wanting to use the apps. Jeopardizer let\'s you create and play games without such a hassle!',
  'http://jeopardizer.com',
  '/photos/jeopardizer.png'
)

createProject(
  'Type Trainer',
  'Type Trainer is a web application that helps users practice their typing. I made Type Trainer to practice React and Redux, but I switched to the Dvorak keyboard layout near the beginning of 2016 so I found myself practicing a lot. A typing app seemed natural to build!',
  'http://type-trainer.kzhang.io',
  '/photos/type-trainer.png'
)

createProject(
  'Givmo',
  'Givmo is a mobile application hacked together for HackPrinceton 2016 which simulates an extension onto the Venmo mobile application. The basic idea is to make it easier for people to donate, and so Givmo simply asks users to round their payments to the next dollar to donate the extra cents. These small amounts can really add up.',
  'http://givmo.kzhang.io',
  '/photos/givmo.png'
)

const createSkill = createContent('skills', [
  'name',
  'proficiency'
])

createSkill('Java', 90)
createSkill('Node', 90)
createSkill('React', 90)
createSkill('SQL', 75)
createSkill('MongoDB', 70)
createSkill('HTML/CSS', 95)
createSkill('Javascript', 95)

module.exports = content
