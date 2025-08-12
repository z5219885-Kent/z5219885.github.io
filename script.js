  // Javascript Code


window.addEventListener('DOMContentLoaded', () => {
  const electroTitle = document.getElementById('electroTitle');
  if (electroTitle) {
    electroTitle.setAttribute('data-text', electroTitle.textContent);
  }

  const scenes = document.querySelectorAll('.scene');
  const slider = document.getElementById('sceneSlider');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const chapterCounter = document.getElementById('chapterCounter');

  function showScene(num) {
    scenes.forEach(scene => {
      scene.classList.toggle('active', scene.dataset.scene === String(num));
    });
    slider.value = num;
    chapterCounter.textContent = `Scene ${num} of 10`;
    prevBtn.disabled = num === 1;
    nextBtn.disabled = num === 10;
  }

  prevBtn.addEventListener('click', () => {
    let current = parseInt(slider.value);
    if(current > 1) {
      showScene(current - 1);
    }
  });

  nextBtn.addEventListener('click', () => {
    let current = parseInt(slider.value);
    if(current < 10) {
      showScene(current + 1);
    }
  });

  slider.addEventListener('input', () => {
    showScene(slider.value);
  });

  // Initial scene
  showScene(1);
});

function setActiveScene(num) {
  document.querySelectorAll('.scene').forEach(scene => {
    scene.classList.toggle('active', scene.dataset.scene == num);
  });
}

  // 1.4(NS)@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

const glitchText = document.getElementById('glitchText');
const redLayer = document.querySelector('.glitch-text.red');
const cyanLayer = document.querySelector('.glitch-text.cyan');

const words = ['BEFORE', 'MATH'];
let currentIndex = 0;

function glitchToggle() {
  // Swap to the other word
  currentIndex = (currentIndex + 1) % words.length;

  // Update all layers
  glitchText.textContent = words[currentIndex];
  redLayer.textContent = words[currentIndex];
  cyanLayer.textContent = words[currentIndex];

  // Apply glitch animations
  glitchText.style.animation = 'flicker 0.1s infinite';
  redLayer.style.animation = 'glitch-red 0.1s infinite';
  cyanLayer.style.animation = 'glitch-cyan 0.1s infinite';

  // Stop glitch animations after 2 seconds
  setTimeout(() => {
    glitchText.style.animation = '';
    redLayer.style.animation = '';
    cyanLayer.style.animation = '';
    glitchText.style.opacity = '1';
    redLayer.style.opacity = '1';
    cyanLayer.style.opacity = '1';
  }, 500);
}

// Loop the glitch toggle at random intervals
function loopGlitch() {
  glitchToggle();
  const next = 500 + Math.random() * 3000;
  setTimeout(loopGlitch, next);
}

// Initialize with BEFORE
glitchText.textContent = words[0];
redLayer.textContent = words[0];
cyanLayer.textContent = words[0];

// Start glitch loop
setTimeout(loopGlitch, 500);

  // 1.5(NS)@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

const modal = document.getElementById('popupModal');
const popupTitle = document.getElementById('popupTitle');
const popupImage = document.getElementById('popupImage');
const popupVideo = document.getElementById('popupVideo');
const popupText = document.getElementById('popupText');
const closeBtn = document.querySelector('.close-btn');

document.querySelector('.hotspot.tv').addEventListener('click', () => {
  popupTitle.textContent = "Broadcast Screen";
  popupText.textContent = "Cold government announcement, riddled with doublespeak and static glitches.";

  // Hide the image and show the video
  popupImage.style.display = 'none';

  popupVideo.style.display = 'block';
  popupVideo.src = 'videos/speech.mp4';
  popupVideo.load();
  popupVideo.play();

  modal.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
  // Hide modal
  modal.classList.add('hidden');

  // Pause and reset video
  popupVideo.pause();
  popupVideo.currentTime = 0;

  // Hide video and reset src to prevent issues
  popupVideo.style.display = 'none';
  popupVideo.src = '';

  // Show image again for next popup usage
  popupImage.style.display = 'block';
});

  // 1.5 HOTSPOT POPUPS(NS)@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

  // Scene 1
document.querySelector('.hotspot.photo').addEventListener('click', () => {
  popupTitle.textContent = "Family photograph";
  popupImage.src = "images/photo.png"; 
  popupImage.alt = "Zoomed Photograph";
  popupText.textContent = "Faint, fragmented memory: A happy family moment. Whispering voices: 'past erased,' 'forgotten.'";
  modal.classList.remove('hidden');
});

