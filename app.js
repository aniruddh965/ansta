const posts = [
  {
    user: "Aarav",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    caption: "Morning ride and fresh air.",
    likes: 120
  },
  {
    user: "Meera",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=80",
    caption: "City lights on Ansta.",
    likes: 244
  }
];

const stories = [
  ["You", "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"],
  ["Riya", "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80"],
  ["Dev", "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"],
  ["Naina", "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80"]
];

const exploreImages = [
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=500&q=80"
];

function renderStories() {
  document.getElementById("stories").innerHTML = stories.map(story => `
    <div class="story">
      <img src="${story[1]}" />
      <div>${story[0]}</div>
    </div>
  `).join("");
}

function renderFeed() {
  document.getElementById("feed").innerHTML = posts.map((post, index) => `
    <article class="post">
      <div class="user">
        <img src="${post.avatar}" />
        <span>${post.user}</span>
      </div>
      <img class="post-img" src="${post.image}" />
      <div class="actions">
        <button onclick="likePost(${index})">♡ Like</button>
        <button>Comment</button>
        <button>Share</button>
      </div>
      <div class="caption">
        <b>${post.likes} likes</b><br />
        ${post.caption}
      </div>
    </article>
  `).join("");
}

function likePost(index) {
  posts[index].likes++;
  renderFeed();
  renderProfile();
}

function renderExplore() {
  document.getElementById("explore").innerHTML = `
    <div class="grid">
      ${exploreImages.map(img => `<img src="${img}" />`).join("")}
    </div>
  `;
}

function renderReels() {
  document.getElementById("reels").innerHTML = `
    <div class="reel" style="background-image:url('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80')">
      <div><h2>Reel 1</h2><p>Short video style section</p></div>
    </div>
    <div class="reel" style="background-image:url('https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80')">
      <div><h2>Reel 2</h2><p>Music, trends, creator clips</p></div>
    </div>
  `;
}

function renderProfile() {
  document.getElementById("profile").innerHTML = `
    <div class="profile-head">
      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80" />
      <h2>@you_on_ansta</h2>
      <p>Creator | Traveller | Ansta user</p>
    </div>
    <div class="stats">
      <span>${posts.length}<br>Posts</span>
      <span>8.4K<br>Followers</span>
      <span>312<br>Following</span>
    </div>
    <div class="grid">
      ${posts.map(post => `<img src="${post.image}" />`).join("")}
    </div>
  `;
}

document.getElementById("postBtn").addEventListener("click", () => {
  const caption = document.getElementById("caption").value || "New Ansta post";
  const image = document.getElementById("imageUrl").value || "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80";

  posts.unshift({
    user: "You",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    image,
    caption,
    likes: 1
  });

  document.getElementById("caption").value = "";
  document.getElementById("imageUrl").value = "";
  renderFeed();
  renderProfile();
});

document.querySelectorAll(".tab").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(btn => btn.classList.remove("active"));
    document.querySelectorAll(".page").forEach(page => page.classList.remove("active"));

    button.classList.add("active");
    document.getElementById(button.dataset.page).classList.add("active");
  });
});

document.getElementById("themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

renderStories();
renderFeed();
renderExplore();
renderReels();
renderProfile();