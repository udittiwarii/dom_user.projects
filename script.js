const users = [
  {
    name: "Wade Lal",
    title: "UI/UX Designer",
    hourlyRate: "55/hr",
    istatus: "available",
    profileImage: "https://images.unsplash.com/photo-1742038107091-9a7e1f01b42c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D", // Local image or placeholder
    tags: ["UI", "UX", "Photoshop"],
    bio: "Wade is a 32-year-old UI/UX designer with an impressive portfolio and vast experience in graphic design.",
    username: "Epic coder"
  },
  {
    name: "Mira Dev",
    title: "Full Stack Developer",
    hourlyRate: "60/hr",
    istatus: "available",
    profileImage: "https://plus.unsplash.com/premium_photo-1682089810582-f7b200217b67?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["React", "Node.js", "GraphQL"],
    bio: "Mira builds scalable web apps with clean architecture. She’s great at both frontend and backend.",
    username: "CodeSculptor"
  },
  {
    name: "Raj Patel",
    title: "Mobile App Developer",
    hourlyRate: "50/hr",
    istatus: "not available",
    profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXN8ZW58MHx8MHx8fDA%3D",
    tags: ["Flutter", "Dart", "Firebase"],
    bio: "Raj creates elegant and high-performing mobile apps with Flutter and modern design patterns.",
    username: "AppWhiz"
  },
  {
    name: "Lena Park",
    title: "Data Analyst",
    hourlyRate: "45/hr",
    istatus: "available",
    profileImage: "https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXN8ZW58MHx8MHx8fDA%3D",
    tags: ["Python", "Excel", "PowerBI"],
    bio: "Lena transforms raw data into meaningful insights using powerful tools and storytelling techniques.",
    username: "ChartQueen"
  },
  {
    name: "Jasper Lee",
    title: "Cloud Engineer",
    hourlyRate: "70/hr",
    istatus: "not available",
    profileImage: "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGVzfGVufDB8fDB8fHww",
    tags: ["AWS", "Docker", "Kubernetes"],
    bio: "Jasper automates infrastructure and builds robust, cloud-native applications for scale.",
    username: "InfraWizard"
  },
  {
    name: "Nia Gomez",
    title: "Graphic Designer",
    hourlyRate: "40/hr",
    istatus: "available",
    profileImage: "https://media.istockphoto.com/id/2060433249/photo/photo-of-young-girl-wearing-t-shirt-isolated-yellow-background-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=hk99PC5UEh5LemwxdHqRKrFCVEu2eKuL4W9t0n74mfU=",
    tags: ["Illustrator", "Photoshop", "Figma"],
    bio: "Nia crafts eye-catching visuals and unique branding experiences that leave a mark.",
    username: "DesignAura"
  },
  {
    name: "Omar Said",
    title: "AI/ML Engineer",
    hourlyRate: "85/hr",
    istatus: "not available",
    profileImage: "https://plus.unsplash.com/premium_photo-1693258698597-1b2b1bf943cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXN8ZW58MHx8MHx8fDA%3D",
    tags: ["TensorFlow", "NLP", "Python"],
    bio: "Omar brings AI ideas to life with machine learning models, natural language processing, and more.",
    username: "NeuralNomad"
  },
  {
    name: "Ava Chen",
    title: "DevOps Engineer",
    hourlyRate: "65/hr",
    istatus: "available",
    profileImage: "https://media.istockphoto.com/id/970100286/photo/portrait-of-beautiful-young-woman.jpg?s=612x612&w=0&k=20&c=E9qxNrJgqiXIkfXXIE1LtO21GXH-_qpuVf1cYlwWYR8=",
    tags: ["Jenkins", "Ansible", "Terraform"],
    bio: "Ava ensures fast, smooth deployments and infrastructure automation across the board.",
    username: "DeployQueen"
  },
  {
    name: "Karan Joshi",
    title: "Cybersecurity Expert",
    hourlyRate: "75/hr",
    istatus: "not available",
    profileImage: "https://plus.unsplash.com/premium_photo-1731334985721-5453195ebe56?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGVzfGVufDB8fDB8fHww",
    tags: ["SIEM", "Firewalls", "Threat Modeling"],
    bio: "Karan secures systems with ethical hacking, threat analysis, and incident response planning.",
    username: "SecOpsNinja"
  },
  {
    name: "Emily Nguyen",
    title: "Content Strategist",
    hourlyRate: "38/hr",
    istatus: "available",
    profileImage: "https://media.istockphoto.com/id/2200561488/photo/photo-of-pretty-young-woman-beaming-smile-wear-shirt-modern-interior-apartment-indoors.jpg?s=2048x2048&w=is&k=20&c=AWURXHZQfU-YW7LM224-erLeh0kcHnkQ1Skaze-Go1c=",
    tags: ["SEO", "Content Writing", "UX Writing"],
    bio: "Emily crafts powerful content strategies that drive engagement and conversions.",
    username: "WriteItRight"
  }
];

let = sum = '';
users.forEach(function (elem) {
sum += `<div class="card">
    <div class="uper">
        <span class='active'>${elem.istatus}</span>
        <span class='rate'>💲${elem.hourlyRate} </span>
    </div>
    <div class="img">
         <img src="${elem.profileImage}" 
            alt="">
    </div>
    <div class="name">${elem.name}
        <h2>${elem.title}</h2>
        <div<i class="ri-home-9-line logo"></i><span>${elem.username}</span>
    </div>
    <div class="skill">
        <span>${elem.tags[0]}</span>
        <span>${elem.tags[1]}</span>
        <span>${elem.tags[2]}</span>
        <div class=" more">more++</div>
    </div>
    <div class="exp">
        ${elem.bio}
    </div>
    <div class="break"></div>
    <button>VIEW PROFILE</button>
</div>`
})
console.log(sum)
let main = document.querySelector('.main')
main.innerHTML = sum