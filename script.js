const stories = [
  {
    title: "A Story of Change in Kenya",
    language: "English",
    region: "Africa",
    type: "Impact",
    storyteller: "Grace N.",
    content: "This is a story about how our programs changed a rural school...",
    audio: "https://example.com/audio.mp3",
    date: "2025-07-15"
  },
  {
    title: "Une histoire de courage",
    language: "French",
    region: "Europe",
    type: "Narrative",
    storyteller: "Jean D.",
    content: "Ceci est une histoire inspirante d’un éducateur en France...",
    audio: "",
    date: "2025-07-10"
  }
];

function renderStories(data) {
  const storyList = document.getElementById("storyList");
  storyList.innerHTML = "";
  data.forEach(story => {
    const card = document.createElement("div");
    card.className = "story-card";
    card.innerHTML = `
      <h2>${story.title}</h2>
      <p class="meta">By ${story.storyteller} | ${story.language} | ${story.region} | ${story.type} | ${story.date}</p>
      <p>${story.content}</p>
      ${story.audio ? `<audio controls src="${story.audio}"></audio>` : ""}
    `;
    storyList.appendChild(card);
  });
}

function filterStories() {
  const lang = document.getElementById("languageSelect").value;
  const reg = document.getElementById("regionSelect").value;
  const typ = document.getElementById("typeSelect").value;
  const query = document.getElementById("searchInput").value.toLowerCase();

  const filtered = stories.filter(s =>
    (lang === "all" || s.language === lang) &&
    (reg === "all" || s.region === reg) &&
    (typ === "all" || s.type === typ) &&
    (s.title.toLowerCase().includes(query) || s.content.toLowerCase().includes(query))
  );

  renderStories(filtered);
}

document.getElementById("languageSelect").addEventListener("change", filterStories);
document.getElementById("regionSelect").addEventListener("change", filterStories);
document.getElementById("typeSelect").addEventListener("change", filterStories);
document.getElementById("searchInput").addEventListener("input", filterStories);

renderStories(stories);