document.querySelector('.hotspot.window').addEventListener('click', () => {
  popupTitle.textContent = "Gazing...";
  popupImage.src = "images/window.png";
  popupImage.alt = "Window view of city";
  popupText.textContent = "Rain-soaked streets shimmer with muted signs for cognitive services, shadows pooling in cracked alleys across the fractured cityscape.";
  modal.classList.remove('hidden');
});

document.querySelector('.hotspot.tv').addEventListener('click', () => {
  popupTitle.textContent = "TV Broadcast";
  popupImage.src = "videos/speech.mp4";
  popupImage.alt = "Broadcast announcement";
  popupText.textContent = "Transcript: Good evening. Our city faces challenges, but together we remain resilient. We’re strengthening services, ensuring safety, and building a future where everyone is at peace. Thank you for your trust—let’s move forward with hope, determination, and a shared commitment to progress. Every effort counts, and together, we will overcome obstacles and create a stronger, more united community for generations to come";
  modal.classList.remove('hidden');
});

  // Scene 2
document.querySelector('.hotspot.mirror').addEventListener('click', () => {
  popupTitle.textContent = "Who am I?";
  popupImage.src = "images/mirror.png";
  popupImage.alt = "Broadcast announcement";
  popupText.textContent = "Kai stands before the cracked bathroom mirror, the dim light casting fragmented shadows across his face. His eyes search the reflection, but the person staring back feels distant—like a ghost trapped between memories lost and a future unclear. Whispers of doubt echo in his mind as he wonders, Who am I now? the AfterBefore procedure has blurred the lines of identity, leaving him grasping for a self that feels just out of reach.";
  modal.classList.remove('hidden');
});

document.querySelector('.hotspot.shard').addEventListener('click', () => {
  popupTitle.textContent = "Shattered mind";
  popupImage.src = "images/shard.png";
  popupImage.alt = "Broadcast announcement";
  popupText.textContent = "Kai’s gaze drops from the cracked bathroom mirror to the floor beneath—scattered shards glint faintly in the pale light. Each fragment reflects a fractured version of himself, a “piece” lost somewhere in the void of his altered mind. The silence around him is heavy, almost suffocating, as if the shards carry echoes of memories he can no longer grasp. The broken glass is more than just a mirror; it’s a warning—a foreshadowing of the fractured truths and hidden pasts waiting to surface. As Kai kneels to gather the pieces, a chill runs through him, stirring a restless unease that the whole story has yet to be told.";
  modal.classList.remove('hidden');
});

document.querySelector('.hotspot.tap').addEventListener('click', () => {
  popupTitle.textContent = "Forboding";
  popupImage.src = "images/drip.png";
  popupImage.alt = "Broadcast announcement";
  popupText.textContent = "The bathroom is silent, except for the tap. A single droplet clings stubbornly to the metal lip, trembling under its own weight before finally letting go. DRIP. Each drop echoes his fragmented memories, slow and relentless, highlighting his growing anxiety, isolation, and the inescapable drip of time slipping away from him. It’s like a small, nagging disturbance that won’t let him find peace, mirroring the subtle but constant erosion of his sense of self.";
  modal.classList.remove('hidden');
});

const popupmodal = document.getElementById('popupModal');
const tearHotspot = modal.querySelector('.hotspot.tear');

// Hide tear hotspot by default
tearHotspot.style.display = 'none';

// Scene 3 - Opening Enveloping
document.querySelector('.hotspot.letter').addEventListener('click', () => {
  popupTitle.textContent = "The envelope";
  popupImage.src = "images/syndicate.png";
  popupImage.alt = "Broadcast announcement";
  popupText.textContent = "His gaze locks on the strange symbol stamped on the envelope—one he’s seen before, lurking at the edges of his dreams. He hesitates, a cold knot tightening in his chest. That symbol — it lingers in his mind, haunting him with flashes of visions he can’t fully grasp. His fingers tremble as they reach for the envelope, but he pulls back. Memories swirl, blurry and uneasy. Could opening this be a trap? Still, curiosity gnaws at him. Slowly, he breaks the seal, the paper crackling softly in the quiet room.";
  modal.classList.remove('hidden');

// Show the tear hotspot only at this moment
  tearHotspot.style.display = 'block';
});

