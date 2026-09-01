const DEVICON = 'https://raw.githubusercontent.com/devicons/devicon/master/icons';

// icon: either { type: 'img', src } for a real brand logo,
// or { type: 'generic', path } for a hand-drawn outline icon (no brand logo exists).
export const stackGroups = [
  {
    title: 'Languages',
    items: [
      { name: 'Java', icon: { type: 'img', src: `${DEVICON}/java/java-original.svg` } },
      { name: 'C++', icon: { type: 'img', src: `${DEVICON}/cplusplus/cplusplus-original.svg` } },
      {
        name: 'SQL',
        icon: {
          type: 'generic',
          path: 'M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3',
          extra: '<ellipse cx="12" cy="5" rx="8" ry="3"/>',
        },
      },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Spring Boot', icon: { type: 'img', src: `${DEVICON}/spring/spring-original.svg` } },
      {
        name: 'REST APIs',
        icon: {
          type: 'generic',
          path: 'M4 8h13M17 8l-3-3M17 8l-3 3M20 16H7M7 16l3-3M7 16l3 3',
        },
      },
      { name: 'RabbitMQ', icon: { type: 'img', src: `${DEVICON}/rabbitmq/rabbitmq-original.svg` } },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'React', icon: { type: 'img', src: `${DEVICON}/react/react-original.svg` } },
      { name: 'HTML5', icon: { type: 'img', src: `${DEVICON}/html5/html5-original.svg` } },
      { name: 'CSS3', icon: { type: 'img', src: `${DEVICON}/css3/css3-original.svg` } },
    ],
  },
  {
    title: 'Databases',
    items: [
      { name: 'PostgreSQL', icon: { type: 'img', src: `${DEVICON}/postgresql/postgresql-original.svg` } },
      { name: 'MySQL', icon: { type: 'img', src: `${DEVICON}/mysql/mysql-original.svg` } },
      { name: 'MongoDB', icon: { type: 'img', src: `${DEVICON}/mongodb/mongodb-original.svg` } },
      { name: 'Redis', icon: { type: 'img', src: `${DEVICON}/redis/redis-original.svg` } },
    ],
  },
  {
    title: 'Testing',
    items: [
      { name: 'JUnit 5', icon: { type: 'img', src: `${DEVICON}/junit/junit-plain.svg` } },
      {
        name: 'Mockito',
        icon: { type: 'generic', path: 'M9 12l2 2 4-4', extra: '<circle cx="12" cy="12" r="9"/>' },
      },
    ],
  },
  {
    title: 'Developer tools',
    items: [
      { name: 'Git', icon: { type: 'img', src: `${DEVICON}/git/git-original.svg` } },
      { name: 'GitHub', icon: { type: 'img', src: `${DEVICON}/github/github-original.svg` } },
      { name: 'Postman', icon: { type: 'img', src: `${DEVICON}/postman/postman-original.svg` } },
      { name: 'IntelliJ IDEA', icon: { type: 'img', src: `${DEVICON}/intellij/intellij-original.svg` } },
      { name: 'VS Code', icon: { type: 'img', src: `${DEVICON}/vscode/vscode-original.svg` } },
      { name: 'Linux', icon: { type: 'img', src: `${DEVICON}/linux/linux-original.svg` } },
    ],
  },
  {
    title: 'DevOps & cloud',
    items: [
      { name: 'Docker', icon: { type: 'img', src: `${DEVICON}/docker/docker-original.svg` } },
      { name: 'AWS', icon: { type: 'img', src: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` } },
    ],
  },
];