// Tear Hotspot click
tearHotspot.addEventListener('click', () => {
  popupTitle.textContent = "Secret message";
  popupImage.src = "images/tear.png";
  popupText.textContent = "The truth about what?...I don't understand...";
  
  tearHotspot.style.display = 'none'; // Hide after it's used
});

// Scene 4 - Nightmares
document.querySelector('.hotspot.bed').addEventListener('click', () => {
  popupTitle.textContent = "";

  // Hide image, show video player
  popupImage.style.display = 'none';

  popupVideo.style.display = 'block';
  popupVideo.src = "videos/nightmare.mp4";
  popupVideo.load();
  popupVideo.play();

  popupText.textContent = "";
  modal.classList.remove('hidden');
});

// Unified close button handler to hide modal, stop audio/video, and reset states
document.querySelector('.close-btn').addEventListener('click', () => {
  modal.classList.add('hidden');

  // Stop all active audio
  stopAudio();

  // Pause and reset video if visible
  if (popupVideo) {
    popupVideo.pause();
    popupVideo.currentTime = 0;
    popupVideo.style.display = 'none';
    popupVideo.src = '';
  }

  // Show image again for next use
  if (popupImage) {
    popupImage.style.display = 'block';
  }

  // Hide any tearHotspot if you use it
  if (typeof tearHotspot !== 'undefined') {
    tearHotspot.style.display = 'none';
  }
});

// Scene 5 - Morning
document.querySelector('.hotspot.vision').addEventListener('click', () => {
  popupTitle.textContent = "Visions";
  popupImage.src = "images/Vision.png";
  popupImage.alt = "Broadcast announcement";
  popupText.textContent = "Who are you...?and why are you in my dreams...?";
  modal.classList.remove('hidden');
});

// Scene 6 - Train

document.querySelector('.hotspot.speakers').addEventListener('click', () => {
  popupTitle.textContent = "PSA";
  popupImage.src = "images/speakers.png";
  popupImage.alt = "Broadcast announcement";
  popupText.textContent = "Attention!";
  modal.classList.remove('hidden');
});


const scenes = {
  
  train: {
    image: 'images/train.png',
    description: "The train has arrived...you board it.",
    hotspots: [
      { id: 'hotspot1', top: '500px', left: '540px', target: 'enter' },
    ]
  },
  enter: {
    image: 'images/strangerlooking.png',
    description: "Minutes past...in the dim, humming carriage of the late-night train. Kai feels uneasy- a shadow lingers just beyond the peripheral vision of Kai—a hooded figure just like in Kai's vision, wrapped in silence and mystery. Their presence is unsettlingly close, yet elusive. This is your stop, the train door opens...",
    hotspots: [
      { id: 'hotspot1', top: '400px', left: '400px', target: 'exit' },
    ]
  },
 exit: {
    image: 'images/exit.png',
    description: "You exit the train.",
    hotspots: [
      { id: 'hotspot1', top: '400px', left: '400px', target: 'pain' },
    ]
  },
   pain: {
    image: 'images/pain.png',
    description: "Your head begins to pound. A low, throbbing ache blooms at the base of your skull, pulsing in time with an unseen current. The air feels thick, metallic, as though you’re breathing through foil. Somewhere inside your head, invisible hands tug at delicate threads—wiring, splicing, severing—each connection pulled sending a spike of white-hot discomfort through your thoughts. Your vision stutters, reality slipping in and out like a faulty signal.",
    hotspots: [
      { id: 'hotspot1', top: '400px', left: '400px', target: 'pain2' },
    ]
  },  
  pain2: {
    image: 'images/pain2.png',
    description: "You collapse onto your knees, palms pressed onto your skull. it's getting worse and worse...",
    hotspots: [
      { id: 'hotspot1', top: '400px', left: '400px', target: 'shutdown' },
    ]
  },  
  shutdown: {
    image: 'images/shutdown.png',
    description: "To the point, your body can't take it anymore and you COLLAPSE face down onto the floor.",
    hotspots: [
      { id: 'hotspot1', top: '400px', left: '400px', target: 'train' },
    ]
  },  
}
const sceneImage = document.getElementById('sceneImage');
const hotspotsContainer = document.getElementById('hotspotsContainer');
const sceneDescription = document.getElementById('sceneDescription');

function loadScene(sceneName) {
  const scene = scenes[sceneName];
  if (!scene) {
    console.error("Scene not found:", sceneName);
    return;
  }

  // Update image and description
  sceneImage.src = scene.image;
  sceneDescription.textContent = scene.description || "";

  // Clear existing hotspots
  hotspotsContainer.innerHTML = "";

  // Add hotspots for this scene
  scene.hotspots.forEach(hotspot => {
    const btn = document.createElement('button');
    btn.classList.add('hotspot');
    btn.style.position = 'absolute';
    btn.style.top = hotspot.top;
    btn.style.left = hotspot.left;
    btn.id = hotspot.id;
    btn.addEventListener('click', () => {
      if (hotspot.target) {
        loadScene(hotspot.target);
      }
    });
    hotspotsContainer.appendChild(btn);
  });
}

// To start scene 6:
loadScene('train');



// Scene 7 - Splinters

document.querySelector('.hotspot.stranger').addEventListener('click', () => {
  popupTitle.textContent = "The stranger";
  popupImage.src = "images/stranger.png";
  popupImage.alt = "Broadcast announcement";
  popupText.textContent = "Stranger: Let me speak to him.";
  modal.classList.remove('hidden');
});

// Scene 8 - Confratation and the Truth
const dialogueData = [
  { speaker: "Stranger", text: "Still standing? Impressive.", image: "images/alex.png" },
  { speaker: "Kai", text: " What happened to me? My head… feels like it’s being rewired — like something broke inside.", image: "images/KaiJail.png" },
  { speaker: "Stranger", text: " You were caught in the Past-Off zone, but your mind isn’t made for just one mode. You’re… in between. Whole...", image: "images/alex.png" },
  { speaker: "Kai", text: "  Whole? What does that even mean?" , image: "images/KaiJail.png"},
  { speaker: "Stranger", text: " It means you’re not part of the Cognition Authority’s system. Not broken down into halves or pieces. You’re pure — undivided.", image: "images/alex.png" },
  { speaker: "Kai", text: " So switching modes — is it dangerous?" , image: "images/KaiJail.png"},
  { speaker: "Stranger", text: " Deadly if you’re not ready. The temporal zones are strict. Your brain’s wiring has to match the zone. Otherwise, it fries.", image: "images/alex.png" },
  { speaker: "Kai", text: " So when you switched me to Future-Off, that’s what shut me down?" , image: "images/KaiJail.png"},
  { speaker: "Stranger", text: "Yes...", image: "images/alex.png" },
  { speaker: "Kai", text: "Why did you do it...?", image: "images/KaiJail.png"},
  { speaker: "Stranger", text: "You see, their system only works because they split us — past and future, halves of a fractured mind. That keeps us blind, obedient. You're however immune to it. That makes you dangerous to yourself and the Cognition Authority.", image: "images/alex.png" },
  { speaker: "Kai", text: " Why is being whole so dangerous?", image: "images/KaiJail.png" },
  { speaker: "Stranger", text: "Because whole minds see everything — the cracks in their system, the lies behind their peace. The Authority depends on us being halves, broken and manageable.", image: "images/alex.png" },
  { speaker: "Kai", text: " So, all those stories about the zones… it’s just a way to keep us trapped?" , image: "images/KaiJail.png"},
  { speaker: "Stranger", text: "Yes..they control what you remember, what you hope for — everything. They erase who you are to keep you in line.", image: "images/alex.png" },
  { speaker: "Kai", text: "Why would they fracture people’s minds like this? What do they gain?", image: "images/KaiJail.png"},

  { speaker: "Stranger", text: "Control. When your mind is split—like Past-Off or Future-Off—you can’t think freely. You’re stuck in a loop, either trapped in memories or lost in endless anticipation. You can’t rebel if you don’t have the full picture.", image: "images/alex.png" },
  { speaker: "Kai", text: "So they keep us confused and disconnected?", image: "images/KaiJail.png"},

  { speaker: "Stranger", text: "Exactly. They break down bonds between people—no shared memories, no shared plans. It’s harder to unite, to resist. The Authority thrives on isolation.", image: "images/alex.png" },
  { speaker: "Kai", text: "Why control us?", image: "images/KaiJail.png"},

  { speaker: "Stranger", text: "It’s about exploiting your mind’s labor—assigning you roles that don’t require questioning, creativity, or rebellion. Past-Offs become automatons of routine; Future-Offs anxious drones chasing shadows.", image: "images/alex.png" },
  { speaker: "Stranger", text: "They want to erase true identity. Without a whole self, people forget who they are and what they can be. The Authority rewrites history, plants lies, and keeps the truth buried.", image: "images/alex.png" },

  { speaker: "Kai", text: "And freedom? Is it even possible?", image: "images/KaiJail.png"},
  { speaker: "Stranger", text: "Freedom needs an unbroken mind. It means reflection, choice, unity—things the Authority fears most. Which is why you're vulnerable.", image: "images/alex.png" },
  { speaker: "Stranger", text: "Which is why we need your help", image: "images/alex.png" },

];

const dialoguePopup = document.getElementById('dialoguePopup');
const dialogueSpeaker = document.getElementById('dialogueSpeaker');
const dialogueText = document.getElementById('dialogueText');
const dialogueSpeakerImage = document.getElementById('dialogueSpeakerImage');
const nextDialogue = document.getElementById('nextDialogue');
const prevDialogue = document.getElementById('prevDialogue'); // Make sure you have this button in your HTML

let currentLine = 0;

function showDialogueLine(index) {
  if (index >= 0 && index < dialogueData.length) {
    const line = dialogueData[index];
    dialogueSpeaker.textContent = line.speaker;
    dialogueText.textContent = line.text;
    dialogueSpeakerImage.src = line.image;
    dialogueSpeakerImage.alt = line.speaker;
    dialoguePopup.classList.remove('hidden');
    currentLine = index;

    // Disable prev button at start
    prevDialogue.disabled = currentLine === 0;
    // Disable next button at end
    nextDialogue.disabled = currentLine === dialogueData.length -1;
  } else {
    dialoguePopup.classList.add('hidden');
  }
}

nextDialogue.addEventListener('click', () => {
  if (currentLine < dialogueData.length - 1) {
    showDialogueLine(currentLine + 1);
  }
});

prevDialogue.addEventListener('click', () => {
  if (currentLine > 0) {
    showDialogueLine(currentLine - 1);
  }
});

// Initialize on page load
showDialogueLine(0);



// Start dialogue (trigger this when you want the dialogue to begin)
showDialogueLine(currentLine);


// Scene 9 - Cognition

const scene9 = {
  roundtable: {
    image: 'images/roundtable.png',
    description: "Rulers of the World",
    hotspots: [
      { id: 'hotspot', top: '500px', left: '380px', target: '1' },
    ]
  },
  1: {
    image: 'images/oldguy1.png',
    description: "Ruler: The system hums profitably — every thought managed, every fear monetized. Our grasp on the masses tightens daily.",
    hotspots: [
      { id: 'hotspot', top: '400px', left: '400px', target: '2' },
    ]
  },
  2: {
    image: 'images/oldguy2.png',
    description: "Courtier: Exploitation is no longer a side effect. It’s the economy itself. Those who resist? They are liabilities.",
    hotspots: [
      { id: 'hotspot', top: '400px', left: '400px', target: '3' },
    ]
  },
  3: {
    image: 'images/oldguy3.png',
    description: "Courtier: Yet, this anomaly — Kai — he defies the flow. An unpredictable variable in our perfect algorithm.",
    hotspots: [
      { id: 'hotspot', top: '400px', left: '400px', target: '4' },
    ]
  },
  4: {
    image: 'images/oldguy2.png',
    description: "Courtier: Kai’s breach threatens the equilibrium. If one mind unravels, others will follow. Our control depends on uniform compliance",
    hotspots: [
      { id: 'hotspot', top: '400px', left: '400px', target: '5' },
    ]
  },
  5: {
    image: 'images/oldguy3.png',
    description: "Courtier: The question is not if we eliminate him, but how. We cannot afford a spark that ignites rebellion",
    hotspots: [
      { id: 'hotspot', top: '400px', left: '400px', target: '6' },
    ]
  },
  6: {
    image: 'images/oldguy2.png',
    description: "Courtier: There’s more at stake than mere rebellion. Kai challenges the very foundation of our dominion — cognition itself.stion is not if we eliminate him, but how. We cannot afford a spark that ignites rebellion",
    hotspots: [
      { id: 'hotspot', top: '400px', left: '400px', target: '7' },
    ]
  },
  7: {
    image: 'images/oldguy1.png',
    description: "Ruler: Prepare the contingencies. The breach must be contained before it infects the system.",
    hotspots: [
      { id: 'hotspot', top: '400px', left: '400px', target: '8' },
    ]
  },
  8: {
    image: 'images/oldguy3.png',
    description: "Courtier: Agreed.",
    hotspots: [
      { id: 'hotspot', top: '400px', left: '400px', target: 'roundtable' },
    ]
  },
}

const sceneImage9 = document.getElementById('sceneImage9');
const hotspotsContainer9 = document.getElementById('hotspotsContainer9');
const sceneDescription9 = document.getElementById('sceneDescription9');

function loadScene9(sceneName) {
  const scene = scene9[sceneName]; // Use scene9 (not scenes)

  if (!scene) {
    console.error("Scene 9 not found:", sceneName);
    return;
  }

  // Update image and description using correct variables
  sceneImage9.src = scene.image;
  sceneDescription9.textContent = scene.description || "";

  // Clear existing hotspots
  hotspotsContainer9.innerHTML = "";

  // Add hotspots for this scene
  scene.hotspots.forEach(hotspot => {
    const btn = document.createElement('button');
    btn.classList.add('hotspot');
    btn.style.position = 'absolute';
    btn.style.top = hotspot.top;
    btn.style.left = hotspot.left;
    btn.id = hotspot.id;
    btn.addEventListener('click', () => {
      if (hotspot.target) {
        loadScene9(hotspot.target);
      }
    });
    hotspotsContainer9.appendChild(btn);
  });
}

// Start with the 'train' scene (not 'roundtable')
loadScene9('roundtable');
















































// 1.6 HOTSPOT AUDIO (NS)@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

const globalAudio = document.getElementById('globalAudio');


function playAudio(src) {
  const audio = new Audio(src);
  audio.play().catch(err => console.warn('Autoplay blocked:', err));
  activeAudio.push(audio); // track this audio so it can be stopped later
}

// Stop all audio
function stopAudio() {
  activeAudio.forEach(audio => {
    audio.pause();
    audio.currentTime = 0; // rewind
  });
  activeAudio = [];
}

document.querySelector('.close-btn').addEventListener('click', () => {
  stopAudio();
  document.getElementById('popupModal').classList.add('hidden');
});

// Scene-specific hotspots (stop old audio first)
document.querySelector('.hotspot.window').addEventListener('click', () => {
  stopAudio();
  playAudio('audio/rain.wav');
});
document.querySelector('.hotspot.photo').addEventListener('click', () => {
  stopAudio();
  playAudio('audio/forgotten.m4a');
});
document.querySelector('.hotspot.tv').addEventListener('click', () => {
  stopAudio();
  playAudio('audio/broadcast.mp3');
});
document.querySelector('.hotspot.shard').addEventListener('click', () => {
  stopAudio();
  playAudio('audio/glass.flac');
});
document.querySelector('.hotspot.tap').addEventListener('click', () => {
  stopAudio();
  playAudio('audio/drip.wav');
});
document.querySelector('.hotspot.tear').addEventListener('click', () => {
  stopAudio();
  playAudio('audio/tear.wav');
});
document.querySelector('.hotspot.speakers').addEventListener('click', () => {
  stopAudio();
  playAudio('audio/psa.mp3');
});

let activeAudio = [];

function playAudio(src) {
  const audio = new Audio(src);
  audio.volume = 1;
  audio.play().catch(err => console.warn('Autoplay blocked:', err));
  activeAudio.push(audio);
  return audio;
}

function stopAudio() {
  activeAudio.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
  activeAudio = [];
}

function fadeOutAudio(audio, duration = 2000) {
  const fadeSteps = 20;
  const fadeInterval = duration / fadeSteps;
  let step = 0;

  const fadeAudio = setInterval(() => {
    if (audio.volume > 0 && step < fadeSteps) {
      audio.volume = Math.max(0, audio.volume - (1 / fadeSteps));
      step++;
    } else {
      clearInterval(fadeAudio);
      audio.pause();
      audio.currentTime = 0;
      audio.volume = 1;
    }
  }, fadeInterval);
}

document.querySelector('.hotspot.bed').addEventListener('click', () => {
  stopAudio();
const tracks = [
  'audio/dream0.wav',
  'audio/dream7.wav',
  'audio/dream6.wav',
  'audio/dream5.wav',
  'audio/dream3.wav',
  'audio/dream1.wav'
];

function playAudio(src, volume = 1.0) {
  const audio = new Audio(src);
  audio.volume = volume;
  audio.play();
  return audio;
}

const volumeLevel = 0.2;
activeAudio = tracks.map(track => playAudio(track, volumeLevel));

// Stop completely after 18 seconds
setTimeout(() => {
  activeAudio.forEach(audio => {
    audio.pause();
    audio.currentTime = 0; // reset
  });
}, 18000);

});

